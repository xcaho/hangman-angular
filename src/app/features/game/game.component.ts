import {Component} from '@angular/core';
import {_letterService} from "./letters/_services/_letter.service";
import {ImageComponent} from "./image/image.component";
import {WordOfTheDayComponent} from "./generate-word/word-of-the-day/word-of-the-day.component";
import {RandomWordComponent} from "./generate-word/random-word/random-word.component";
import {PasswordService} from "./_services/password.service";
import {RandomWordService} from "./generate-word/_services/random-word.service";
import {CoreComponent} from "./core/core.component";
import {ButtonService} from "./_services/button.service";

@Component({
  selector: 'game-component',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  providers: [_letterService,
    ImageComponent,
    WordOfTheDayComponent,
    RandomWordComponent,
    CoreComponent]
})

export class GameComponent {
  constructor(private letterService: _letterService,
              private randomWordService: RandomWordService,
              private randomWordComponent: RandomWordComponent,
              private wotdComponent: WordOfTheDayComponent,
              public passwordService: PasswordService,
              public coreComponent: CoreComponent,
              public buttonService: ButtonService) {
    this.letterService.componentMethodCalled$.subscribe((data) => {
      this.coreComponent.choice({z: data.letter, id: data.id})
    });
  }

  ngOnInit() {
    let dailyButton = document.getElementById("daily");
    let randomWordButton = document.getElementById("choose_new_word");
    let defButton = document.getElementById("definition");

    dailyButton.addEventListener("click", async () => {
      defButton.style.visibility = "visible";
      dailyButton.setAttribute('disabled', '');
      this.coreComponent.start_game();
      this.coreComponent.wordLength = (await this.wotdComponent.getWord()).length;
    });

    randomWordButton.addEventListener("click", async () => {
      dailyButton.removeAttribute('disabled');
      this.buttonService.resetDefButton();
      this.coreComponent.start_game();
      this.coreComponent.wordLength = (await this.randomWordComponent.getWord()).length;
    });
  }

}

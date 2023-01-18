import {Component} from '@angular/core';
import {_letterService} from "../letters/_services/_letter.service";
import {ImageComponent} from "../image/image.component";
import {RandomWordService} from "../generate-word/_services/random-word.service";
import {PasswordService} from "../_services/password.service";
import {ButtonService} from "../_services/button.service";

@Component({
  selector: 'app-core',
  template: ''
})
export class CoreComponent {
  constructor(private letterService: _letterService,
              private imageComponent: ImageComponent,
              private randomWordService: RandomWordService,
              private passwordService: PasswordService,
              private buttonService: ButtonService) {
  }

  message: string
  started: boolean = false
  finished: boolean = false
  life: number
  wordLength: number
  actualLength: number

  choice({z, id}: { z: string, id: any }): void {
    let letterButton = document.getElementById(String(id));

    if (this.started == true && this.finished == false && !letterButton.hasAttribute('disabled')) {
      let fail = true;

      for (let i = 0; i < this.passwordService.chosenWord.length; i++) {

        if (this.passwordService.chosenWord[i] == z) {
          this.passwordService.showGuessedLetter(i);
          this.actualLength += 1;
          fail = false;
        }
      }

      if (fail == true) {
        this.life -= 1;
        this.message = 'Życia: ' + String(this.life);
      }

      this.imageComponent.nextImage(this.life);
      this.buttonService.deactivateButton(letterButton);

      if (this.life <= 0) {
        this.finished = true;
        this.letterService.deactiveLetters();
        this.buttonService.activateButton(document.getElementById('daily'));
        this.message = "Przegrana 🤣";
      }

      if (this.actualLength >= this.wordLength) {
        this.finished = true;
        this.letterService.deactiveLetters();
        this.buttonService.activateButton(document.getElementById('daily'));
        this.message = "Wygrana 🤩";
      }
    }
  }

  start_game(): void {
    this.life = 11
    this.finished = false
    this.started = true
    this.actualLength = 0
    this.passwordService.hidePassword()
    this.letterService.activateLetters()
    this.imageComponent.nextImage(this.life)
    this.message = 'Życia: ' + String(this.life);
  }
}

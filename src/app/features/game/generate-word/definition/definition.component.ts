import {Component} from '@angular/core';
import {WordOfTheDayComponent} from "../word-of-the-day/word-of-the-day.component";

@Component({
  selector: 'app-definition',
  templateUrl: './definition.component.html',
  styleUrls: ['./definition.component.scss'],
  providers: [WordOfTheDayComponent]
})
export class DefinitionComponent {

  constructor(private wotdComponent: WordOfTheDayComponent) {
  }

  async toggleButton(defButton: any) {
    let panel = document.querySelector(".panel") as HTMLElement;
    defButton.target.classList.toggle('active');

    if (defButton.target.classList.contains('active')) {
      defButton.target.innerHTML = "Ukryj definicję słowa";
      panel.style.display = "block";
      panel.innerHTML = '<p class="p-3">Słowo: ' + await this.wotdComponent.getWord() + '<br>' + await this.wotdComponent.getDefinition() + '</p>'
    }

    if (!defButton.target.classList.contains('active')) {
      defButton.target.innerHTML = "Pokaż definicję słowa";
      panel.style.display = "none";
      panel.innerHTML = '<p></p>'
    }
  }

}

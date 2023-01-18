import {Component} from '@angular/core';
import {_letterService} from "../_services/_letter.service";

@Component({
  selector: 'app-alphabet',
  templateUrl: './alphabet.component.html',
  styleUrls: ['./alphabet.component.scss'],
})
export class AlphabetComponent {
  constructor(private letterService: _letterService) {
  }

  logKey = (e: HTMLButtonElement) => {
    this.callMethod(e.innerHTML.toLowerCase(), Number(e.id));
  }
  callMethod = (letter: string, id: number) => {
    this.letterService.callComponentMethod({letter, id});
  }
}

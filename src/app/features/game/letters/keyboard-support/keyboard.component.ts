import {Component} from '@angular/core';
import {_letterService} from "../_services/_letter.service";

@Component({
  selector: 'keyboard-support',
  template: ''
})
export class KeyboardComponent {
  constructor(private letterService: _letterService) {
  }

  ngOnInit() {
    const logKey = (e: KeyboardEvent) => {
      if(e.keyCode >= 65 && e.keyCode <= 122){
        this.callMethod(e.key, e.keyCode);
      }
    }
    document.addEventListener("keypress", logKey);
  }

  callMethod = (letter: string, id: number) => {
    this.letterService.callComponentMethod({letter, id});
  }
}

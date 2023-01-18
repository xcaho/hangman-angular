import {Component} from '@angular/core';
import {RandomWordService} from "../_services/random-word.service";
import {firstValueFrom} from "rxjs";
import {PasswordService} from "../../_services/password.service";

@Component({
  selector: 'app-random-word',
  template: ''
})

export class RandomWordComponent {
  constructor(private api: RandomWordService,
              private passwordService: PasswordService) {
  }

  async getWord() {
    let data: any = await firstValueFrom(this.api.getData());
    console.log(data[0].word);
    this.passwordService.wordToChars(data[0].word.toLowerCase());
    return data[0].word;
  }

}

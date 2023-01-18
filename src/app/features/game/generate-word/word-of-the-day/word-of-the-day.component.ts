import {Component} from '@angular/core';
import {WordOfTheDayService} from "../_services/word-of-the-day.service";
import {firstValueFrom} from "rxjs";
import {PasswordService} from "../../_services/password.service";

@Component({
  selector: 'app-word-of-the-day',
  template: ''
})

export class WordOfTheDayComponent {
  constructor(private api: WordOfTheDayService,
              private passwordService: PasswordService) {
  }

  async getWord() {
    let password: any = await firstValueFrom(this.api.getData());
    this.passwordService.wordToChars(password.word.toLowerCase());
    return password.word;
  }

  async getDefinition() {
    let data: any = await firstValueFrom(this.api.getData());
    this.passwordService.wordToChars(data.word.toLowerCase());
    return data.definitions[0].text;
  }

}

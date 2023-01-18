import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.html',
  styleUrls: ['./password.scss']
})
export class PasswordComponent {
  @Input() chosenWord: string[];
  @Input() wordBottom: string[];
}

import {Component, Input} from '@angular/core';
import {PasswordService} from "../_services/password.service";

@Component({
  selector: 'app-password',
  templateUrl: './password.html',
  styleUrls: ['./password.scss'],
  providers: [PasswordService]
})

export class PasswordComponent {
  @Input() chosenWord: string[];
  @Input() wordBottom: string[];
}

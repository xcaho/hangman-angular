import {Component, Input} from '@angular/core';
import {CoreComponent} from "../core/core.component";

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})

export class StatusComponent {
  @Input() message: string;
}

import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class _letterService {
  constructor() {
  }

  private componentMethodCallSource = new Subject<any>();

  componentMethodCalled$ = this.componentMethodCallSource.asObservable();

  callComponentMethod(data: any) {
    this.componentMethodCallSource.next(data);
  }

  activateLetters(): void {
    for (let c = 97; c <= 122; c++) {
      document.getElementById(c.toString()).removeAttribute('disabled');
    }
  }

  deactiveLetters(): void {
    for (let c = 97; c <= 122; c++) {
      document.getElementById(c.toString()).setAttribute('disabled', '');
    }
  }

}

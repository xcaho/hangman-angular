import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class ButtonService {

  activateButton(x: HTMLElement): void {
    x.removeAttribute('disabled');
  }

  deactivateButton(x: HTMLElement): void {
    x.setAttribute('disabled', '');
  }

  resetDefButton(): void{
    let accordionButton = document.querySelector("#definition") as HTMLButtonElement;
    let panel = document.querySelector(".panel") as HTMLElement;
    accordionButton.classList.remove('active');
    accordionButton.style.visibility = ('hidden');
    accordionButton.innerHTML = "Pokaż definicję słowa";
    panel.style.display = "none";
    panel.innerHTML = ''
  }
}

import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {
  chosenWord: string[] = ["", "", "", "", "", "", "", "", "", ""];
  wordBottom: string[] = ["", "", "", "", "", "", "", "", "", ""];

  wordToChars(word: string): void {
    for (let z = 0; z < word.length; z++) {
      this.chosenWord[z] = word.charAt(z)
      this.wordBottom[z] = "_"
    }
  }

  hidePassword(): void {
    // Hide password
    document.querySelectorAll<HTMLParagraphElement>(`[id^="l_"]`).forEach(el => {
      el.style.visibility = "hidden";
    });

    // Reset password and underline
    for (let z = 0; z < this.chosenWord.length; z++) {
      this.chosenWord[z] = "";
      this.wordBottom[z] = "";
    }
  }

  showGuessedLetter(i: number) {
    document.getElementById("l_" + String(i)).style.visibility = "visible";
  }
}

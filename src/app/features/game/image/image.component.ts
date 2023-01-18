import {Component} from '@angular/core';

@Component({
  selector: 'app-image',
  template: '<img class ="image" id="hangmanImage" src="assets/steps/full.png" alt="">',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent {
  public img_link: string[] = [
    "assets/steps/11.png",
    "assets/steps/10.png",
    "assets/steps/9.png",
    "assets/steps/8.png",
    "assets/steps/7.png",
    "assets/steps/6.png",
    "assets/steps/5.png",
    "assets/steps/4.png",
    "assets/steps/3.png",
    "assets/steps/2.png",
    "assets/steps/1.png",
    "assets/steps/0.png"]

  nextImage(life: number): void {
    let hangImage = document.getElementById('hangmanImage');
    hangImage.setAttribute("src", this.img_link[life])
  }

}

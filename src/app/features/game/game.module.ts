import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ImageComponent} from './image/image.component';
import {WordOfTheDayComponent} from './generate-word/word-of-the-day/word-of-the-day.component';
import {KeyboardComponent} from "./letters/keyboard-support/keyboard.component";
import {RandomWordComponent} from './generate-word/random-word/random-word.component';
import { CoreComponent } from './core/core.component';
import { StatusComponent } from './status/status.component';
import { DefinitionComponent } from './generate-word/definition/definition.component';


@NgModule({
  declarations: [
    KeyboardComponent,
    ImageComponent,
    WordOfTheDayComponent,
    RandomWordComponent,
    CoreComponent,
    StatusComponent,
    DefinitionComponent
  ],
    exports: [
        KeyboardComponent,
        ImageComponent,
        WordOfTheDayComponent,
        RandomWordComponent,
        StatusComponent,
        DefinitionComponent
    ],
  imports: [
    CommonModule,
  ]
})
export class GameModule {
}

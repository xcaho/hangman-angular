import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {NavbarComponent} from './shared/navbar/navbar.component';
import {FooterComponent} from './shared/footer/footer.component';
import {AlphabetComponent} from './features/game/letters/alphabet/alphabet.component';
import {PasswordComponent} from './features/game/password/password.component';
import {GameComponent} from "./features/game/game.component";
import {GameModule} from "./features/game/game.module";
import {HttpClientModule} from "@angular/common/http";
import {MainpageComponent} from './shared/mainpage/mainpage.component';
import { NavbarLogoComponent } from './shared/navbar/navbar-logo/navbar-logo.component';
import { NavbarMenuComponent } from './shared/navbar/navbar-menu/navbar-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    GameComponent,
    AlphabetComponent,
    PasswordComponent,
    MainpageComponent,
    NavbarLogoComponent,
    NavbarMenuComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    GameModule

  ],
  providers: [],
  exports: [
    PasswordComponent,
    AlphabetComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

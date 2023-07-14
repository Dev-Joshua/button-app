import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { LateralMenuComponent } from './lateral-menu/lateral-menu.component';
import { ButtonsContainerComponent } from './buttons-container/buttons-container.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    LateralMenuComponent,
    ButtonsContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

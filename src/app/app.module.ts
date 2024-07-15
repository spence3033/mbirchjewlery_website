import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './body/home/home.component';
import { ContactComponent } from './body/contact/contact.component';
import { EarringsComponent } from './body/earrings/earrings.component';
import { ComboSetsComponent } from './body/combo-sets/combo-sets.component';
import { NecklacesBracletsComponent } from './body/necklaces-braclets/necklaces-braclets.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    EarringsComponent,
    ComboSetsComponent,
    NecklacesBracletsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

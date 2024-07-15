import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './body/home/home.component';
import { ContactComponent } from './body/contact/contact.component';
import { EarringsComponent } from './body/earrings/earrings.component';
import { NecklacesBracletsComponent } from './body/necklaces-braclets/necklaces-braclets.component';
import { ComboSetsComponent } from './body/combo-sets/combo-sets.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'earrings', component: EarringsComponent},
  { path: 'necklaces-braclets', component: NecklacesBracletsComponent},
  { path: 'comboSets', component: ComboSetsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

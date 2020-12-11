import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FourOhFourComponent} from './common/components/four-oh-four/four-oh-four.component';
import {AppComponent} from './app.component';
import {HeaderComponent} from './common/components/header/header.component';

const routes: Routes = [
  { path: '', redirectTo: 'categories', pathMatch: 'full' },
  { path: '**', component: FourOhFourComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  static components = [
    AppComponent,
    HeaderComponent,
    FourOhFourComponent
  ];
}

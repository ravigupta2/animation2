import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FirstComponent} from './first/first.component';
import {SecondComponent} from './second/second.component';
import {ThirdComponent} from './third/third.component';

const routes: Routes = [
  {path: '' , redirectTo: 'first' , pathMatch : 'full'},
  {path: 'first', component: FirstComponent , data: { animation: 'isLeft'}},
  {path: 'second', component: SecondComponent },
  {path: 'third', component: ThirdComponent  , data: { animation: 'isRight'}},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }

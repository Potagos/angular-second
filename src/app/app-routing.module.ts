import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomeComponent } from './home/home.component';
import { ThirdComponent } from './third/third.component';
import { SecondComponent } from './second/second.component';
import { FirstComponent } from './first/first.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // Primary Routes
  {
    path: 'first',
    component: FirstComponent,
  }, {
    path: 'second',
    component: SecondComponent,
  }, {
    path: 'third',
    component: ThirdComponent,
  }, {
    path: '',
    component: HomeComponent,
  },


  // Secondary Routes
  {
    path: ':id',
    component: ToolbarComponent,
    outlet: 'toolbar',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

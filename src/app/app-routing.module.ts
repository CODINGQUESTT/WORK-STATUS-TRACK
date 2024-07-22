import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HComponentComponent} from './MyComponents/hcomponent/hcomponent.component'
import { TodosComponent } from './MyComponents/todos/todos.component';

const routes: Routes = [{ path: '', component: TodosComponent }, { path: 'Home', component: HComponentComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

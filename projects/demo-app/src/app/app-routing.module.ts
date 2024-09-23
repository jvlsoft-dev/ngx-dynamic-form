import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './components/add/add.component';
import { DynamicFormExamplesComponent } from './components/dynamic-form-examples/dynamic-form-examples.component';


const routes: Routes = [
  {
    path: '',
    component: DynamicFormExamplesComponent
  },
  {
    path: 'person',
    component: AddComponent
  },
  {
    path: 'person/:id',
    component: AddComponent
  }

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

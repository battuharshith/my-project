import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleComplexComponent } from './simple-complex/simple-complex.component';

const routes: Routes = [
  { path: '', component: SimpleComplexComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutComponent } from './ajout/ajout.component';
import { DetailsComponent } from './details/details.component';
import { ListproductComponent } from './listproduct/listproduct.component';
import { PagenotFoundComponent } from './pagenot-found/pagenot-found.component';

const routes: Routes = [
  { path: 'list', component: ListproductComponent },
  { path: 'list/:id', component: DetailsComponent },
  { path: 'add', component: AjoutComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: '**', component: PagenotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListproductComponent } from './listproduct/listproduct.component';
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import { PagenotFoundComponent } from './pagenot-found/pagenot-found.component';
import { AjoutComponent } from './ajout/ajout.component';

@NgModule({
  declarations: [AppComponent, ListproductComponent, DetailsComponent, PagenotFoundComponent, AjoutComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';;
import { MasterComponent } from "./components/master.component"
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    MasterComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
    RouterModule.forRoot([
      {
        path: "", pathMatch: "full", redirectTo: "services"
      },
      {
        path: "services",
        component: MasterComponent,
        loadChildren: () => import("./pages/services/services.module").then(m => m.ServicesModule)
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

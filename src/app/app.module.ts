import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';;
import { MasterComponent } from "./shared/master.component"
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MasterComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
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

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ServicesModule } from './pages/services/services.module'
import { ServiceListComponent } from './pages/services/service-list.component';
import { ServiceDetail } from './pages/services/service-detail.component';
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
        children: [
          {
            path: "", pathMatch: "full",
            component: ServiceListComponent
          },
          {
            path: ":id",
            component: ServiceDetail
          }
        ]
      }
    ]),
    ServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

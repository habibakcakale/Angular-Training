import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms'
import { ServiceListComponent } from "./service-list.component";
import { ServiceDetail } from "./service-detail.component"
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { CommonModule } from '@angular/common';
@NgModule({
    declarations: [ServiceListComponent, ServiceDetail],
    imports: [
        CommonModule,
        FormsModule,
        AgGridModule.withComponents([]),
        RouterModule.forChild([
            {
                path: "", pathMatch: "full",
                component: ServiceListComponent
            },
            {
                path: ":id",
                component: ServiceDetail
            }
        ])
    ]
})
export class ServicesModule {

}
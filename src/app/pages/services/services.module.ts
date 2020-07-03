import { NgModule } from "@angular/core";
import { ServiceListComponent } from "./service-list.component";
import { ServiceDetail } from "./service-detail.component"
import { RouterModule } from '@angular/router';
@NgModule({
    declarations: [ServiceListComponent, ServiceDetail],
    imports: [
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
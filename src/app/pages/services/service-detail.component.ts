import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
    templateUrl:"service-detail.component.html"
})
export class ServiceDetail implements OnInit, OnDestroy {

    ngOnDestroy(): void {
        console.log(" ServiceDetail Destroyed ");
    }
    ngOnInit(): void {
        throw new Error("ServiceDetail Init.");
    }

}

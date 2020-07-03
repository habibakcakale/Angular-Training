import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
    templateUrl: "./service-list.component.html"
})
export class ServiceListComponent implements OnInit, OnDestroy {

    ngOnDestroy(): void {
        console.log("ServiceListComponent Destroyed ")
    }
    ngOnInit(): void {
        console.log("ServiceListComponent Init.");
    }

}


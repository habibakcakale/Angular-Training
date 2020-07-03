import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, from, BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http'

@Component({
    templateUrl: "service-detail.component.html"
})
export class ServiceDetail implements OnInit, OnDestroy {
    service: { [key: string]: any } = { customer: {} }
    /**
     *
     */
    constructor(private router: Router, private httpClient: HttpClient, private activatedRoute: ActivatedRoute) {
        var nav = this.router.getCurrentNavigation();
        this.activatedRoute.params.pipe(switchMap(data => {
            console.log(data.id);
            if (!data.id || data.id == "0")
                return from([{ customer: {} }])
            if (nav.extras.state)
                return from([nav.extras.state.selectedItem])
            return httpClient.get("https://localhost:5001/services/" + data.id); //todo correct backend.
        })).subscribe(data => {
            console.log(data)
            this.service = data;
        });

    }
    ngOnDestroy(): void {

        console.log(" ServiceDetail Destroyed ");
    }
    ngOnInit(): void {

        console.log("ServiceDetail Init.");
    }
    updateCustomer(service) {
        this.httpClient.post("https://localhost:5001/services/" + service.id, service).toPromise();
    }
}

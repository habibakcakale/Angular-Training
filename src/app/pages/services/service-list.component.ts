import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from '@angular/router';
import { RowClickedEvent } from 'ag-grid-community';

@Component({
    templateUrl: "./service-list.component.html"
})
export class ServiceListComponent implements OnInit, OnDestroy {
    columnDefs = [
        { headerName: 'First Name', field: 'customer.firstName', sortable: true },
        { headerName: 'Last Name', field: 'customer.lastName', sortable: true },
        { headerName: 'Brand', field: 'carBrand.carBrand', sortable: true },
        { headerName: 'Reason', field: 'reason.reason' }
    ];
    rowData = [
        {
            "id": 3,
            "updateDate": "0001-01-01T00:00:00",
            "createdDate": "2020-07-02T13:10:00.2468777",
            "customer": {
                "id": 3,
                "customerNumber": 23232,
                "firstName": "Buse",
                "lastName": "KAYA",
                "phoneNumber": "0594375",
                "email": "busebuse@buse.com",
                "createdDate": "0001-01-01T00:00:00",
                "updateDate": "2020-07-03T13:25:07.6233325"
            },
            "carBrand": {
                "id": 3,
                "carBrand": "Audi",
                "createdDate": "0001-01-01T00:00:00",
                "updateDate": "0001-01-01T00:00:00"
            },
            "carModel": {
                "brandID": 3,
                "brand": {
                    "id": 3,
                    "carBrand": "Audi",
                    "createdDate": "0001-01-01T00:00:00",
                    "updateDate": "0001-01-01T00:00:00"
                },
                "createdDate": "0001-01-01T00:00:00",
                "updateDate": "0001-01-01T00:00:00",
                "modelName": "A5"
            },
            "carVariant": {
                "id": 228,
                "modelID": 43,
                "model": {
                    "brandID": 3,
                    "brand": {
                        "id": 3,
                        "carBrand": "Audi",
                        "createdDate": "0001-01-01T00:00:00",
                        "updateDate": "0001-01-01T00:00:00"
                    },
                    "createdDate": "0001-01-01T00:00:00",
                    "updateDate": "0001-01-01T00:00:00",
                    "modelName": "A5"
                },
                "variantName": "3.2 FSI Quattro",
                "createdDate": "0001-01-01T00:00:00",
                "updateDate": "0001-01-01T00:00:00"
            },
            "reason": {
                "id": 1,
                "reason": "Maintenance",
                "createdDate": "2020-07-02T13:09:03",
                "updateDate": "2020-07-02T13:08:58"
            },
            "eokProcesses": [
                {
                    "id": 5,
                    "createdDate": "2020-07-02T13:30:08.9830431",
                    "updateDate": "0001-01-01T00:00:00",
                    "operation": {
                        "id": 1,
                        "createdDate": "2020-07-02T13:29:12.0991131",
                        "updateDate": "0001-01-01T00:00:00",
                        "oprName": "Changing Oil",
                        "oprPrice": 0.0
                    },
                    "part": {
                        "id": 1,
                        "createdDate": "2020-07-02T13:28:53.862983",
                        "updateDate": "0001-01-01T00:00:00",
                        "partName": "AIR FILTER",
                        "partPrice": 75.5
                    },
                    "description": "454tertert"
                }
            ]
        }
    ]
    constructor(private router: Router) { }

    ngOnDestroy(): void {
        console.log("ServiceListComponent Destroyed ")
    }
    ngOnInit(): void {
        console.log("ServiceListComponent Init.");
    }
    navigateDetail(detail: RowClickedEvent) {
        this.router.navigate([`/services/${detail.data.id}`], {
            queryParams: { type: "edit" },
            state: { selectedItem: detail.data }
        })
    }
}


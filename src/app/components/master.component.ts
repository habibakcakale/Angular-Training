import { Component } from "@angular/core";

@Component({
    templateUrl: "./master-component.html"
}) export class MasterComponent {
    toggle: boolean = false
    getClass() {
        return this.toggle ? " toggled " : ""
    }
}
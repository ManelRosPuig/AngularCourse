import { Component, OnInit } from "@angular/core";
import { Person } from "./person";

@Component({
    selector: "my-component",
    templateUrl: "./my-component.component.html",
    styleUrls: ["./my-component.component.css"]
})
export class MyComponent implements OnInit {

    name: string = "Manel";
    age: number = 20;

    object: Person = {
        name: "Manel",
        age: 20
    };

    constructor() { }

    ngOnInit() {
        console.log("MyComponent initialized!");
    }
}

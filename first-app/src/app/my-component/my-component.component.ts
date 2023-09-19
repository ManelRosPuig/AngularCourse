import { Component, OnInit } from "@angular/core";

@Component({
    selector: "my-component",
    templateUrl: "./my-component.component.html",
    styleUrls: ["./my-component.component.css"]
})
export class MyComponent implements OnInit {

    name = "Angular";

    constructor() { }

    ngOnInit() {
        console.log("MyComponent initialized!");
    }
}

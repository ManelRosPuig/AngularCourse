import { Component } from "@angular/core";

@Component({
    selector: "my-component",
    templateUrl: "./my-component.component.html",
    styleUrls: ["./my-component.component.css"]
})
export class MyComponent {

    counter: number = 0;

    increment() {
        this.counter++;
    }

    decrement() {
        this.counter--;
    }

    reset() {
        this.counter = 0;
    }
}

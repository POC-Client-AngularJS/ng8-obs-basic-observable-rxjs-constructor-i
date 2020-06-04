import { Component } from "@angular/core";
import { Observable } from "rxjs";

function sequenceSubscriber(observer) {
  observer.next("Apple");
  observer.next("Orange");
  observer.next("Grappe");
  observer.complete();
  return { unsubscribe() {} };
}
const sequence = new Observable(sequenceSubscriber);

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  name = "Angular";
  constructor() {
    sequence.subscribe({
      next(msg) {
        console.log(msg);
      },
      complete() {
        console.log("Finished sequence");
      }
    });
  }
}

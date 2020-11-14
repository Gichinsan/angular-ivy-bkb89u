import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;

  toDoArray: Array<string> = [];

  addToDo(item: string) {
    this.toDoArray.push(item);
  }
}

import { Component, VERSION, OnInit } from "@angular/core";
import { DataService } from "data.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class appComponent implements OnInit{
ngOnInit(): void {
throw new Error("Method not implemented.");
}
  name = "Angular " + VERSION.major;

  toDoArray: Array<string> = [];

  addToDo(item: string) {
    this.toDoArray.push(item);
  }
}

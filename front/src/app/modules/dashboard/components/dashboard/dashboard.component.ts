import { Component, OnInit } from "@angular/core";
import { map } from "rxjs/operators";
import { ApiService } from "../../../../services/api.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.sass"]
})
export class DashboardComponent implements OnInit {
  ngOnInit(): void {
  }
}

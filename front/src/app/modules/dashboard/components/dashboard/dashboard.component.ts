import { Component, OnInit } from "@angular/core";
import { map } from "rxjs/operators";
import { ApiService } from "../../../../services/api.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.sass"]
})
export class DashboardComponent implements OnInit {
  public user: {id?: number, name: string, email: string};
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.get("auth/user")
      .pipe(map(response => response.data.user))
      .subscribe(user => this.user = user);
  }

}

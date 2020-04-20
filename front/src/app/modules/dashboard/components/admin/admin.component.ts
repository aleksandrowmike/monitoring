import { Component, OnInit } from "@angular/core";
import { map } from "rxjs/operators";
import { ApiService } from "../../../../services/api.service";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.sass"]
})
export class AdminComponent implements OnInit {

  public user: {id?: number, name: string, email: string};
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.get("auth/user")
      .pipe(map(response => response.data.user))
      .subscribe(user => this.user = user);
  }

}

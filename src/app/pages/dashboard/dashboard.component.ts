import { SharedService } from './../../services/shared.service';
import { UserModel } from "./../../models/user.model";
import { UserService } from "./../../services/user.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  users: UserModel[] = [];
  constructor(private _userService: UserService,
    public sharedService: SharedService) {}

  ngOnInit() {
    this._userService.getUsers().subscribe(users => {
      if(users){
        this.users = users;
      }
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsersService, User } from 'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
 
  users : User[]
  model = {
    "name": "Tester",
    "lastname": "Glez",
    "email": "holas@gmail.com",
    "password": "123456",
    "age": "25",
    "sex": "hombre",
    "status": "active",
    "porfileimageRoute": "route",
    "description": "description",
    "token": "__token",
    "createAt": "2019-12-12",
    "updateAt": "2019-12-12"
  }

  constructor(private _userService: UsersService, private route: Router) { }

  ngOnInit() {
    this._userService.getData().subscribe(data => {
      //console.log(data)
      this.users = data
    })
  }
  onClickSubmit(data)
  {
   
    console.log(this.model)
    this._userService.Save(this.model).subscribe(resp => {
      console.log(resp)
    } )
  }

}

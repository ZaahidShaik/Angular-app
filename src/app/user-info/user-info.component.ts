import { Component } from '@angular/core';
import { UserInfo } from '../app-interfaces';
import { UserDeatils } from './user-deatils';

@Component({
  selector: 'user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent {

    userInfo: UserDeatils = new UserDeatils('John','john@gmail.com','JohnsPassword', new Date(2023, 6, 5))

}

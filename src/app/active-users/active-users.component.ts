import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {

  @Input() users: string[];

  activeUsers: string[] = [];

  constructor(private userService : UsersService){}

  ngOnInit()
  {
    this.activeUsers = this.userService.activeUsers;
  }

  onSetToInactive(id : number)
  {
    this.userService.setInactive(id);
  }
}

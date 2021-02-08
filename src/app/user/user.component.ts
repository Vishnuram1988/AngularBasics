import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['../../assets/main.css']
})
export class UserComponent implements OnInit {

  public userName = "Vishnu Ram";
  public errorMessage: string =""
  public userList = [] as any;
  @Output() public childEvent = new EventEmitter();
  constructor(private _userService:UserService) { }

  ngOnInit(){
    this._userService.getUsers().subscribe(response => this.userList = response,(error)=>this.errorMessage = error);
  }

  public user ={
    "First Name":"Vishnu",
    "Last Name" : "Ram"
  }

  setName (value: any){
    this.userName =value;    
  }
  emitMessage (message : any){
    this.childEvent.emit('Message from child component : '+message);
  }
}

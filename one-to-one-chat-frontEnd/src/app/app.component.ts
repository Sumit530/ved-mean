import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {


  constructor() {
    
  }

  ngOnInit(): void {
    // this.currentUser = this.userList[2];
  }

  // selectUserHandler(phone: string): void {
  //   this.selectedUser = this.userList.find((user) => user.phone === phone);
  //   this.roomId = this.selectedUser.roomId[this.selectedUser.id];
  //   this.messageArray = [];

  //   this.join(this.currentUser.name, this.roomId);
  // }

  // join(username: string, roomId: string): void {
  //   this.chatService.joinRoom({ user: username, roomId: roomId });
  // }

  // sendMessage() {
  //   this.chatService.sendMessage({
  //     data: this.currentUser.name,
  //     room: this.roomId,
  //     message: this.messageText,
  //   });

  //   this.messageText = '';
  // }

  // submit() {
  //   this.chatService.addUser({ username: this.username, room: this.room });
  //   this.router.navigate(['chat'])
  // }
}

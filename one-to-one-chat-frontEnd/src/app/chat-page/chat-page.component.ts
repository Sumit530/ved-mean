import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat/chat.service';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss'],
})
export class ChatPageComponent implements OnInit {
  username: string = '';
  room: string = '';
  messageText: string = '';

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    this.chatService.currentData.subscribe((data) => {
      this.username = data.username;
      this.room = data.room;
    });
  }

  sendMsg() {
    this.chatService.sendMessage({
      data: this.username,
      room: this.room,
      message: this.messageText,
    });
    this.messageText = '';
    this.chatService.getMessage().subscribe((data) => {
      console.log(data);
    });
  }
}

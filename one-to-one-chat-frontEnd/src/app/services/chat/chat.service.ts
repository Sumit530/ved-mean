import { Injectable } from '@angular/core';
import { Socket, io } from 'socket.io-client';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private socket: Socket;
  private url: string = 'http://localhost:3000';

  private data = new BehaviorSubject({ username: '', room: '' });
  currentData = this.data.asObservable();

  constructor() {
    this.socket = io(this.url);
  }

  joinRoom(data) {
    this.socket.emit('join', data);
  }

  addUser(data) {
    this.socket.emit('add-user', data);
  }

  sendMessage(data) {
    this.socket.emit('message', data);
  }

  getMessage(): Observable<any> {
    return new Observable<{ user: string; message: string }>((observer) => {
      this.socket.on('new-message', (data) => {
        console.log('data=====>', data);
        // observer.next(data);
      });

      return () => {
        this.socket.disconnect();
      };
    });
  }

  setData(data) {
    this.data.next(data);
  }
}

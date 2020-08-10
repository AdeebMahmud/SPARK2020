import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(public db:FirebaseService) { }

  createData(){
    console.log("1");
    let data = {};
    data['name'] = 'arnav';
    this.db.createData(data)
    console.log("2")
  }

  sendMessage(messageBody,senderName,recipientName){

    this.db.updateChat(message)
    //user types into a reactive form and then hits the send button
  }

  ngOnInit(): void {
  }
  messageBody: string;
  senderName: string;
  recipientName: string;
}

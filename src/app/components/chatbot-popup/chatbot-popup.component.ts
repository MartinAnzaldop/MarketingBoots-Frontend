import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-chatbot-popup',
  templateUrl: './chatbot-popup.component.html',
  styleUrls: ['./chatbot-popup.component.css']
})
export class ChatbotPopupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isChatbotVisible = false;

  toggleChatbot(): void {
    this.isChatbotVisible = !this.isChatbotVisible;
  }


}

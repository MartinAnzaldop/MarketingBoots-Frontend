import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-vista',
  templateUrl: './user-vista.component.html',
  styleUrls: ['./user-vista.component.css']
})
export class UserVistaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isChatbotVisible = false;
  toggleChatbot(): void {
    this.isChatbotVisible = !this.isChatbotVisible;
  }
}

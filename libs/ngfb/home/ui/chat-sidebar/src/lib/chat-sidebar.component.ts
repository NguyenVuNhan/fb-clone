import { Component } from '@angular/core';

interface ChatItem {
  img: string;
  active: boolean;
  name: string;
}

@Component({
  selector: 'fb-clone-chat-sidebar',
  templateUrl: './chat-sidebar.component.html',
  styleUrls: ['./chat-sidebar.component.scss'],
})
export class ChatSidebarComponent {
  chatItems: ChatItem[] = Array(24).fill({
    img: '/assets/images/avatar.png',
    active: true,
    name: 'User',
  });
}

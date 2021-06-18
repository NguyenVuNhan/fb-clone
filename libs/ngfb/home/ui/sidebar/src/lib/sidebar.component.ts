import { Component } from '@angular/core';

interface SidebarItem {
  img: string;
  text: string;
}

@Component({
  selector: 'fb-clone-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  sidebarItems: SidebarItem[] = [
    { img: 'avatar.png', text: 'Vu Nhan Nguyen' },
    { img: 'covid.png', text: 'COVID-19 Information Center' },
    { img: 'friends.png', text: 'Friends' },
    { img: 'pages.png', text: 'Pages' },
    { img: 'groups.png', text: 'Groups' },
    { img: 'marketplaces.png', text: 'Marketplace' },
    { img: 'watch.png', text: 'Watch' },
    { img: 'events.png', text: 'Events' },
    { img: 'memories.png', text: 'Memories' },
    { img: 'saved.png', text: 'Saved' },
  ];

  shortCutItems: SidebarItem[] = [
    { img: 'angularVN.jpg', text: 'Angular VietNam' },
  ];
}

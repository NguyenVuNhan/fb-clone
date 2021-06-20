import { Component } from '@angular/core';

interface AvailableFriend {
  name: string;
  img: string;
}

@Component({
  selector: 'fb-clone-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.scss'],
})
export class CreateRoomComponent {
  availableFriends: AvailableFriend[] = [
    { img: '/assets/images/avatar.png', name: 'John Doe' },
    { img: '/assets/images/avatar.png', name: 'Don Key' },
    { img: '/assets/images/avatar.png', name: 'Sonny Day' },
    { img: '/assets/images/avatar.png', name: 'Ray Gunn' },
    { img: '/assets/images/avatar.png', name: 'Mona Lott' },
    { img: '/assets/images/avatar.png', name: 'John Doe' },
    { img: '/assets/images/avatar.png', name: 'Don Key' },
    { img: '/assets/images/avatar.png', name: 'Sonny Day' },
    { img: '/assets/images/avatar.png', name: 'Ray Gunn' },
    { img: '/assets/images/avatar.png', name: 'Mona Lott' },
    { img: '/assets/images/avatar.png', name: 'John Doe' },
    { img: '/assets/images/avatar.png', name: 'Don Key' },
    { img: '/assets/images/avatar.png', name: 'Sonny Day' },
    { img: '/assets/images/avatar.png', name: 'Ray Gunn' },
    { img: '/assets/images/avatar.png', name: 'Mona Lott' },
    { img: '/assets/images/avatar.png', name: 'John Doe' },
    { img: '/assets/images/avatar.png', name: 'Don Key' },
    { img: '/assets/images/avatar.png', name: 'Sonny Day' },
    { img: '/assets/images/avatar.png', name: 'Ray Gunn' },
    { img: '/assets/images/avatar.png', name: 'Mona Lott' },
  ];
  showLeftChevron = false;
  showRightChevron = true;

  scrollLeft(e: HTMLDivElement): void {
    e.scrollLeft -= e.clientWidth / 2;
    this.showRightChevron = true;
    if (e.scrollLeft + e.offsetWidth <= e.clientWidth * 1.5) {
      this.showLeftChevron = false;
    }
  }

  scrollRight(e: HTMLDivElement): void {
    e.scrollLeft += e.clientWidth / 2;
    this.showLeftChevron = true;
    if (e.scrollLeft + e.offsetWidth >= e.scrollWidth - e.clientWidth / 2) {
      this.showRightChevron = false;
    }
  }
}

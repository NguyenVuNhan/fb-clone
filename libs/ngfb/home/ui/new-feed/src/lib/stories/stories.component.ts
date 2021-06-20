import { Component } from '@angular/core';

interface StoryItem {
  avatar: string;
  img: string;
  name: string;
}

@Component({
  selector: 'fb-clone-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss'],
})
export class StoriesComponent {
  storyItems: StoryItem[] = [
    {
      avatar: '/assets/images/avatar.png',
      img: '/assets/images/story_2.jpeg',
      name: 'John Doe',
    },
    {
      avatar: '/assets/images/avatar.png',
      img: '/assets/images/story_3.webp',
      name: 'Don Key',
    },
    {
      avatar: '/assets/images/avatar.png',
      img: '/assets/images/story_4.jpg',
      name: 'Sonny Day',
    },
    {
      avatar: '/assets/images/avatar.png',
      img: '/assets/images/story_5.jpg',
      name: 'Ray Gunn',
    },
    {
      avatar: '/assets/images/avatar.png',
      img: '/assets/images/story_6.jpeg',
      name: 'Mona Lott',
    },
  ];
}

import { HostBinding } from '@angular/core';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'fb-clone-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent {
  @HostBinding('class') class = 'relative';
  @Input() img = '/assets/images/avatar.png';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() status: 'active' | 'offline' | 'hide' = 'hide';
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'fb-clone-icon-btn[key]',
  templateUrl: './icon-btn.component.html',
  styleUrls: ['./icon-btn.component.scss'],
})
export class IconBtnComponent {
  @Input() key!: string;
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() noBg = false;
}

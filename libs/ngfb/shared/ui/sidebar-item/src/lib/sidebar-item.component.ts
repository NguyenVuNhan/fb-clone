import { Component, Input } from '@angular/core';

@Component({
  selector: 'fb-clone-sidebar-item[text][img]',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss'],
})
export class SidebarItemComponent {
  @Input() img!: string;
  @Input() text!: string;
}

import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Required } from '@fb-clone/ngfb/shared/utils/decorators';

@Component({
  selector: 'fb-clone-tab-link[key]',
  templateUrl: './tab-link.component.html',
  styleUrls: ['./tab-link.component.scss'],
})
export class TabLinkComponent implements OnInit {
  @Input() key!: string;
  @HostBinding('class') class: string;

  active = false;
  private baseClass = 'flex-1';
  private activeClass = 'border-b-4 border-alpha-light text-alpha-light';

  constructor() {
    this.class = this.baseClass;
  }

  ngOnInit(): void {
    // simulate active
    if (this.key === 'home') {
      this.active = true;
      this.class += ' ' + this.activeClass;
    }
  }
}

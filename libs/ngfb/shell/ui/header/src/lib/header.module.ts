import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { TabLinkComponent } from './tab-link/tab-link.component';
import { ProfileBtnComponent } from './profile-btn/profile-btn.component';
import { IconBtnModule } from '@fb-clone/ngfb/shared/ui/icon-btn';

@NgModule({
  imports: [CommonModule, SvgIconsModule, IconBtnModule],
  declarations: [HeaderComponent, TabLinkComponent, ProfileBtnComponent],
  exports: [HeaderComponent],
})
export class HeaderModule {}

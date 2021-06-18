import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SidebarItemModule } from '@fb-clone/ngfb/shared/ui/sidebar-item';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { SidebarComponent } from './sidebar.component';
import { IconBtnModule } from '@fb-clone/ngfb/shared/ui/icon-btn';

@NgModule({
  imports: [CommonModule, SidebarItemModule, SvgIconsModule, IconBtnModule],
  declarations: [SidebarComponent],
  exports: [SidebarComponent],
})
export class SidebarModule {}

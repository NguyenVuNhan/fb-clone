import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarItemComponent } from './sidebar-item.component';
import { SvgIconsModule } from '@ngneat/svg-icon';

@NgModule({
  imports: [CommonModule, SvgIconsModule],
  declarations: [SidebarItemComponent],
  exports: [SidebarItemComponent],
})
export class SidebarItemModule {}

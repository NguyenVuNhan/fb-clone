import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconBtnModule } from '@fb-clone/ngfb/shared/ui/icon-btn';
import { SidebarItemModule } from '@fb-clone/ngfb/shared/ui/sidebar-item';
import { ChatSidebarComponent } from './chat-sidebar.component';

@NgModule({
  imports: [CommonModule, SidebarItemModule, IconBtnModule],
  declarations: [ChatSidebarComponent],
  exports: [ChatSidebarComponent],
})
export class ChatSidebarModule {}

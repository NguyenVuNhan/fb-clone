import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SidebarModule } from '@fb-clone/ngfb/home/ui/sidebar';
import { ChatSidebarModule } from '@fb-clone/ngfb/home/ui/chat-sidebar';
import { NewFeedModule } from '@fb-clone/ngfb/home/ui/new-feed';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: HomeComponent }]),
    SidebarModule,
    ChatSidebarModule,
    NewFeedModule,
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent],
})
export class HomeModule {}

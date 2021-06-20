import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconBtnModule } from '@fb-clone/ngfb/shared/ui/icon-btn';
import { NewFeedComponent } from './new-feed.component';
import { StoriesComponent } from './stories/stories.component';
import { NewPostComponent } from './new-post/new-post.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { PostComponent } from './post/post.component';
import { AvatarModule } from '@fb-clone/ngfb/shared/ui/avatar';
import { SvgIconsModule } from '@ngneat/svg-icon';

@NgModule({
  imports: [CommonModule, IconBtnModule, AvatarModule, SvgIconsModule],
  declarations: [
    NewFeedComponent,
    StoriesComponent,
    NewPostComponent,
    CreateRoomComponent,
    PostComponent,
  ],
  exports: [NewFeedComponent],
})
export class NewFeedModule {}

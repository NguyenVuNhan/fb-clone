import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { ngfbAssistantPhotoIcon } from './svg/assistant_photo';
import { ngfbBookmarkIcon } from './svg/bookmark';
import { ngfbBorderColorIcon } from './svg/border_color';
import { ngfbChatIcon } from './svg/chat';
import { ngfbEventAvailableIcon } from './svg/event_available';
import { ngfbExpandMoreIcon } from './svg/expand_more';
import { ngfbFacebookAngryIcon } from './svg/facebook-angry';
import { ngfbFacebookReactionHahaIcon } from './svg/facebook-reaction-haha';
import { ngfbFacebookReactionLikeIcon } from './svg/facebook-reaction-like';
import { ngfbFacebookReactionLoveIcon } from './svg/facebook-reaction-love';
import { ngfbFacebookReactionSadIcon } from './svg/facebook-reaction-sad';
import { ngfbFacebookReactionWowIcon } from './svg/facebook-reaction-wow';
import { ngfbFacebookIcon } from './svg/facebook';
import { ngfbGammingIcon } from './svg/gamming';
import { ngfbGifBoxIcon } from './svg/gif_box';
import { ngfbGroupsIcon } from './svg/groups';
import { ngfbHealthAndSafetyIcon } from './svg/health_and_safety';
import { ngfbHomeIcon } from './svg/home';
import { ngfbInsertEmoticonIcon } from './svg/insert_emoticon';
import { ngfbMenuIcon } from './svg/menu';
import { ngfbModeCommentIcon } from './svg/mode_comment';
import { ngfbMoreHorizIcon } from './svg/more_horiz';
import { ngfbNotificationsIcon } from './svg/notifications';
import { ngfbOndemandVideoIcon } from './svg/ondemand_video';
import { ngfbPhotoCameraIcon } from './svg/photo_camera';
import { ngfbReplyIcon } from './svg/reply';
import { ngfbRestoreIcon } from './svg/restore';
import { ngfbSearchIcon } from './svg/search';
import { ngfbStickerIcon } from './svg/sticker';
import { ngfbStorefrontIcon } from './svg/storefront';
import { ngfbThumbUpIcon } from './svg/thumb_up';

@NgModule({
  imports: [
    CommonModule,
    SvgIconsModule.forRoot({
      sizes: {
        xs: '12px',
        sm: '16px',
        md: '20px',
        lg: '24px',
        xl: '36px',
        xxl: '40px',
      },
      defaultSize: 'md',
      icons: [
        ngfbAssistantPhotoIcon,
        ngfbBookmarkIcon,
        ngfbBorderColorIcon,
        ngfbChatIcon,
        ngfbEventAvailableIcon,
        ngfbExpandMoreIcon,
        ngfbFacebookAngryIcon,
        ngfbFacebookReactionHahaIcon,
        ngfbFacebookReactionLikeIcon,
        ngfbFacebookReactionLoveIcon,
        ngfbFacebookReactionSadIcon,
        ngfbFacebookReactionWowIcon,
        ngfbFacebookIcon,
        ngfbGammingIcon,
        ngfbGifBoxIcon,
        ngfbGroupsIcon,
        ngfbHealthAndSafetyIcon,
        ngfbHomeIcon,
        ngfbInsertEmoticonIcon,
        ngfbMenuIcon,
        ngfbModeCommentIcon,
        ngfbMoreHorizIcon,
        ngfbNotificationsIcon,
        ngfbOndemandVideoIcon,
        ngfbPhotoCameraIcon,
        ngfbReplyIcon,
        ngfbRestoreIcon,
        ngfbSearchIcon,
        ngfbStickerIcon,
        ngfbStorefrontIcon,
        ngfbThumbUpIcon,
      ],
    }),
  ],
  exports: [SvgIconsModule],
})
export class IconsModule {}

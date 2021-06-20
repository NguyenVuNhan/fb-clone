import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { ngfbAddCircleIcon } from './svg/add_circle';
import { ngfbAssistantPhotoIcon } from './svg/assistant_photo';
import { ngfbBookmarkIcon } from './svg/bookmark';
import { ngfbBorderColorIcon } from './svg/border_color';
import { ngfbChatIcon } from './svg/chat';
import { ngfbEventAvailableIcon } from './svg/event_available';
import { ngfbExpandMoreIcon } from './svg/expand_more';
import { ngfbFacebookIcon } from './svg/facebook';
import { ngfbFacebookAngryIcon } from './svg/facebook-angry';
import { ngfbFacebookReactionHahaIcon } from './svg/facebook-reaction-haha';
import { ngfbFacebookReactionLikeIcon } from './svg/facebook-reaction-like';
import { ngfbFacebookReactionLoveIcon } from './svg/facebook-reaction-love';
import { ngfbFacebookReactionSadIcon } from './svg/facebook-reaction-sad';
import { ngfbFacebookReactionWowIcon } from './svg/facebook-reaction-wow';
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
import { ngfbAddIcon } from './svg/add';
import { ngfbArrowForwardIcon } from './svg/arrow_forward';
import { ngfbChevronLeftIcon } from './svg/chevron_left';
import { ngfbChevronRightIcon } from './svg/chevron_right';

@NgModule({
  imports: [
    CommonModule,
    SvgIconsModule.forRoot({
      sizes: {
        sm: '1.25rem',
        md: '1.5rem',
        lg: '1.75rem',
        xl: '2rem',
      },
      defaultSize: 'md',
      icons: [
        ngfbChevronLeftIcon,
        ngfbChevronRightIcon,
        ngfbAddIcon,
        ngfbArrowForwardIcon,
        ngfbAddCircleIcon,
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

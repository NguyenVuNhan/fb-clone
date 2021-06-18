import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconBtnComponent } from './icon-btn.component';
import { SvgIconsModule } from '@ngneat/svg-icon';

@NgModule({
  imports: [CommonModule, SvgIconsModule],
  declarations: [IconBtnComponent],
  exports: [IconBtnComponent],
})
export class IconBtnModule {}

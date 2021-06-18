import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgfbShellModule } from '@fb-clone/ngfb/shell/feature';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsModule } from '@fb-clone/ngfb/shared/ui/icons';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgfbShellModule,
    BrowserAnimationsModule,
    IconsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

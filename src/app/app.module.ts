import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { VideoPlayerGridComponent } from './video-player-grid/video-player-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoPlayerComponent,
    VideoPlayerGridComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, ViewChildren, QueryList, AfterViewInit } from '@angular/core';

import { VideoPlayerComponent } from '../video-player/video-player.component';

@Component({
    selector: 'video-player-grid',
    templateUrl: './video-player-grid.component.html',
    styleUrls: ['./video-player-grid.component.css']
})
export class VideoPlayerGridComponent implements AfterViewInit {
    @ViewChildren(VideoPlayerComponent) videoPlayers: QueryList<VideoPlayerComponent>;
    videoPlayersArr: VideoPlayerComponent[];

    playerAttrs: Object[] = [
        { videoHeight: 300 },
        { videoWidth: 300 }
    ];

    ngAfterViewInit() {
        this.videoPlayersArr = this.videoPlayers.toArray();
    }

    onPlay(event: Event) {
        console.info("Played grid!");
    }
}
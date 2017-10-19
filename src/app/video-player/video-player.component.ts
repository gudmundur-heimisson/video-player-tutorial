import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
    selector: 'video-player',
    templateUrl: './video-player.component.html',
    styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent {
    videoUrl: string = 'assets/test1.mp4';
    @ViewChild('videoPlayer') video: any;
    @Input() videoWidth: number;
    @Input() videoHeight: number;
    @Output() play: EventEmitter<any> = new EventEmitter();
    private isPlaying: boolean = false;

    onPlay(event: Event) {
        this.isPlaying ? this.video.nativeElement.pause() : this.video.nativeElement.play();
        this.isPlaying = !this.isPlaying;
        console.info("Playing player");
        this.play.emit(event);
        return false;
    }
}
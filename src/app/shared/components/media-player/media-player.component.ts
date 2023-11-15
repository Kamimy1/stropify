import { Component } from '@angular/core';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent {

  mockCover: any = {
    cover: 'https://i1.sndcdn.com/artworks-000247627460-1hqnjr-t500x500.jpg',
    name: 'Titulo',
    album: 'Album'
  }

}

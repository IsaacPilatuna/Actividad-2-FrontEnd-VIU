import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Artist } from 'src/app/models/Artist';

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.scss']
})
export class ArtistCardComponent implements OnInit {

  @Input('artist') artist:Artist;
  @Output() onSeeVideosClicked = new EventEmitter<Artist>();
  @Output() onSeeAlbumsClicked = new EventEmitter<Artist>();
  constructor() { }

  ngOnInit(): void {
  }

  seeVideos(){
    this.onSeeVideosClicked.emit(this.artist);
  }

  seeAlbums(){
    this.onSeeAlbumsClicked.emit(this.artist);
  }


}

import { Component, Input, OnInit } from '@angular/core';
import { Artist } from 'src/app/models/Artist';

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.scss']
})
export class ArtistCardComponent implements OnInit {

  @Input('artist') artist:Artist;
  constructor() { }

  ngOnInit(): void {
  }

}

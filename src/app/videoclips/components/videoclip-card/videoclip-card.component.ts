import { Component, Input, OnInit } from '@angular/core';
import { VideoClip } from 'src/app/models/Videoclip';

@Component({
  selector: 'app-videoclip-card',
  templateUrl: './videoclip-card.component.html',
  styleUrls: ['./videoclip-card.component.scss']
})
export class VideoclipCardComponent implements OnInit {

  @Input('videoclip') videoclip:VideoClip;
  constructor() { }

  ngOnInit(): void {
  }

}

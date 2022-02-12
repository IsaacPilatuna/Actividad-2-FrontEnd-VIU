import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public routes=[
    {route:'artists',matIcon:'recent_actors',label:'Artistas'},
    {route:'videoclips',matIcon:'music_video',label:'Videoclips'},
    {route:'albums',matIcon:'library_music',label:'Álbumes'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

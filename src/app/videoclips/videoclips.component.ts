import { Component, OnInit } from '@angular/core';
import { VideoClip } from '../models/Videoclip';

@Component({
  selector: 'app-videoclips',
  templateUrl: './videoclips.component.html',
  styleUrls: ['./videoclips.component.scss']
})
export class VideoclipsComponent implements OnInit {

  public title="Videoclips";
  public videoclips:VideoClip[]=[
    {id:1, title: "Smooth Criminal", url: "https://www.youtube-nocookie.com/embed/h_D3VFfhvs4"},
    {id:2, title: "They Don’t Care About Us", url: "https://www.youtube-nocookie.com/embed/QNJL6nfu__Q"},
    {id:3, title: "Somebody To Love", url: "https://www.youtube-nocookie.com/embed/kijpcUv-b8M"},
    {id:4, title: "Crazy Little Thing Called Love", url: "https://www.youtube-nocookie.com/embed/zO6D_BAuYCI"},
    {id:5, title: "My Way", url: "https://www.youtube-nocookie.com/embed/ixbcvKCl4Jc"},
    {id:6, title: "Jailhouse Rock", url: "https://www.youtube-nocookie.com/embed/xqBdTn3_0Rw"},
    {id:7, title: "Voodoo Child", url: "https://www.youtube-nocookie.com/embed/qFfnlYbFEiE"},
    {id:8, title: "Bleeding Heart", url: "https://www.youtube-nocookie.com/embed/COsVgbAJ8B8"},
    {id:9, title: "Space Oddity", url: "https://www.youtube-nocookie.com/embed/iYYRH4apXDo"},
    {id:10, title: "Life On Mars?", url: "https://www.youtube-nocookie.com/embed/AZKcl4-tcuo"},
    {id:11, title: "Imagine", url: "https://www.youtube-nocookie.com/embed/VOgFZfRVaww"},
    {id:12, title: "Stand by me", url: "https://www.youtube-nocookie.com/embed/YqB8Dm65X18"},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { VideoClip } from '../models/Videoclip';

@Component({
  selector: 'app-videoclips',
  templateUrl: './videoclips.component.html',
  styleUrls: ['./videoclips.component.scss']
})
export class VideoclipsComponent implements OnInit {

  public title="Videoclips";

  public allVideoclips:VideoClip[]=[
    {id:1, idArtist:1, title: "Smooth Criminal", url: "https://www.youtube-nocookie.com/embed/h_D3VFfhvs4"},
    {id:2, idArtist:1, title: "They Don’t Care About Us", url: "https://www.youtube-nocookie.com/embed/QNJL6nfu__Q"},
    {id:3, idArtist:2, title: "Somebody To Love", url: "https://www.youtube-nocookie.com/embed/kijpcUv-b8M"},
    {id:4, idArtist:2, title: "Crazy Little Thing Called Love", url: "https://www.youtube-nocookie.com/embed/zO6D_BAuYCI"},
    {id:5, idArtist:3, title: "My Way", url: "https://www.youtube-nocookie.com/embed/ixbcvKCl4Jc"},
    {id:6, idArtist:3, title: "Jailhouse Rock", url: "https://www.youtube-nocookie.com/embed/xqBdTn3_0Rw"},
    {id:7, idArtist:4, title: "Voodoo Child", url: "https://www.youtube-nocookie.com/embed/qFfnlYbFEiE"},
    {id:8, idArtist:4, title: "Bleeding Heart", url: "https://www.youtube-nocookie.com/embed/COsVgbAJ8B8"},
    {id:9, idArtist:5, title: "Space Oddity", url: "https://www.youtube-nocookie.com/embed/iYYRH4apXDo"},
    {id:10, idArtist:5, title: "Life On Mars?", url: "https://www.youtube-nocookie.com/embed/AZKcl4-tcuo"},
    {id:11, idArtist:6, title: "Imagine", url: "https://www.youtube-nocookie.com/embed/VOgFZfRVaww"},
    {id:12, idArtist:6, title: "Stand by me", url: "https://www.youtube-nocookie.com/embed/YqB8Dm65X18"},

    {id:13, idArtist:7, title: "Wings 'Silly Love Songs", url: "https://www.youtube.com/embed/ap87QgZKTNw"},
    {id:14, idArtist:7, title: "Say Say Say", url: "https://www.youtube.com/embed/aLEhh_XpJ-0"},
    {id:15, idArtist:8, title: "Mama, I'm Coming Home", url: "https://www.youtube.com/embed/K0siYUjV9UM"},
    {id:16, idArtist:8, title: "Dreamer", url: "https://www.youtube.com/embed/LCCiwPEdEpg"},
  ];
  public videoclips:VideoClip[]=[];

  constructor(private readonly activatedRoute:ActivatedRoute) {
    activatedRoute.queryParams.subscribe(
      params=>{
        let idArtist = params['idArtist'];
        if(idArtist){
          this.videoclips=[...this.allVideoclips.filter(clip=>clip.idArtist==idArtist)];
        }else{
          this.videoclips=[...this.allVideoclips];
        }
      }
    )
  }

  ngOnInit(): void {
  }

}

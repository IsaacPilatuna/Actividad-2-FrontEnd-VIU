import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Album } from '../models/Album';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})

export class AlbumsComponent implements OnInit {

  public title="Albums";

  public allAlbums:Album[]=[
    {id:1, idArtist:1, title: "Thriller",date:"30 de noviembre de 1982",ventas:"66 millones de copias", coverUrl: "https://colectivosonoro.com/wp-content/uploads/2016/11/michael-jackson.jpeg"},
    {id:2, idArtist:1, title: "Off the Wall",date:"10 de agosto de 1979",ventas:"20 millones de copias", coverUrl: "https://www.lahiguera.net/musicalia/artistas/michael_jackson/disco/7353/michael_jackson_off_the_wall-portada.jpg"},
    {id:3, idArtist:2, title: "A Night at the Opera",date:"21 de noviembre de 1975",ventas:"3 millones de copias", coverUrl: "https://m.media-amazon.com/images/I/51h786SuyIL._AC_.jpg"},
    {id:4, idArtist:2, title: "Greatest Hits",date:"3 de noviembre de 1981",ventas:"50 millones de copias", coverUrl: "https://www.eluniverso.com/resizer/Px6_Rnqu3umXb2VXVhN2-T1_-Ew=/466x460/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/UBLWBLG36JD3NLK2MNUG3WEUAE.jpg"},
    {id:5, idArtist:3, title: "Elvis' Christmas Album",date:"1 de noviembre de 1970",ventas:"10.00x multi platino", coverUrl: "https://i.discogs.com/3KPmYqasLx4CMbE_I_At70_dYRIAQO1KHv2dWPz3qJ4/rs:fit/g:sm/q:90/h:500/w:500/czM6Ly9kaXNjb2dz/LWltYWdlcy9SLTg0/Nzk3OTItMTQ2MjQz/NjkxOC01NzI4Lmpw/ZWc.jpeg"},
    {id:6, idArtist:3, title: "I Got Lucky",date:"1 de enero de 1971",ventas:"disco de platino", coverUrl: "https://i.ebayimg.com/images/g/7~IAAOSwlshesDkH/s-l1600.jpg"},

    {id:7, idArtist:4, title: "Are You Experienced",date:"12 de mayo de 1967",ventas:"9 millones de copias", coverUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Are_You_Experienced_-_US_cover-edit.jpg/600px-Are_You_Experienced_-_US_cover-edit.jpg"},
    {id:8, idArtist:4, title: "Electric Ladyland",date:"25 de octubre de 1968",ventas:"8 millones de copias", coverUrl: "https://i.etsystatic.com/15564183/r/il/782669/2109335951/il_fullxfull.2109335951_8tkd.jpg"},
    {id:9, idArtist:5, title: "Blackstar",date:"8 de enero de 2016",ventas:"3 millones de copias", coverUrl: "https://lasoga.org/wp-content/uploads/2016/01/Blackstar-Vinyl-Cover-1024x1024.jpg"},
    {id:10, idArtist:5, title: "Best of Bowie",date:"22 de octubre de 2002",ventas:"582,704 de copias en vinilos", coverUrl: "https://img.discogs.com/zsP3gVDKoAfD_HyrxxZReuRTXF8=/fit-in/540x540/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-12374045-1533972156-2388.jpeg.jpg"},
    {id:11, idArtist:6, title: "Double Fantasy",date:"17 de noviembre de 1980",ventas:"10 millones de copias", coverUrl: "https://indierocks.b-cdn.net/wp-content/uploads/2020/11/Double-Fantasy-2020.jpg"},
    {id:12, idArtist:6, title: "Imagine",date:"9 de septiembre de 1971",ventas:"8 millones de copias", coverUrl: "https://arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/IOBO3LOKRVAZ3LJLWFDXRKA2XA.jpg"},
  
    {id:13, idArtist:7, title: "Band on the run",date:"7 de diciembre de 1973",ventas:"8.63 millones de copias", coverUrl: "https://thebeatlespy.files.wordpress.com/2011/12/band-on-the-run.jpg"},
    {id:14, idArtist:7, title: "McCartney",date:"17 de abril de 1970",ventas:"4.31 millones de copias", coverUrl: "https://thebeatlespy.files.wordpress.com/2011/04/mccartney-contraportada.jpg?w=355&h=355"},
    
    {id:13, idArtist:8, title: "Blizzard of Ozz",date:"20 de septiembre de 1980 ",ventas:"7.37 millones de copias", coverUrl: "https://m.media-amazon.com/images/I/51Usum9KA6L._AC_SX425_.jpg"},
    {id:14, idArtist:8, title: "diary of a madman",date:"7 de noviembre de 1981 ",ventas:"5.65 millones de copias", coverUrl: "https://upload.wikimedia.org/wikipedia/en/4/44/Ozzy_Osbourne_Diary_of_a_Madman.jpg"},
    
  ];
  public albums:Album[]=[];

  constructor(private readonly activatedRoute:ActivatedRoute) {
    activatedRoute.queryParams.subscribe(
      params=>{
        let idArtist = params['idArtist'];
        if(idArtist){
          this.albums=[...this.allAlbums.filter(clip=>clip.idArtist==idArtist)];
        }else{
          this.albums=[...this.allAlbums];
        }
      }
    )
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Artist } from '../models/Artist';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {

  public title='Artistas';
  public artists: Artist[] = [
    {id:1, fullName:'Michael Jackson', dateOfBirth: new Date(1985,7,28), photoUrl: "https://www.hola.com/imagenes/biografias/michael-jackson/79629-jackson10.jpg"},
    {id:2, fullName:'Freddie Mercury', dateOfBirth: new Date(1946,8,5), photoUrl: "https://www.biografiasyvidas.com/biografia/m/fotos/mercury.jpg"},
    {id:3, fullName:'Elvis Presley', dateOfBirth: new Date(1935,0,8), photoUrl: "https://www.biografiasyvidas.com/biografia/p/fotos/presley_elvis_1.jpg"},
    {id:4, fullName:'Jimi Hendrix', dateOfBirth: new Date(1942,10,27), photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEghv4k1XXqckRB6FWCQRRh2ArO2u5xjk4Vly7h4pZtdp7ZgQINwKlFRVv1BDtQL-tL3s&usqp=CAU"},
    {id:5, fullName:'David Bowie', dateOfBirth: new Date(1947,0,8), photoUrl: "https://ychef.files.bbci.co.uk/976x549/p03f5j91.jpg"},
    {id:6, fullName:'John Lennon', dateOfBirth: new Date(1940,9,9), photoUrl: "https://cloudfront-us-east-1.images.arcpublishing.com/eluniverso/SHFJKRUPKNHLZERWR4T6P6HK7A.jpg"},
    {id:7, fullName:'Paul McCartney', dateOfBirth: new Date(1942,5,18), photoUrl: "https://www.biography.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTgxMjczMzM3MDgxNzAxNDc5/gettyimages-905846220.jpg"},
    {id:8, fullName:'Ozzy Osbourne', dateOfBirth: new Date(1948,11,3), photoUrl: "https://garajedelrock.com/wp-content/uploads/2020/08/Ozzy-Osbourne-1024x683.jpg"},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

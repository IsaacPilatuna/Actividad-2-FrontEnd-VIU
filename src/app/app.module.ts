import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AlbumsComponent } from './albums/albums.component';
import { ArtistsComponent } from './artists/artists.component';
import { VideoclipsComponent } from './videoclips/videoclips.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ArtistCardComponent } from './artists/components/artist-card/artist-card.component';
import { VideoclipCardComponent } from './videoclips/components/videoclip-card/videoclip-card.component';
import { SafeUrlPipe } from './pipes/safe-url.pipe';
import { AlbumCardComponent } from './albums/components/album-card/album-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AlbumsComponent,
    ArtistsComponent,
    VideoclipsComponent,
    HomeComponent,
    ArtistCardComponent,
    VideoclipCardComponent,
    SafeUrlPipe,
    AlbumCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

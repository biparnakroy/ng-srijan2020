import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card'

import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { EventsComponent } from './components/events/events.component';
import { WorkshopComponent } from './components/workshop/workshop.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { TeamComponent } from './components/team/team.component';
import { SponsorsComponent } from './components/sponsors/sponsors.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbarComponent,
    AboutComponent,
    EventsComponent,
    WorkshopComponent,
    GalleryComponent,
    TeamComponent,
    SponsorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

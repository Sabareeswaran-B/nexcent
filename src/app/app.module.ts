import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { OurClientsComponent } from './our-clients/our-clients.component';
import { SingleSystemCardComponent } from './single-system-card/single-system-card.component';
import { PixelgradeComponent } from './pixelgrade/pixelgrade.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { LearnFooterComponent } from './learn-footer/learn-footer.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { MarketingComponent } from './marketing/marketing.component';
import { DemoRequestComponent } from './demo-request/demo-request.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeroSectionComponent,
    OurClientsComponent,
    SingleSystemCardComponent,
    PixelgradeComponent,
    LeaderboardComponent,
    LearnFooterComponent,
    FeedbackComponent,
    MarketingComponent,
    DemoRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

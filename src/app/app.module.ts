import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MovieToItemPipe } from './video/pipe/movie-to-item.pipe';
import { AuthModule } from "./auth/auth.module";

@NgModule({
  declarations: [AppComponent,MovieToItemPipe],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, AuthModule.forRoot({
    client_id: "349681163008-vn2ihulf6ltkbfmver06aftp771057a3.apps.googleusercontent.com",
    redirect_uri: "http://localhost:8100/movies",
    response_type: "token",
    scope: "https://www.googleapis.com/auth/userinfo.profile"
  })
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, ],
  bootstrap: [AppComponent],
})
export class AppModule {}

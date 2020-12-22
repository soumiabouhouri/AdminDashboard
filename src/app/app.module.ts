import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DefaultModule} from './layouts/default/default.module';
import { AreaComponent } from './shared/widgets/area/area.component';
import { ArticlesComponent } from './modules/articles/articles.component';
@NgModule({
  declarations: [
    AppComponent,
    AreaComponent,
    ArticlesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

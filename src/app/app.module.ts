import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'

import { ROUTES } from './app.routes'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './shared/search/search.component';
import { ClientComponent } from './client/client.component';
import { BookComponent } from './book/book.component';
import { SearchServiceClient } from './client/search.service';
import { SearchServiceBook } from './book/search.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    SearchComponent,
    ClientComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    SearchServiceClient,
    SearchServiceBook
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

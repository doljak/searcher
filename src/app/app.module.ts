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
import { ClientComponent } from './client/client.component';
import { BookComponent } from './book/book.component';
import { SearchComponent } from './shared/search/search.component';
import { ResultComponent } from './shared/result/result.component';
import { SearchProgressComponent } from './shared/search-progress/search-progress.component';
import { SearchService } from './shared/search/search.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    SearchComponent,
    ClientComponent,
    BookComponent,
    ResultComponent,
    SearchProgressComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    SearchService,
    BookComponent,
    ClientComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

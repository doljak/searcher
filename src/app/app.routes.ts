import { Routes } from '@angular/router'

import { HomeComponent } from './home/home.component'
import { ClientComponent } from './client/client.component';
import { BookComponent } from './book/book.component';

const ROUTES:Routes = [
    { path:"", component:HomeComponent },
    { path:"client", component:ClientComponent },
    { path:"book", component:BookComponent }
]

export { ROUTES }

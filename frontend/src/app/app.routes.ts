import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';


export const routes: Routes = [
  {path: '', component: HomeComponent, title: 'Home',},
  {path: 'Home', redirectTo: '/'},
  {path: 'About', component: AboutComponent, title: 'About us',},
  {path: 'Contacts', component: ContactComponent, title: 'Contact us',},
];

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navigation',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  links = [
    {title:'Home', path: '/', exact: true},
    {title:'About us', path: '/about', exact: false},
    {title:'Contact us', path: '/contacts', exact: false},];
}

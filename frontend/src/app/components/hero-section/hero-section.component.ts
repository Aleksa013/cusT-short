import { Component, signal } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-hero-section',
  imports: [MatButtonModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {
  public title = signal('Your Favorite Tee, Reimagined.');
  public content = signal("Experience the perfect blend of premium comfort and personal touch. Design a shirt you'll never want to take off.");
  public textButton = signal("Get Started");
}

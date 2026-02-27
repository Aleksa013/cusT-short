import { Component } from '@angular/core';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { TestimonialsSectionComponent } from '../../components/testimonials-section/testimonials-section.component';

@Component({
  selector: 'app-home',
  imports: [HeroSectionComponent, TestimonialsSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

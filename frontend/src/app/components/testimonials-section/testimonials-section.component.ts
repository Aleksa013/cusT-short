import { Component , signal, WritableSignal } from '@angular/core';
import { TestimonialsService } from '../../services/testimonials/testimonials.service';
import { Testimonial } from '../../core/models/testimonial.model';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-testimonials-section',
  imports: [CommonModule, MatCardModule],
  templateUrl: './testimonials-section.component.html',
  styleUrl: './testimonials-section.component.scss'
})
export class TestimonialsSectionComponent {
    title = signal('Love at First Sight.');
    text = signal('Don’t just take our word for it — explore the feedback from our creative family.');
    testimonials:WritableSignal<Testimonial[] | []> = signal([]);

    constructor(private testimonialService: TestimonialsService){}

    ngOnInit() {
      this.testimonialService.getTestimonials().subscribe({
        next: (data: Testimonial[]) => {
          this.testimonials.set(data);
          console.log(this.testimonials())
        },
        error: (error) => {
          console.error(error);
        },
        complete: ()=> {
          console.log('Done');
        }
      })
    }
  }

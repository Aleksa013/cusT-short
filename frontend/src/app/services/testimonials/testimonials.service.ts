import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Testimonial } from '../../core/models/testimonial.model';
@Injectable({
  providedIn: 'root'
})
export class TestimonialsService {
  private testimonialUrl = `${environment.apiUrl}/testimonials`

  constructor(private http: HttpClient) { }

  getTestimonials(): Observable<Testimonial[]> {
    console.log(this.http.get<Testimonial[]>(this.testimonialUrl));
    return this.http.get<Testimonial[]>(this.testimonialUrl);
  }
}

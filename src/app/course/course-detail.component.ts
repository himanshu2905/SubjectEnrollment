import { Component, Input } from '@angular/core';
import { Course } from './course';
@Component({
  selector: 'cr-course-detail',
  templateUrl: './course-detail.component.html'
})
export class CourseDetailComponent{
  @Input() course:Course;
}

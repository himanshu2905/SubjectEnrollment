import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'cr-course-list-item',
  templateUrl: './course-list-item.component.html',
  styles: []
})
export class CourseListItemComponent {
  @Input()course:Course;
  @Output()selected:EventEmitter<Course> = new EventEmitter();
  @Input()active:boolean;
  
  emitEvent(){
    this.selected.emit(this.course);
  }

}

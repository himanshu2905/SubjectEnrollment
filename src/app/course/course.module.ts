import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list.component';
import { CourseDetailComponent } from './course-detail.component';
import { CourseListItemComponent } from './course-list-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    CourseListComponent
  ],
  declarations: [CourseListComponent, CourseDetailComponent, CourseListItemComponent]
})
export class CourseModule { }

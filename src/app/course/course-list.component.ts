import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'cr-course-list',
  templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit{
  courses:Array<Course> = [];
  selectedCourse:Course;
  
  ngOnInit(){
    this.courses.push(new Course(1,"Java-I","Java Programming- I","Mike",true,
    "/assets/images/java.jpg",10, 3));
    this.courses.push(new Course(2,"Java-II","Java Programming- II","Adam",true,
    "/assets/images/java2.jpg",20, 2));
    this.courses.push(new Course(3,"Servlet","Servlet Programming","Paul",true,
    "/assets/images/servlet.jpg",15, 3));
    this.courses.push(new Course(4,"JSF","JSF Programming","Mary",true,
    "/assets/images/jsf.jpg",25, 2));
    this.courses.push(new Course(5,"Spring","Spring Programming","Tom",true,
    "/assets/images/spring.jpg",20, 3));
  }

  handleSelection(value){
    this.selectedCourse = value;
  }
}

import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  title='List of Courses';
  name='Angular';
  duration=7;

  courses;

  getTitle(){
    return this.title;
  }

  constructor(service:CourseService) {
    // let service=new CourseService();
    this.courses=service.getCourses();
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-for',
  templateUrl: './directive-for.component.html',
  styleUrls: ['./directive-for.component.css']
})
export class DirectiveForComponent  {

  courses:Course[]=[
    {id:1,name:'Course #1'},
    {id:2,name:'Course #2'},
    {id:3,name:'Course #3'},
    {id:4,name:'Course #4'}
  ]  

  onAdd(){
    let course={id:5,name:'Course #5'};
    this.courses.push(course)
  }

  onRemove(course:Course){
    let index=this.courses.indexOf(course);
    this.courses.splice(index,1);
  }

}

interface Course{
  id:number,
  name:string
}

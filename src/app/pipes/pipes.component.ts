import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent  {

 course={
   title:'Angular Zero to Hero',
   rating:4.56987,
   students:10000,
   price:200.45,
   releaseDate:new Date(2020,3,4)
 }

}

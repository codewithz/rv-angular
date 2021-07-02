import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSave(event:Event){
    event.stopPropagation();
    console.log('Button Clicked',event)
  }

  onMainDivClicked(){
    console.log('Main Div Clicked')
  }

  onInternalDivClicked(){
    console.log('On Internal Div Clicked')
  }

  onKeyUp(data:any){

    console.log('Key Up Event: Enter',data);
    
  }

  onKeyUpValue(text:string){

    console.log('Key Up Event: Enter',text);
    
  }

}

import { Component, Input, OnInit, Output,EventEmitter} from '@angular/core';


@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

 @Input('isFavorite') isSelected:boolean=false;
 @Output('change') change=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    //console.log('Star Clicked')
    this.isSelected=!this.isSelected;
    this.change.emit();
  }

}

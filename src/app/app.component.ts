import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hey RapidValue';

  post={
    id:1,
    isFavorite:true
  }

  tweets={
    body:"....",
    likes:100,
    isLiked:false
  }

  onFavoriteChanged(){
    console.log('Favorite Changed')
  }
}

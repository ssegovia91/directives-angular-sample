import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  currentPage = 0;

  images = [
  {
    title:'At the Beach',
    url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
    description:'this is a beauty beach'
  },
{
  title:'At the Mountain',
  url: 'https://images.unsplash.com/photo-1505855265981-d52719d1f64e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vdW50YWlufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
  description:'this is a rocky mountain'
},
{
  title:'At the Snow',
  url: 'https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNub3d8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
  description:'this is a cold landscape'
},
{
  title:'At the Pool',
  url: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8cG9vbHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
  description:'this is a refreshing beach'
},
{
  title:'At the Beach',
  url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
},
{
title:'At the Mountain',
url: 'https://images.unsplash.com/photo-1505855265981-d52719d1f64e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vdW50YWlufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
},
{
title:'At the Snow',
url: 'https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNub3d8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
},
{
title:'At the Pool',
url: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8cG9vbHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
},
{
  title:'At the Beach',
  url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
},
{
title:'At the Mountain',
url: 'https://images.unsplash.com/photo-1505855265981-d52719d1f64e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vdW50YWlufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
},
{
title:'At the Snow',
url: 'https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNub3d8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
},
{
title:'At the Pool',
url: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8cG9vbHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
},
{
  title:'At the Beach',
  url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
},
{
title:'At the Mountain',
url: 'https://images.unsplash.com/photo-1505855265981-d52719d1f64e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vdW50YWlufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
},
{
title:'At the Snow',
url: 'https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNub3d8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
},
{
title:'At the Pool',
url: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8cG9vbHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
}];

checkWindowIndex(index: number){
  return Math.abs(this.currentPage - index) < 5;
}

}

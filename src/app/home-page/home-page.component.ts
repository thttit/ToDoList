import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  selectedTasks = [];
  categories = [
    {title: 'Work', active: true,},
    {title: 'Personal', active: false}
  ]
  constructor() { }

  ngOnInit() {
  }


  openCategory(category: { active: boolean; }){
    this.markAllCategoriesInactive();
    category.active = true;
  }

  markAllCategoriesInactive(){
    this.categories.map((category)=>{
      category.active = false;
      return category;
    });
  }

  tasksSelected(event: any){
    (console.log(event));
  }
}

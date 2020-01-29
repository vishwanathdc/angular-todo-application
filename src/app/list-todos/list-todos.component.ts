import { Component, OnInit } from '@angular/core';

export class Todo {
  constructor(
    public id : number,
    public description : string,
    public done : boolean,
    public targetDate : Date
  ){}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    new Todo(1, 'learn angular', false, new Date()),
    new Todo(2, 'learn java spring', false, new Date()),
    new Todo(3, 'learn html', true, new Date()),
    new Todo(4, 'visit India', false, new Date())
  ];
 
  constructor() { }

  ngOnInit() {
  }

}

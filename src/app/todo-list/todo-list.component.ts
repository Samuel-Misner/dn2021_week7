import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
	selector: 'app-todo-list',
	templateUrl: './todo-list.component.html',
	styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

	addMode: boolean = false;
	todos: Todo[] = [];
	newTask: string = '';

	constructor() { }

	ngOnInit(): void {
	}

	TurnOnAdd() {
		this.addMode = true;
	}
	
	SaveNew() {
		this.todos.push({ task: this.newTask, completed: false })
		this.newTask = '';
	}

	IsNothingToDo() {
		if (this.todos.length > 0) {
			for (let index: number = 0; index < this.todos.length; index++) {
				if (this.todos[index].completed == false) {
					return false;
				}
			}
		}
		return true;
	}

	RemoveFromList(todo: Todo) {
		for (let index: number = 0; index < this.todos.length; index++) {
			if (todo.task == this.todos[index].task) {
				this.todos.splice(index, 1);
				return;
			}
		}
	}
}

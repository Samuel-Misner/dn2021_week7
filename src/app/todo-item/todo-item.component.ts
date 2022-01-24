import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../todo'

@Component({
	selector: 'app-todo-item',
	templateUrl: './todo-item.component.html',
	styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

	@Input() item: Todo = { task: '', completed: false };

	@Output() removeRequest: EventEmitter<Todo> = new EventEmitter<Todo>();

	constructor() { }

	ngOnInit(): void {
	}

	SetComplete() {
		this.item.completed = true;
	}

	RemoveFromList() {
		this.removeRequest.emit(this.item)
	}
}

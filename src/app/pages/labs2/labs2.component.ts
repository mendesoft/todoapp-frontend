import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs2.component.html',
  styleUrl: './labs2.component.css'
})
export class Labs2Component {
    title = "Bienvenidos a Angular 17";

    tasks = signal([
      {
        id: 1,
        name: "Task 1"
      },
      {
        id: 2,
        name: "Task 2"
      },
      {
        id: 3,
        name: "Task 3"
      }
    ])

    name = signal('');
      keydownHandler(event: Event) {
      const input = event.target as HTMLInputElement;
      const newValue = input.value;
      this.name.set(newValue);
    }



}

import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
    wellcome ="Bienvendos!"
    tasks = signal([
      'Instalar Angular CLI',
      'Crear proyecto',
      'Crear componente',
      'Crear servicio'
    ]);
     name = signal('Juanito');
    age = 20;
    disabled = true;
    img = 'http://w3schools.com/howto/img_avatar.png';

    person = signal ({
      name:'Juanito',
      age : 19,
      avatar : 'http://w3schools.com/howto/img_avatar.png'
    })


    colorCtrl = new FormControl();
    widthCtrl = new FormControl(0,{nonNullable : true});
    nameCtrl = new FormControl(50,{
      nonNullable : true,
      validators : [
        Validators.required,
        Validators.minLength(3),
      ]

    });

    constructor(){
      this.colorCtrl.valueChanges.subscribe(color => console.log(color));

    }


    clickHandler(){
    alert('Hola');
    }

    changeHanderler(event:Event){
    const input = event.target as HTMLInputElement;
    const newValue= input.value;
    this.name.set(newValue);
  }

    keydownHanderler(event:Event){
      const input = event.target as HTMLInputElement;
      console.log(input.value)
    }

    changeAge(event:Event){
      const input = event.target as HTMLInputElement;
    const newValue= input.value;
    this.person.update(prevState => {
      return {
        ...prevState,
        age:parseInt(newValue, 10)
      }
    });
    }

    changeName(event:Event){
      const input = event.target as HTMLInputElement;
    const newValue= input.value;
    this.person.update(prevState => {
      return {
        ...prevState,
        name:newValue
      }
    });
    }

  }

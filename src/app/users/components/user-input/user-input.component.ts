import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, pipe, Subject } from 'rxjs';
import { User } from '../../model/user.interface';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styles: [
  ]
})
export class UserInputComponent implements OnInit {


  @Input() nombre: string = '';
  @Output() onEnter = new EventEmitter<string>();
  @Output() onDebounce = new EventEmitter<string>();
  @Output() onClick = new EventEmitter<string>();

  debouncer:Subject<string> = new Subject();

  termino:string='';


  constructor() { }

  reset(){
    this.termino = '';
  }

  ngOnInit(): void {
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe(valor=>{
      this.onDebounce.emit(valor)
    })
  }

  buscar(){
    this.onEnter.emit(this.termino);
  }

  click(){
    this.onClick.emit(this.nombre);
  }

  teclaPresionada(){
    this.debouncer.next(this.termino);

  }


}




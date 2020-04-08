import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {
  @Input() compteur: number;
  @Output() result: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  plus() {
    this.compteur++;
    this.result.emit(this.compteur);
  }

  minus(){
    this.compteur--;
    this.result.emit(this.compteur);
  }

}

import { Component } from '@angular/core';
import { NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgIf, NgFor, NgSwitch, NgSwitchCase],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  produtos :string[ ] = []
  menuType : string = "admin"

  constructor() {
    this.produtos = [
      "mouse",
      "teclado",
      "cabo",
      "fonte"
    ]
  }


  ngOnInit(): void {}

  adicionar(){
    this.produtos.pop()
  }

  remover(index:number) {
    this.produtos.splice(index, 1)
  }
}

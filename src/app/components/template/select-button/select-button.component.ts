import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../../../views/checkout/checkout.service';

@Component({
  selector: 'app-select-button',
  templateUrl: './select-button.component.html',
  styleUrl: './select-button.component.css'
})
export class SelectButtonComponent implements OnInit{
  disabled:boolean = false

  constructor(private checkoutService: CheckoutService){

  }

  ngOnInit(): void {

  }

  selectFilm(){
    this.disabled = true
    this.checkoutService.selectFilm()
  }

  unselectFilm(){
    this.disabled = false
    this.checkoutService.unselectFilm()
  }
}

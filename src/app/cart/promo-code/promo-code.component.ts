import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-promo-code',
  templateUrl: './promo-code.component.html',
  styleUrls: ['./promo-code.component.scss']
})
export class PromoCodeComponent implements OnInit {
  @Output() code = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  enterCode(){
    this.code.emit(25);
  }

}

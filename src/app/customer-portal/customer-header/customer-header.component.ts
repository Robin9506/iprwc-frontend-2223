import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-header',
  templateUrl: './customer-header.component.html',
  styleUrls: ['./customer-header.component.scss']
})
export class CustomerHeaderComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  navigateToProfile(){
    this.router.navigate(['profile'], {relativeTo: this.activatedRoute});
  }

  navigateToMyOrders(){
    this.router.navigate(['my-orders'], {relativeTo: this.activatedRoute});
  }

}

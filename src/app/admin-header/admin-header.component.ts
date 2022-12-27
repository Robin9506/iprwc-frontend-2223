import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  navigateToAccounts(){
    this.router.navigate(['accounts'], {relativeTo: this.activatedRoute,});
  }

  navigateToProducts(){
    this.router.navigate(['products'], {relativeTo: this.activatedRoute});
  }

  navigateToPromos(){
    this.router.navigate(['promos'], {relativeTo: this.activatedRoute});
  }
}

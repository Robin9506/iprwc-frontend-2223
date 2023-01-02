import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {

  constructor(
    private adminService: AdminService,
    private router: Router, 
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.adminService.changeEditingStatus(false);
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

  navigateToOrders(){
    this.router.navigate(['orders'], {relativeTo: this.activatedRoute});
  }
}

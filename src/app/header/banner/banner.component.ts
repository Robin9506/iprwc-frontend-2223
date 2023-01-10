import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  disclaimerText: string = "DISCLAIMER!!!: This is a project for a school subject named: IPRWC! | That means that this webshop is fake";
  bannerHidden = false;

  constructor() { }

  ngOnInit(): void {
    this.checkBannerStatus();
  }

  checkBannerStatus(){
    const bannerStatus = localStorage.getItem("bannerHidden");
    this.bannerHidden = (bannerStatus === 'true');
  }

  closeBanner(){
    this.bannerHidden = true;
    localStorage.setItem("bannerHidden", String(this.bannerHidden));
  }
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-component',
  templateUrl: './banner-component.component.html',
  styleUrls: ['./banner-component.component.css']
})
export class BannerComponentComponent implements OnInit {

  bannerTitle: string="Discover Latest Courses on Hashedin University";
  @Input()bannerName!:string;
  constructor() { }

  ngOnInit(): void {
    if (this.bannerName) {

      this.bannerTitle=this.bannerName;
    }
  }

}

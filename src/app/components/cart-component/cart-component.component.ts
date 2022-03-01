import { Component, OnDestroy, OnInit } from '@angular/core';
import { HashedinlibraryService } from 'src/app/services/hashedinlibrary.service';
import { Course } from 'src/interfaces/course';
import { ActivatedRoute, Router } from '@angular/router';

import swal from 'sweetalert2';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.css'],
})
export class CartComponentComponent implements OnInit,OnDestroy {
  title: string = 'Shopping Cart';
  CartList: Course[] = [];
  totalCartValue: number = 0;

  ActivateUi:object={
    isActiveDel:false,
    isActiveRating:false,
    isActivewishlist:true
  }
  RecommendedCartList: Course[] = [];
  subscription:any;

  constructor(private service: HashedinlibraryService,private route:Router) {}

  ngOnInit(): void {
    this.fetchCartDetails();
    this.recommendedCourses();
    this.subscription=this.service.CourseListChanged.subscribe(()=>{
      this.totalCartValue=0;
      this.fetchCartDetails();
    })
  }
  CheckoutCart() {

    this.service.clearCart();
    swal.fire(
      `<div > <p style="font-size:14px ;font-weight:bold">
    You have successfully placed your order
    </p>
  </div>`
    );
    this.route.navigateByUrl('/courses');
  }

  fetchCartDetails() {
    this.CartList = this.service.fetchCartDetails();
    this.CartList.forEach((x) => {

        this.totalCartValue +=
          x.actualPrice - (x.actualPrice * x.discount) / 100;

    });
    this.subscription=this.service.CourseListChanged.subscribe(()=>{
      this.CartList = this.service.fetchCartDetails();
      this.CartList.forEach((x) => {

          this.totalCartValue +=
            x.actualPrice - (x.actualPrice * x.discount) / 100;

      });
    })
  }
  recommendedCourses() {
    this.RecommendedCartList = this.service.recommendedCourses();
  }
  ngOnDestroy(): void {
    this.ActivateUi={
      isActiveDel:false,
      isActiveRating:false,
      isActivewishlist:false
    }
      this.subscription.unsubscribe();
  }

}

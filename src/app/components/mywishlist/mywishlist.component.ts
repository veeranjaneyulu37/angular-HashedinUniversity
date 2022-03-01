import { Component, OnInit,OnDestroy } from '@angular/core';
import { HashedinlibraryService } from 'src/app/services/hashedinlibrary.service';
import { Course } from 'src/interfaces/course';

@Component({
  selector: 'app-mywishlist',
  templateUrl: './mywishlist.component.html',
  styleUrls: ['./mywishlist.component.css']
})
export class MywishlistComponent implements OnInit,OnDestroy {


  myWishList:Course[]=[];
  myCartDetails:Course[]=[];
  subscription:any;
  ActivateUi={
    isActiveDel:true,
    isActiveRating:false,
    isActivewishlist:false
  }

  constructor(private service:HashedinlibraryService) { }

  ngOnInit(): void {
    this.getWishListItems();
    this.getCartItems();
  }

  getCartItems(){
   this.myCartDetails= this.service.fetchCartDetails();
   this.subscription=this.service.CourseListChanged.subscribe(()=>{
    this.myCartDetails= this.service.fetchCartDetails();
   })
  }
  getWishListItems(){
    this.myWishList=this.service.getWishlistedCourse();
    this.subscription=this.service.CourseListChanged.subscribe(()=>{
      this.myWishList=this.service.getWishlistedCourse();
     })
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

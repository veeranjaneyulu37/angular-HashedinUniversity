import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { HashedinlibraryService } from 'src/app/services/hashedinlibrary.service';
import { Course } from '../../../interfaces/course';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.css'],
})
export class CardComponentComponent implements OnInit, OnDestroy {
  p: number = 1;
  courses_list: Course[] = [];
  CartList: Course[] = [];
  isSelected = false;
  isCartList: boolean = false;
  isCartRating: boolean = false;
  ActivateDelbox: boolean = false;

  constructor(private service: HashedinlibraryService,private route:Router) {}
  @Input() courses: Course[] = [];
  @Input() cartArray: Course[] = [];
  @Input() UI: any;
  @Input() searchTerm!:string;
  subscription: any;


  ngOnInit(): void {
    console.log(typeof( this.UI))
    this.ActivateDelbox = this.UI.isActiveDel;
    this.isCartRating = this.UI.isActiveRating;
    this.isCartList = this.UI.isActivewishlist;
    if (this.cartArray.length === 0) {
      this.courses_list = this.courses;
    } else {
      this.courses_list = this.cartArray;
    }
    this.subscription = this.service.CourseListChanged.subscribe(() => {
      this.courses_list = this.service.getAllCourses();
    });

      this.subscription = this.service.wishListSub.subscribe(() => {
        this.courses_list = this.service.getWishlistedCourse();
      });


    if (this.isCartList===true) {
    this.subscription=this.service.CourseListChanged.subscribe(()=>{
      this.courses_list=this.service.fetchCartDetails();
    })
  }
  }

  /******************** Cart Functions   *************************************/
  addCoursesToCart(course: Course) {
    if (this.service.findItemExistsinCart(course.title)) {
      this.service.addCoursesToCart(course);
      if (this.service.findCourseExistInWishList(course.title)) {
        this.service.deleteCourseFromWishList(course.title);
      }
      Swal.fire(
        `<div > <p style="font-size:14px ;font-weight:bold">
        Course successfully added to the cart
        </p>
        </div>`
      );
    }
    else {
      Swal.fire(
        `<div > <p style="font-size:14px ;font-weight:bold">
          Course already exists in the cart
          </p>
          </div>`
      );
    }
  }


  deleteFromCart(course: Course) {
    this.service.deleteCourseFromCart(course);

    this.courses_list = this.courses_list.filter((x) => {
      return x.title !== course.title;
    });
  }
  /******************** Cart Functions   *************************************/

  /***********  WishList Function Calls  ********************* */
  addToWishList(course: Course, delcart: boolean) {
    if (delcart) {
      // if added this from course only to wishlist
      this.service.addCoursesTowishList(course);
      //this.courses_list = this.service.getAllCourses();
    } else {
      // if added this cart to buy it for future (to wishlist)

      if (this.service.findCourseExistInWishList(course.title)) {
        Swal.fire(
          `<div > <p style="font-size:14px ;font-weight:bold">
          Course already exist in wishList
          </p>
          </div>`
        );
      }else{
        this.service.addCoursesTowishList(course);
        this.service.deleteCourseFromCart(course.title);
        Swal.fire(
          `<div > <p style="font-size:14px ;font-weight:bold">
          Course added to  wishList
          </p>
          </div>`
        );
      }

      //this.courses_list = this.service.getWishlistedCourse();
      //deleting from cart
    }
  }

  deleteFromwishList(course: Course) {
    this.service.deleteCourseFromWishList(course.title);

    Swal.fire(
      `<div > <p style="font-size:14px ;font-weight:bold">
      Course removed from wishlist
      </p>
      </div>`
    );
  }

  /***********  WishList Function Calls  ********************* */

  onNavigate(title:string){
    this.route.navigate(['/course-detailed',title])
  }

  ngOnDestroy() {
    this.courses = [];
    this.cartArray = [];
    this.isCartList = false;
    this.isCartRating = false;
    this.ActivateDelbox = false;


    this.p=1;
  }
}

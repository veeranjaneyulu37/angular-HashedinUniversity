import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HashedinlibraryService } from 'src/app/services/hashedinlibrary.service';
import { Course } from 'src/interfaces/course';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-course-detail-component',
  templateUrl: './course-detail-component.component.html',
  styleUrls: ['./course-detail-component.component.css']
})
export class CourseDetailComponentComponent implements OnInit {


  queryparam!:any;
  breadCrumTitle:any;
  randomTime:any;


    course_list:Course[]=[];
  constructor(private route:ActivatedRoute,
    private service:HashedinlibraryService,private router:Router,

    ) { }

  ngOnInit(): void {
    this.queryparam=this.route.snapshot.params;
      this.breadCrumTitle=this.queryparam.id;
      this.randomTime= Math.round( Math.random()*10);

    this.fetchDetails(this.queryparam.id)
  }

  fetchDetails(id:string){
    this.course_list=this.service.fetchCartByName(id);

  }

  addToCart(course:Course){


    if (this.service.findItemExistsinCart(course.title)) {
      Swal.fire( `<div > <p style="font-size:14px ;font-weight:bold">
      Course already exists in the cart
      </p>
      </div>`)
    }
    this.service.addCoursesToCart(course);
    Swal.fire( `<div > <p style="font-size:14px ;font-weight:bold">
    Course added to cart
    </p>
    </div>`)
  }
  addToWishList(course:Course){
      this.service.addCoursesTowishList(course)
      Swal.fire( `<div > <p style="font-size:14px ;font-weight:bold">
    Course added to wishlist
    </p>
    </div>`)
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { HashedinlibraryService } from 'src/app/services/hashedinlibrary.service';
import { Course } from 'src/interfaces/course';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recommended-list',
  templateUrl: './recommended-list.component.html',
  styleUrls: ['./recommended-list.component.css']
})
export class RecommendedListComponent implements OnInit {

  recommendedListArray:Course[]=[];
  p:number=1;
  @Input() recoList:Course[]=[];
  constructor(private service:HashedinlibraryService) { }

  ngOnInit(): void {
    this.recommendedListArray=this.recoList;
  }


  addCoursesToCart(cart:any){
    if(this.service.findItemExistsinCart(cart.title)){

      this.service.addCoursesToCart(cart);
      Swal.fire(
        `<div > <p style="font-size:14px ;font-weight:bold">
        Course successfully added to the cart
        </p>
        </div>`
      )
    }else{
        Swal.fire(
          `<div > <p style="font-size:14px ;font-weight:bold">
          Course already exists in the cart
          </p>
          </div>`
        )
    }
  }

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { HashedinlibraryService } from 'src/app/services/hashedinlibrary.service';
import {Course } from '../../../interfaces/course';

@Component({
  selector: 'app-courses-component',
  templateUrl: './courses-component.component.html',
  styleUrls: ['./courses-component.component.css']
})
export class CoursesComponentComponent implements OnInit,OnDestroy {

  constructor( private service:HashedinlibraryService) { }
  filterOption:string='None';

  ActivateUi={
    isActiveDel:false,
    isActiveRating:true,
    isActivewishlist:false
  }
  searchText:string='';
  courseList:Course[]=[];
  initialList:Course[]=[];
  ngOnInit(): void {

    this.getAllCourses();
  }


  filterCoursebyPrice(){
    if (this.filterOption==='None') {
      this.courseList= this.initialList;
    }
    else if(this.filterOption==='lowThigh'){

      this.courseList.sort((x,y)=>{
        return x.PriceOrder-y.PriceOrder
      })
    }
    else{
      this.courseList.sort((x,y)=>{
        return x.PriceOrder-y.PriceOrder
      }).reverse();
    }
  }

  getAllCourses(){
    this.initialList=this.service.getAllCourses().map(x=>{
      return {
        id:x.id,
        title:x.title,
        author:x.author,
        description:x.description,
        tags:x.tags,
        actualPrice:x.actualPrice,
        discount:x.discount,
        isWishlisted:x.isWishlisted,
        isRecommended:x.isRecommended,
        PriceOrder:x.actualPrice-(x.actualPrice*x.discount/100),
        img:x.img,
        video:x.video
      }
    })
    this.courseList = this.initialList.slice();


  }

  ngOnDestroy(): void {
    this.ActivateUi={
      isActiveDel:false,
      isActiveRating:false,
      isActivewishlist:false
    }
  }



}

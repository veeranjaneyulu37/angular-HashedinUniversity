import { Injectable } from '@angular/core';
import { Course } from '../../interfaces/course';
import { Observable, Subject } from 'rxjs';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class HashedinlibraryService {
  private Cart: Course[] = [];
  private RecommendedCart: Course[] = [];
  private Whislisted_Courses: Course[] = [];
  CourseListChanged=new Subject<void>();
  wishListSub=new Subject<void>();
  private Courses_list: Course[] = [
    {
      id: '1',
      title: 'Angular Step by Step for beginners',
      author: 'Hashedin University',
      description: `
                    This course teaches
                    Angular from basic to advanced concepts of Angular in depth`,
      tags: ['Beginner', 'Frontend'],
      actualPrice: 1560,
      discount: 30,
      isWishlisted: false,
      isRecommended: false,
      PriceOrder:0,
      img:'assets/Angular.jpg',
      video:'https://www.youtube.com/embed/Ata9cSC2WpM'

    },
    {
      id: '2',
      title: 'The Angular Essentials (Angular 7+ with TypeScript)',
      author: 'John Max',
      description: `
                    This course teaches
                    Angular from basic to advanced concepts of Angular for a quick review of the concepts`,
      tags: ['Beginner ', 'Frontend'],
      actualPrice: 660,
      discount: 10,
      isWishlisted: false,
      isRecommended: true,
      PriceOrder:0,
      img:'assets/angular-features.jpg',
      video:'https://www.youtube.com/embed/Ata9cSC2WpM'
    },
    {
      id: '3',
      title: 'Machine Learning A-z Hands-On Python & R in Datascience',
      author: 'Hashedin University',
      description: `
        Learn to create Machine Learning Algorithms in Python and R
        from two Data Science experts. Code templates included.`,
      tags: ['Beginner'],
      actualPrice: 5060,
      discount: 30,
      isWishlisted: true,
      isRecommended: true,
      PriceOrder:0,
      img:'assets/Machine-Learning.jpeg',
      video:'https://www.youtube.com/embed/KNAWp2S3w94'
    },
    {
      id: '4',
      title: 'The Complete 2021 Flutter Development Bootcamp with Dart',
      author: 'Angela',
      description: `
                Officially created in collaboration with the Google Flutter team.`,
      tags: ['Beginner', 'Frontend'],
      actualPrice: 2600,
      discount: 10,
      isWishlisted: false,
      isRecommended: true,
      PriceOrder:0,
      img:'assets/flutter.jpg',
      video:'https://www.youtube.com/embed/fq4N0hgOWzU'
    },
    {
      id: '5',
      title: 'React Front To Back 2022',
      author: 'Brad',
      description: `
        Learn modern React by building 4 projects
        including a Firebase 9 app and a full stack MERN app`,
      tags: ['Beginner', 'Frontend'],
      actualPrice: 1600,
      discount: 0,
      isWishlisted: false,
      isRecommended: true,
      PriceOrder:0,
      img:'assets/React.jpg',
      video:'https://www.youtube.com/embed/Tn6-PIqc4UM'
    },
    {
      id: '6',
      title: 'Selenium Webdriver with PYTHON from Scratch + Frameworks',
      author: 'Rahul Shetty',
      description: `
                    BRAND NEW COURSE- Learn Python Programming & Selenium
                    Python Automation from Basics to Advanced  + 5 LIVE Project`,
      tags: ['Beginner', 'Frontend'],
      actualPrice: 460,
      discount: 0,
      isWishlisted: false,
      isRecommended: false,
      PriceOrder:0,
      img:'assets/Selenium.jpg',
      video:'https://www.youtube.com/embed/j7VZsCCnptM'
    },
    {
      id: '7',
      title: 'Build Responsive Real-World Websites with HTML and CSS',
      author: 'Mosh',
      description: `
        Learn modern HTML5, CSS3 and web design by building a stunning
        website for your portfolio! Includes flexbox and CSS Grid`,
      tags: ['All ', 'Frontend'],
      actualPrice: 360,
      discount: 0,
      isWishlisted: false,
      isRecommended: false,
      PriceOrder:0,
      img:'assets/html.jpg',
      video:'https://www.youtube.com/embed/BvJYXl2ywUE'
    },
    {
      id: '8',
      title: 'The Complete React guide-2022',
      author: 'Hashedin university',
      description: `
        Learn modern React by building 4 projects
        including a Firebase 9 app and a full stack MERN app`,
      tags: ['Advanced ', 'Frontend'],
      actualPrice: 6000,
      discount: 15,
      isWishlisted: false,
      isRecommended: true,
      PriceOrder:0,
      img:'assets/React.jpg',
      video:'https://www.youtube.com/embed/Tn6-PIqc4UM',
    },
    {
      id: '9',
      title: 'Salesforce Developer Training with real-time project',
      author: 'Deepika Khanna',
      description: `
        Salesforce Development: Learn apex, Visualforce and REST Webservices with this real-time project`,
      tags: ['Beginners ', 'Advanced '],
      actualPrice: 1200,
      discount: 10,
      isWishlisted: false,
      isRecommended: false,
      PriceOrder:0,
      img:'assets/salesforce.jpg',
      video:'https://www.youtube.com/embed/A7AEc-B2PKQ'
    },
  ];

  constructor(private http:HttpClient) {}

  /*****************Dashboard functions ******* */

  getAllCourses() {
    return this.Courses_list.slice();
  }

  fetchCartByName(title:any){
    return this.Courses_list.filter((x)=>{
      return x.title===title;
    })
  }
  /*****************Dashboard functions ******* */

  /*****************wishListed functions ******* */
  getWishlistedCourse() {
    let arr= this.Courses_list.filter((x) => {
      return x.isWishlisted === true;
    });
    this.Whislisted_Courses=arr;
    return this.Whislisted_Courses;
    this.wishListSub.next();

  }
  addCoursesTowishList(course: Course) {



    let pos=this.Courses_list.findIndex(x=>{
      return x.title===course.title
    })
    this.Courses_list[pos].isWishlisted=true;


    this.wishListSub.next();
    this.CourseListChanged.next();
  }

  deleteCourseFromWishList(title: any) {
    let pos = this.Courses_list.findIndex((x) => {
      return x.title === title;
    });
    this.Courses_list[pos].isWishlisted = false;
    //this.getWishlistedCourse();

    this.wishListSub.next();
  }

    findCourseExistInWishList(title:any){
      let pos= this.Whislisted_Courses.findIndex(x=>{
        return x.title===title;
      })
      if (pos>=0) {
        return true;
      }
      else{

         return false;
      }
    }

  /*****************wishListed functions ends ******* */
  /*****************Cart functions ******* */

  addCoursesToCart(course: any) {
    this.Cart.push(course);
    this.CourseListChanged.next();
  }
  fetchCartDetails() {
    return this.Cart.slice();
    this.CourseListChanged.next();
  }

  deleteCourseFromCart(title: any) {
    let pos = this.Cart.findIndex((x) => {
      return x.title === title;
    });

    this.Cart.splice(pos,1);
    this.CourseListChanged.next();
  }

    clearCart(){
      this.Cart=[];
      this.CourseListChanged.next();
    }
  findItemExistsinCart(title: any) {
    const arrIndex = this.Cart.findIndex((x) => {
      return x.title === title;
    });
    if (arrIndex!==-1) {
      return false;
    }
    else{

      return true;
    }
  }
  /*****************Cart functions ends ******* */
  /*****************Recommended functions  ******* */
  recommendedCourses() {
    this.RecommendedCart = this.Courses_list.filter((x) => {
      return x.isRecommended === true;
    });
    return this.RecommendedCart;
  }
  /*****************Recommended functions ends ******* */
}



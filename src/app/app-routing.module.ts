import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponentComponent } from './components/cart-component/cart-component.component';
import { CourseDetailComponentComponent } from './components/course-detail-component/course-detail-component.component';
import { CoursesComponentComponent } from './components/courses-component/courses-component.component';
import { MywishlistComponent } from './components/mywishlist/mywishlist.component';
import { ProfileComponentComponent } from './components/profile-component/profile-component.component';

const routes: Routes = [
  {path:'',component:CoursesComponentComponent},
  {path:'courses',component:CoursesComponentComponent,children:[]},
  {path:'course-detailed/:id',component:CourseDetailComponentComponent},
  {path:'profile',component:ProfileComponentComponent},
  {path:'wishlist',component:MywishlistComponent},
  {path:'cart',component:CartComponentComponent},
  {path:'**', component:CoursesComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

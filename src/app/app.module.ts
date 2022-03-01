import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule} from 'ng2-search-filter';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { BannerComponentComponent } from './components/banner-component/banner-component.component';
import { ProfileComponentComponent } from './components/profile-component/profile-component.component';
import { CourseDetailComponentComponent } from './components/course-detail-component/course-detail-component.component';
import { CartComponentComponent } from './components/cart-component/cart-component.component';
import { CoursesComponentComponent } from './components/courses-component/courses-component.component';
import { SideCardComponentComponent } from './components/side-card-component/side-card-component.component';
import { CardComponentComponent } from './components/card-component/card-component.component';
import { MywishlistComponent } from './components/mywishlist/mywishlist.component';
import { RecommendedListComponent } from './components/recommended-list/recommended-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    BannerComponentComponent,
    ProfileComponentComponent,
    CourseDetailComponentComponent,
    CartComponentComponent,
    CoursesComponentComponent,
    SideCardComponentComponent,
    CardComponentComponent,
    MywishlistComponent,
    RecommendedListComponent
  ],
  imports: [
    BrowserModule,
    Ng2SearchPipeModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

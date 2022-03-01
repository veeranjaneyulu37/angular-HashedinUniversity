import { Component, Input, OnInit ,OnDestroy} from '@angular/core';
import { HashedinlibraryService } from 'src/app/services/hashedinlibrary.service';
import { Course } from 'src/interfaces/course';

@Component({
  selector: 'app-side-card-component',
  templateUrl: './side-card-component.component.html',
  styleUrls: ['./side-card-component.component.css'],
})
export class SideCardComponentComponent implements OnInit,OnDestroy {
  constructor(private service: HashedinlibraryService) {}
  totalCartValue: number = 0;
  cartArray: Course[] = [];
  @Input() cartDetails: Course[] = [];
  subscription: any;

  ngOnInit(): void {
    this.cartArray = this.cartDetails;

    this.fetchCart();
  }

  fetchCart() {
    this.cartArray = this.service.fetchCartDetails();
    if (this.totalCartValue===0) {
      this.calTotalAmount();
    }
    this.subscription = this.service.CourseListChanged.subscribe(() => {
      this.cartArray = this.service.fetchCartDetails();
      this.totalCartValue=0;
      this.calTotalAmount();

    });

  }
  calTotalAmount() {
    this.cartArray.forEach((x) => {
      this.totalCartValue += x.actualPrice - (x.actualPrice * x.discount) / 100;
    });
  }
  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
}

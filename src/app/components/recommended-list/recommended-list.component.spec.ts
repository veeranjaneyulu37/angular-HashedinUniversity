import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedListComponent } from './recommended-list.component';

describe('RecommendedListComponent', () => {
  let component: RecommendedListComponent;
  let fixture: ComponentFixture<RecommendedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommendedListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

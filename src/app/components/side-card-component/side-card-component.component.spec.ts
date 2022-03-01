import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideCardComponentComponent } from './side-card-component.component';

describe('SideCardComponentComponent', () => {
  let component: SideCardComponentComponent;
  let fixture: ComponentFixture<SideCardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideCardComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

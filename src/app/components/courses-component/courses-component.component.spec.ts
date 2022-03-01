import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { of } from 'rxjs';
import { HashedinlibraryService } from '../../services/hashedinlibrary.service';
import { CoursesComponentComponent } from './courses-component.component';

describe('CoursesComponentComponent', () => {
  let component: CoursesComponentComponent;
  let fixture: ComponentFixture<CoursesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesComponentComponent ],
      providers:[HashedinlibraryService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call ngOnInit',()=>{
    const spy_getPostDetails= spyOn(component,"getAllCourses").and.returnValue();
    component.ngOnInit();
    expect(component.courseList).toEqual([]);
  })

  it('should call getAllCourses and get response as empty array',fakeAsync(()=>{
    const service=fixture.debugElement.injector.get(HashedinlibraryService);
    let spy_getCourses=spyOn(service,"getAllCourses").and.callFake(()=>{
      return []
    });
    component.getAllCourses();
    expect(component.getAllCourses).toEqual([]);
  }))

});

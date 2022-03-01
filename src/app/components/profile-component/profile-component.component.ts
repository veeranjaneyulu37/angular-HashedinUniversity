import { OnInit,Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray,FormControl } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile-component',
  templateUrl: './profile-component.component.html',
  styleUrls: ['./profile-component.component.css'],
})
export class ProfileComponentComponent implements OnInit {
  userform:FormGroup;
  isShowExperience:boolean=true;
  InterestAreas:any[]=[];


  constructor(private fb: FormBuilder) {

    let areaInterests:FormGroup[]=this.dummy_profile[0].AreaofInterest.map((x:any)=>{
      return this.fb.group({
        area:x.title,
        isSelected:x.isInterested

      });

    });
     let Profession:FormGroup[]=this.dummy_profile[0].StudentList.map((x:any)=>{
        return this.fb.group({
          area:x.title,
            isSelected:x.isInterested
        });
     });

    this.userform=this.fb.group ({
      DisplayName:new FormControl('veeranjaneyulu',Validators.required),
      FirstName:new FormControl('veeranjaneyulu',Validators.required),
      LastName:new FormControl('Juturu',Validators.required),
      About:new FormControl('.Net FullStack Developer with Angular and React',[Validators.maxLength(50)]),
      AreaInterested:this.fb.array(areaInterests),
      isProfessional:new FormControl('Proffesional'),
      expRadio:new FormControl('0-5'),
      expertiseAreaRadio:new FormControl('Angular'),
      roleRadio:new FormControl('Full stack'),


    });
  }
  getControls() {
    return (this.userform.get('AreaInterested') as FormArray).controls;
  }


  ngOnInit() {


  }
  onCheckIsStudent(title:string,e:any){
    if (title==='Proffesional') {
      this.isShowExperience=true;
    }
    else{

      this.isShowExperience=false;
    }
  }

  onCheckInterestArea(area:string,e:any){

    console.log((this.userform.get('AreaInterested') as FormArray).getRawValue());


  }


 OnProfileSave(){
    Swal.fire(`

      <div>
        <p style="font-size:14px;text-align:center; font-weight:bold">
         Your Profile saved successfully</p>
      </div>

    `)

  console.log(this.userform.value)
  }

  dummy_profile: any = [
    {
      displayName: 'veeranjaneyulu',
      FirstName: 'veeranjaneyulu',
      LastName: 'Juturu',
      About: `Full stack developer`,
      AreaofInterest: [
        { title: 'Developer', isInterested: true },
        { title: 'Designer', isInterested: false },
        { title: 'Project Manager', isInterested: false },
        { title: 'Sales', isInterested: false },
      ],
      StudentList: [
        { title: 'Student', value: 'Student',controlName:'isProfessional' },
        { title: 'Proffesional', value: 'Proffesional',controlName:'isProfessional' },
      ],
      Experience: [
        {
          question: 'How much of experience you have?',
          options: [
            { name: '0-5', value: '0-5'  },
            { name: '5-10', value: '5-10' },
            { name: '10 & above', value: '10 & above' },
          ],
          controlName:'expRadio'
        },
        {
          question: 'What is your expertise?',
          options: [
            { name: 'ML', value: 'ML' },
            { name: 'React', value: 'React' },
            { name: 'Angular', value: 'Angular' },
          ],
          controlName:'expertiseAreaRadio'
        },
        {
          question: 'Mention your Role',
          options: [
            { name: 'Backend Developer', value: 'Backend Developer' },
            { name: 'Full stack', value: 'Full stack' },
            { name: 'Frontend', value: 'Frontend' },
          ],
          controlName:'roleRadio'
        },
      ],
    },
  ];


}

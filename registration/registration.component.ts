import { Component, OnInit, ViewChild} from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { MastersService } from '../services/masters.service';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  @ViewChild('fileInput') fileInput;
  @ViewChild('content') content;
  minDate = {year: 1945, month: 1, day: 1};
  maxDate = {year: 1999, month: 12, day: 1};
  registrationForm: FormGroup;
  basicForm: FormGroup;
  educationForm: FormGroup;
  spritualForm: FormGroup;
  personalForm: FormGroup;
  partnerForm: FormGroup;
  mobileOtpForm: FormGroup;
  step_1 = true;
  step_2 = false;
  step_3 = false;
  step_4 = false;
  step_5 = false;
  marital_status;
  age;
  mother_tongues;
  religions;
  education_level;
  annual_income;
  work_withs;
  community;
  skin_tone;
  diet;
  body_type;
  create_for;
  countrys;
  heights;
  Profession;
  states;
  cities;
  selectedValue : {};
  partnerState;
  basic;
  education;
  spritual;
  personal;
  partner;
  member_id: number;
  Body;
  profile_pic;
  saveSuccess: boolean;
  errorMessage: string;
  imagePath: string;
  checkImage:boolean = false;
  pictureName;
  checkEmail: boolean = false;
  submit_form: boolean = false;
  EmailMessage;
  show_loader: boolean = false;
  saveOtp: boolean;
  otpMessage: string;
  errorOtp: boolean;
  showpopup: boolean = false;
  emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  private modalRef: NgbModalRef;
  constructor(
    private fb: FormBuilder, 
    private master: MastersService, 
    private spinnerService: Ng4LoadingSpinnerService,
    private modalService: NgbModal 
    ) { 
    this.basicForm = this.fb.group({
      name: [null, Validators.required],
      email: [null, Validators.compose([Validators.required,Validators.pattern(this.emailPattern)])],
      dob: [null, Validators.required],
      gender: [null, Validators.required],
      create_for: [null, Validators.required],
      religion: [null, Validators.required],
      mother_tongue: [null, Validators.required],
      community: [null, Validators.required],
      mobile: [null,Validators.compose([Validators.required,Validators.pattern("[0-9]*")])],
      marital_status: [null, Validators.required],
      country: [null, Validators.required],
      state: [null, Validators.required],
      city: [null, Validators.required],
      member_id: [0]
    });
    this.educationForm = this.fb.group({
      education_level: [null, Validators.required],
      education_field: [null, Validators.required],
      college_attanded: [null, Validators.required],
      working_with: [null, Validators.required],
      designation: [null, Validators.required],
      employer_name: [null, Validators.required],
      annual_income: [null, Validators.required],
      member_id: [0]
    });
    this.spritualForm = this.fb.group({
      chant_rounds: [null, Validators.required],
      undergone_marriage_counselling: [null, Validators.required],
      initiated: [null, Validators.required],
      initiating_spiritual_master: [null, Validators.required],
      regulative_principles: [null, Validators.required],
      active_service: [null, Validators.required],
      associated_temple: [null, Validators.required],
      menter: [null, Validators.required],
      member_id: [0]
    });
    this.personalForm = this.fb.group({
      height: [null, Validators.required],
      body_type: [null, Validators.required],
      skin_tone: [null, Validators.required],
      about: [null, Validators.required],
      disability: [null, Validators.required],
      photo: [null],
      profile_pic : [null, Validators.required],
      member_id: [0]
    });
    this.partnerForm = this.fb.group({
      partner_age_from: [null, Validators.required],
      partner_age_to: [null, Validators.required],
      partner_height_from: [null, Validators.required],
      partner_height_to: [null, Validators.required],
      partner_marital_status: [null, Validators.required],
      partner_mother_tongue: [null, Validators.required],
      partner_spiritual_master: [null, Validators.required],
      partner_spiritual_location: [null, Validators.required],
      partner_spiritual_status: [null, Validators.required],
      partner_country: [null, Validators.required],
      partner_state: [null, Validators.required],
      partner_education: [null, Validators.required],
      partner_working_with: [null, Validators.required],
      partner_professional_area: [null, Validators.required],
      partner_annual_income_from: [null, Validators.required],
      partner_annual_income_to: [null, Validators.required],
      partner_created_by: [null, Validators.required],
      partner_diet: [null, Validators.required],
      member_id: [0]
    }); 
    this.mobileOtpForm = this.fb.group({
      otp: [null, Validators.required]
    });

  }

  ngOnInit() {
    this.master.getMaritalStatus().subscribe((masters) => {
      this.marital_status = masters.marital_status;
      this.mother_tongues = masters.mother_tongues;
      this.age = masters.age;
      this.religions = masters.religions;
      this.education_level = masters.education_level;
      this.annual_income = masters.annual_income;
      this.work_withs = masters.work_withs;
      this.community = masters.community;
      this.skin_tone = masters.skin_tone;
      this.diet = masters.diet;
      this.body_type = masters.body_type;
      this.create_for = masters.create_for;
      this.heights = masters.heights;
      this.countrys = masters.countrys;
      this.Profession = masters.Profession;
    });
    this.member_id = 0;
  }

  showSteps(step){
    this.step_1 = false;
    this.step_2 = false;
    this.step_3 = false;
    this.step_4 = false;
    this.step_5 = false;
    switch(step){
      case 1:
        window.scrollTo(0, 0);
        this.step_1 = true;
        break;
      case 2:
        window.scrollTo(0, 0);
        this.step_2 = true;
        break;
      case 3:
        window.scrollTo(0, 0);
        this.step_3 = true;
        break;
      case 4:
        window.scrollTo(0, 0);
        this.step_4 = true;
        break;
      case 5:
        window.scrollTo(0, 0);
        this.step_5 = true;
        break;
    }
  }
  
  addMember(step, formData){
    this.submit_form = false;
    this.show_loader = true;
    if(step == 2){
      if(this.basicForm.valid){
        this.submit_form = true;  
      }else{
        this.validateAllFormFields(this.basicForm);
      }
    }
    if(step == 3){
      if (this.educationForm.valid){
        this.submit_form = true;  
      }else{
        this.validateAllFormFields(this.educationForm);
      }
    }
    if(step == 4){
      if (this.spritualForm.valid){
        this.submit_form = true;  
      }else{
        this.validateAllFormFields(this.spritualForm);
      }
    }
    if(step == 5){
      if (this.personalForm.valid){
        this.submit_form = true;  
      }else{
        this.validateAllFormFields(this.personalForm);
      }
    }
    if(step == 0){
      if (this.partnerForm.valid){
        this.submit_form = true;  
      }else{
        this.validateAllFormFields(this.partnerForm);
      }
    }
    if(this.submit_form){
      formData.current_step = (step) ? (parseInt(step)-1) : 5;
      if(step){
        if(step == 2 && this.showpopup == true){
          this.clickMobileOtp(this.content);
        }else{
          this.showSteps(step);
        }
      }else{
        window.scrollTo(0, 0);
        this.showSteps(1);
      }
      this.master.insertData(JSON.stringify(formData)).subscribe((allData) => {
        if(allData.error == 1){
          this.checkEmail = true;
          this.EmailMessage = allData.message; 
          this.showSteps(1);
          this.step_2 = false;
          window.scrollTo(0, 0);
          setTimeout(() => {
            this.checkEmail = false;
          }, 5000);
        }else{
          this.checkEmail = false;
        }
        this.member_id = allData.id;  
        if(allData.error == 0){
          this.partnerForm.reset();
          this.personalForm.reset();
          this.spritualForm.reset();
          this.educationForm.reset();
          this.basicForm.reset();
          if (allData.message){
              this.saveSuccess = true;
              setTimeout(() => {
                this.saveSuccess = false;
              }, 5000);
              window.scrollTo(0, 0);
          }
          else{
              this.saveSuccess = false;
          }
        }
        this.show_loader = false;
      });
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      control.markAsTouched();
    });
    this.show_loader = false;
  }

  upload() {
    let fileBrowser = this.fileInput.nativeElement;
    if (fileBrowser.files && fileBrowser.files[0]) {
      this.show_loader = true;
      var data = fileBrowser.files[0];
      var dataname = data.name;
      let body:FormData = new FormData();
      body.append('uploadFile', data, dataname);
      this.master.UploadPic(body).subscribe((image) => {
        if(image.error == 1){
          this.errorMessage = image.message;
          this.imagePath = '';
          this.checkImage = false; 
        }else{
        this.personalForm.controls['profile_pic'].setValue(image.profile_pic);
          this.checkImage = true;
          this.imagePath = image.image_path;    
          this.errorMessage = '';
        }
        this.show_loader = false;
      });
    }
  }
  getState(country){
    this.show_loader = true;
    this.master.getState(country).subscribe((states) => {
      this.states = states.states;
      this.show_loader = false;
    });
  }
  getCity(state){
    this.show_loader = true;
    this.master.getCity(this.selectedValue,state).subscribe((city) =>{
      this.cities = city.cities;
      this.show_loader = false;
    });
  }
  getParterState(country){
    this.show_loader = true;
    this.master.getState(country).subscribe((partnerState) => {
      this.partnerState = partnerState.states;
      this.show_loader = false;
    });
  }

  sendOtp(value){
    if(this.basicForm.get('mobile').valid){
      this.show_loader = true;
      var mobile = { "mobile": value};
      this.master.sendOtp(JSON.stringify(mobile)).subscribe((otp) => {
        if(otp.error == 1){
          localStorage.setItem("register_otp", otp.register_otp);
          this.saveOtp = true;
          this.otpMessage = otp.message; 
          this.showpopup = true;
        }
        else if(otp.error == 0){
          this.checkEmail = true;
          this.EmailMessage = otp.message;
          window.scrollTo(0, 0);
          setTimeout(() => {
            this.checkEmail = false;
          }, 5000);
        }
        else{
          this.saveOtp = false;
        }
        this.show_loader = false;
      });
    }
  }


  clickMobileOtp(content) {
    this.onCancel();
    this.modalRef = this.modalService.open(content);
  }

  mobileOtpSubmit(formData) {
    if (this.mobileOtpForm.valid) {  
      var reg_otp = localStorage.getItem("register_otp");
      var testarr:any = {
        '0': 0,
        'B': 1,
        'g': 2,
        'A': 3,
        '#': 4,
        'i': 5,
        'K': 6,
        'H': 7,
        'S': 8,
        '@': 9
      };
      var reg_otp_arr = reg_otp.split('');
      var temp: string = '';
      reg_otp_arr.forEach(field => {
        temp += testarr[field];
      });
      if(temp == formData.otp){
        this.modalRef.close();
        this.showSteps(2);
        this.showpopup = false;
      }else{
        this.showpopup = true;
        this.saveOtp = false;  
        this.errorOtp = true;
        setTimeout(() => {
          this.errorOtp = false;
        }, 5000);
      }
    }else{
      this.validateAllFormFields(this.mobileOtpForm);
    }
  }

  onCancel() {
    this.mobileOtpForm.reset();
  }
}

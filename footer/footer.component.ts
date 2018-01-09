import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';
import { MastersService } from '../services/masters.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  saveSuccess: boolean = false;
  saveFailure: boolean = false;
  signUpMessage: string = '';
  signupForm: FormGroup;
  show_loader: boolean = false;
  emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  constructor(private fb: FormBuilder, private master:MastersService, private spinnerService: Ng4LoadingSpinnerService) { 
    this.signupForm = this.fb.group({
      name: [null, Validators.required],
      email: [null, 
        Validators.compose([
          Validators.required,
          Validators.pattern(this.emailPattern)
        ])
      ],
      phone: [null, 
        Validators.compose([
          Validators.required,
          Validators.pattern("[0-9]*"),
        ])
      ]
    });
  }

  ngOnInit() {
  }

  signUp(formData){
    if(this.signupForm.valid){
      this.show_loader = true;
      this.master.emailSignup(JSON.stringify(formData)).subscribe((response) => {
        this.saveSuccess = false;
        this.saveFailure = false;
        this.signUpMessage = response.message;
        setTimeout(() => {
          this.saveSuccess = false;
        }, 3000);
        if(response.status == 1){
          this.saveSuccess = true;
        }else{
          this.saveFailure = true;
        }
        this.signupForm.reset();
        this.show_loader = false;
      });
    }else{
      Object.keys(this.signupForm.controls).forEach(field => {
        const control = this.signupForm.get(field);
        control.markAsTouched({ onlySelf: true });
      });
    }
  }

}

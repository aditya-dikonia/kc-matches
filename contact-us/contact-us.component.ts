import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { MastersService } from '../services/masters.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  saveSuccess: boolean = false;
  saveFailure: boolean = false;
  contactMessage: string = '';
  contactForm: FormGroup;
  show_loader: boolean = false;
  emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  constructor(private fb: FormBuilder, private master:MastersService, private spinnerService: Ng4LoadingSpinnerService) { 
    this.contactForm = this.fb.group({
      name: [null, Validators.required],
      email: [null, 
        Validators.compose([
          Validators.required,
          Validators.pattern(this.emailPattern)
        ])
      ],
      message: [null, 
        Validators.compose([
          Validators.required,
        ])
      ]
    });
  }

  ngOnInit() {
  }

  addContact(formData){
    if(this.contactForm.valid){
      this.show_loader = true;
      this.master.addContactUs(JSON.stringify(formData)).subscribe((response) => {
        this.saveSuccess = false;
        this.saveFailure = false;
        this.contactMessage = response.message;
        setTimeout(() => {
          this.saveSuccess = false;
        }, 3000);
        if(response.status == 1){
          this.saveSuccess = true;
        }else{
          this.saveFailure = true;
        }
        this.contactForm.reset();
        this.show_loader = false;
        window.scrollTo(0, 0);
      });
    }else{
      Object.keys(this.contactForm.controls).forEach(field => {
        const control = this.contactForm.get(field);
        control.markAsTouched({ onlySelf: true });
      });
    }
  }

}

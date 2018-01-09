import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

const serviceUrl = "http://103.72.171.51:4127/krishnaconsciousmatches/dev/api/";
//const serviceUrl = "http://kcmatches.com/admin/api/";
@Injectable()
export class MastersService {

  constructor(public http: Http) { }
  getMaritalStatus(){
    return this.http.get(serviceUrl+'get_select_data')
      .map(res => res.json());
  }

  getState(country){
    return this.http.get(serviceUrl+'get_state/'+country)
      .map(res => res.json());
  }
  getCity(cnt_code,state){
    return this.http.get(serviceUrl+'get_city/'+cnt_code +'/'+state)
      .map(res => res.json());
  }
  insertData(body){
    return this.http.post(serviceUrl+'insert_member',body)
      .map(res => res.json());
  }
  UploadPic(body){
    return this.http.post(serviceUrl+'image_upload',body)
      .map(res => res.json());
  }

  emailSignup(formData){
    return this.http.post(serviceUrl+'email_signup', formData)
      .map(response => response.json());
  }
  addContactUs(formData){
    return this.http.post(serviceUrl+'contact_us', formData)
      .map(response => response.json());
  }
  
  sendOtp(formData){
    return this.http.post(serviceUrl+'send_otp', formData)
      .map(response => response.json());
  }
}

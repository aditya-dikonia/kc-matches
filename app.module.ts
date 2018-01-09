import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { MastersService } from './services/masters.service';
import { AboutUsComponent } from './about-us/about-us.component';
import { GrihasthaTrainingComponent } from './grihastha-training/grihastha-training.component';
import { ResourcesComponent } from './resources/resources.component';
import { MarriageCounsellingComponent } from './marriage-counselling/marriage-counselling.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const appRoutes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'grihastha-training', component: GrihasthaTrainingComponent},
  {path: 'resources', component: ResourcesComponent},
  {path: 'marriage-counselling', component: MarriageCounsellingComponent},
  {path: 'privacy-policy', component: PrivacyPolicyComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'contact-us', component: ContactUsComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RegistrationComponent,
    AboutUsComponent,
    GrihasthaTrainingComponent,
    ResourcesComponent,
    MarriageCounsellingComponent,
    PrivacyPolicyComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    Ng4LoadingSpinnerModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    MastersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonService } from 'src/common/common.service';
import { ToastrService} from 'ngx-toastr'
import { REGISTRATION } from 'src/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {


  passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;

  constructor(private builder: FormBuilder,private common : CommonService, private toastr: ToastrService,private route : Router) {

  }
  
  
  registerForm = this.builder.group({
    id : this.builder.control("",Validators.compose([Validators.required,Validators.minLength(5)])),
    name : this.builder.control("",Validators.required),
    password : this.builder.control("",Validators.compose([Validators.required,Validators.pattern(this.passwordPattern)])),
    email : this.builder.control("",Validators.compose([Validators.required,Validators.email])),
    gender : this.builder.control("male",Validators.required),
    role : this.builder.control(""),
    isactive : this.builder.control(false)
  })

  register(){
    if(this.registerForm.valid){
      this.common.httpPost(REGISTRATION,this.registerForm.value).subscribe((data)=>{
        this.toastr.success('Registration Successful','Please wait For the Admin Approval');
        this.route.navigate(['login']);

      })
    }
    else{
      this.toastr.warning('Please Enter a Valid Credential');
    }
    
  }

}

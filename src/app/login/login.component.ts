import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonService } from 'src/common/common.service';
import { ToastrService } from 'ngx-toastr'
import { GET_USER_DATA, REGISTRATION } from 'src/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;
  userdata: any;
  constructor(private builder: FormBuilder, private common: CommonService, private toastr: ToastrService, private route: Router) {
    sessionStorage.clear()
   }

  loginForm = this.builder.group({
    username: this.builder.control("", Validators.required),
    pass: this.builder.control("", Validators.required),
  })


  login() {
    if (this.loginForm.valid) {
      this.common.httpGet(GET_USER_DATA + '/' + this.loginForm.value.username).subscribe((res) => {
        this.userdata = res;
        console.log("Userdata", this.userdata);
        if(this.userdata.password === this.loginForm.value.pass){
            if(this.userdata.isactive){
              sessionStorage.setItem('username',this.userdata.id);
              sessionStorage.setItem('userrole',this.userdata.role);
              this.route.navigate(['']);
            }
            else{
              this.toastr.error("Please Contact Admin")
            }
          }
        else{
          this.toastr.error("Invalid");
        }
      })
    }
    
  }

}

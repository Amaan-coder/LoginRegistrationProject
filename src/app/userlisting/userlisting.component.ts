import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/common/common.service';
import { FormBuilder, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr'
import { GET_ALL_DETAILS } from 'src/auth';

@Component({
  selector: 'app-userlisting',
  templateUrl: './userlisting.component.html',
  styleUrls: ['./userlisting.component.scss']
})
export class UserlistingComponent {
  list: any[]=[];


  ngOnInit(): void {
    this.getAllList();
  }
  
  constructor(private route: Router, private common: CommonService, private toast: ToastrService) {

  }

  getAllList(){
    this.common.httpGet(GET_ALL_DETAILS).subscribe((data)=>{
      console.log("data,",data);
      if(data==null){
        this.toast.warning("NO DATA AVAILABLE");
      }
      else{
        this.list = data;
      }
    })
  }
}

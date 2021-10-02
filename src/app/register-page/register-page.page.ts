import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../shared/http.service';
import * as crypto from 'crypto-js';
import * as MD5 from "crypto-js/md5";
import Swal from 'sweetalert2';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.page.html',
  styleUrls: ['./register-page.page.scss'],
})
export class RegisterPagePage implements OnInit {
  [x: string]: any;
  fullname: any;

  constructor(private router: Router,private http:HttpService,
    private toastCtrl: ToastController){}
   
  ngOnInit(){
  }

  emailid:any = '';
  full_name:any = '';
  username:any = '';
  password:any = '';
 
  encryptedPassword:any = '';

  signup(){
  console.log(this.password);
  this.md5Hash = CryptoJS.MD5(this.password);
  this.encryptedPassword =(this.md5Hash.toString());
  
  
  
    const userData = {
      email :  this.emailid,
      fullname :  this.full_name,
      username :  this.username,
      password : this.encryptedPassword 
    }
    
    
    this.http.post('/signup', userData).subscribe((response: any) => {
      if(response.success == true){
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 1000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'success',
          title: 'Signed in successfully'
        })
        this.navigateLogin()
      }
    },(error: any) =>{
      console.log(error);
    }
    );
  }

  
  navigateLogin()
  {
    this.router.navigate(['/loginpage'])
  }
  
  navigateArrow()
  {
    this.router.navigate(['/'])
  }

  fieldTextType: boolean=true;
  passwordToggle(){
    this.fieldTextType = !this.fieldTextType;
  }

  
}




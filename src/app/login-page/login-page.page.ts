import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../shared/http.service';
import * as crypto from 'crypto-js';
import * as MD5 from "crypto-js/md5";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {

  constructor(private router: Router, private http:HttpService){}
  

  ngOnInit() {
    
  }

  signinusername:any = '';
  signinpassword:any = '';
  encryptedPassword:any = '';
  md5Hash:any='';

  signin(){
  
  this.md5Hash = CryptoJS.MD5(this.signinpassword);
  this.encryptedPassword =(this.md5Hash.toString());
  console.log(this.encryptedPassword)
    const Data = {
      username :  this.signinusername,
      password : this.encryptedPassword
    }
    console.log(Data);
    
    
    this.http.post('/signin', Data).subscribe((response: any) => {
      console.log(response);
      if(response.success == true){
        const obj:any={
          "id": response.id,
          "username": response.username,
          "fullname": response.fullname,
          "email" : response.email
        }
        console.log(obj);
        console.log(response);
        
        
        const encodeText:any = btoa(JSON.stringify(obj))
        localStorage.setItem("sparrow-user-data",encodeText)
        console.log(encodeText);
        
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
          title: 'Login  successfully'
        })
        this.navigateTabs()
      }else{
        this.signinusername = '';
        this.signinpassword = '';
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'error',
          title: 'please enter correct username & password'
        })
      }
    },(error: any) =>{
      
    }
    );
  }



  navigateRegister(){
    this.router.navigate(['/registerpage'])
  }

  navigateTabs(){
    this.router.navigate(['/tabs']);
  }

  navigateArrow(){
    this.router.navigate(['/'])
  }
  fieldTextType: boolean;
  passwordToggle(){
    this.fieldTextType = !this.fieldTextType;
  }
  
  
}

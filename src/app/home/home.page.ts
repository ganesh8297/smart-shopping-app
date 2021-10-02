import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  userdata: any;

  constructor(private router: Router){}
  navigateRegister(){
    this.router.navigate(['/registerpage'])
  }
  navigateLogin(){
    this.router.navigate(['/loginpage'])
  }
  navigateFirstpage(){
    this.router.navigate(['/tabs']);
  }
  ngOnInit() {
    
    this.userdata = (localStorage.getItem("sparrow-user-data"));
    if(this.userdata == null){
      
    }else{
      this.navigateFirstpage()
    }
    
  }

}

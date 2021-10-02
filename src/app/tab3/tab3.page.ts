import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private router: Router) {}
  userdetails: any = JSON.parse(atob(localStorage.getItem("sparrow-user-data")));
  
  logout(){
    localStorage.removeItem("sparrow-user-data")
    this.router.navigate(['/'])
  }

  ngOnInit() {
    console.log(this.userdetails);

  }

}

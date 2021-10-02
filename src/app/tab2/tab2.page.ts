import { Component } from '@angular/core';
import { HttpService } from '.././shared/http.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})


export class Tab2Page {
  statusClass: string;
  
  constructor(private http: HttpService,route:ActivatedRoute) { 
    route.params.subscribe(val => {
      // put the code from `ngOnInit` here
      this.get()
      console.log("cart");
    });
  }
  click: any;
  localData: any = JSON.parse(atob(localStorage.getItem("sparrow-user-data")));

  ngOnInit() {
    
    
  }
  
  productDetails: any = []
  productTotal: any = []
  total = 0;
  cartId: any = [];
  temp: number = 0;
  get() {
    console.log("get");

    this.total = 0;
    this.http.post('/cart', { userid: this.localData.id }).subscribe((response: any) => {

      this.productDetails = response.cartData;

      console.log(this.productDetails);
      for (var i = 0; i < this.productDetails.length; i++) {
        this.total += parseInt(this.productDetails[i].total);

      }

    }, (error: any) => {
      console.log(error);
    }
    );

  }
      

  delete(event) {

    let target = event.target || event.srcElement || event.currentTarget;
    let idAttr = target.attributes.id;
    let cartid = idAttr.nodeValue;
    console.log(cartid);
    const obj = {
      id: cartid
    }
    this.http.post('/delete', obj).subscribe((response: any) => {
      console.log(response);
      
        if (response.success == true) {
          this.get()


        }

      }, (error: any) => {
        console.log(error);
      });
    console.log(obj);
  }
  
}

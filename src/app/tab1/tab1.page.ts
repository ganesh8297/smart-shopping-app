import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { HttpService } from '.././shared/http.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { LoadingService } from '../shared/loading.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public loading: LoadingService, private router: Router, private http: HttpService, route: ActivatedRoute, public loadingCtrl: LoadingController) {
    route.params.subscribe(val => {
      // put the code from `ngOnInit` here
      this.get()
      console.log(this.localData);
      console.log(this.localData.id);
    });
  }

  ngOnInit() {

  }
  searchText;
  imgUrl: any;
  productDetails: any = []
  localData: any = JSON.parse(atob(localStorage.getItem("sparrow-user-data")));
  clear = false;
  async getPicture() {
    let imgUrl = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
    let base64Image = 'data:image/jpeg;base64,' + imgUrl;
    console.log(base64Image);
    this.loading.present();
    this.http.post('/processImage', { dataUrl: base64Image }).subscribe((response: any) => {
      console.log(response);
      if (response.success == true) {
        this.clear = true
        this.productDetails = response.productData;
        this.loading.dismiss();

      }

    }, (error: any) => {
      console.log(error);
    }
    );
  }
  searchItem(){
    this.http.post('/searchproduct', { searchkey: this.searchText } ).subscribe((response: any) => {
      if (response.success == true) {
        this.searchText = '';
        this.clear = true
        this.productDetails = response.productData;
        this.loading.dismiss();
      }
      
      console.log(response);
      

    }, (error: any) => {
      console.log(error);
    }
    );
  }

  clearFun() {
    this.clear = false
    this.get()

  }

  cartDetails(id) {
    console.log(this.localData);


    for (let i = 0; i < this.productDetails.length; i++) {
      if (this.productDetails[i].id == id) {
        let obj = {
          id: this.productDetails[i].id,
          productid: this.productDetails[i].productid,
          userid: this.localData.id,
          imgurl: this.productDetails[i].imgurl,
          productname: this.productDetails[i].productname,
          category: this.productDetails[i].category,
          netweight: this.productDetails[i].netweight,
          price: this.productDetails[i].price,
          quentity: "1",
          total: this.productDetails[i].price
        }
        console.log(obj);

        return obj
      }

    }
  }
  get() {

    this.http.post('/productdetails', '').subscribe((response: any) => {

      this.productDetails = response.productData;

    }, (error: any) => {
      console.log(error);
    }
    );
  }

  addToCart(productid) {
    this.clear = false
    let requestObj = this.cartDetails(productid);
    this.http.post('/addtocart', requestObj).subscribe((response: any) => {
      if (response.success == true) {
        this.navigateTab2()
      }

    }, (error: any) => {
      console.log(error);
    }
    );
  }

  navigateTab2() {
    this.router.navigate(['/tabs/tab2']);
  }




}

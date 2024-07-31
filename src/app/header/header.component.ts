import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { EncodingService } from '../EncodingService/encoding-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  category:any=[]
  product: any;
  store: any=[];
  
  
logout() {
  localStorage.removeItem('user_data_login');
}
constructor(private route:Router,private api:ApiService, private encodingService: EncodingService){}
ngOnInit(){
  // console.log(this.route.url)
  this.api.get_categories().subscribe({
    next: (data: any) => {
      console.log(data);
      this.category = data['data'].map((item: any) => {
        return {
          ...item,
          encodedId: this.encodingService.encode(item.id.toString())
        };
      });
    },
    error: (err: any) => {
      console.error(err);
    }
  });

  this.api.get_showrooms().subscribe
  ({next:(data3:any)=>{
    console.log(data3);
    
    this.store=data3['data'].map((item: any) => {
      return {
        ...item,
        encodedId: this.encodingService.encode(item.id.toString())
      };
    });
  },
  error: (err: any) => {
    console.error(err);
  }
});

}
  isloginnav(){
    // console.log(this.route.url)
    return this.route.url =='/login' || this.route.url =='/register'
  }
}

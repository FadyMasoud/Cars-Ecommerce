import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { EncodingService } from '../EncodingService/encoding-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(private route:Router,private api:ApiService, private encodingService: EncodingService){}
 isloginfooter(){
    // console.log(this.route.url)
    return this.route.url =='/login' || this.route.url =='/signup'
  }
 
}

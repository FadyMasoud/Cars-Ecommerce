import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { EncodingService } from '../EncodingService/encoding-service.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent {
  product: any[] = [];


  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private encodingService: EncodingService
  ) { }

  ngOnInit(): void {

    this.api.get_products().subscribe({
      next: (data: any) => {
        console.log(data);
        this.product = data['data'].map((item: any) => {
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
  
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { EncodingService } from '../EncodingService/encoding-service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  product: any[] = [];
  topic: any = {};
  decodedId: number | undefined;
  id_category: any;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private encodingService: EncodingService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const encodedId = params.get('id');
      if (encodedId) {
        this.decodedId = parseInt(this.encodingService.decode(encodedId), 10);
        this.id_category = this.decodedId;  // Assign decodedId to id_category

        if (this.id_category) {
          this.fetchProducts(this.id_category);
        }
      }
    });
  }

  fetchProducts(id_category: number): void {
    this.api.get_products_for_each_category(id_category).subscribe({
      next: (data: any) => {
        console.log(data); // Log data to confirm structure
  
        // Ensure data is an array
        if (Array.isArray(data['data'])) {
          this.product = data['data'].map((item: any) => {
            return {
              ...item,
              new_id: btoa(item.id.toString())
            };
          });
  
          // Set topic if data is not empty
          if (data.length > 0) {
            this.topic = data[data];
          }
        } else {
          console.error('Data is not an array:', data);
          this.product = []; // Default to empty array
        }
      },
      error: (err: any) => {
        console.error(err);
      }
    });
  }

 

  
}

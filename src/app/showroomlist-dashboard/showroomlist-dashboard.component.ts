import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-showroomlist-dashboard',
  templateUrl: './showroomlist-dashboard.component.html',
  styleUrls: ['./showroomlist-dashboard.component.css']
})
export class ShowroomlistDashboardComponent {
  showroom:any=[];
  p:number=1;
  constructor(private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit(): void {

    this.api.get_showrooms().subscribe({
      next: (data: any) => {
        console.log(data);
       
        this.showroom = data['data'];
        
      }

    });
  }

}

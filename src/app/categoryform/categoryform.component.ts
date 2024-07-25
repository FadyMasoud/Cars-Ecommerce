import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-categoryform',
  templateUrl: './categoryform.component.html',
  styleUrls: ['./categoryform.component.css']
})
export class CategoryformComponent {
  formpcategory: FormGroup;
  message2 = '';
  message = '';
  category: any = [];
  id: any;
  fileToUpload: File | null = null;

  constructor(private formBuilder: FormBuilder,private api: ApiService,private route: ActivatedRoute, private sanitizer: DomSanitizer
  ) {
    this.formpcategory = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      pd_name: ['', Validators.required],
      images: [null, Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      speed: ['', Validators.required],
      type: ['', Validators.required]
    });
  }
  public onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.fileToUpload = event.target.files[0];
    }
  }

  get f() {
    return this.formpcategory.controls;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    
      this.api.getCategoryById(this.id).subscribe({
        next: (data: any) => {
          if (data.category) {
            this.category = data.category;
            if(this.id){
            this.formpcategory.patchValue({
              id: this.category.id,
              name: this.category.name,
              pd_name: this.category.pd_name,
              description: this.category.description,
              price: this.category.price,
              speed: this.category.speed,
              type: this.category.type,
              images: this.category.images
            });
          }else
          {
            this.formpcategory.patchValue({
              id: '',
              name: '',
              pd_name: '',
              description: '',
              price: '',
              speed: '',
              type: '',
              images: ''
            });
          }
        
          }
      }
  });
    }

    onSubmit() {
      const formData = new FormData();
      formData.append('id', this.formpcategory.value.id);
      formData.append('name', this.formpcategory.value.name);
      formData.append('pd_name', this.formpcategory.value.pd_name);
      formData.append('description', this.formpcategory.value.description);
      formData.append('price', this.formpcategory.value.price);
      formData.append('speed', this.formpcategory.value.speed);
      formData.append('type', this.formpcategory.value.type);
      if (this.fileToUpload !== null) {
        formData.append('images', this.fileToUpload);
      }
     if(this.id){
      this.api.update_category(this.id,formData).subscribe({
        next: (data: any) => {
          if (data) {
            this.message = 'Category updated successfully';
          }
        }
      });
    }else
    {
      this.api.insert_category(formData).subscribe({
        next: (data: any) => {
          if (data) {
            this.message = 'Category added successfully';
            
          }
        }
      });


 
}
}
}



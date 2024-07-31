import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maintenance-order',
  templateUrl: './maintenance-order.component.html',
  styleUrls: ['./maintenance-order.component.css']
})
export class MaintenanceOrderComponent implements OnInit {
  formMaintenanceOrder: FormGroup;
  msg: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private router: Router
  ) {
    const userId = JSON.parse(localStorage.getItem('user_data_login') || '{}').id;
    this.formMaintenanceOrder = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(255)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(255)]],
      phone: ['', [Validators.required, Validators.maxLength(20)]],
      car: ['', Validators.required],
      subject: ['', Validators.required],
      maintenance_center: ['', Validators.required],
      appointment: ['', Validators.required],
      user_id: [userId, Validators.required]
    });
  }

  ngOnInit(): void {}

  get f() {
    return this.formMaintenanceOrder.controls;
  }

  submit() {
    if (this.formMaintenanceOrder.invalid) {
      return;
    }

    this.api.insert_maintenance_order(this.formMaintenanceOrder.value).subscribe({
      next: (result: any) => {
        if (result.message) {
          this.msg = 'Maintenance order request successfully';
          console.log(result.maintenancee);
          // Navigate or perform other actions after successful submission
        } else {
          this.msg = 'Something went wrong. Please try again.';
        }
      },
      error: (err: any) => {
        console.error(err);
        this.msg = 'Failed to submit the maintenance order request.';
      }
    });
  }


}

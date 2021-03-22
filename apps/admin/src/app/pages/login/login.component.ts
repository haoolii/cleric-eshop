import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BreakpointFacadeService } from '@cleric-eshop/admin-ui';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loading = false;

  validateForm = this.fb.group({
    userName: [null, [Validators.required]],
    password: [null, [Validators.required]]
  });

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  constructor(private fb: FormBuilder, public breakPointFacadeSvc: BreakpointFacadeService) {}
}

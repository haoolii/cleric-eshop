import { Router } from '@angular/router';
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

    if (this.validateForm.valid) {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.router.navigate([''])
      }, 1000);
    }

  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public breakPointFacadeSvc: BreakpointFacadeService
  ) {}
}

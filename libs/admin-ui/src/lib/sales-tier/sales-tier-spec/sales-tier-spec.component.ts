import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

export interface TierSpec {
  name: string,
  options: string[]
};

@Component({
  selector: 'cleric-eshop-sales-tier-spec',
  templateUrl: './sales-tier-spec.component.html',
  styleUrls: ['./sales-tier-spec.component.scss']
})
export class SalesTierSpecComponent implements OnInit {

  @Input()
  set spec(spec: TierSpec) {
    Promise.resolve().then(() => {
      this.validateForm.get('name').setValue(spec.name)
      spec.options.forEach((option, index) => {
        if (!this.options.controls[index]) {
          this.addField(option);
        } else{
          this.options.controls[index].setValue(option)
        }
      })
    })
  }
  @Output() specChange = new EventEmitter<TierSpec>();

  validateForm: FormGroup = this.fb.group({
    name: [],
    options: this.fb.group({})
  });

  get options(): FormGroup {
    return this.validateForm.get('options') as FormGroup;
  }

  listOfControl: Array<{ id: number; controlInstance: string }> = [];

  addField(value, e?: MouseEvent): void {
    if (e) {
      e.preventDefault();
    }
    const id = this.listOfControl.length > 0 ? this.listOfControl[this.listOfControl.length - 1].id + 1 : 0;

    const control = {
      id,
      controlInstance: `${id}`
    };
    const index = this.listOfControl.push(control);
    const formControl =  new FormControl(value, Validators.required);
    (this.validateForm.get('options') as FormGroup).addControl(this.listOfControl[index - 1].controlInstance, formControl);
    formControl.valueChanges.subscribe(_ => {
      this.specEmit();
    })
  }

  removeField(i: { id: number; controlInstance: string }, e: MouseEvent): void {
    e.preventDefault();
    if (this.listOfControl.length > 0) {
      const index = this.listOfControl.indexOf(i);
      this.listOfControl.splice(index, 1);
      console.log(this.listOfControl);
      (this.validateForm.get('options') as FormGroup).removeControl(i.controlInstance);
    }
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    console.log(this.validateForm.value);
  }

  specEmit(): void {
    this.validateForm.value
    this.specChange.emit({
      name: this.validateForm.get('name').value,
      options: Object.values(this.validateForm.get('options').value)
    });
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}

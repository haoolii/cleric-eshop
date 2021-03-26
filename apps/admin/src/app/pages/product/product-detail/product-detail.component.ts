import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SideNavStateService } from '@cleric-eshop/admin-state';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  loading = false;

  validateForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    shortdesc: ['', [Validators.required]],
    desc: ['', [Validators.required]]
  });

  listOfControl: Array<{ id: number; controlInstance: string }> = [{
    id: 1,
    controlInstance: ''
  }];

  test = {
    name: "類型",
    options: [
      "拼圖一",
      "拼圖二",
      "拼圖三"
    ]
  }

  constructor(
    public sideNavStateSvc: SideNavStateService,
    private fb: FormBuilder
  ) {
    // sideNavStateSvc.close()
  }
  listOfOption: Array<{ label: string; value: string }> = [];
  listOfTagOptions = [];

  ngOnInit(): void {
    this.listOfOption = [
      {
        label: '鞋子',
        value: '0'
      },
      {
        label: '上衣',
        value: '1'
      },
      {
        label: '褲子',
        value: '2'
      },
      {
        label: '襪子',
        value: '3'
      },
      {
        label: '帽子',
        value: '4'
      }
    ];
  }
}

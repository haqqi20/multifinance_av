import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-aplication',
  templateUrl: './aplication.component.html',
  styleUrls: ['./aplication.component.css']
})
export class AplicationComponent implements OnInit {
    companyType_gnrl: SelectItem[];
    selectedCompany_gnrl: string;
    customerType_gnrl: SelectItem[];
    selectedCustomer_gnrl: string;
    buisinessAct_gnrl: SelectItem[];
    selectedBuisness_gnrl: string;
    financingType_gnrl: SelectItem[];
    selectedFinancing_gnrl: string;
    orderType_gnrl: SelectItem[];
    selectedorde_gnrl: string;

  constructor() {
      this.companyType_gnrl = [];
      this.companyType_gnrl.push({label: 'Select Company', value: 'Select Company'});
      this.companyType_gnrl.push({label: 'Infracom', value: 'Infracom'});
      this.companyType_gnrl.push({label: 'SDS', value: 'SDS'});
      this.companyType_gnrl.push({label: 'Mitrans', value: 'Mitrans'});
      this.companyType_gnrl.push({label: 'Alfabit', value: 'Alfabit'});

      this.customerType_gnrl = [];
      this.companyType_gnrl.push({label: 'Select Customer', value: 'Select Customer'});
      this.customerType_gnrl.push({label: 'Individual', value: 'Individual'});
      this.customerType_gnrl.push({label: 'Corporate', value: 'Corporate'});
      this.customerType_gnrl.push({label: 'Group Customer', value: 'Group Customer'});

      this.buisinessAct_gnrl = [];
      this.buisinessAct_gnrl.push({label: 'Select Buisiness', value: 'Select Buisiness'});
      this.buisinessAct_gnrl.push({label: 'Invesment', value: 'Invesment'});
      this.buisinessAct_gnrl.push({label: 'Multiguna', value: 'Multiguna'});
      this.buisinessAct_gnrl.push({label: 'Group Customer', value: 'Group Customer'});

      this.financingType_gnrl = [];
      this.financingType_gnrl.push({label: 'Select Financing', value: 'Select Financing'});
      this.financingType_gnrl.push({label: 'PPSAPT', value: 'PPSAPT'});

      this.orderType_gnrl = [];
      this.orderType_gnrl.push({label: 'Select Financing', value: 'Select Financing'});
      this.orderType_gnrl.push({label: 'New Order', value: 'New Order'});
      this.orderType_gnrl.push({label: 'Repeat Order', value: 'Repeat Order'});
      this.orderType_gnrl.push({label: 'Additional Order', value: 'Additional Order'});
  }

  ngOnInit() {
  }

}

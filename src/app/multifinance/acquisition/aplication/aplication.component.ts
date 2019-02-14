import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-aplication',
  templateUrl: './aplication.component.html',
  styleUrls: ['./aplication.component.css']
})
export class AplicationComponent implements OnInit {
    checked: boolean = false;
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
    birthPlace_prsnlInf: SelectItem[];
    selectedBrithPlc_prsnlInf: string;
    gender_prsnlInf: SelectItem[];
    selectedGender_prsnlInf: string;
    maritalSts_prsnlInf: SelectItem[];
    selectedmaritalSts_prsnlInf: string;
    religion_prsnlInf: SelectItem[];
    selectedReligion_prsnlInf: string;
    employmentSts_wrkng: SelectItem[];
    selectedemploy_wrkng: string;
    addrsType_addrsInfo: SelectItem[];
    selectedaddrs_addrsInfo: string;
    province_addrsInfo: SelectItem[];
    selectedProv_addrsInfo: string;
    city_addrsInfo: SelectItem[];
    selectedcity_addrsInfo: string;
    district_addrsInfo: SelectItem[];
    selectedDistrict_addrsInfo: string;
    subDistrict_addrsInfo: SelectItem[];
    selectedSubDis_addrsInfo: string;
    zipcode_addrsInfo: SelectItem[];
    selectedZipcode_addrsInfo: string;
    selectedbrithPlc_fam: string;
    selectedGender_fam: string;
    incomeInfo_incmInf: SelectItem[];
    selectedincomeInf_incmInf: string;
    education_eduInf: SelectItem[];
    selectedEdu_eduInf: string;
    major_eduInf: SelectItem[];
    selectedMajor_eduInf: string;

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

      this.birthPlace_prsnlInf = [];
      this.birthPlace_prsnlInf.push({label: 'Select Birth Date', value: 'Select Birth Date'});
      this.birthPlace_prsnlInf.push({label: 'Jakarta', value: 'Jakarta'});
      this.birthPlace_prsnlInf.push({label: 'Bandung', value: 'Bandung'});
      this.birthPlace_prsnlInf.push({label: 'Surabaya', value: 'Additional Surabaya'});

      this.gender_prsnlInf = [];
      this.gender_prsnlInf.push({label: 'Select Gender', value: 'Select Gender'});
      this.gender_prsnlInf.push({label: 'Male', value: 'Male'});
      this.gender_prsnlInf.push({label: 'Female', value: 'Female'});

      this.maritalSts_prsnlInf = [];
      this.maritalSts_prsnlInf.push({label: 'Select Marital Status', value: 'Select Marital Status'});
      this.maritalSts_prsnlInf.push({label: 'Single', value: 'Single'});
      this.maritalSts_prsnlInf.push({label: 'Married', value: 'Married'});

      this.religion_prsnlInf = [];
      this.religion_prsnlInf.push({label: 'Select Religion', value: 'Select Religion'});
      this.religion_prsnlInf.push({label: 'Moeslem', value: 'Moeslem'});
      this.religion_prsnlInf.push({label: 'Christian', value: 'Christian'});
      this.religion_prsnlInf.push({label: 'Catholic', value: 'Catholic'});
      this.religion_prsnlInf.push({label: 'Buddishm', value: 'Buddishm'});
      this.religion_prsnlInf.push({label: 'Hinduism', value: 'Hinduis,'});
      this.religion_prsnlInf.push({label: 'Other', value: 'Other'});

      this.employmentSts_wrkng = [];
      this.employmentSts_wrkng.push({label: 'Select Employment', value: 'Select Employment'});
      this.employmentSts_wrkng.push({label: 'Permanent', value: 'Permanent'});
      this.employmentSts_wrkng.push({label: 'Temporarr', value: 'Temporary'});

      this.addrsType_addrsInfo = [];
      this.addrsType_addrsInfo.push({label: 'Select Address Type', value: 'Select Address'});
      this.addrsType_addrsInfo.push({label: 'Domicile', value: 'Domicile'});
      this.addrsType_addrsInfo.push({label: 'Identiy', value: 'Identiy'});
      this.addrsType_addrsInfo.push({label: 'collecction', value: 'collecction'});

      this.province_addrsInfo = [];
      this.province_addrsInfo.push({label: 'Select Province', value: 'Select Province'});
      this.province_addrsInfo.push({label: 'Jakarta', value: 'Jakarta'});
      this.province_addrsInfo.push({label: 'Jawa Tengah', value: 'Jawa Tengah'});
      this.province_addrsInfo.push({label: 'Jawa Timur', value: 'Jawa Timur'});
      this.province_addrsInfo.push({label: 'Jawa Barat', value: 'Jawa Barat'});

      this.city_addrsInfo = [];
      this.city_addrsInfo.push({label: 'Select City', value: 'Select City'});
      this.city_addrsInfo.push({label: 'Jakarta', value: 'Jakarta'});
      this.city_addrsInfo.push({label: 'Semarang', value: 'Semarang'});
      this.city_addrsInfo.push({label: 'Surabaya', value: 'Surabaya'});
      this.city_addrsInfo.push({label: 'Bandung', value: 'Bandung'});

      this.district_addrsInfo = [];
      this.district_addrsInfo.push({label: 'Select District', value: 'Select District'});
      this.district_addrsInfo.push({label: 'Pati', value: 'Pati'});
      this.district_addrsInfo.push({label: 'Yogyakarta', value: 'Yogyakarta'});
      this.district_addrsInfo.push({label: 'Kudus', value: 'Kudus'});
      this.district_addrsInfo.push({label: 'Pancoran', value: 'Pancoran'});

      this.subDistrict_addrsInfo = [];
      this.subDistrict_addrsInfo.push({label: 'Select District', value: 'Select District'});
      this.subDistrict_addrsInfo.push({label: 'Tayu', value: 'Tayu'});
      this.subDistrict_addrsInfo.push({label: 'Mbae', value: 'Mbae'});
      this.subDistrict_addrsInfo.push({label: 'Mbakalan', value: 'Mbakalan'});
      this.subDistrict_addrsInfo.push({label: 'Pacitan', value: 'Pacitan'});

      this.zipcode_addrsInfo = [];
      this.zipcode_addrsInfo.push({label: 'Select Zipcode', value: 'Select Zipcode'});
      this.zipcode_addrsInfo.push({label: '59155', value: '59155'});
      this.zipcode_addrsInfo.push({label: '59870', value: '59870'});
      this.zipcode_addrsInfo.push({label: '54789', value: '54789'});
      this.zipcode_addrsInfo.push({label: '59808', value: '59808'});

      this.incomeInfo_incmInf = [];
      this.incomeInfo_incmInf.push({label: 'Select Income Type', value: 'Select Income'});
      this.incomeInfo_incmInf.push({label: 'Individual Income', value: 'Individual Income'});
      this.incomeInfo_incmInf.push({label: 'Spouse Income', value: 'Spouse Income'});
      this.incomeInfo_incmInf.push({label: 'Other Income', value: 'Other Income'});

      this.education_eduInf = [];
      this.education_eduInf.push({label: 'Select Education', value: 'Select Education'});
      this.education_eduInf.push({label: 'Diploma', value: 'Diploma'});
      this.education_eduInf.push({label: 'Bachelor Degree', value: 'Bachelor Degree'});
      this.education_eduInf.push({label: 'Master Income', value: 'Master Income'});
      this.education_eduInf.push({label: 'Phd Income', value: 'Phd Income'});

      this.major_eduInf = [];
      this.major_eduInf.push({label: 'Select Major', value: 'Select Major'});
      this.major_eduInf.push({label: 'Accounting', value: 'Accounting'});
      this.major_eduInf.push({label: 'Biology', value: 'Biology'});
      this.major_eduInf.push({label: 'Industry', value: 'Industry'});
  }

  ngOnInit() {
  }

}

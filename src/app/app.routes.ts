import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {DashboardDemoComponent} from './multifinance/dashboard/dashboarddemo.component';
import {AplicationComponent} from './multifinance/acquisition/aplication/aplication.component';
import {SurveyComponent} from './multifinance/acquisition/survey/survey.component';
import {ApprovalComponent} from './multifinance/acquisition/approval/approval.component';
import {PoComponent} from './multifinance/acquisition/po/po.component';
import {DisbursementComponent} from './multifinance/acquisition/disbursement/disbursement.component';
import {ProductsComponent} from './multifinance/acquisition/products/products.component';
import {CustomerComponent} from './multifinance/acquisition/customer/customer.component';
import {DealerComponent} from './multifinance/acquisition/dealer/dealer.component';

export const routes: Routes = [
    {path: '', component: DashboardDemoComponent},
    {path: 'aplication', component: AplicationComponent},
    {path: 'survey', component: SurveyComponent},
    {path: 'approval', component: ApprovalComponent},
    {path: 'po', component: PoComponent},
    {path: 'disbursement', component: DisbursementComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'customer', component: CustomerComponent},
    {path: 'dealer', component: DealerComponent},
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'});

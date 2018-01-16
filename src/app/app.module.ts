import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgForm , FormsModule, FormGroup} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
// import { EditableTableModule } from 'ng-editable-table/editable-table/editable-table.module';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { AddBenificieryComponent } from './add-benificiery/add-benificiery.component';
import { CheckBeneficieryComponent } from './check-beneficiery/check-beneficiery.component';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { TransferHistoryComponent } from './transfer-history/transfer-history.component';
import { SuccessMessageService } from './SuccessMessage.service';
import { EditBenificieryComponent } from './check-beneficiery/edit-benificiery/edit-benificiery.component'


const appRoutes : Routes = [
  {path:'', redirectTo : '/login-page', pathMatch : 'full'},
  {path:'login-page' , component:LoginPageComponent},
  {path:'home-page', component:HomePageComponent , children : [
    {path:'', component : AccountDetailsComponent},
    {path : 'account-details', component:AccountDetailsComponent},
    {path : 'add-benificiery', component: AddBenificieryComponent},
    {path : 'check-beneficiery', component:CheckBeneficieryComponent, children :[
      {path : 'edit-benificiery', component:EditBenificieryComponent}
    ]},
    {path : 'fund-transfer', component:FundTransferComponent},
    {path : 'transfer-history', component:TransferHistoryComponent}
  ]}
]


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    AccountDetailsComponent,
    AddBenificieryComponent,
    CheckBeneficieryComponent,
    FundTransferComponent,
    TransferHistoryComponent,
    EditBenificieryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SuccessMessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

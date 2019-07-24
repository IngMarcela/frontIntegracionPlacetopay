import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule, MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatCardModule, MatFormFieldModule } from '@angular/material';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routing, appRoutingProviders} from "./app.routing";

import { AppComponent } from './app.component';

import { DataService } from './service/data.service';
import { HttpClientModule } from '@angular/common/http';
import { ListPurchaseComponent } from './purchase/listPurchase/listPurchase.component';
import { GeneratePurchaseComponent } from "./purchase/generatePurchase/generatePurchase.component";
import { DetailPurchaseComponent } from "./purchase/purchaseDetail/detailPurchase.component";

@NgModule({
  declarations: [
    AppComponent,
    ListPurchaseComponent,
    GeneratePurchaseComponent,
    DetailPurchaseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatDialogModule,
    HttpClientModule,
    MatSortModule,
    MatIconModule,
    MatPaginatorModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

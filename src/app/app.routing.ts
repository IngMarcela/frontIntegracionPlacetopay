import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//importar componentes
import { ListPurchaseComponent } from "./purchase/listPurchase/listPurchase.component";
import { GeneratePurchaseComponent } from "./purchase/generatePurchase/generatePurchase.component";
import {DetailPurchaseComponent} from "./purchase/purchaseDetail/detailPurchase.component";

const appRoutes: Routes = [
  {path: '', component: ListPurchaseComponent},
  {path: 'listPurchase', component: ListPurchaseComponent},
  {path: 'GeneratePurchase', component: GeneratePurchaseComponent},
  {path: 'listPurchase/back/:reference', component: ListPurchaseComponent},
  {path: 'detailPurchase', component: DetailPurchaseComponent},
  {path: 'detailPurchase/:reference', component: DetailPurchaseComponent}
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

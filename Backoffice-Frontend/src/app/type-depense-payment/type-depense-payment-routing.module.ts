import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TypeDepensePaymentComponent} from "./type-depense-payment.component";
import {AddTypeDepensePaymentComponent} from "./add-type-depense-payment/add-type-depense-payment.component";
import {EditTypeDepensePaymentComponent} from "./edit-type-depense-payment/edit-type-depense-payment.component";
import {DepensePaymentComponent} from "../depense-payment/depense-payment.component";
import {AddDepensePaymentComponent} from "../depense-payment/add-depense-payment/add-depense-payment.component";
import {EditDepensePaymentComponent} from "../depense-payment/edit-depense-payment/edit-depense-payment.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/paiement-depense/liste-mensuel",
    pathMatch: "full"
  },
  {
    path: 'liste-mensuel',
    component: TypeDepensePaymentComponent,
    data: {
      title: 'Paiement depense mensuel'
    }
  },
  {
    path: 'ajouter-mensuel',
    component: AddTypeDepensePaymentComponent,
    data: {
      title: 'Enregister paiement depense mensuel'
    }
  },
  {
    path: 'modifier-mensuel/:id',
    component: EditTypeDepensePaymentComponent,
    data: {
      title: 'Modifier paiement depense mensuel'
    }
  },
  {
    path: 'liste-occasionnel',
    component: DepensePaymentComponent,
    data: {
      title: 'Paiement depense occasionnel'
    }
  },
  {
    path: 'ajouter-occasionnel',
    component: AddDepensePaymentComponent,
    data: {
      title: 'Enregister paiement depense occasionnel'
    }
  },
  {
    path: 'modifier-occasionnel/:id',
    component: EditDepensePaymentComponent,
    data: {
      title: 'Modifier paiement depense occasionnel'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeDepensePaymentRoutingModule { }

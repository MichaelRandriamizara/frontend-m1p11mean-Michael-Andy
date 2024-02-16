import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TypeDepenseComponent} from "../type-depense/type-depense.component";
import {AddTypeDepenseComponent} from "../type-depense/add-type-depense/add-type-depense.component";
import {EditTypeDepenseComponent} from "../type-depense/edit-type-depense/edit-type-depense.component";
import {TypeDepensePaymentComponent} from "./type-depense-payment.component";
import {AddTypeDepensePaymentComponent} from "./add-type-depense-payment/add-type-depense-payment.component";
import {EditTypeDepensePaymentComponent} from "./edit-type-depense-payment/edit-type-depense-payment.component";

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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeDepensePaymentRoutingModule { }

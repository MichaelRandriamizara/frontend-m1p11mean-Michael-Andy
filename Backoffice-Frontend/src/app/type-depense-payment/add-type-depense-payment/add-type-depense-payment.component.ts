import { Component } from '@angular/core';
import {TypeDepenseService} from "../../services/depenses/type-depense.service";
import {Router} from "@angular/router";
import {TypeDepensePaymentService} from "../../services/typeDepensePayment/type-depense-payment.service";

@Component({
  selector: 'app-add-type-depense',
  templateUrl: './add-type-depense-payment.component.html',
  styleUrl: './add-type-depense-payment.component.scss'
})
export class AddTypeDepensePaymentComponent {
  form: any = {
    month: null,
    year: null,
    value: null,
    typeDepense: null,
  };

  typeDepenses:any = [];
  constructor(private typeDepensePaymentService: TypeDepensePaymentService, private router: Router, private typeDepenseService: TypeDepenseService){

  }
  ngOnInit(): void {
    this.typeDepenseService.getAll("", 0,0, data => {
      this.typeDepenses = data.data;
    })
  }

  selectTypeDepense(typeDepense: any): void {
    this.form.typeDepense = typeDepense; // Assign the entire object
  }


  onSubmit(): void {
    const { month, year, value, typeDepense } = this.form;
    console.log(typeDepense)
    this.typeDepensePaymentService.create({month, year, value, typeDepense}, () => {
      this.router.navigate(['/paiement-depense']);
    });

  }
}

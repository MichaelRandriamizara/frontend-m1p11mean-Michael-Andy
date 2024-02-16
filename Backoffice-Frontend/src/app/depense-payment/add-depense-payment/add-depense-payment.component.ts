import { Component } from '@angular/core';
import {TypeDepenseService} from "../../services/depenses/type-depense.service";
import {Router} from "@angular/router";
import {TypeDepensePaymentService} from "../../services/typeDepensePayment/type-depense-payment.service";
import {DepensePaymentService} from "../../services/depensePayment/depense-payment.service";

@Component({
  selector: 'app-add-type-depense',
  templateUrl: './add-depense-payment.component.html',
  styleUrl: './add-depense-payment.component.scss'
})
export class AddDepensePaymentComponent {
  form: any = {
    date: null,
    value: null,
    name: null,
  };

  constructor(private depensePaymentService: DepensePaymentService, private router: Router){

  }
  ngOnInit(): void {
  }



  onSubmit(): void {
    const { date, value,name } = this.form;
    this.depensePaymentService.create({date, value, name}, () => {
      this.router.navigate(['/paiement-depense/liste-occasionnel']);
    });

  }
}

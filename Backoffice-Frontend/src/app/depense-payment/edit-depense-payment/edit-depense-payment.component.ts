import {Component, OnInit} from '@angular/core';

import {FormsModule} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {TypeDepenseService} from "../../services/depenses/type-depense.service";
import {TypeDepensePaymentService} from "../../services/typeDepensePayment/type-depense-payment.service";
import {DepensePaymentService} from "../../services/depensePayment/depense-payment.service";

@Component({
  selector: 'app-edit-type-depense',
  templateUrl: './edit-depense-payment.component.html',
  styleUrl: './edit-depense-payment.component.scss'
})
export class EditDepensePaymentComponent implements OnInit {
  id: string = '';
  form: any = {
    date: null,
    value: null,
    name: null,
  };

  constructor(private router:ActivatedRoute,private typeDepenseService: TypeDepenseService, private depensePaymentService:DepensePaymentService,private route: Router) {
  }
  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get('id')!;
    this.depensePaymentService.get(this.id, data => {
      this.form = data;
    });
  }

  //get id string from url, get, and update
  onSubmit(): void {
    const { date, value,name } = this.form;
    this.depensePaymentService.update(this.id, { date, value,name }, () => {
      this.route.navigate(['/paiement-depense/liste-occasionnel']);
    })
  }
}

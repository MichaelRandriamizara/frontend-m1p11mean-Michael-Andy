import {Component, OnInit} from '@angular/core';

import {FormsModule} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {TypeDepenseService} from "../../services/depenses/type-depense.service";
import {TypeDepensePaymentService} from "../../services/typeDepensePayment/type-depense-payment.service";

@Component({
  selector: 'app-edit-type-depense',
  templateUrl: './edit-type-depense-payment.component.html',
  styleUrl: './edit-type-depense-payment.component.scss'
})
export class EditTypeDepensePaymentComponent implements OnInit {
  id: string = '';
  form: any = {
    month: null,
    year: null,
    value: null,
    typeDepense: null,
  };

  typeDepenses:any = [];
  constructor(private router:ActivatedRoute,private typeDepenseService: TypeDepenseService, private typeDepensePaymentService:TypeDepensePaymentService,private route: Router) {
  }
  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get('id')!;
    this.typeDepensePaymentService.get(this.id, data => {
      this.form = data;
    });
    this.typeDepenseService.getAll("", 0,0, data => {
      this.typeDepenses = data.data;
    })
  }

  //get id string from url, get, and update
  onSubmit(): void {
    const { month, year, value, typeDepense } = this.form;
    this.typeDepensePaymentService.update(this.id, { month, year, value, typeDepense }, () => {
      this.route.navigate(['/paiement-depense']);
    })
  }
}

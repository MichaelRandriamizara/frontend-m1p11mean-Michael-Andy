import { Component } from '@angular/core';
import {TypeDepenseService} from "../../services/depenses/type-depense.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-type-depense',
  templateUrl: './add-type-depense.component.html',
  styleUrl: './add-type-depense.component.scss'
})
export class AddTypeDepenseComponent {
  form: any = {
    name: null,
  };

  constructor(private typeDepenseService: TypeDepenseService, private router: Router) {

  }


  onSubmit(): void {
    const { name } = this.form;
    this.typeDepenseService.create({name}, () => {
      this.router.navigate(['/type-depense']);
    });

  }
}

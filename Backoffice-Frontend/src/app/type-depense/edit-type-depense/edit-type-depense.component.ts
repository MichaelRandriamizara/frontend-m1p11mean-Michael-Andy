import {Component, OnInit} from '@angular/core';

import {FormsModule} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {TypeDepenseService} from "../../services/depenses/type-depense.service";

@Component({
  selector: 'app-edit-type-depense',
  templateUrl: './edit-type-depense.component.html',
  styleUrl: './edit-type-depense.component.scss'
})
export class EditTypeDepenseComponent implements OnInit {
  id: string = '';
  form: any = {
    name: null,
  };
  constructor(private router:ActivatedRoute,private typeDepenseService: TypeDepenseService,private route: Router) {
  }
  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get('id')!;
    this.typeDepenseService.get(this.id, data => {
      this.form = data;
    });
  }

  //get id string from url, get, and update
  onSubmit(): void {
    const { name } = this.form;
    this.typeDepenseService.update(this.id, {name}, () => {
      this.route.navigate(['/type-depense']);
    })
  }
}

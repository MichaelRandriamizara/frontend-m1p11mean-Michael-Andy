import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {SpecialServiceService} from "../../services/special-service/special-service.service";
import {formatDateTime} from "../../utils/string.util";
import {askConfirmation} from "../../utils/sweet-alert.util";

@Component({
  selector: 'app-special-service',
  templateUrl: './special-service.component.html',
  styleUrl: './special-service.component.scss'
})
export class SpecialServiceComponent implements OnInit{
  specialServices: any = [];

  constructor(private specialServiceService: SpecialServiceService, private router: Router) {
  }

  ngOnInit(): void {
    this.fetchList();
  }

  fetchList() {
    this.specialServiceService.findAll(data => {
      this.specialServices = data;
    })
  }

  add() {
    this.router.navigate(['/special-service/ajouter']);
  }

  delete(id: string) {
    askConfirmation(() => {
      this.specialServiceService.delete(id, () => {
        this.fetchList();
      })
    });
  }

  protected readonly formatDateTime = formatDateTime;
}

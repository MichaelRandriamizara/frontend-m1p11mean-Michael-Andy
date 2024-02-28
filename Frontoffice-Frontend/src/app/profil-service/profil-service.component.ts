import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ServiceService} from '../services/service/service.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ImageModalComponent} from '../image-modal/image-modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil-service',
  templateUrl: './profil-service.component.html',
  styleUrls: ['./profil-service.component.css']
})
export class ProfilServiceComponent implements OnInit {
  id: any;
  service: any = null;

  constructor(private serviceService: ServiceService, private router: ActivatedRoute, private modalService: NgbModal, private Router: Router) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get('id');
    this.serviceService.getService(this.id, (res) => {
      this.service = res;
    });
  }

  openImageModal(photo: string, name: string) {
    const modalRef = this.modalService.open(ImageModalComponent, { centered: true });
    modalRef.componentInstance.photo = photo;
    modalRef.componentInstance.name = name;
  }

  navigateToCreateAppointment() {
    this.Router.navigate(['/appointment/create']);
  }
}

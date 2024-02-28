import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-image-modal',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">{{name}}</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <img [src]="photo" class="img-fluid" alt="Service Image">
    </div>
  `,
})
export class ImageModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) {}

  @Input() photo: string;
  @Input() name: string;

  ngOnInit(): void {
  }

}

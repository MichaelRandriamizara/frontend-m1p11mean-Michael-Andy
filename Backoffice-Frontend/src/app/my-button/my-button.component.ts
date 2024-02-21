import {Component, Input} from '@angular/core';
import {ButtonDirective} from "@coreui/angular";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-my-button',
  standalone: true,
  imports: [
    ButtonDirective,
    MatIcon
  ],
  templateUrl: './my-button.component.html',
  styleUrl: './my-button.component.scss'
})
export class MyButtonComponent {
  @Input({required: true}) text!: string;
  @Input({required: true}) icon!: string;
  @Input() color !: string;
  @Input() variant?: "ghost" | "outline";
  @Input() disabled !: boolean;

}

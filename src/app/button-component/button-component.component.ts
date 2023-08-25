import { Component } from '@angular/core';
import { ModalService } from '../modal-service.service';

@Component({
  selector: 'app-button-component',
  templateUrl: './button-component.component.html',
  styleUrls: ['./button-component.component.css']
})
export class ButtonComponentComponent{
  constructor(private modalService: ModalService) {}

  openModal() {
    this.modalService.showModal$.next(true);
    document.body.style.overflow = 'hidden';
  }
}

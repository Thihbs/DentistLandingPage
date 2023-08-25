import { Component} from '@angular/core';
import { ModalService } from '../modal-service.service';

@Component({
  selector: 'app-cadastro-modal',
  templateUrl: './cadastro-modal.component.html',
  styleUrls: ['./cadastro-modal.component.css']
})
export class CadastroModalComponent{
  nome: string = '';
  email: string = '';
  telefone: string = '';
  descricao: string = ''; 
  data: string = '';
  aceitoTermos: boolean = false;

  constructor(public modalService: ModalService) {
  }
  close() {
    this.modalService.showModal$.next(false);
    document.body.style.overflow = 'auto';
  }
  submitForm() {
    // Aqui você pode tratar o envio do formulário, por exemplo, enviar os dados para um serviço ou API.
    console.log('Formulário enviado!');
  }
}
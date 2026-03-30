import { Component } from '@angular/core';
import { ModalService } from '../modal-service.service';

@Component({
  selector: 'app-cadastro-modal',
  templateUrl: './cadastro-modal.component.html',
  styleUrls: ['./cadastro-modal.component.css']
})
export class CadastroModalComponent {
  nome = '';
  email = '';
  telefone = '';
  descricao = '';
  data = '';
  aceitoTermos = false;

  private readonly clinicEmail = 'agendamento@clinicathaisyamamoto.com.br';

  constructor(public modalService: ModalService) {}

  close(): void {
    this.modalService.showModal$.next(false);
    document.body.style.overflow = 'auto';
  }

  submitForm(): void {
    const assunto = `Novo agendamento - ${this.nome}`;
    const mensagem = [
      'Olá, equipe da clínica!',
      '',
      'Recebi uma nova solicitação de agendamento:',
      `Nome: ${this.nome}`,
      `E-mail: ${this.email}`,
      `Telefone: ${this.telefone}`,
      `Data desejada: ${this.formatDate(this.data)}`,
      `Especialidade/descrição: ${this.descricao || 'Não informado'}`,
      `Aceitou os termos: ${this.aceitoTermos ? 'Sim' : 'Não'}`,
      '',
      'Mensagem enviada automaticamente pelo site.'
    ].join('\n');

    const mailtoLink = `mailto:${this.clinicEmail}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(mensagem)}`;
    window.location.href = mailtoLink;

    this.close();
    this.resetForm();
  }

  private formatDate(date: string): string {
    if (!date) {
      return 'Não informada';
    }

    return new Date(`${date}T00:00:00`).toLocaleDateString('pt-BR');
  }

  private resetForm(): void {
    this.nome = '';
    this.email = '';
    this.telefone = '';
    this.descricao = '';
    this.data = '';
    this.aceitoTermos = false;
  }
}

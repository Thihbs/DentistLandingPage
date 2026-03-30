import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  readonly clinicName = 'Clínica Thais Yamamoto';

  readonly specialties = [
    {
      title: 'Ortodontia',
      description: 'Alinhadores e aparelhos modernos para um sorriso harmônico em todas as idades.'
    },
    {
      title: 'Implantodontia',
      description: 'Reabilitação oral com planejamento digital e foco em conforto durante o tratamento.'
    },
    {
      title: 'Odontologia Estética',
      description: 'Lentes, clareamento e restaurações para valorizar seu sorriso com naturalidade.'
    },
    {
      title: 'Prevenção e Profilaxia',
      description: 'Consultas periódicas para manter saúde bucal, prevenir dores e evitar urgências.'
    }
  ];

  readonly highlights = [
    'Atendimento humanizado e sem pressa',
    'Planejamento personalizado para cada paciente',
    'Ambiente confortável e acolhedor',
    'Fácil acesso e suporte via WhatsApp'
  ];
}

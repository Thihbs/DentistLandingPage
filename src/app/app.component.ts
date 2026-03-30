import { Component } from '@angular/core';

interface Specialty {
  icon: string;
  title: string;
  description: string;
}

interface Testimonial {
  name: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  readonly clinicName = 'Clínica Thais Yamamoto';

  readonly specialties: Specialty[] = [
    {
      icon: 'fa-tooth',
      title: 'Odontologia Estética',
      description: 'Clareamento, resinas e harmonização do sorriso com resultado natural.'
    },
    {
      icon: 'fa-teeth-open',
      title: 'Ortodontia',
      description: 'Alinhadores e aparelhos com planejamento individual e acompanhamento próximo.'
    },
    {
      icon: 'fa-screwdriver-wrench',
      title: 'Implantes Dentários',
      description: 'Reabilitação oral com técnica moderna, segurança e foco no conforto.'
    },
    {
      icon: 'fa-shield-heart',
      title: 'Prevenção Completa',
      description: 'Consultas preventivas para manter saúde bucal e evitar tratamentos emergenciais.'
    }
  ];

  readonly testimonials: Testimonial[] = [
    {
      name: 'Mariana R.',
      text: 'Atendimento impecável. Me senti segura desde a primeira consulta e amei o resultado.'
    },
    {
      name: 'Carlos M.',
      text: 'Equipe muito atenciosa e ambiente excelente. Processo claro e sem surpresas.'
    },
    {
      name: 'Fernanda S.',
      text: 'Consegui agendar rápido pelo WhatsApp e fui super bem atendida na clínica.'
    }
  ];

  readonly steps = [
    'Envie uma mensagem no WhatsApp',
    'Receba orientação e horário disponível',
    'Faça sua avaliação com plano personalizado'
  ];
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-card-especialidades',
  templateUrl: './card-especialidades.component.html',
  styleUrls: ['./card-especialidades.component.css']
})
export class CardEspecialidadesComponent {
  card: { name: string; urlimg: string; description: string }[] = [
    {
      name: 'Limpeza e profilaxia',
      urlimg: 'assets/icondentist.png',
      description: 'Remoção de placa e tártaro para manter a saúde bucal e um sorriso mais leve e brilhante.'
    },
    {
      name: 'Facetas em resina',
      urlimg: 'assets/ortodontico.png',
      description: 'Harmonização do sorriso com acabamento natural, corrigindo forma, cor e pequenas assimetrias.'
    },
    {
      name: 'Clareamento dental',
      urlimg: 'assets/dentist/cuidado-dental.png',
      description: 'Protocolos seguros para devolver luminosidade aos dentes e elevar sua autoestima.'
    },
    {
      name: 'Selantes preventivos',
      urlimg: 'assets/dentist/dentistaforte.png',
      description: 'Proteção extra em áreas sensíveis para prevenir cáries e fortalecer a estrutura dentária.'
    },
    {
      name: 'Restauração estética',
      urlimg: 'assets/dentist/tratamento.png',
      description: 'Reconstrução de dentes com resina de alta qualidade para unir funcionalidade e estética.'
    },
    {
      name: 'Cirurgias odontológicas',
      urlimg: 'assets/dentist/dentista.png',
      description: 'Procedimentos cirúrgicos com técnica avançada e acompanhamento completo no pós-operatório.'
    },
    {
      name: 'Ortodontia',
      urlimg: 'assets/dentist/suspensorios.png',
      description: 'Planejamento personalizado para alinhar os dentes e melhorar a mordida com conforto.'
    },
    {
      name: 'Implantes dentários',
      urlimg: 'assets/dentist/tirarDente.png',
      description: 'Reabilitação oral com soluções duradouras que restauram mastigação e confiança para sorrir.'
    }
  ];
}

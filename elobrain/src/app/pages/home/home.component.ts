import { Component } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';

import { InlineTopic } from '../../shared/models/inline-topic.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  inlineTopics: InlineTopic[] = [{
      imageAlt: 'Núvem segurando um pote com uma mão e comendo dados com um hashi na outra mão',
      imageUrl: 'assets/images/eating-cloud.png',
      title: 'Cadastre os cartões',
      description: 'Na plataforma <strong>elobrain</strong> crie perguntas para si e preencha a resposta para caso não lembre no futuro'
    },
    {
      imageAlt: 'Pessoa segurando um celular que recebe uma notificação',
      imageUrl: 'assets/images/man-receaving-email.png',
      title: 'Seja notificado',
      description: 'A plataforma <strong>elobrain</strong> gerencia as perguntas que você precisa revisar naquele dia e te notifica'
    },
    {
      imageAlt: 'Pessoa em um computador que apresenta uma pergunta de sim ou não',
      imageUrl: 'assets/images/decision.png',
      title: 'Relembre',
      description: 'Você responderá no <strong>elobrain</strong> se lembrou da resposta para a pergunta corretamente'
    },
    {
      imageAlt: 'Desenho de um cérebro comemorando',
      imageUrl: 'assets/images/success-brain.png',
      title: 'Melhore a cada dia',
      description: 'O <strong>elobrain</strong> gerencia quais conhecimentos você já está dominando e quais ainda precisam de reforço, reordenando as perguntas diariamente'
    }
  ]

  lineChartData: ChartDataSets[] = [
    { data: [100, 85, 60, 35, 15], label: 'Estudo sem revisão posterior' },
    { data: [null, 100, 85, 60, 40, 25], label: '1 revisão' },
    { data: [null, null, 100, 85, 65, 50, 40], label: '2 revisões' },
    { data: [null, null, null, 100, 85, 70, 60, 55], label: '3 revisões' },
    { data: [null, null, null, null, 100, 85, 75, 70], label: '4 revisões' },
  ];

  lineChartLabels: Label[] = ['Dia do estudo', '1 dia depois', '2 dias depois', '3 dias depois', '5 dias depois', '8 dias depois', '13 dias depois', '21 dias depois'];

  lineChartOptions = {
    responsive: true,
    title: {
      display: true,
      text: 'Curva de esquecimento para um determinado conhecimento (Percentual de aproveitamento do estudo x Dias)'
    }
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

}

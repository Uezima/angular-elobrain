import { Component } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';

import { InlineTopic } from 'src/app/shared/models/inline-topic.model';
import { Explanation } from 'src/app/shared/models/explanation.model';
import { BigTitle } from 'src/app/shared/models/big-title.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  bigTitle: BigTitle = {
    imageUrl: 'assets/images/flame-sign-up.png',
    imageAlt: 'Desenho de uma pessoa com óculos de realidade aumentada preenchendo uma folha',
    title: 'Aprenda qualquer coisa de verdade!',
    subtitle: 'A plataforma elobrain irá te ajudar a aprender de vez praticamente qualquer coisa!',
    buttonAction: 'signin',
    buttonText: 'Clique aqui para começar!'
  }

  forgotItExplanation: Explanation = {
    imageUrl: 'assets/images/no-connection.png',
    imageAlt: 'Desenho de uma pessoa com aparência travada esquecendo de algo',
    imageAnimation: 'wobble-hor-bottom',
    title: 'Putz! Esqueci!',
    description: [
      '<strong>As vezes passamos horas estudando algo e dias depois não lembramos mais nada</strong>, como para uma prova, apresentação ou em um novo idioma.',
      'Isso ocorre pois nosso cérebo esquece algumas coisas <strong>propositalmente</strong>, principalmente as que ele julga que não são importantes!',
      'Para não esquecermos, é preciso "dizer ao cérebro" que algo é importante, realizando revisões dos estudos ao longo dos dias. Esta técnica é conhecida como <strong>aprendizagem por repetição espaçada.</strong>'
    ]
  }

  inlineTopics: InlineTopic[] = [{
      imageAlt: 'Núvem segurando um pote com uma mão e comendo dados com um hashi na outra mão',
      imageUrl: 'assets/images/eating-cloud.png',
      title: 'Cadastre os cartões',
      description: 'Na plataforma <strong>elobrain</strong> crie perguntas em cartões e preencha a resposta para caso não lembre no futuro'
    },
    {
      imageAlt: 'Pessoa segurando um celular que recebe uma notificação',
      imageUrl: 'assets/images/man-receaving-email.png',
      title: 'Seja notificado',
      description: 'A plataforma <strong>elobrain</strong> gerencia os cartões que você precisa revisar naquele dia e te notifica'
    },
    {
      imageAlt: 'Pessoa em um computador que apresenta uma pergunta de sim ou não',
      imageUrl: 'assets/images/decision.png',
      title: 'Relembre',
      description: 'Você responderá no <strong>elobrain</strong> se lembrou corretamente da resposta para o cartão pergunta'
    },
    {
      imageAlt: 'Desenho de um cérebro comemorando',
      imageUrl: 'assets/images/success-brain.png',
      title: 'Melhore a cada dia',
      description: 'O <strong>elobrain</strong> gerencia quais conhecimentos você já está dominando e quais ainda precisam de reforço, reordenando os cartões diariamente'
    }
  ]

  signUpCall: Explanation = {
    imageUrl: 'assets/images/downloading.png',
    imageAlt: 'Desenho de uma pessoa com aparência travada esquecendo de algo',
    imageAnimation: 'floating',
    title: 'Bora começar a aprender mais coisas?',
    description: [
      '<strong>Comece agora mesmo a criar seus cartões</strong> para estudar um novo idioma, uma linguagem de programação, geografia, filosofia, matemática, enfim ... qualquer coisa!',
      'Através de uma inteligência artificial iremos mandar os cartões que você precisa relembrar!',
      '<strong>Utilize o elobrain gratuitamente!</strong>'
    ],
    buttonAction: 'signin',
    buttonText: 'Clique aqui para começar!'
  }


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

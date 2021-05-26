import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viagens',
  templateUrl: './viagens.page.html',
  styleUrls: ['./viagens.page.scss'],
})
export class ViagensPage implements OnInit {

  viagens = [
    {
      local: 'Ouro Preto',
      descricao: 'Viagem para Ouro preto de carro.',
      dataViagem: '03-06-2021',
      imagem: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/-i---i-_%286288971321%29.jpg',
    },
    {
      local: 'Mariana',
      descricao: 'Viagem para Mariana de trem.',
      dataViagem: '12-06-2021',
      imagem: 'https://cdnstatic8.com/viagensecaminhos.com/wp-content/uploads/2010/09/mariana-minas-gerais.jpg',
    },
    {
      local: 'Diamantina',
      descricao: 'Viagem para Diamantina de moto.',
      dataViagem: '26-06-2021',
      imagem: 'https://viajando.expedia.com.br/wp-content/uploads/2016/08/capa-7.jpg',
    },

  ];



  constructor() { }

  ngOnInit() {
  }

}

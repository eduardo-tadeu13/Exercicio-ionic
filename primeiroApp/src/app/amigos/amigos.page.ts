import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-amigos',
  templateUrl: './amigos.page.html',
  styleUrls: ['./amigos.page.scss'],
})
export class AmigosPage implements OnInit {

  amigos = [
    {
      nome: 'Santiago',
      idade: 23,
      niveldeAmizade: 1,
    },
    {
      nome: 'Dabian',
      idade: 26,
      niveldeAmizade: 2,
    },
    {
      nome: 'Augusto',
      idade: 25,
      niveldeAmizade: 3,
    },
    {
      nome: 'Dailton',
      idade: 62,
      niveldeAmizade: 6,
    },
    {
      nome: 'Oliveira',
      idade: 38,
      niveldeAmizade: 5,
    },
    {
      nome: 'Larissa',
      idade: 24,
      niveldeAmizade: 4,
    }
  ];
  constructor(public actionSheetController: ActionSheetController) { }

  async presentActionSheet(amigo) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Amigos',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Deletar',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.deleteAmigo(amigo);
          console.log('Delete clicked');
        }
      }, {
        text: 'Editar',
        icon: 'pencil',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
  ngOnInit() {
  }

  deleteAmigo(amigo) {
    this.amigos.splice(this.amigos.indexOf(amigo), 1);
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit{

  mainMenu: {
    defaultOptions: Array<any>, accessLink: Array<any>
  } = { defaultOptions: [], accessLink: [] }

  customOptions: Array<any> = []

  constructor() {}

  ngOnInit(): void {

    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil uil-home',
        router: ['/', 'auth']
      },
      {
        name: 'Buscar',
        icon: 'uil uil-search-alt',
        router: ['/', 'history']
      },
      {
        name: 'Tu biblioteca',
        icon: 'uil uil-books',
        router: ['/', 'favorites'],
        query: { hola: 'mundo' }
      }
    ]

    this.mainMenu.accessLink = [
      {
        name: 'Crear lista',
        icon: 'uil uil-plus'
      },
      {
        name: 'Canciones que te gustan',
        icon: 'uil uil-heart'
      }
    ]

    this.customOptions = [
      {
        name: 'PORTALS (Deluxe)',
        router: ['/']
      },
      {
        name: 'Mix reggaeton',
        router: ['/']
      },
      {
        name: 'phonk',
        router: ['/']
      },
      {
        name: 'Pipo',
        router: ['/']
      }
    ]
      
  }

}

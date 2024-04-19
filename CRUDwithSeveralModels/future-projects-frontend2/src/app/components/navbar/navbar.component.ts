import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
    
  items!: MenuItem[];

  activeItem!: MenuItem;

  ngOnInit() {
    this.items = [
      {label: 'Get All', icon: 'pi pi-fw pi-users', routerLink: 'getall'},
      {label: 'Get By Id', icon: 'pi pi-fw pi-user', routerLink: 'getbyid'},
      {label: 'Create', icon: 'pi pi-fw pi-user-plus', routerLink: 'create'},
      {label: 'Update', icon: 'pi pi-fw pi-pencil', routerLink: 'update'},
      {label: 'Delete', icon: 'pi pi-fw pi-user-minus', routerLink: 'delete'}
  ];
      
      this.activeItem = this.items[0];
  }
}

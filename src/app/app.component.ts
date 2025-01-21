import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConfirmationService, MessageService, PrimeNGConfig } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,ButtonModule],
  templateUrl: './app.component.html',
  providers: [MessageService, ConfirmationService]
})
export class AppComponent implements OnInit{
  title = 'estructuraProyectos';

  constructor(private primengConfig: PrimeNGConfig, private messageService: MessageService, private confirmationService: ConfirmationService){
  }
  ngOnInit(){
      // Configuración de PrimeNG
  this.primengConfig.ripple = true;
  this.primengConfig.setTranslation({
    accept: 'Aceptar',
    reject: 'Cancelar',
    choose: 'Seleccionar',
    lt: 'Menor que',
    lte: 'Menor o igual que',
    gt: 'Mayor que',
    gte: 'Mayor o igual que',
    dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mi', 'Jue', 'Vie', 'Sab'],
    monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    startsWith: 'Comienza con',
    contains: 'Contiene',
    notContains: 'No contiene',
    endsWith: 'Termina con',
    equals: 'Es igual a',
    notEquals: 'No es igual a',
    noFilter: 'Sin filtro',
    addRule: 'Agregar regla',
    is: 'Es',
    isNot: 'No es',
    before: 'Antes',
    after: 'Después',
    dateIs: 'La fecha es',
    dateIsNot: 'La fecha no es',
    dateBefore: 'Antes de',
    dateAfter: 'Después de',
    clear: 'Limpiar',
    apply: 'Aplicar',
    matchAll: 'Coincidir todo',
    matchAny: 'Coincidir cualquiera'
  });
  this.confirmationService.confirm({
    message: '¿Estás seguro de que quieres continuar?',
    header: 'Confirmación',
    icon: 'pi pi-exclamation-triangle',
    acceptLabel: 'Sí',  // Cambiar "Yes" por "Sí"
    rejectLabel: 'No',  // Cambiar "No" por "No"
  });
  this.primengConfig.zIndex = {
    modal: 1100,
    overlay: 1000,
    menu: 1000,
    tooltop: 1000
  };
  }
}

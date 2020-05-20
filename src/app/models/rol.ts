import { Menu } from './menu';

export * from './menu';
export class Rol {
    cod_rol:number;
    nombre:String;
   menus:Menu[]
constructor(){
    this.nombre="Selecciona"
    this.cod_rol=0;
}
}
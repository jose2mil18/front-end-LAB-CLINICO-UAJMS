import { Menu } from './menu';

export * from './menu';
export class Rol {
    cod_rol:number;
    nombre:string;
   menus:Menu[]
constructor(){
    this.nombre=''
    this.cod_rol=0;
}
}
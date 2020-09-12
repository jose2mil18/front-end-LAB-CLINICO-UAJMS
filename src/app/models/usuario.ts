import {Rol} from './rol';
import {Personal} from './personal';
export class Usuario {
 personal_laboratorio:Personal;
    login: string;
    password: string;
    estado: string;
    cedula:string;
    nombres:string;
  rol:Rol
    token: Usuario;
 
  constructor(){
    this.nombres=""
   this.rol=new Rol()

    this.login='';
    this.password='';
    this.estado='';
    this.cedula='';
    
    this.personal_laboratorio=new Personal()

  }
}
import {Rol} from './rol';
import {Personal} from './personal';
export class Usuario {
 personal_laboratorio:Personal;
    login: string;
    password: string;
    estado: string;
    cedula:String;
    nombres:string;
  roles:Rol[]
    token: Usuario;
    
  constructor(){
    this.roles=[]
    this.roles[0]=new Rol();

    this.login='';
    this.password='';
    this.estado='';
    this.cedula='';
    
    this.personal_laboratorio=new Personal()

  }
}
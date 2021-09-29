
import { Pipe, PipeTransform} from '@angular/core'


@Pipe({
    name : 'mayusculas', // este es el nombre que le quiero dar a my pipe

})
export class MayusculasPipe implements PipeTransform{ //necesitamos implementar pipe transform , que es el metodo que se va a ejecutar cuando alguien implemente mi pipe mayusculas pipe

    // transform(value: any, ...args: any[]) {
    //     throw new Error('Method not implemented.');
    // }

    //ejemplo de un pipe valid 
    transform(valor : string , enMayuscula : boolean = true) : string{

        // if(enMayuscula){
        //     return valor.toUpperCase();
        // }

        // return valor.toLocalLowerCase();

        return enMayuscula ? valor.toUpperCase() : valor.toLocaleLowerCase();
    }

}
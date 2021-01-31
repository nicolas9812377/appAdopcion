import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arreglo: any[], texto: String): any[] {
    if (texto === '') {
      return arreglo;
    }
    texto=texto.toLowerCase()

     return arreglo.filter(item =>{
      return item.nombre.toLowerCase()
      .includes(texto);
    });
  }

}

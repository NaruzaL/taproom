import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './keg.model';

@Pipe({
  name: "abv",
  pure: false
})


export class AbvPipe implements PipeTransform {
  transform(input: Keg[], filterByAbv){
    var output: Keg[] = [];
    if(filterByAbv === "allKegs"){
      return input;
    }
    else {
      for (var i = 0; i< input.length; i++){
      if (input[i].abv > 5){
        output.push(input[i]);
      }
    }
      return output;
    }
  }
}

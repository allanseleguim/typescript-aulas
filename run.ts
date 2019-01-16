import { Dao } from './dao';
import { Animal } from './../07-aula-classes/animal';
import { Cavalo } from './../07-aula-classes/cavalo';


let dao: Dao<Animal> = new Dao<Animal>();
let animal: Animal = new Animal('Rex');

dao.insert(animal); 
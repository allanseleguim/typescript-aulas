"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dao_1 = require("./dao");
var animal_1 = require("./../07-aula-classes/animal");
var dao = new dao_1.Dao();
var animal = new animal_1.Animal('Rex');
dao.insert(animal);
//# sourceMappingURL=run.js.map
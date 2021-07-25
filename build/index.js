"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumberCollectrion_1 = require("./NumberCollectrion");
var CharacterCollection_1 = require("./CharacterCollection");
var LinkedList_1 = require("./LinkedList");
var numberCollection = new NumberCollectrion_1.NumbersCollection([10, 0, -1, 11]);
numberCollection.sort();
var characters = new CharacterCollection_1.CharacterCollection('cbAA');
characters.sort();
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(5);
linkedList.add(4);
linkedList.add(100);
linkedList.add(74);
linkedList.sort();
// const sorter = new Sorter(numberCollection);
// const sorterC = new Sorter(characters);
// const sorterL = new Sorter(linkedList);
// sorter.sort();
// sorterC.sort();
// sorterL.sort();
console.log(numberCollection.data);
console.log(characters.data);
linkedList.print();

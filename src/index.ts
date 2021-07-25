import {Sorter} from './sorter';
import { NumbersCollection } from './NumberCollectrion';
import { CharacterCollection } from './CharacterCollection';
import { LinkedList } from './LinkedList';

const numberCollection = new NumbersCollection([10,0,-1,11]);
numberCollection.sort();
const characters = new CharacterCollection('cbAA');
characters.sort();
const linkedList = new LinkedList();

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
linkedList.print()

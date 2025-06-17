import {greetUser} from './module1.js';
import {userName, getUser } from './module2.js';
console.log({userName});
console.log({greetUser: greetUser()})
console.log({getUser: getUser()})
import hey from './index.js'


console.log(hey.generateUID('Keophora', 'Silvius')); 
console.log(hey.addAccount(["Keophora", "Silvius", "keosil@gmail.com", 24])); // true
console.log(hey.addAccount(["Bruteforce", "", "iloverocks@gmail.com", 23])); //empty string
console.log(hey.addAccount(["Franzine", "Fire", "notanarsonist@gmail.com", 17])); //below 18
console.log(hey.addAccount(["Zvezda", "Stars", "rockstarbaby", 29])); //not valid email
console.log(hey.addAccount(["Ivania", "Marovich", "ivich@gmail.com", 24])); //true



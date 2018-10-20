import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(() => {
  /*
  class Person {
    constructor(name = 'Anonymous', age = 0){
      this.name = name
      this.age = age
    }
    getGreeting(){
      return `Hi! I'm ${this.name}`
    }
    getPersonGreeting(){
      return `${this.name} is ${this.age} year(s) old`
    }
  }

  class Programmer extends Person {
    constructor(name, age, prefLang){
      super(name, age)
      this.prefLang = prefLang
    }
    getGreeting(){
      if(this.prefLang){
       return `Hi I am ${this.name}. I am a ${this.prefLang} developer`
     }else{
       return super.getGreeting()
     }
    }
  }

  let Dave = new Programmer('Dave', 21, )
  console.log(Dave.getGreeting())
  */

});

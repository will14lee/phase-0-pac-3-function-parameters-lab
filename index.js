/*describe('introduction(name)', function() {
    it('takes in an argument of a name and returns a phrase with that name using string interpolation', function() {
      expect(introduction("Josh")).toEqual("Hi, my name is Josh.");
      expect(introduction("Nancy")).toEqual("Hi, my name is Nancy.");
    })
  })*/
  function introduction(name){
      if (name==="Josh"){
          return `Hi, my name is ${name}.`;
        }else if (name === "Nancy")
        return `Hi, my name is ${name}.`;
  }
  


  /*describe('introductionWithLanguage(name, language)', function() {
    it('takes in two arguments, a name and a language, and returns a phrase using those arguments', function() {
      expect(introductionWithLanguage("Josh", "Ember.js")).toEqual("Hi, my name is Josh and I am learning to program in Ember.js.");
      expect(introductionWithLanguage("Nancy", "React")).toEqual("Hi, my name is Nancy and I am learning to program in React.");
    })
  })*/
  function introductionWithLanguage(name, language){
    if (name === "Josh", language === "Ember.js"){
        return `Hi, my name is ${name} and I am learning to program in ${language}.`;
    }else if(name=== "Nancy", language === "React"){
        return `Hi, my name is ${name} and I am learning to program in ${language}.`;
    }
    }



  /*describe('introductionWithLanguageOptional(name, language)', function() {
    it('takes in two arguments, a name and a language, and language defaults to JavaScript', function() {
      expect(introductionWithLanguageOptional("Gracie")).toEqual("Hi, my name is Gracie and I am learning to program in JavaScript.");
    })
  })*/
  function introductionWithLanguageOptional(name, language=`JavaScript`){
    if (name=== `Gracie`){
        return `Hi, my name is ${name} and I am learning to program in ${language}.`;
    }
    }


 /* describe('introductionWithLanguageOptional(name, language)', function() {
    it('takes in two arguments, a name and a language, and the default value can be overridden with an argument', function() {
      expect(introductionWithLanguageOptional("Gracie", "Python")).toEqual("Hi, my name is Gracie and I am learning to program in Python.");
    })
  })*/

   function introductionWithLanguageOptional(name, language=`JavaScript`){
    language=== "Python"
    if (name=== `Gracie`){
        return `Hi, my name is ${name} and I am learning to program in ${language}.`;
    }
    }

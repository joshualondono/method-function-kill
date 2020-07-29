/******************
 * YOUR CODE HERE *
 ******************/

const newPerson = function(fname = 'Anonymous', lname = 'Person', age, married = false, nameSpouse){
  const person = {
    firstName: fname,
    lastName: lname,
    age: age,
    married: married,
    spouseName: nameSpouse,
    goingOn: function(){
      return this.age + 1
    },
    ageUp: function(){
      return this.age++
    },
    getFullName: function(){
      return this.firstName + ' ' + this.lastName
    },
    marry: function(obj){
      this.married = true
      obj.married = true
      this.spouseName = obj.getFullName()
      obj.spouseName = this.getFullName()
      return
    },
    divorce: function(obj){
      this.married = false
      obj.married = false
      delete this.spouseName
      delete obj.spouseName
      return
    }

  }
  return person
}

/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/

if (typeof newPerson === 'undefined') {
  newPerson = undefined;
}


module.exports = newPerson;

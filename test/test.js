
const expect = require('chai').expect
const platzom = require('..').default

// Aqui le decimos que vamos a realizarle test a platzom
describe('#platzom', function(){

  it('if translation end in "ar", you have to delete these two letters', function(){
    const translation = platzom('Programar')
    expect(translation).to.equal('Program')
  })

  it('if translation start with "z", you have to add this letter "pe" a the end', function(){
    const translation1 = platzom('Zorrope')
    const translation2 = platzom('Zarppe')
    expect(translation).to.equal('Zorrope')
    expect(translation).to.equal('Zarppe')
  })

  it('if translation has a length mayor a ten, you have to separate the word at the middle with this character "-"', function(){
    const translation = platzom('abecedario')
    expect(translation).to.equal('abece-dario')
  })

  it('if translation is a palindrome, you have to print the word intercalate letter by letter in uppercase and lowercase', function(){
    const translation = platzom('sometemos')
    expect(translation).to.equal('SoMeTeMoS')
  })

})
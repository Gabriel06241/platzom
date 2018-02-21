# Platzom

Platzom es un idioma inventado para el [Curso de Javascript](https://platzi.com/js) de [Platzi](https://platzi.com), el mejor lugar de educacion online

## Descripcion del idioma

- if translation end in "ar", you have to delete these two letters
- if translation start with "z", you have to add this letter "pe" a the end
- if translation has a length mayor a ten, you have to separate the word at the middle with this character "-"
- if translation is a palindrome, you have to print the word intercalate letter by letter in uppercase and lowercase

## Instalacion

```
npm install platzom
```

## Uso

```
import platzom from 'platzom'

console.log(platzom('Programar')) // Program
console.log(platzom('Zorro')) // Zorrope
console.log(platzom('Zarpar')) // Zarparpe
console.log(platzom('abecedario')) // abece-dario
console.log(platzom('sometemos')) // SoMeTeMoS
```

## Creditos
- [Gabriel Perez](https://github.com/Gabriel06241)

## Licencia
[MIT](https://opensource.org/licenses/MIT)
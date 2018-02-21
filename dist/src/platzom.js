export default function platzom(str) {
  let translation = str;

  // if translation is a palindrome, you have to print the word intercalate letter by letter in uppercase and lowercase
  const reverse = str => str.split('').reverse().join('');
  const lowerUpper = str => {
    const strLength = str.length;
    let translation = '';
    let capitalize = true;
    for (let i = 0; i < strLength; ++i) {
      const char = str.charAt(i);
      translation += capitalize ? char.toUpperCase() : char.toLowerCase();
      capitalize = !capitalize;
    }
    return translation;
  };

  if (str == reverse(str)) {
    return lowerUpper(str);
  }

  // if translation end in "ar", you have to delete these two letters
  if (str.toLowerCase().endsWith('ar')) {
    translation = translation.slice(0, -2);
  }

  // if translation start with "z", you have to add this letter "pe" a the end
  if (str.toLowerCase().startsWith('z')) {
    translation += 'pe';
  }

  // if translation has a length mayor a ten, you have to separate the word at the middle with this character "-"
  let translationLength = translation.length;
  if (translationLength >= 10) {
    const firstHalf = translation.slice(0, Math.round(translationLength / 2));
    const secondHalf = translation.slice(Math.round(translationLength / 2));
    translation = `${firstHalf}-${secondHalf}`;
  }

  return translation;
}
function palindrome(str) {
  str = str.toLowerCase();
  str = str.replace(/[^a-z0-9]/gi, '');
  let chars = str.split('');
  chars.reverse();
  const reversed = chars.join('');
  return str === reversed;
}

console.log(palindrome("e&&  Yes"));

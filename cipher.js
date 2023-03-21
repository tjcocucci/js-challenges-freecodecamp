const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const alphabetArray = alphabet.split("");

function replacement(char) {
  const alphabetLength = alphabetArray.length;
  return alphabetArray[
    (alphabetArray.findIndex((c) => c == char) + 13) % alphabetLength
  ];
}

function rot13(str) {
  const decoded = str.replace(/[A-Z]/gi, replacement);
  console.log(decoded);
  return decoded;
}

rot13("SERR PBQR PNZC");

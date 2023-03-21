const regExp =
  /^1{0,1}[ ]{0,1}(\d{3}[-]{0,1}|\(\d{3}\))[ -]{0,1}\d{3}[ |-]{0,1}\d{4}$/gi;

function telephoneCheck(str) {
  return regExp.test(str);
}

telephoneCheck("555-555-5555");

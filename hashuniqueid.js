const alphabetSize = 36;
const primeMultiplier = 37;

const hashTo7Digit = s => {
  const MOD = 10 ** 7;
  let hash = 0, power = 1;
  for (const ch of s) {
    const code = ch.charCodeAt(0);
    let val;
    if (code >= 48 && code <= 57) { // digits 0-9
      val = code - 48 + 1;
    } else if (code >= 65 && code <= 90) { // uppercase A-Z
      val = code - 65 + 11;
    } else if (code >= 97 && code <= 122) { // lowercase a-z
      val = code - 97 + 11;
    } else {
      val = 0;
    }

    hash = (hash + val * power) % MOD;
    power = (power * primeMultiplier) % MOD;
  }
  return hash;
};

console.log(hashTo7Digit("TGS1100"));

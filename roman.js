const thresholds = [1, 10, 100, 1000, 10000];
const symbols = ["I", "V", "X", "L", "C", "D", "M", "Z"];

function getThresholdIndex(num) {
  let index = 0;
  if (
    num >
    thresholds[thresholds.length - 1] * 3 +
      thresholds[thresholds.length - 1] -
      1
  ) {
    return null;
  }
  thresholds.slice(1, thresholds.length - 1).forEach((t, i) => {
    if (num >= t) {
      index++;
    }
  });
  return index;
}

function getThreshold(num) {
  return thresholds[getThresholdIndex(num)];
}

function convertToRoman(num) {
  const thresholdIndex = getThresholdIndex(num);
  const threshold = thresholds[thresholdIndex];

  const unitSymbol = symbols[2 * thresholdIndex];
  const fiveSymbol = symbols[2 * thresholdIndex + 1];
  const tenSymbol = symbols[2 * thresholdIndex + 2];
  const q = Math.floor(num / threshold);

  let str = "";
  if (q == 0) {
    str = "";
  } else if (1 <= q && q <= 3) {
    str = unitSymbol.repeat(q);
  } else if (q == 4) {
    str = unitSymbol + fiveSymbol;
  } else if (q == 5) {
    str = fiveSymbol;
  } else if (6 <= q && q <= 8) {
    str = fiveSymbol + unitSymbol.repeat(q - 5);
  } else {
    str = unitSymbol + tenSymbol;
  }

  if (threshold > 1) {
    return str + convertToRoman(num - q * threshold);
  } else {
    return str;
  }
}

Array.from({ length: 60 }, (_, i) => i + 999).map((i) =>
  console.log(i, convertToRoman(i))
);

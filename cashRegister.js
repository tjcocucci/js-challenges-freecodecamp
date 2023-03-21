const statusObj = {
  INSUFFICIENT_FUNDS: "INSUFFICIENT_FUNDS",
  CLOSED: "CLOSED",
  OPEN: "OPEN",
};

const currency = [
  { name: "HUNDRED", value: 100 },
  { name: "TWENTY", value: 20 },
  { name: "TEN", value: 10 },
  { name: "FIVE", value: 5 },
  { name: "ONE", value: 1 },
  { name: "QUARTER", value: 0.25 },
  { name: "DIME", value: 0.1 },
  { name: "NICKEL", value: 0.05 },
  { name: "PENNY", value: 0.01 },
];

function calculateChange(fullChange, cid) {
  let status;
  let change = [];

  let remaining = Math.floor(fullChange * 100);

  const cidReversed = cid.reverse();

  for (let index = 0; index < cid.length; index++) {
    const currencyValue = currency[index].value * 100;
    if (remaining >= currencyValue) {
      const maxBillCount = Math.floor(remaining / currencyValue);
      console.log(cidReversed[index][1] * 100)
      const registerBillCount = Math.floor(
        (cidReversed[index][1] * 100) / currencyValue
      );
      const changeBillCount = Math.min(maxBillCount, registerBillCount);

      const amountInCurrentBill = changeBillCount * currencyValue;
      remaining -= amountInCurrentBill;
      change.push([currency[index].name, amountInCurrentBill / 100]);
    }
  }

  remaining /= 100;

  if (remaining > 0) {
    status = statusObj.INSUFFICIENT_FUNDS;
    change = [];
  } else if (remaining == 0) {
    status = statusObj.OPEN;
    change = change;
  } else {
    return console.error("Error");
  }

  return { status: status, change: change };
}

function checkCashRegister(price, cash, cid) {
  let status;
  let change;
  const fullChange = cash - price;

  const initialValue = 0;
  const sumWithInitial = cid.reduce(
    (accumulator, element) => accumulator + element[1],
    initialValue
  );

  if (fullChange > sumWithInitial) {
    status = statusObj.INSUFFICIENT_FUNDS;
    change = [];
  } else if (fullChange == sumWithInitial) {
    status = statusObj.CLOSED;
    change = cid;
  } else {
    ({ status, change } = calculateChange(fullChange, cid));
  }
  return { status: status, change: change };
}

console.log(
  checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);

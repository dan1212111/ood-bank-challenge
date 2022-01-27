const BankAccount = require("../src/BankAccount.js")
const Deposit = require("../src/Deposit.js")
const Withdrawal = require("../src/Withdrawal.js")

describe("BankAcoount", () => {
  let bankAccount;

  beforeEach(() => {
    bankAccount = new BankAccount();
  });

  it("deposit into BankAccount", () => {
    // set up
    const expected = new Deposit(150, "12/09/2024", "12am")

    // execute
    const result = bankAccount.depositMoney(150, "12/09/2024", "12am")

    // verify
    expect(result).toEqual(expected);

  });

  it("withdraw from BankAccount", () => {
    // set up
    const expected = new Withdrawal (100)

    // execute
    const result = bankAccount.withdrawMoney(100)
    // verify
    expect(result).toEqual(expected);

  });

  it("lookup total deposited", () => {
    // set up
    const expected = `£ 250`

    // execute
    bankAccount.depositMoney(100)
    bankAccount.depositMoney(100)
    bankAccount.depositMoney(50)
    const result = bankAccount.lookUpTotalDeposit()

    // verify
    expect(result).toEqual(expected);

  });

  it("lookup total widthdrawn", () => {
    // set up
    const expected = `£ -100`

    // execute
    bankAccount.withdrawMoney(50)
    bankAccount.withdrawMoney(30)
    bankAccount.withdrawMoney(20)
    const result = bankAccount.lookUpTotalWithdrawn()
    
    // verify
    expect(result).toEqual(expected);

  });
});
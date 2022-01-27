const BankAccount = require("../src/BankAccount.js");
const BankStatement = require("../src/bankStatement.js");

describe("BankAcoount", () => {
  let bankAccount;
  let bankStatement

  beforeEach(() => {
    bankAccount = new BankAccount();
    bankStatement = new BankStatement(bankAccount)
  });

  it("print bank statement", () => {
    // set up



    // execute
    bankAccount.depositMoney(150)
    bankAccount.withdrawMoney(150)
    bankAccount.lookUpTotalDeposit()
    bankAccount.lookUpTotalWithdrawn()
    const result = bankStatement.printStatement()

    // verify
    expect(result).toEqual(expected);

  });
});
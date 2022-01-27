const BankStatement = require("../src/bankStatement.js")

describe("BankStatement", () => {
  let bankStatement;

  beforeEach(() => {
    bankStatement = new BankStatement();
  });

  it("deposit into BankAccount", () => {
    // set up
    // const expected = new Deposit(150, "12/09/2024", "12am")

    // execute
    bankStatement.printStatement()

    // verify
    expect(result).toEqual(expected);

  });
});
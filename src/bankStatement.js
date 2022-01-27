const BankAccount = require("../src/BankAccount.js")
const Deposit = require("../src/Deposit.js")
const Withdrawal = require("../src/Withdrawal.js")

class BankStatement {

    printStatement (){
    `date    || credit  || debit  || balance
    ${this.widthdrawStatement}
    ${this.totalDeposited}`
}
}

module.exports = BankStatement
const Deposit = require("./Deposit.js")
const Withdrawal = require("./Withdrawal.js")

class BankAccount {

    constructor () {
        this.depositStatements = []
        this.withdrawStatements = []
        this.totalWithdrawn = 0
        this.totalDeposited = 0
    }

    depositMoney(money) {
        const deposit = new Deposit(money)
        this.depositStatements.push(deposit)
        this.totalDeposited = this.totalDeposited + money
        return deposit
    }

    withdrawMoney(money) {
        const withdraw = new Withdrawal(money)
        this.withdrawStatements.push(withdraw)
        this.totalWithdrawn = this.totalWithdrawn + money
        return withdraw
    }

    lookUpTotalDeposit() {
        return `£ ${this.totalDeposited}`
        
    }

    lookUpTotalWithdrawn() {
        return `£ -${this.totalWithdrawn}`
        
    }

}


module.exports = BankAccount
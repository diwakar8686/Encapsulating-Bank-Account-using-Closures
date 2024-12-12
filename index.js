function createBankAccount(initialBalance) {
    let balance = initialBalance;
    return {
        deposit(amount) {
            if (amount > 0) {
                balance += amount;
                return balance;
            } else {
                throw new Error("Deposit amount must be positive.");
            }
        },
        withdraw(amount) {
            if (amount > 0) {
                if (amount <= balance) {
                    balance -= amount;
                    return balance;
                } else {
                    throw new Error("Insufficient funds.");
                }
            } else {
                throw new Error("Withdrawal amount must be positive.");
            }
        },
        getBalance() {
            return balance;
        }
    };
}
const account = createBankAccount(100);

console.log(account.deposit(50));  
console.log(account.withdraw(30)); 
console.log(account.getBalance()); 
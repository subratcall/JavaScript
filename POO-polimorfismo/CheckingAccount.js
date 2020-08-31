import { Customer } from "./Customer.js";
export class CheckingAccount {
    static accountsCounter = 0;
    set client(value){
        if (value instanceof Customer) {
            this._client = value;   
        }
    }
    get client(){
        return this._client;
    }
    get balance(){
        return this._balance;
    }
    constructor(agency, client){
        this.agency = agency;
        this.client = client;
        this._balance = 0;
        CheckingAccount.accountsCounter++;
    }
    withdraw(value){
        if (value > this._balance || value <= 0) return;
        this._balance -= value;
    }
    deposit(value){
        if(value <= 0) return;
        this._balance += value;
    }
    transfer(value, checkingAccount){
        const withdrawal = this.withdraw(value);
        checkingAccount.deposit(value);
    }
};
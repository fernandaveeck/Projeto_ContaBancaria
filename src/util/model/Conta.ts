import { log } from "console";

export class Conta {

    private _numero: number;
    private _agencia: number;
    private _tipoDeConta: number;
    private _titular: string;
    private _saldo: number;

    constructor(numero: number, agencia: number, tipoDeConta: number, titular: string, saldo: number) {
        this._numero = numero;
        this._agencia = agencia;
        this._tipoDeConta = tipoDeConta;
        this._titular = titular;
        this._saldo = saldo;
    }

    public get numero() {
        return this._numero;
    }
    public set numero(numero: number) {
        this._numero = numero;
    }

    public get agencia() {
        return this._agencia;
    }
    public set agencia(agencia: number) {
        this._agencia = agencia;
    }

    public get tipoDeConta() {
        return this._tipoDeConta;
    }
    public set tipoDeConta(tipoDeConta: number) {
        this._tipoDeConta = tipoDeConta;
    }

    public get titular() {
        return this._titular;
    }
    public set titular(titular: string) {
        this._titular = titular;
    }

    public get saldo() {
        return this._saldo;
    }
    public set saldo(saldo: number) {
        this._saldo = saldo;
    }

    public sacar(valor: number): boolean {
        if (this._saldo < valor) {
            console.log("\nSaldo Insuficiente!");
            return false;
        }
        this._saldo = this._saldo - valor;
        return true;
    }

    public depositar(valor: number): void {
        this._saldo = this._saldo + valor;
    }

    public vizualizar(): void {

        let tipoDeConta: string = "";

        switch (this._tipoDeConta) {
            case 1:
                tipoDeConta = "Conta Corrente";
                break;

            case 2:
                tipoDeConta = "Conta Poupança";
                break;
        }
        console.log("\n****************************************");
        console.log("            DADOS DA CONTA             ");
        console.log("*****************************************");
        console.log("                                         ");
        console.log(`Numero da Conta: ${this._numero}`);
        console.log(`Agência: ${this._agencia}`);
        console.log(`Tipo da Conta: ${this.tipoDeConta}`);
        console.log(`Titular: ${this._titular}`);
        console.log(`Saldo: ${this._saldo.toFixed(2)}`);
        console.log("******************************************");
    }
}
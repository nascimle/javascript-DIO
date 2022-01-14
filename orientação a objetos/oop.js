let conta = class ContaBancaria{
    constructor(agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;

    }

    get saldo(){
        return this._saldo;
    }

    set saldo(valor){
        this._saldo = valor;
    }

    sacar(valorSacado){
        if(this._saldo < valorSacado){
            console.log("Sem saldo.");
        }
        else{
           return this._saldo -= valorSacado;
        
        }
    }

    depositar(valorDepositado){
       return this._saldo += valorDepositado;

    }
}


class ContaCorrente extends conta{
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero, saldo);
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }

    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }
}

class ContaPoupanca extends conta{
    constructor(agencia, numero){
        super(agencia, numero, saldo);
        this.tipo = 'poupança';
        
    }
}

class ContaUniversitaria extends conta{
    constructor(agencia, numero){
        super(agencia, numero, saldo);
        this.tipo = 'universitária';
        
    }

    sacar(valorSacado){
        if(valorSacado > 500){
            return "Valor máximo para saque neste tipo de conta é R$500,00";
        }
        else{
           return this._saldo -= valorSacado;
        
        }
    }
}
import readlinesync = require("readline-sync");
import { colors } from './src/util/Colors';
import { Conta } from "./src/util/model/Conta";
import { ContaCorrente } from "./src/util/model/ContaCorrente";
import { ContaPoupanca } from "./src/util/model/ContaPoupanca";
import { ContaController } from "./src/controller/ContaController";

export function main() {

    let contas: ContaController = new ContaController();

    let opcao, numero, agencia, tipo, saldo, limite, aniversario: number;
    let titular: string;
    const tiposContas = ["Conta Corrente", "Conta Poupanca"];

    console.log("\nCriar Contas\n");

    let contaCorrente1: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 123, 1, "João da Silva", 1000, 100.0);
    contas.cadastrar(contaCorrente1);

    let contaCorrente2: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 124, 1, "Maria da Silva", 2000, 100.0);
    contas.cadastrar(contaCorrente2);

    let contaPoupanca1: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Mariana dos Santos", 4000, 12);
    contas.cadastrar(contaPoupanca1);

    let contaPoupanca2: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Juliana Ramos", 8000, 15);
    contas.cadastrar(contaPoupanca2);

    contas.listarTodas();


    while (true) {

        console.log(colors.bg.black, colors.fg.yellow,
            "\n*****************************************************");
        console.log("                                                     ");
        console.log("                BANCO DO BRAZIL COM Z                ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Listar todas as Contas               ");
        console.log("            3 - Buscar Conta por Numero              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir valores entre Contas      ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ", colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 9) {
            console.log(colors.fg.greenstrong, "\nBanco do Brazil com Z - O seu Futuro começa aqui!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong, "\n\nCriar Conta\n\n", colors.reset);
                agencia = readlinesync.questionInt("Digite o Numero da agencia: ");
                titular = readlinesync.question("Digite o nome do Titular da Conta: ");
                tipo = readlinesync.keyInSelect(tiposContas, "Digite o tipo da Conta: ", { cancel: false }) + 1;
                saldo = readlinesync.questionFloat("Digite o saldo da Conta: R$");

                switch (tipo) {
                    case 1:
                        limite = readlinesync.questionFloat("Digite o Limite da Conta: R$");
                        contas.cadastrar(new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite));
                        break;

                    case 2:
                        aniversario = readlinesync.questionInt("Digite o dia do aniversario da Conta Poupanca: ");
                        contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario));
                        break;
                }
                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong, "\n\nListar todas as Contas\n\n", colors.reset);
                contas.listarTodas();

                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong, "\n\nConsultar dados da Conta - por número\n\n", colors.reset);
                numero = readlinesync.questionInt("Digite o numero da Conta: ");
                contas.procurarPorNumero(numero);

                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong, "\n\nAtualizar dados da Conta\n\n", colors.reset);
                numero = readlinesync.questionInt("Digite o numero da Conta: ");

                let conta = contas.buscarNoArray(numero);
                if (conta != null) {
                    agencia = readlinesync.questionInt("Digite o Numero da agencia: ");
                    titular = readlinesync.question("Digite o nome do Titular da Conta: ");
                    tipo = conta.tipo;
                    saldo = readlinesync.questionFloat("\nDigite o Saldo da Conta: ");

                    switch (tipo) {
                        case 1:
                            limite = readlinesync.questionFloat("Digite o Limite da Conta: R$");
                            contas.atualizar(new ContaCorrente(numero, agencia, tipo, titular, saldo, limite));
                            break;

                        case 2:
                            aniversario = readlinesync.questionInt("Digite o dia do aniversario da Conta Poupanca: ");
                            contas.atualizar(new ContaPoupanca(numero, agencia, tipo, titular, saldo, aniversario));
                            break;
                    }
                } else {
                    console.log(colors.fg.red, `\nA Conta numero ${numero} não foi encontrada!`, colors.reset);
                }
                keyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong, "\n\nApagar uma Conta\n\n", colors.reset);
                numero = readlinesync.questionInt("Digite o numero da Conta: ");
                contas.deletar(numero);

                keyPress()
                break;
                
            case 6:
                console.log(colors.fg.whitestrong, "\n\nSaque\n\n", colors.reset);

                keyPress()
                break;
            case 7:
                console.log(colors.fg.whitestrong, "\n\nDepósito\n\n", colors.reset);

                keyPress()
                break;
            case 8:
                console.log(colors.fg.whitestrong, "\n\nTransferência entre Contas\n\n", colors.reset);

                keyPress()
                break;
            default:
                console.log(colors.fg.whitestrong, "\nOpção Inválida!\n", colors.reset);

                keyPress()
                break;
        }
    }

}

function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Fernanda Silveira Veeck");
    console.log("fernandaveeck@gmail.com");
    console.log("https://github.com/fernandaveeck");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();
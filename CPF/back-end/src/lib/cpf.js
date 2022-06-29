function calculo(cpf, numero){
    let total = 0;
    let soma = 0;
    let resto = 0;
    let d = 0;
    
    let inicial = numero - 1;
    let final = numero + 8;
    
    for(let i = inicial; i < final; i++){
        if(inicial === 1){
            total = cpf[i] * (11-i);
        }else{
            total = cpf[i] * (10-i);
        }
        soma += total;
    }
    
    resto = soma % 11;
    d = resto == 0 || resto == 1 ? 0 : 11 - resto;
    return d;
}

const verificador = function(cpf){
    let cpf1 = calculo(cpf, 1);    
    let cpf2 = calculo(cpf, 2);    
    
    let cpfInformado = cpf[9]+cpf[10];
    let cpfCalculado = cpf1 + '' + cpf2;

    let cpfRegiao = cpf[8];

    if (cpfInformado === cpfCalculado){
        if(cpfRegiao==="1"){
            return "Válido:DF, GO, MS, MT e TO";
        } else if(cpfRegiao==="2"){
            return "Válido: AC, AM, AP, PA, RO e RR";
        }else if(cpfRegiao==="3"){
            return "Válido: CE, MA e PI";
        }else if(cpfRegiao==="4"){
            return "Válido: AL, PB, PE, RN";
        }else if(cpfRegiao==="5"){
            return "Válido: BA e SE";
        }else if(cpfRegiao==="6"){
            return "Válido: MG";
        }else if(cpfRegiao==="7"){
            return "Válido: ES e RJ";
        }else if(cpfRegiao==="8"){
            return "Válido: SP";
        }else if(cpfRegiao==="9"){
            return "Válido: PR e SC";
        }else if(cpfRegiao==="0"){
            return "Válido: RS";
        }
    } else {
        return "Inválido";
    }
}

module.exports = verificador;
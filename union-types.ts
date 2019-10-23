type Sumparams = string | number;
type ResultSum = number;

function sum(num1: Sumparams, num2: Sumparams):ResultSum {
    return Number(num1) + Number(num2);
}
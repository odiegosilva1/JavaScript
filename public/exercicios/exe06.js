//Condições aninhadas

var idade = 65
console.log(`Você tem ${idade} anos`)
if (idade > 16) {
    console.log('já vota')   
} else if (idade < 18 || idade > 65 ) {
    console.log('voto opcinonal')
} else {
    console.log('voto obrigatório')
} 


/*
 Operadores lógicos e relacionais em JavaScript:

**Operadores Relacionais:**
1. `==` - Igual a
2. `===` - Estritamente igual a (valor e tipo)
3. `!=` - Diferente de
4. `!==` - Estritamente diferente de (valor e tipo)
5. `>` - Maior que
6. `<` - Menor que
7. `>=` - Maior ou igual a
8. `<=` - Menor ou igual a

**Operadores Lógicos:**
1. `&&` - E lógico (AND)
2. `||` - Ou lógico (OR)
3. `!` - Negação lógica (NOT)

**Operadores de Atribuição e Comparação:**
1. `=` - Atribuição
2. `+=` - Atribuição de adição
3. `-=` - Atribuição de subtração
4. `*=` - Atribuição de multiplicação
5. `/=` - Atribuição de divisão
6. `%=` - Atribuição de resto
7. `**=` - Atribuição de exponenciação

**Operadores de Incremento e Decremento:**
1. `++` - Incremento
2. `--` - Decremento

*/
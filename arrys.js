const valores = [7.7, 8.9, 6.3, 9.2] // Um arrys é uma variavel que recebe mais de um valor dentro de si, esses valores podem ser acessados pelo Indice[]
console.log(valores [0], valores[3]) // /\ /\
console.log(valores[4]) // Undefined por não ser definido 
valores[4] = 10
console.log(valores [4]);
console.log(valores.length) // MOnstra quantos indices estão ocupados
valores.push({id: 3}, false, null, 'teste') // Arrys cabe tudo 
console.log(valores);
console.log(valores.pop()); // puxa o ultimo indice do Arrys 
delete valores[0] // Deleta o indice indicado
console.log(valores);

console.log(typeof valores); // Um Arry é um objeto
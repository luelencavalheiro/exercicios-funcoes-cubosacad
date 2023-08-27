![](./../capa_readme_luelencavalheiro.gif)

# Exerc.01 - CubosAcademy - Julho/23

## Sistema de correção de provas

Nesse exercício vamos simular um sistema de correção de provas e imprimir a quantidade de acertos com a nota do aluno.

**a)** Declare uma função de nome `corrigirProva` que tenha apenas um parâmetro chamado `prova`. Faça commit do resultado.

**b)** Sabendo que o parâmetro `prova` será sempre um objeto com o seguinte formato:

```javascript=
const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
}
```

Implemente a função `corrigirProva` de modo que, ao receber um objeto como este como parâmetro, o resultado seja o seguinte.

```
O aluno(a) João acertou 3 questões e obteve nota 6
```

## ✅ O Que Eu Aprendi Aqui 👇

Para resolver esse exercício, comecei criando uma FUNÇÃO. O primeiro objetivo da função era descobrir quantos acertos o aluno teve. Para isso,  usei o loop FOR para percorrer todo o array de objetos da propriedade questões. E dentro desse FOR, criei uma condicional para fazer as verificações. Em uma variável, fui adicionando a pontuação do aluno. Por fim, outra variável calculava a nota usando o operador de multiplicação. Na função, adicionei o método CONSOLE.LOG usando string template para imprimir na tela uma frase bonitinha. Chamei a função na linha 43, passando o parametro prova.


## ✅ Skills Dominadas 👩‍💻

- comandos GIT para criar e clonar repositórios
- interpretação e solução de problemas usando Javascript
- lógica de programação
- manipulação de arrays de objetos
- uso do loop for
- uso de operadores aritiméticos
- uso do string template 
- criação de função

# App de Clima

Primeiro projeto que consome uma API externa. A ideia era simples: digitar uma cidade e ver o clima. O que não era simples era fazer isso funcionar de verdade — lidar com requisição assíncrona, tratar erros, mostrar loading, e ainda deixar a interface reagir visualmente ao resultado.

O fundo muda de acordo com o clima retornado. Sol = gradiente quente. Chuva = tons frios e escuros. Noite = azul profundo.

**[→ Abrir o app](https://ogustavohs.github.io/App-Clima/)**

---

## Como funciona

Usa a API pública [wttr.in](https://wttr.in) — sem cadastro, sem chave. Digite o nome de qualquer cidade do mundo, pressione Enter ou clique em buscar. O app retorna temperatura atual, condição do tempo e ajusta o fundo dinamicamente.

Testa com: `São Paulo`, `London`, `Tóquio`, `New York`.

---

## O que tem no código

```
index.html            → estrutura principal
style.css             → glassmorphism, gradientes dinâmicos, responsivo
script.js             → fetch, tratamento de erros, lógica de fundo
```

Sem framework, sem jQuery. JavaScript puro com Fetch API e async/await.

---

## Por que esse projeto importa

Qualquer dev front-end vai trabalhar com APIs. Esse foi o primeiro passo nessa direção — entender o ciclo completo: fazer a requisição, esperar a resposta, tratar o que deu errado e atualizar a interface com o resultado.

Simples na superfície, mas foi onde o JavaScript começou a fazer sentido de verdade pra mim.

---

Feito por **[Gustavo Henrique](https://github.com/oGustavohs)** · [Portfólio](https://ogustavohs.github.io/Front-End-Developed/) · [LinkedIn](https://www.linkedin.com/in/gustavo-henrique-3916ba297/)

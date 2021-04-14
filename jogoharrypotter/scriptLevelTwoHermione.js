personageHermione();

function personageHermione() {
  var valor = parseInt(
    prompt(
      "Qual feitiço Hermione vai usar: \n" +
        "1 - Carpe Retractum \n" +
        "2 - Anapneo"
    )
  );

  while ((valor != 1) & (valor != 2)) {
    valor = parseInt(
      prompt(
        "Qual feitiço Hermione vai usar: \n" +
          "1 - Carpe Retractum \n" +
          "2 - Anapneo"
      )
    );
  }

  if (valor === 1) {
    return document.write(`<body class="gameOver">
    <section class="containerFixed">
       <div class="boxLevelGameOver">
        <div class="boxTitle">
          <h1 class="fontHag">Game Over</h1>
        </div>

        <div class="textLevel">
          <p>
          Que pena ! Escolha de feitiço errado. Mas você pode voltar ao
          início do game e tentar novamente.
          </p>
         
        </div>

        <div class="centerButton">
          <a href="index.html"
          ><button class="btn btnTransparent">Inicio</button></a
        >
        </div>
      
      </div>

      <div class="familyCrest">
        <img src="img/brasao.png" alt="Brasão" />
      </div>
      
    </section>
  </body> `);
  } else if (valor === 2) {
    document.write(` 
    <section class="containerFixed">
  <div class="boxLevel">
  <div class="boxTitle">
    <h1 class="fontHag">Desafio 3</h1>
  </div>

  <div class="textLevel">
    <p>
    Hermione salvou o Ronald porém não percebeu que ele foi
    atacado por outro bruxo a sua única opção é usar um feitiço
    que paralisa o adversário e fugir para sair vitoriosa desse combate.
    Qual será o feitiço que Hermione usará?  
    </p>
   
  </div>

  <div class="centerButton">
    <a href="levelThreeHermionePrompt.html"
    ><button class="btn btnTransparent">Desafio</button></a
  >
  </div>

</div>

<div class="familyCrest">
  <img src="img/brasao.png" alt="Brasão" />
</div>
</section>`);
  }
}

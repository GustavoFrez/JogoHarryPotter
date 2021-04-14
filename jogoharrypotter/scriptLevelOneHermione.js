personageHermione();

function personageHermione() {
  var valor = parseInt(
    prompt(
      "Qual feitiço Hermione vai usar: \n" +
        "1 - Avada Kedavra \n" +
        "2 - Aparatação"
    )
  );

  while ((valor != 1) & (valor != 2)) {
    valor = parseInt(
      prompt(
        "Qual feitiço Hermione vai usar: \n" +
          "1 - Avada Kedavra \n" +
          "2 - Aparatação"
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
          Que pena ! Escolha de feitiço errado. Mas você pode
          voltar ao início do game e tentar novamente.
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
  </body>
    
    `);
  } else if (valor === 2) {
    document.write(`
    <section class="containerFixed">
    <div class="boxLevel">
      <div class="boxTitle">
        <h1 class="fontHag">Desafio 2</h1>
      </div>

      <div class="textLevel">
        <p>
        Hermione conseguiu se teletransportar e encontrar 
        seu amigo Ronald que está sufocando devido a um engasgo
        e Hermione pode usar um feitiço para desengasga-lo. 
        Qual será o feitiço que Hermione usará?
        </p>
       
      </div>

      <div class="centerButton">
        <a href="levelTwoHermionePrompt.html"
        ><button class="btn btnTransparent">Desafio</button></a
      >
      </div>
    
    </div>

    <div class="familyCrest">
      <img src="img/brasao.png" alt="Brasão" />
    </div>
    </section> `);
  }
}

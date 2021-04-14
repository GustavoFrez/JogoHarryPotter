personageRonald();

function personageRonald() {
  var valor = parseInt(
    prompt(
      "Qual feitiço Ronald vai usar: \n" + "1 - Accio \n" + "2 - Lumos"
    )
  );

  while ((valor != 1) & (valor != 2)) {
    valor = parseInt(
      prompt(
        "Qual feitiço Ronald vai usar: \n" +
          "1 - Accio \n" +
          "2 - Lumos"
      )
    );
  }

  if (valor === 1) {
    return document.write(` 
    <section class="containerFixed">
    <div class="boxLevel">
      <div class="boxTitle">
        <h1 class="fontHag">Desafio 2</h1>
      </div>

      <div class="textLevel">
        <p>
        Agora desafiado por sua amiga Hermione, 
        Ronald tem que desarmar a amiga que se encontra com sua vara mágica. 
        Qual feitiço Ronald usará para desarmar a amiga ?
        </p>
       
      </div>

      <div class="centerButton">
        <a href="levelTwoRonaldPrompt.html"
        ><button class="btn btnTransparent">Desafio</button></a
      >
      </div>
    
    </div>

    <div class="familyCrest">
      <img src="img/brasao.png" alt="Brasão" />
    </div>
    </section>
    
    `);
  } else if (valor === 2) {
    document.write(`
    <body class="gameOver">
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
  }
}



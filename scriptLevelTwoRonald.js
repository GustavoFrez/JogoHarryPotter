personageRonald();

function personageRonald() {
  var valor = parseInt(
    prompt("Qual feitiço Ronald vai usar: \n" + "1 - Expelliarmus \n" + "2 - Avada Kedavra")
  );

  while ((valor != 1) & (valor != 2)) {
    valor = parseInt(
      prompt("Qual feitiço Ronald vai usar: \n" + "1 - Expelliarmus \n" + "2 - Avada Kedavra")
    );
  }

  if (valor === 1) {
    return document.write(`
    <section class="containerFixed">
    <div class="boxLevel">
      <div class="boxTitle">
        <h1 class="fontHag">Desafio 3</h1>
      </div>

      <div class="textLevel">
        <p>
         Agora Harry desafia Ronald para um desafio final ! 
         Harry quer que Ronald faça o seu caderno levitar de um cômodo da casa até o outro.
         Qual feitiço final que Ronald usará para ganhar o desafio dos amigos ?  
        </p>
       
      </div>

      <div class="centerButton">
        <a href="levelThreeRonaldPrompt.html"
        ><button class="btn btnTransparent">Desafio</button></a
      >
      </div>
    
    </div>

    <div class="familyCrest">
      <img src="img/brasao.png" alt="Brasão" />
    </div>
  
    `);
  } else if (valor === 2) {
    document.write(` <body class="gameOver">
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
  </body>`);
  }
}

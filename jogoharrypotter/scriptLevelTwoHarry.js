personageHarryPotter();

function personageHarryPotter() {
  var valor = parseInt(
    prompt("Qual feitiço Harry vai usar: \n" + "1 - Lumos \n" + "2 - Crucio")
  );

  while ((valor != 1) & (valor != 2)) {
    valor = parseInt(
      prompt("Qual feitiço Harry vai usar: \n" + "1 - Lumos \n" + "2 - Crucio")
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
        Ao iluminar o cômodo Harry se depara com o dementadores que
        são terríveis criaturas das trevas que irão lhe atacar, 
        Harry precisa se defender deles usando um feitiço muito poderoso
        para poder sair desse cômodo e sair vitorioso no confronto.
        Qual feitiço Harry usará para se defender?
        </p>
       
      </div>

      <div class="centerButton">
        <a href="levelThreeHarryPrompt.html"
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

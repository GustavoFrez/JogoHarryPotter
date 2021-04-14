personageHarryPotter();

function personageHarryPotter() {
  var valor = parseInt(
    prompt(
      "Qual feitiço Harry vai usar: \n" + "1 - Expelliarmus \n" + "2 - Alohomora"
    )
  );

  while ((valor != 1) & (valor != 2)) {
    valor = parseInt(
      prompt(
        "Qual feitiço Harry vai usar: \n" +
          "1 - Expelliarmus \n" +
          "2 - Alohomora"
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
        Harry conseguiu utilizar seu primeiro feitiço, 
        abriu a porta e entrou no cômodo. Porém o cômodo
        está muito escuro e Harry precisará usar outro 
        feitiço para iluminar o ambiente. 
        Qual será o feitiço que Harry usará ?
        </p>
       
      </div>

      <div class="centerButton">
        <a href="levelTwoHarryPrompt.html"
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

personageHermione();

function personageHermione() {
  var valor = parseInt(
    prompt(
      "Qual feitiço Hermione vai usar: \n" +
        "1 - Petrificus Totalus \n" +
        "2 - Accio"
    )
  );

  while ((valor != 1) & (valor != 2)) {
    valor = parseInt(
      prompt(
        "Qual feitiço Hermione vai usar: \n" +
          "1 - Petrificus Totalus \n" +
          "2 - Accio"
      )
    );
  }

  if (valor === 1) {
    return document.write(`
    <body class="champion">
    <section class="containerFixed">
      <div class="boxLevelChampion">
        <div class="boxTitle">
          <h1 class="fontHag">Parabéns você acertou todos os desafios</h1>
        </div>

        <div class="textLevel">
        <p>Agora você estará mais preparado para enfrentar os desafios desse mundo mágico.</p>
        <p> "O mundo não se divide em pessoas boas e más. Todos nós temos Luz e Trevas dentro de nós. 
          O que importa é o lado que escolhemos para agir. Isso é o que realmente somos."</p>
        <p>E para aumentar suas habilidades você pode zerar todos os personagens desse game.</p>
        </div>

        <div class="familyCrest">
          <img src="img/brasao.png" alt="Brasão" />
        </div>

        <div class="centerButton">
          <a href="index.html"
          ><button class="btn btnTransparent">Inicio</button></a
        >
        </div>
      
      </div>
    </section>
  </body>
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
  </body>`)
  }
}

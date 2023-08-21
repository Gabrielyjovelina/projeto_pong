//variavel de bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 13;
let raio = diametro / 2;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBoçinha = 6;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//váveis do oponente
let xRaquete = 5;
let yRaquete = 150;

//variáveis do oponente
let xRaqueteoponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

let colidiu = false;

//placarido jogo
let ponto;
let pontosDoOponente = 0;

// sons do jogo
let raquetada;
let trinha;

function preload(){
trinha = loanSound("trinha, mp3")
raquetada = loadSoud ("raquetada . mp3");
  ponto = loadSound("ponto.mp3");
ponto = ('ponto.mp3')
}

  function setup() {
   createCanvas ( 600,400 )
 trinha. loop () ;
  }

function draw() {
 background(0);
  mostraBolimha();
  movimentaBonha();
  verificaColuisaoBorda();
  mostraRaquete(xRaquete, Raquete);
  movimentaMinhaRaquete();
 //verificaColisaoRaquete();
  verificaColisaoRaquete(xRaquete,yRaquete);
  mostraRaquete(xRaqueteOponente , yRaqueteOponente);
  movimentaRaqueteOponente();
  verificaColisaoRaquete(xRaqueteOponente, RueteOponente);
  incluiPlacar();
  marcaPonto();
}

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
   xBolinha += velocidadeXBolinha;
   yBolinha += velocidadeyBolinha;
}

function verificaColisaoBorda(){
 if(xBolinha + raio> width  ||
    xBolinha - raio< 0){
   velocidadeXbolinha *= -1;
 }
  if (yBolinha + raio> height ||
      yBolinha - raio < 0){
     velocidadexBolinha *= -1;
  }
}

function mostraRaquete(x,y){
  rect(x,y, raqueteCmprimento,
          raqueteAltura);
}

function movimentaMinhaRaquete(){
if(keyIsDown(UP_ARROW)){
   YRaquete -= 10;
}
   if (keyIsDown(DOWN_ARROW)){
     yRaquete-= 10;
   }
}

function verificaColisaoRaquete(){
  if (xBolinha - < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete){ 
    velocidadexBolinha *= -1;
  }
}

function verificaColisaoRaquete(x, y){
        

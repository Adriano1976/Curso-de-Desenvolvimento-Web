var banners = ["img/elenco.jpg","img/filme.jpg","img/codigo-vinci.jpg"];
var bannerAtual = 0;

function trocaBanner() {
  bannerAtual = (bannerAtual + 1) % 3;
  document.querySelector('header img').src = banners[bannerAtual];
}

setInterval(trocaBanner, 4000);

var miniBanners = ["img/livro1.jpg","img/livro2.jpg","img/livro3.jpg", "img/livro4.jpg","img/livro5.jpg","img/livro6.jpg"];
var miniBannerAtual = 0;

function trocaMiniBanner() {
  miniBannerAtual = (miniBannerAtual + 1) % 6;
  document.querySelector('#livros img').src = miniBanners[miniBannerAtual];
}

setInterval(trocaMiniBanner, 4000);

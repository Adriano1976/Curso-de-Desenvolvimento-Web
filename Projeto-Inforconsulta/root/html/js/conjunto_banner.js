var banners = ["../img/banners/banner1.jpg","../img/banners/banner2.jpg","../img/banners/banner3.jpg",
              "../img/banners/banner4.jpg","../img/banners/banner5.jpg","../img/banners/banner6.jpg"];
var bannerAtual = 0;

function trocaBanner() {
  bannerAtual = (bannerAtual + 1) % 6;
  document.querySelector('header img').src = banners[bannerAtual];
}

setInterval(trocaBanner, 4000);

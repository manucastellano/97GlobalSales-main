$(document).ready(function(){
  $('.logo-carousel').slick({
      infinite: true,
      slidesToShow: 6, // Número de logos visibles a la vez
      slidesToScroll: 1, // Cantidad de logos a desplazar al avanzar
      autoplay: true, // Iniciar reproducción automática
      autoplaySpeed: 2000 // Velocidad de cambio de logos en milisegundos (2 segundos en este caso)
  });
});
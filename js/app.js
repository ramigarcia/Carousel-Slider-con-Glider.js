window.addEventListener('load', ()=>{
  new Glider(document.querySelector('.carousel__list'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: '.carousel__indicadores',
    arrows: {
      prev: '.carousel__anterior',
      next: '.carousel__siguiente'
    },
    responsive: [
      {
        // screens greater than >= 775px
        breakpoint: 450,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: '2',
          slidesToScroll: '2',
        }
      },{
        // screens greater than >= 1024px
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          itemWidth: 150,
          duration: 0.25
        }
      }
    ]
  });
});
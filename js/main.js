$(document).ready(function () {
  if (window.location.href.indexOf('index') > -1) {
    // Slider
    $('.galeria').bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: 1200,
      pager: false,
      adaptiveHeight: true
    });

    // Post
    var posts = [
      {
        title: 'Prueba de titulo 1',
        date:
          'Publicado el día ' +
          moment().format('dddd') +
          ' ' +
          moment().format('DD') +
          ' de ' +
          moment().format('MMMM') +
          ' del ' +
          moment().format('YYYY'),
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada tellus a quam iaculis lobortis. Donec ut ultricies magna. Nulla aliquet elit lectus, at eleifend enim interdum ac.'
      },
      {
        title: 'Prueba de titulo 2',
        date:
          'Publicado el día ' +
          moment().format('dddd') +
          ' ' +
          moment().format('DD') +
          ' de ' +
          moment().format('MMMM') +
          ' del ' +
          moment().format('YYYY'),
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada tellus a quam iaculis lobortis. Donec ut ultricies magna. Nulla aliquet elit lectus, at eleifend enim interdum ac.'
      },
      {
        title: 'Prueba de titulo 3',
        date:
          'Publicado el día ' +
          moment().format('dddd') +
          ' ' +
          moment().format('DD') +
          ' de ' +
          moment().format('MMMM') +
          ' del ' +
          moment().format('YYYY'),
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada tellus a quam iaculis lobortis. Donec ut ultricies magna. Nulla aliquet elit lectus, at eleifend enim interdum ac.'
      },
      {
        title: 'Prueba de titulo 4',
        date:
          'Publicado el día ' +
          moment().format('dddd') +
          ' ' +
          moment().format('DD') +
          ' de ' +
          moment().format('MMMM') +
          ' del ' +
          moment().format('YYYY'),
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada tellus a quam iaculis lobortis. Donec ut ultricies magna. Nulla aliquet elit lectus, at eleifend enim interdum ac.'
      },
      {
        title: 'Prueba de titulo 5',
        date:
          'Publicado el día ' +
          moment().format('dddd') +
          ' ' +
          moment().format('DD') +
          ' de ' +
          moment().format('MMMM') +
          ' del ' +
          moment().format('YYYY'),
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada tellus a quam iaculis lobortis. Donec ut ultricies magna. Nulla aliquet elit lectus, at eleifend enim interdum ac.'
      }
    ];

    posts.forEach((item, index) => {
      var post = `
      <article class="post">
        <h2>${item.title}</h2>
        <span class="date">${item.date}</span>
        <p>${item.content}</p>
        <a href="#" class="button-more">
          Leer más
        </a>
      </article>
    `;
      $('#posts').append(post);
    });
  }

  // Selector de tema
  var theme = $('#theme');
  $('#to-green').click(function () {
    theme.attr('href', 'css/green.css');
  });
  $('#to-red').click(function () {
    theme.attr('href', 'css/red.css');
  });
  $('#to-blue').click(function () {
    theme.attr('href', 'css/blue.css');
  });

  //Scroll arriba de la web
  $('.subir').click(function (e) {
    e.preventDefault();
    console.log('hola');
    $('html, body').animate(
      {
        scrollTop: 0
      },
      500
    );
    return false;
  });

  // Login falso
  $('#login form').submit(function () {
    var form_name = $('#form_name').val();
    localStorage.setItem('form_name', form_name);
  });

  var form_name = localStorage.getItem('form_name');
  if (form_name != null && form_name != 'undefined') {
    var about_parrafo = $('#about p');
    about_parrafo.html('<br><strong>Bienvenido, ' + form_name + '</strong>');
    about_parrafo.append("<a href='#' id='logout'>Cerrar Sesión</a>");
    $('#login').hide();
    $('#logout').click(function () {
      localStorage.clear();
      location.reload();
    });
  }
  if (window.location.href.indexOf('about') > -1) {
    $('#acordeon').accordion();
  }
  if (window.location.href.indexOf('reloj') > -1) {
    setInterval(function () {
      var reloj = moment().format('h:mm:ss');
      $('#reloj').html(reloj);
    }, 1000);
  }

  //Validación
  if (window.location.href.indexOf('contact') > -1) {
    $("form input[name='date']").datepicker({
      dateFormat: 'dd-mm-yy'
    });
    $.validate({
      lang: 'en',
      errorMessagePosition: 'top',
      scrollToTopOnError: true
    });
  }
}); // load

/*
<article class="post">
            <h2>Título del artículo</h2>
            <span class="date">Fecha de publicación</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              malesuada tellus a quam iaculis lobortis. Donec ut ultricies
              magna. Nulla aliquet elit lectus, at eleifend enim interdum ac.
              Quisque accumsan commodo mollis. Nam ut fermentum nisi.
              Pellentesque non faucibus justo. Morbi sit amet placerat nisl, a
              sagittis lorem. Praesent pretium vulputate ornare. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Pellentesque justo
              mauris, accumsan eu magna et, condimentum congue massa. Nunc quam
              ante, gravida at est eu, vulputate interdum mauris. Cras non velit
              non lacus lobortis finibus. Nam bibendum mattis tellus et
              malesuada.
            </p>
            <a href="#" class="button-more">Leer más</a>
          </article>
          */

window.addEventListener('load', () => {
  const el = $('#app');
  // Compile Handlebar Templates
  const errorTemplate = Handlebars.compile($('#error-template').html());
  const projectsTemplate = Handlebars.compile($('#projects-template').html());
  const aboutTemplate = Handlebars.compile($('#about-template').html());
   const contactTemplate = Handlebars.compile($('#contact-template').html());
  //const html = ratesTemplate();
  // el.html(html);

const router = new Router({
  mode: 'history',
  page404: (path) => {
    const html = errorTemplate({
      color: 'yellow',
      title: 'Error 404 - Page NOT Found!',
      message: `The path '/${path}' does not exist on this site`,

    });
    el.html(html);
  },
});


router.add('/', () => {
  let html = projectsTemplate();
  el.html(html);
});

router.add('about', () => {
  let html = aboutTemplate();
  el.html(html);
});


router.add('contact', () => {
  let html = contactTemplate();
  el.html(html);
});

//Navigate app to current url
router.navigateTo(window.location.pathname);

// Highlight Active Menu on Refresh/Page Reload
const link = $(`a[href$='${window.location.pathname}']`);
link.addClass('active');
$('a').on('click', (event) => {
 // Block browser page load
 //event.preventDefault();
 // Highlight Active Menu on Click
 const target = $(event.target);
 $('.item').removeClass('active');
 target.addClass('active');
 // Navigate to clicked url if it doesn't have http|https|www.

 const href = target.attr('href');
 //const hrefInternalRoutes = (href.search("https"|"http"|"www"))


 const path =  href.substr(href.lastIndexOf('/'));
 router.navigateTo(path);
});

});

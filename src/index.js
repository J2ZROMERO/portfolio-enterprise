import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import '../node_modules/@fortawesome/fontawesome-free/js/all.js';
import GLightbox from '/node_modules/glightbox';
import '/node_modules/glightbox/dist/css/glightbox.min.css';
import '/src/assets/js/bootstrap.bundle.js';
import './scss/style.scss';



  require.context('/src/assets/img', false, /\.(jpg|png)$/)
  require.context('/src/assets/img/art', false, /\.(jpg|png)$/)
  require.context('/src/assets/img/campanies', false, /\.(jpg|png)$/)
  require.context('/src/assets/img/portfolio', false, /\.(jpg|png)$/)
  require.context('/src/assets/img/services', false, /\.(jpg|png)$/)
  require.context('/src/assets/img/testimonials', false, /\.(jpg|png)$/)
  
  
  const lightbox = GLightbox({ 
        'href': 'https://www.youtube.com/watch?v=8YA825ZNAIE',
            'type': 'video',
            'source': 'youtube', //vimeo, youtube or local
            'width': 900,
            'autoplayVideos': true
});
    
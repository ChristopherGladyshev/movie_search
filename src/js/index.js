import '../sass/style.css';
import '../sass/style.scss';

import slidr from './components/slidr/index';

window.slidr

window.addEventListener('load', ()=>{

   slidr.create('slidr-id', {
        after: function(e) { console.log('in: ' + e.in.slidr); },
        before: function(e) { console.log('out: ' + e.out.slidr); },
        breadcrumbs: true,
        controls: 'corner',
        direction: 'vertical',
        fade: false,
        keyboard: true,
        overflow: true,
        theme: '#222',
        timing: { 'cube': '0.5s ease-in' },
        touch: true,
        transition: 'cube'
      }).start();
});
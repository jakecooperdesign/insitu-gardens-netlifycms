import Vue from 'vue';
import Vue2TouchEvents from 'vue2-touch-events';
import Navbar from './components/Navbar';
import Slideshow from './components/Slideshow';
import Carousel from './components/Carousel';

Vue.use(Vue2TouchEvents)

new Vue({
    el: '#app',
    components: {
        Navbar,
        Slideshow,
        Carousel
    },
    data: {
        screenLocked: false
    }
});
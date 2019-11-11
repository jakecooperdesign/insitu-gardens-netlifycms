import Vue from 'vue';
import Navbar from './components/Navbar';
import Slideshow from './components/Slideshow';
import Carousel from './components/Carousel';

new Vue({
    el: '#app',
    components: {
        Navbar,
        Slideshow,
        Carousel
    },
    data: {
        galleryOpen: false
    }
});
<template>
    <div v-show="galleryOpen" class="fixed z-50 left-0 top-0 w-full h-screen bg-black p-4 lg:p-8 flex flex-col overflow-hidden" @keydown.escape="closeGallery">
        <div class="ml-auto pb-4 lg:pb-8">
            <button @click.prevent="closeGallery" class="uppercase text-xs tracking-widest text-gray-500 hover:text-white focus:outline-none">close</button>
        </div>
        <div class="swiper-container flex-1 w-full">
            <div class="swiper-wrapper">
                <!-- Slides -->
                <div v-for="(slide,i) in slides" :key="i" class="swiper-slide">
                    <slot v-bind="{slide, i}">
                        <img class="block h-full w-full object-contain" :src="slide.src" alt="">
                    </slot>
                </div>
            </div>
            <div v-if="pagination" class="swiper-pagination"></div>
        </div>
        <div class="w-full lg:w-2/3 mx-auto pt-4 lg:pt-8 flex justify-between items-center">
            <div v-for="(item,i) in slides" :key="`details_${i}`" v-show="i == currentSlide" class="max-w-4xl text-left">
                <p>
                    <span class="font-serif uppercase text-sm tracking-widest">
                        {{ item.title ? item.title : name ? `${name} ${i+1}` :`Image ${i+1}` }}
                    </span>
                    <span v-if="item.subtitle" class="text-gray-500">&ensp;{{item.subtitle}}</span>
                </p>
                <p v-if="item.description" class="pt-2 italic">{{item.description}}</p>
            </div>
            <div v-if="controls" class="controls text-white flex justify-center pl-4">
                <button class="swiper-button-prev text-gray-700 hover:text-white focus:outline-none">&larr;</button>
                <span class="inline-block px-8">{{ currentSlide + 1 }}/{{slides.length}}</span>
                <button class="swiper-button-next text-gray-700 hover:text-white focus:outline-none">&rarr;</button>
            </div>
        </div>         
    </div>
</template>

<script>
import Swiper from "swiper";

export default {
    props: {
        slides: { required: true },
        controls: { default: true },
        pagination: { default: false },
        galleryOpen: { default: false }
    },
    data() {
        return {
            currentSlide: 0,
            swiper: null
        }
    },
    mounted() {
        if (this.galleryOpen){
            this.createSwiper();
        }
        this.$parent.$on('open-gallery', (event) => {
            this.openGallery(event);
        });
    },
    methods: {
        closeGallery() {
            this.$emit('update:gallery-open', false);
            this.destroySwiper();
        },
        openGallery(event = null) {
            if (this.widthEnabled && window.innerWidth < this.widthEnabled) {
                return false;
            }
            this.currentSlide = (event != null) ? event : this.currentSlide;
            this.$emit('update:gallery-open', true);
            this.createSwiper();
            this.$el.focus();
        },
        createSwiper() {
            let swiper = new Swiper ('.swiper-container', {
                loop: true,
                initialSlide: this.currentSlide,
                pagination: {
                    el: '.swiper-pagination',
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                keyboard: {
                    enabled: true,
                    onlyInViewport: false,
                }
            });

            swiper.on('slideChange', () => {
                this.currentSlide = swiper.realIndex;
            });

            this.swiper = swiper;
        },
        destroySwiper() {
            this.swiper.destroy(true);
            this.currentSlide = 0;
        }
    }
}
</script>

<style lang="scss">
    @import "node_modules/swiper/src/swiper";
</style>
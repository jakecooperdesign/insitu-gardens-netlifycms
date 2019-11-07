<template>
    <div @keydown.esc="closeGallery" @keydown.left="prevSlide" @keydown.right="nextSlide" tabindex="0">
        <div v-show="galleryOpen" class="gallery-takeover fixed left-0 top-0 w-full h-screen z-50 text-white bg-black">
            <div class="flex flex-col h-full p-4">
                <div class="flex justify-end items-center pb-4">
                    <button @click.prevent="closeGallery" class="text-gray-500 hover:text-white uppercase text-xs tracking-widest">close</button>
                </div>
                <div class="relative flex-1">
                    <transition-group name="fade">
                        <img v-for="(item,i) in slides" :key="`images_${i}`" v-show="i == currentSlide" class="absolute top-0 left-0 h-full w-full object-contain" :src="item.src" alt="Gallery image">
                    </transition-group>
                </div>
                <div class="flex justify-between w-2/3 mx-auto pt-4">
                    <div v-for="(item,i) in slides" :key="`details_${i}`" v-show="i == currentSlide" class="max-w-2xl py-4 text-left">
                        <p>
                            <span class="font-serif uppercase text-sm tracking-widest">
                                {{ item.title ? item.title : name ? `${name} ${i+1}` :`Image ${i+1}` }}
                            </span>
                            <span v-if="item.subtitle" class="text-gray-500">&ensp;{{item.subtitle}}</span>
                        </p>
                        <p class="pt-2 italic">{{item.description}}</p>
                    </div>
                    <div class="flex items-center justify-end">
                        <button @click.prevent="prevSlide" class="text-gray-700 hover:text-white focus:outline-none">&larr;</button>
                        <span class="inline-block px-8">{{ currentSlide + 1 }}/{{maxSlides}}</span>
                        <button @click.prevent="nextSlide" class="text-gray-700 hover:text-white focus:outline-none">&rarr;</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        maxSlides: { type: [String, Number] },
        widthEnabled: { default: false },
        slides: {},
        name: { default: null }
    },
    data(){
        return {
            galleryOpen: false,
            currentSlide: 0,
        }
    },
    mounted() {
        this.$parent.$on('open-gallery', (event) => {
            this.openGallery(event);
        });
    },
    methods: {
        alert(message) {
            alert(message);
        },
        nextSlide() {
            this.currentSlide = (this.currentSlide + 2 > this.maxSlides) ? 0 : this.currentSlide + 1;
        },
        prevSlide() {
            this.currentSlide = (this.currentSlide - 1 < 0) ? this.maxSlides - 1 : this.currentSlide - 1;
        },
        closeGallery() {
            this.galleryOpen = false;
        },
        openGallery(event = null) {
            if (this.widthEnabled && window.innerWidth < this.widthEnabled) {
                return false;
            }
            this.currentSlide = (event != null) ? event : this.currentSlide;
            this.galleryOpen = true;
            this.$el.focus();
        }
    }
}
</script>
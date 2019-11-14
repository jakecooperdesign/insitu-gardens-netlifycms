<template>
    <div class="relative h-full">
        <transition-group name="fade" tag="div" class="h-full">
            <img v-for="(image,i) in images" :key="image.src" v-show="activeSlide == i" :class="imageClasses" :src="image.src" alt="">
        </transition-group>
        <div class="fixed bottom-0 left-0 text-white z-10 p-8 hidden md:block">
            <span v-for="(image,i) in images" :key="`dots_${image.src}`" :class="{ 'opacity-25': activeSlide != i }" class="pr-2 text-xs">●</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        'images': { type: Array }, 
        'image-classes': { type: String }, 
        'autoplay': { type: [Boolean,String], default: false }, 
        'speed': { default: 2000 },
        'startingSlide': { default: 0 },
    },
    data() {
        return {
            'activeSlide': 0
        }
    },
    mounted() {
        if (this.autoplay) setInterval(this.nextSlide, this.speed);
        this.activeSlide = this.startingSlide
    },
    methods: {
        nextSlide() {
            this.activeSlide = (this.activeSlide + 1 > this.images.length - 1) ? 0 : this.activeSlide + 1;
        }
    }
}
</script>
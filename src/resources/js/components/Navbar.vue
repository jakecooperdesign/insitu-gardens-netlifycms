<template>
    <div class="md:flex justify-between items-center">
        <div class="flex justify-between items-center md:block p-4 md:p-8">
            <slot name="heading"></slot>
            <button @click="toggleNav" class="p-1 rounded-sm h-8 w-8 hover:bg-white hover:text-black focus:outline-none md:hidden flex justify-center items-center">
                <svg v-show="!navOpen" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="fill-current w-6 h-6"><path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/></svg>
                <svg v-show="navOpen" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="fill-current w-6 h-6"><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/></svg>
            </button>
        </div>
        <nav :class="{ 'hidden': !navOpen }" class="bg-gray-100 text-black p-4 md:block md:p-8 md:bg-transparent md:text-white">
            <slot name="links"></slot>
        </nav>
    </div>
</template>

<script>
import _ from "lodash";

export default {
    data(){
        return {
            navOpen: false
        }
    },
    created() {
        window.addEventListener('resize', _.throttle(this.closeNav, 600));
    },
    methods: {
        toggleNav() {
            this.navOpen = !this.navOpen;
        },
        closeNav() {
            this.navOpen = false;
        }
    }
}
</script>
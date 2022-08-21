<template>
    <div class="info mt-auto p-2 text-center ">
        <p>Copyright &copy; 2022</p>
        <router-link class="" to="/about">About</router-link> <br>
        <button class="text-xs" @click="toggleContent"> {{ showFooter ? 'Hide' : 'Show more' }} </button>
        <footer v-if="showFooter" class="pt-2">
            <p class="text-gray-700 text-xs"> Double Click Todo to highlight</p>
        </footer>
    </div>
</template>

<script>
    export default {
        methods: {
            toggleContent() {
                this.showFooter = !this.showFooter;
            },
        },
        data() {
            return {showFooter: false }
        },

    }
</script>
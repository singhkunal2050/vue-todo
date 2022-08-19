<script>
    export default {
        data() {
            return {
            count: 0
            }
        }
    }
</script>

<template>

    <section class="counter-wrapper flex items-center justify-center gap-4 px-1 py-5 bg-gray-200">
         <button class="bg-gray-700 text-white p-2 rounded-sm" @click="count++">Click</button>
         Counter {{count}}
    </section>

</template>

<style>
</style>
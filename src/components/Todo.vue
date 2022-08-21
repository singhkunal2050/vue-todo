<script>
// we can add setup attribute to script tag to avoid export default of imported components 
import Footer from "./Footer.vue";

export default {
    components: {
         Footer
    },
}

</script>

<template>
    <div
        class="todo max-w-4xl flex flex-col mx-auto my-8 bg-[#f5f5f5] min-h-[80vh] outline outline-1 outline-gray-200 shadow-lg">
        <router-view></router-view>    
        <Footer/>
    </div>

</template>

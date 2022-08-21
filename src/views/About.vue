<template>
    <div class="py-4 px-2 flex gap-4 flex-col items-center">
       <h2 class="text-xl font-bold">About Us</h2>
        <!-- <Spinner v-if="!imageLoaded" /> -->
        <img  src="https://source.unsplash.com/500x500?cat" alt="Random Cat">
        <router-link class="font-bold text-2xl mb-3" to="/"> Go Back Home 🏠</router-link>

    </div>
</template>

<script>
    import Spinner from '../components/Spinner.vue';
    export default{
        data(){
            return {
                imageLoaded:false
            }
        },
        created(){
            // console.log(document.readyState);
            document.addEventListener('change',function(e){
                console.log(e.target.readyState)
            })
        },
        components:{
            Spinner
        }
    }
</script>
<template lang="">
       <button @click="addTodo()" :style="{background:color}"
        class="p-2 bg-gray-700 text-white focus-visible:outline-gray-800 ">
            {{name}}
        </button> 
</template>
<script>
export default {
    props:{
        name:String,
        color:String,
    },
    methods: {
        addTodo(){
            console.log('adding todos')
        }
    },
}
</script>
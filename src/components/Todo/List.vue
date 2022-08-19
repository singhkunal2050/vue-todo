<template>
    <div class=" py-4 px-2">
        <TodoItem title= "Wash Dishes" :done="false" id="32r3r3"/>
    </div>
</template>
<script>
import TodoItem from './TodoItem.vue';
export default {
    components: { TodoItem },
    props:{
        tasks:Array[Object]
    }
}
</script>
<style >
    
</style>
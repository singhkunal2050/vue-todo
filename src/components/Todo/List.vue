<template>
    <div class=" py-4 px-2 bg-white mx-1 my-2 shadow-lg" :key="todo.key" v-for="todo in todos">
        <TodoItem :title= "todo.title" :done="todo.completed" :id="todo.id"/>
    </div>
</template>
<script>
import TodoItem from './TodoItem.vue';
export default {
    components: { TodoItem },
    props:{
        todos:Array
    }
}
</script>
<style >
    
</style>
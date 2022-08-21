<template>
    <div class="list-wrapper h-[50vh] overflow-auto">
        <div class="px-5 mt-2" :key="todo.key" v-for="todo in todos">
            <TodoItem :title="todo.title" :completed="todo.completed" :id="todo.id" :highlight="todo.highlight"
                @delete-todo="$emit('delete-todo', todo.id)" @toggle-highlight="$emit('toggle-highlight', todo.id)"
                @toggle-complete="$emit('toggle-complete',todo.id)" />
        </div>
    </div>
</template>
<script>
import TodoItem from './TodoItem.vue';
export default {
    components: { TodoItem },
    props: {
        todos: Array
    },
    emits: ['delete-todo', 'toggle-highlight', 'toggle-complete']
}
</script>
<style >
</style>
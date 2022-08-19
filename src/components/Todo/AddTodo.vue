<template>
    <div class="add-todo flex justify-start w-full px-4">
        <input type="text" placeholder="Add Task here..." name="todo-text" id="todo-text" class="flex-1 px-2 focus-visible:outline-gray-300"/>
        <Button name="Add Todo" color="#005600" />
    </div>
</template>

<script>
import Button from './Button.vue';
export default {
    components: { Button }
}
</script>
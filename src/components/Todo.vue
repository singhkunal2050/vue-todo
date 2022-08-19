<script>
// we can add setup attribute to script tag to avoid export default of imported components 
import ListHeader from "./Todo/ListHeader.vue"
import List from "./Todo/List.vue"

export default {
    components: {
        ListHeader,
        List
    },
    data() {
        return { todos: [] }
    },
    created() {
        this.todos = [
            {
                id: '2323fa',
                title: 'Goto Market',
                completed: false,
            }, {
                id: '3323fa',
                title: 'Read articles',
                completed: true,
            }, {
                id: '3c23fa',
                title: 'Cook Dinner',
                completed: false,
            },
        ]
    }
}

</script>

<template>
    <div class="todo max-w-4xl mx-auto my-8 bg-[#f5f5f5] min-h-[80vh] outline outline-1 outline-gray-200 shadow-lg">
        <ListHeader name="VueTodo" />
        <List :todos="todos" />
    </div>
</template>

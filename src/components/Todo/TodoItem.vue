<template lang="">
        <article @dblclick="$emit('toggle-highlight',id)" :class="[ highlight ?  'border-l-orange-500' : 'border-l-transparent' , completed ?  'bg-[#f0fffb]' : 'bg-[#fffbfb]' , , 'flex' ,'justify-between' ,'p-4' , 'bg-white', 'mx-1' , 'my-2', 'shadow-lg' , 'border-l-4' , 'rounded-md', 'gap-4']" :data-todo-id="id">
            <div class="todo-content flex-1">
                <p> {{title}}</p>
                <span class="cursor-pointer text-xs p-2" > {{completed ? "Completed" : "Incomplete"}}</span>
            </div>
            <button class="justify-self-end" @click="$emit('toggle-complete',id)">
                {{completed ? "❌" : "✔️"}}
            </button>
            <button @click="$emit('delete-todo',id)"  class="close-icon w-4 cursor-pointer text-red-800">
                🗑️
            </button>
        </article>
</template>
<script>
export default {
    props: {
        title: String,
        completed: Boolean,
        highlight: Boolean,
        id: String
    },
    emits: ['delete-todo', 'toggle-highlight', 'toggle-complete']
}
</script>
<style lang="">
    
</style>
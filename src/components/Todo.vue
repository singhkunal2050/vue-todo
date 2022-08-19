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
    methods:{
        deleteTodo(id){
            this.todos = this.todos.filter((elem)=>elem.id!==id)
            console.log({task:id})
        },
        toggleHighlight(id){
            this.todos = this.todos.map((elem)=>{
                if(elem.id==id)
                    elem.highlight=!elem.highlight
                return elem
            })
        },
        toggleComplete(id){
            console.log(id)
            this.todos = this.todos.map((elem)=>{
                if(elem.id==id)
                    elem.completed=!elem.completed
                return elem
            })
        },
        addTodo(newTodo){
            this.todos = [...this.todos , newTodo]
        }

    },
    created() {
        this.todos = [
            {
                id: '2323fa',
                title: 'Goto Market',
                completed: false,
                highlight:true,
            }, {
                id: '3323fa',
                title: 'Read articles',
                completed: true,
                highlight:false,
            }, {
                id: '3c23fa',
                title: 'Cook Dinner',
                completed: false,
                highlight:false,
            },
        ]
    }
}

</script>

<template>
    <div class="todo max-w-4xl flex flex-col mx-auto my-8 bg-[#f5f5f5] min-h-[80vh] outline outline-1 outline-gray-200 shadow-lg">
        <ListHeader @add-todo="addTodo" name="VueTodo" />
        <List @delete-todo="deleteTodo" @toggle-highlight="toggleHighlight" @toggle-complete="toggleComplete" :todos="todos" />
        <div class="info mt-auto p-2 text-center ">
            <p class="text-gray-700 text-xs"> Double Click Todo to highlight</p>
        </div>
   </div>
    
</template>

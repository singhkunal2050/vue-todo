<template>
    <div class="add-todo w-full">
        <form @submit="addTodo" class="flex flex-col justify-start w-full px-4">
            <input v-model="text" type="text" placeholder="Add Task here..." name="todo-text" id="todo-text"
                class="flex-1 p-2 w-full rounded-md mt-1 focus-visible:outline-gray-300" />
            <input v-model="date" type="date" placeholder="Select Date" name="todo-date" id="todo-date"
                class="flex-1 p-2 w-full rounded-md mt-1 focus-visible:outline-gray-300" />
            <label for="todo-highlight" class="flex gap-2 py-2 mt-3 accent-black focus-visible:outline-gray-300">
                <span> Highlight </span>
                <input v-model="highlight" class="rounded-md " type="checkbox" name="todo-highlight" id="todo-highlight">
            </label>
            <button
                class="p-2 bg-emerald-700 rounded-md mt-1 text-white focus-visible:outline-gray-800 ">
                Add Todo
            </button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            text: '',
            date: '',
            completed: false,
            highlight: false,
            userid: localStorage.userid
        }
    },
    methods:{
        addTodo(e){
            e.preventDefault();
            if(!this.text || !this.date){
                alert('Add Data Please!')
                return
            }
            const newTodo = {
                id : Math.random().toString(36).slice(2),
                title: this.text,
                date:this.date,
                completed:false,
                highlight:this.highlight,
                userid : this.userid
            }
            console.log(newTodo);
            this.$emit('add-todo',newTodo)
            this.text= '';
            this.date= '';
            this.completed= false;
            this.highlight= false;

        }
    },
    emits:['add-todo']
}
</script>
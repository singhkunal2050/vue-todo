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
        return { todos: [], showFooter: false, loaded: false }
    },
    methods: {
        async deleteTodo(id) {
            let response = await fetch(`https://dummy-json-server.glitch.me/todos/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json',
                }
            });
            if (response.status == 200) {
                this.todos = this.todos.filter((elem) => elem.id !== id)
            } else {
                console.log("Task Not Found!")
            }
        },
        async toggleHighlight(id) {
            let todoToUpdate = await this.fetchTodo(id);
            const updatedTodo = { ...todoToUpdate, highlight: !todoToUpdate.highlight };

            let response = await fetch(`https://dummy-json-server.glitch.me/todos/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(updatedTodo)
            });
            let data = await response.json();

            this.todos = this.todos.map((elem) => {
                if (elem.id == id)
                    elem.highlight = data.highlight
                return elem
            })
        },
        async toggleComplete(id) {
            let todoToUpdate = await this.fetchTodo(id);
            const updatedTodo = { ...todoToUpdate, completed: !todoToUpdate.completed };

            let response = await fetch(`https://dummy-json-server.glitch.me/todos/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(updatedTodo)
            });
            let data = await response.json();

            this.todos = this.todos.map((elem) => {
                if (elem.id == id)
                    elem.completed = data.completed
                return elem
            })
        },
        async addTodo(newTodo) {
            let response = await fetch('https://dummy-json-server.glitch.me/todos', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(newTodo)
            });
            let data = await response.json();

            this.todos = [...this.todos, data]
        },
        toggleContent() {
            this.showFooter = !this.showFooter;
        },
        async fetchTodos() {
            let response = await fetch('https://dummy-json-server.glitch.me/todos');
            let data = await response.json();
            this.loaded=true;
            return data;
        },
        async fetchTodo(id) {
            let response = await fetch(`https://dummy-json-server.glitch.me/todos/${id}`);
            let data = await response.json();
            console.log(data);
            return data;
        }


    },
    async created() {
        this.todos = await this.fetchTodos();
    }
}

</script>

<template>
    <div
        class="todo max-w-4xl flex flex-col mx-auto my-8 bg-[#f5f5f5] min-h-[80vh] outline outline-1 outline-gray-200 shadow-lg">
        <ListHeader @add-todo="addTodo" name="VueTodo" />

        <div class="loader grid place-items-center" v-if="!loaded">
            <div class="spinner-wrapper flex justify-center items-center  h-8 w-8">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                    style="margin: auto; background: rgb(241, 242, 243); display: block;" width="200px" height="200px"
                    viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                    <circle cx="50" cy="50" fill="none" stroke="#000000" stroke-width="10" r="35"
                        stroke-dasharray="164.93361431346415 56.97787143782138">
                        <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s"
                            values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
                    </circle>
                </svg>
            </div>
        </div>
        <List v-else @delete-todo="deleteTodo" @toggle-highlight="toggleHighlight" @toggle-complete="toggleComplete"
            :todos="todos" />
        <div class="info mt-auto p-2 text-center ">
            <p class="text-gray-700 text-xs"> Double Click Todo to highlight</p>
            <button @click="toggleContent"> {{ showFooter ? 'Hide' : 'Show more' }} </button>
            <footer v-if="showFooter" class="pt-2">
                <p class="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam enim, accusamus
                    totam veritatis obcaecati est commodi, iusto esse repudiandae tempore, aliquam vel? Sit praesentium
                    architecto ut veritatis delectus, hic et.</p>
            </footer>
        </div>
    </div>

</template>

<template>

    <ListHeader @add-todo="addTodo" name="VueTodo" />
    <Spinner v-if="!loaded" />
    <List v-else @delete-todo="deleteTodo" @toggle-highlight="toggleHighlight" @toggle-complete="toggleComplete"
        :todos="todos" />

</template>
<script>
    import ListHeader from '../components/Todo/ListHeader.vue';
    import Spinner from '../components/Spinner.vue';
    import List from '../components/Todo/List.vue';

    export default {
        components: {
            ListHeader, List, Spinner
        },
        data() {
            return { todos: [], loaded: false }
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
            async fetchTodos() {
                console.log(import.meta.env.VITE_BACKEND_URL);
                let response = await fetch('https://dummy-json-server.glitch.me/todos');
                let data = await response.json();
                this.loaded = true;
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


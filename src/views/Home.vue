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
    let BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

    export default {
        components: {
            ListHeader, List, Spinner
        },
        data() {
            return { todos: [], loaded: false , userid:0 }
        },
        methods: {
            async deleteTodo(id) {
                let response = await fetch(`${BACKEND_URL}/todos/${id}`, {
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

                let response = await fetch(`${BACKEND_URL}/todos/${id}`, {
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

                let response = await fetch(`${BACKEND_URL}/todos/${id}`, {
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
                let response = await fetch(`${BACKEND_URL}/todos`, {
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
                let response = await fetch(`${BACKEND_URL}/todos?userid=${this.userid}`);
                let data = await response.json();
                this.loaded = true;
                return data;
            },
            async fetchTodo(id) {
                let response = await fetch(`${BACKEND_URL}/todos/${id}`);
                let data = await response.json();
                console.log(data);
                return data;
            }
        },
        async created() {
            if(localStorage.userid){
                this.userid=localStorage.userid;
            }else{
                 localStorage.userid = this.userid = 'user_' + Math.random().toString(32).slice(2);
                console.log('New User ????')
            }
            this.todos = await this.fetchTodos();
        }
    }
</script>


<template>
    <div class="py-4 px-2 bg-slate-200 flex gap-4 flex-col items-center">
       <h2 class="text-xl font-bold">Welcome Admin</h2>
    </div>
    <UsersList :todoGroups="todoGroups" />
</template>
<script>
    import UsersList from '../components/Admin/UsersList.vue';
    let BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

    export default {
        data(){
            return {
                loaded:false,
                users : [],
                allTodos : [],
                todoGroups: {}
            }
        },
        components:{
            UsersList
        },
        methods:{
             async fetchAllTodos() {
                let response = await fetch(`${BACKEND_URL}/todos`);
                let data = await response.json();
                this.loaded = true;
                return data;
            },
            getAllUsers(allTodos){
                // console.log(allTodos)
                this.todoGroups = allTodos.reduce(function(acc,curr,i,arr){
                    if(acc.hasOwnProperty(curr.userid)){
                        acc[curr.userid].push(curr)
                    }else{
                        acc[curr.userid] = [curr]
                    }
                    return acc;
                },{})
                // console.log(this.todoGroups)
            },
        },
        async created(){
                this.allTodos = await this.fetchAllTodos();
                this.users = this.getAllUsers(this.allTodos)
        }
    }
</script>
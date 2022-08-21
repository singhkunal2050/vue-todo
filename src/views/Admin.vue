<template>
    <Login v-if="!isLoggedIn" :isLoggedIn="isLoggedIn" @logged-in="logAdminIn"/>
    <UsersList v-if="isLoggedIn" :todoGroups="todoGroups" @log-out="logAdminOut" />
</template>
<script>
    import UsersList from '../components/Admin/UsersList.vue';
    import Login from '../components/Admin/Login.vue';
    let BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

    export default {
        data(){
            return {
                loaded:false,
                users : [],
                allTodos : [],
                todoGroups: {},
                isLoggedIn:localStorage.isLoggedIn ? true : false
            }
        },
        components:{
            UsersList,Login
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
            logAdminIn(e){
                localStorage.isLoggedIn = this.isLoggedIn = true;
            },
            logAdminOut(e){
                delete localStorage.isLoggedIn; 
                this.isLoggedIn = false;
            }
        },
        async created(){
                this.allTodos = await this.fetchAllTodos();
                this.users = this.getAllUsers(this.allTodos)
        }
    }
</script>
<template>

    <div class="py-4 px-6 bg-slate-200 flex gap-4 justify-between ">
       <h2 class="text-xl font-bold">Welcome Admin</h2>
       <button @click="$emit('log-out',e)" class="text-emerald-500 font-bold">Logout</button>
    </div>

    <section class="flex " >
        <div class="users-wrapper max-h-[60vh] overflow-auto py-4  ">
            <h3 class="text-2xl font-bold px-2">Users </h3>
            <div class="user p-2 shadow-md bg-gray-50 px-2 m-1 cursor-pointer hover:bg-slate-100 rounded-md" :data-user-id="propertyName" @click="setCurrentUser" v-for="(value, propertyName, index) in  todoGroups">
                    {{ propertyName }} 
            </div>
        </div>
        <div class="user-todos h-[60vh] overflow-auto flex-1">
            <h3 class="text-2xl font-bold p-4">{{activeUser}}</h3>
           <div class="user-todos" v-for="(value, propertyName, index) in  todoGroups">
                <div v-if="propertyName == activeUser" class="user p-2 m-1">
                    <div class="user-todos-single m-1 p-2 bg-white shadow-md rounded-md" v-for="(valueinner, propertyNameinner, indexinner) in  value">
                         <h3>{{valueinner.title}}</h3>
                         <p class="text-xs mt-1">{{valueinner.date}}</p>
                         <p>{{valueinner.completed ? "Completed" : "Incomplete"}}</p>
                         <p class="text-xs">{{valueinner.userid }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            activeUser: 'user_oh4ac4hdlj8'
        }
    },
    methods:{
        setCurrentUser(e){
            this.activeUser=e.target.dataset.userId
        }
    },
    props: {
        todoGroups: Object
    },
        emits:['log-out']
}

</script>

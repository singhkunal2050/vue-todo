<template>
    <section class="flex">
        <div class="users-wrapper bg-red-300 h-[70vh] overflow-auto p-4 max-w-xs">
            <div class="user p-2 bg-gray-200 m-1 cursor-pointer hover:bg-slate-300" :data-user-id="propertyName" @click="setCurrentUser" v-for="(value, propertyName, index) in  todoGroups">
                    {{ propertyName }}
            </div>
        </div>
        <div class="user-todos flex-1">
            <h3 class="text-2xl font-bold p-4">{{activeUser}}</h3>
           <div class="user-todos" v-for="(value, propertyName, index) in  todoGroups">
                <div v-if="propertyName == activeUser" class="user p-2 bg-gray-200 m-1">
                    <div class="user-todos-single m-2 bg-white" v-for="(valueinner, propertyNameinner, indexinner) in  value">
                         {{  valueinner }}
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
}

</script>

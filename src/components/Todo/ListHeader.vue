<script>
import { def } from '@vue/shared';
import AddTodo from './AddTodo.vue'
  export default {
    props : {
        name:String
    },
    methods:{
        addTodo(newTodo){
            this.$emit('add-todo',newTodo)
        }
    },
    components : {
        AddTodo       
    },
    emits:['add-todo']
  }
</script>

<template>

    <section class="header-wrapper">
        <div class="py-4 px-2 bg-slate-200 flex gap-4 flex-col items-center">
             <h2 class="text-xl font-bold">{{name}}</h2>
             <AddTodo @add-todo="addTodo" />
        </div> 
    </section>

</template>

<style>

</style>
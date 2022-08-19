<template lang="">
        <article :data-todo-id="id">
            <p> {{title}}</p>
            <span>{{done ? "Completed" : "Incomplete"}}</span>
        </article>
</template>
<script>
export default {
      props : {
        title:String,
        done:Boolean,
        id:String
    },
}
</script>
<style lang="">
    
</style>
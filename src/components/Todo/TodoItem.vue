<template lang="">
    <div class="p-2 bg-purple-100" :data-task-id="id">
        <p> {{title}}</p>
        <span>{{done ? "Completed" : "Incomplete"}}</span>
    </div>
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
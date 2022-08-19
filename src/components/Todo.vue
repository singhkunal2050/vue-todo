<script>
    // we can add setup attribute to script tag to avoid export default of imported components 
    import ListHeader from "./Todo/ListHeader.vue"
    import List from "./Todo/List.vue"

    export default {
        components: {
            ListHeader,
            List
        }
    }

</script>

<template>
    <div class="todo container p-2 md:p-4">
        <ListHeader/>
        <List/>
    </div>
</template>

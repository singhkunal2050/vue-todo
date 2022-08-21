<template>
    <div class="py-4 px-2 bg-slate-200 flex gap-4 flex-col items-center">
       <h2 class="text-xl font-bold">Welcome Admin</h2>
    </div>
    <UsersList/>
</template>
<script>
    import UsersList from '../components/Admin/UsersList.vue';

    export default {
        components:{
            UsersList
        }
    }
</script>
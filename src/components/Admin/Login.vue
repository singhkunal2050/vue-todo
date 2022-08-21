<template>
    <!-- component -->

    <div class="w-[60%] mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
        <h1 class="text-4xl font-medium">Login</h1>
        <p class="text-slate-500">Hi, Welcome back 👋</p>
        <form @submit="handleSubmit" class="my-10">
            <div class="flex flex-col space-y-5">
                <label for="email">
                    <p class="font-medium text-slate-700 pb-2">Email address</p>
                    <input v-model="email" id="email" name="email" type="email"
                        class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                        placeholder="Enter email address">
                </label>
                <label for="password">
                    <p class="font-medium text-slate-700 pb-2">Password</p>
                    <input v-model="password" id="password" name="password" type="password"
                        class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                        placeholder="Enter your password">
                </label>
                <button
                    class="w-full py-3 font-medium text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg border-emerald-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                    </svg>
                    <span>Login</span>
                </button>
            </div>
        </form>
    </div>

</template>
<script>
export default {
    props: {
        isLoggedIn: Boolean
    },
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        handleSubmit(e) {
            e.preventDefault();
            console.log(this.isLoggedIn)
            if (!this.email || !this.password) {
                alert('Add Data Please!')
                return
            }
            if(this.password=='admin'){
                this.$emit('logged-in', e)
            }
            else{
                alert('Incorrect Password!')
            }
            this.email = '';
            this.password = '';
        }
    },
}

</script>
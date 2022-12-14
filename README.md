# Vue 3 TodoList App with TailwindCSS
![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

![Snap](./public/home.png)

![About](./public/about.png)

![Admin](./public/admin.png)

![Admin2](./public/admin2.png)

Vue , Vitejs , TailwindCSS, JSON-server
Hosted on Vercel and Backend on Glitch

## Setup Project Locally

1. Install and Setup 

    ```js
        git clone 'https://github.com/singhkunal2050/vue-todo.git'
        npm install
        npm run backend
        npm run dev

    ```

2. Change Backend API URL to Local `https://dummy-json-server.glitch.me/todos` to `http://localhost:5000/todos` in `/.env` file


## Info

- Client URL
    https://vue-todos-demo.vercel.app/

- JSON Server
    https://dummy-json-server.glitch.me/todos
    Accepts : GET,POST,UPDATE,PUT,DELETE

- Backend Code
    https://glitch.com/edit/#!/dummy-json-server


## Flow for Unique Users todo

1. User lands 
2. If new user then a new user id is created and set to localstorage eg:`user_f32f32r`
3. During Creating Todo have a user_id field associated with each todo 
3. Filter todos of the users todos with url parameters eg: `/todos/userid=user_f32f32r`

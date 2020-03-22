import User from './components/user/User.vue';
import Home from './components/Home.vue';

export const routes = [
    {path: '/', component: Home},
    {path: '/user/:id', component: User, props: true}, // props: true - allows to pass params as a prop
]
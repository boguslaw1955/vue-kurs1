import VueRouter from 'vue-router'
const Home = { template: '<div> Strona główna</div>'}
const About = { template: '<div>O nas</div>'}
const Kontakt = {template: '<div>Kontakt</div>'}

const router = new VueRouter({
    routes: [
        { path: '/', component: Home },
        { path: '/onas', component: About},
        { path: '/kontakt', component: Kontakt }
        ]
});

export default router;


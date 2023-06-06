import RfidChip from '../pages/RfidChip/RfidChip.vue';
import Beats from '../pages/Beats/Beats.vue';
import Home from '../pages/Home/Home.vue';
import City from '../pages/City/City.vue';
import {createRouter, createWebHashHistory} from 'vue-router';

const routes = [
  { path: '/', component: Home },
  { path: '/RfidChip', component: RfidChip },
  { path: '/Beats', component: Beats },
  { path: '/City', component: City },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
});
export default router;
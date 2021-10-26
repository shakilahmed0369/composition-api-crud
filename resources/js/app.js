require('./bootstrap');

require('alpinejs');

import {createApp} from 'vue';
import router from './router';
import CompaniesIndex from './components/companies/companiesIndex.vue';
createApp({
    components: {
        CompaniesIndex,
    }
}).use(router).mount("#app");


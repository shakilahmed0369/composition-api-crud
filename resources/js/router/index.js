import { createRouter, createWebHistory} from "vue-router";

import CompaniesIndex from '../components/companies/companiesIndex.vue';
import CompaniesCreate from '../components/companies/companiesCreate.vue';
import CompaniesEdit from '../components/companies/companiesEdit.vue';

const routes = [
    {
        path: '/dashboard',
        name: 'companies.index',
        component: CompaniesIndex
    },
    {
        path: '/companies/create',
        name: 'companies.create',
        component: CompaniesCreate
    },
    {
        path: '/companies/:id/edit',
        name: 'companies.edit',
        component: CompaniesEdit,
        props: true
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
});

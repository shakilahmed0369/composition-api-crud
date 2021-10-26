<template lang="">
    <div>
        <router-link :to="{name: 'companies.create'}" class="p-1 mr-2 bg-gray-900 text-white">Create Company</router-link>
        <table class="table-fixed">
            <thead>
                <tr>
                    <th class="w-4/12">Name</th>
                    <th class="w-3/12">Email</th>
                    <th class="w-1/12">Address</th>
                    <th class="w-2/12">Website</th>
                    <th class="w-1/12"> Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="company in companies">
                    <td class="border border-gray-600">{{ company.name }}</td>
                    <td class="border border-gray-600">{{ company.email }}</td>
                    <td class="border border-gray-600">
                        {{ company.address }}
                    </td>
                    <td class="border border-gray-600">
                        {{ company.website }}
                    </td>
                    <td class="border border-gray-600">
                        <router-link :to="{name: 'companies.edit', params: {id: company.id}}" class="p-1 mr-2 bg-gray-900 text-white">Edit</router-link>
                        <button @click="deleteCompany(company.id)" class="p-1 bg-gray-900 text-white">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import useCompanies from "../../composable/companies";
import { onMounted } from "vue";

export default {
    setup() {
        const { companies, getCompanies, destroyCompany} = useCompanies();
        onMounted(getCompanies);

        const deleteCompany = async (id) => {
            if(!window.confirm('Are you sure?')){
                return
            }
            await destroyCompany(id);
            await getCompanies();
        }

        return {
            companies,
            deleteCompany,
        };
    },
};
</script>

<style lang=""></style>

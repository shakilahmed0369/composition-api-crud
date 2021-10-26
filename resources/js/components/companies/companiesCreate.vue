<template lang="">
    <div v-if="errors !== ''">
        {{errors}}
    </div>
    <form class="space-6" @submit.prevent="saveCompany">

        <div class="space-y-4 rounded-md shadow-sm">
           <div>
                <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" name="name" id="name" class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:bg-gray-100" v-model="form.name">
           </div>
        </div>

        <div class="space-y-4 rounded-md shadow-sm">
           <div>
                <label for="name" class="block text-sm font-medium text-gray-700">email</label>
                <input type="text" name="email" id="email" class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:bg-gray-100" v-model="form.email">
           </div>
        </div>

        <div class="space-y-4 rounded-md shadow-sm">
           <div>
                <label for="name" class="block text-sm font-medium text-gray-700">Address</label>
                <input type="text" name="address" id="name" class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:bg-gray-100" v-model="form.address">
           </div>
        </div>

        <div class="space-y-4 rounded-md shadow-sm">
           <div>
                <label for="name" class="block text-sm font-medium text-gray-700">Website</label>
                <input type="text" name="website" id="name" class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:bg-gray-100" v-model="form.website">
           </div>
        </div>
        <input type="submit" class="p-1 text-medium text-sm bg-gray-800 mt-3 text-white rounded" value="create">
    </form>
</template>

<script>
import { reactive } from "vue"
import useCompanies from '../../composable/companies'
export default {
    setup() {
        const form = reactive({
            name: '',
            email: '',
            address: '',
            website: '',
        });
        const {errors, storeCompany} = useCompanies();
        const saveCompany = async () => {
             await storeCompany({...form});
        }

        return {
            form,
            errors,
            saveCompany
        }
    }
}
</script>

<style lang="">

</style>

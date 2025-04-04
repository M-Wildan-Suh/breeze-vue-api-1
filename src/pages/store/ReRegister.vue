<script setup>
import { ref, computed, onMounted } from 'vue'

import { useUsers } from '@/stores/user'
import { useStoreStore } from '@/stores/store'

import StoreLayout from '@/layouts/StoreLayout.vue'
import ValidationErrors from '@/components/ValidationErrors.vue'

const user = ref()
const storeUser = useUsers()
const storeStore = useStoreStore()
const processing = ref(false)

const store_name = ref('')
const name = ref('')
const email = ref('')

onMounted(async () => {
    await fetchUser()
})

async function fetchUser() {
    await storeUser.getData()
    user.value = storeUser.userData
    store_name.value = user.value.store.store_name
    name.value = user.value.name
    email.value = user.value.email
    console.log(user.value);
}

const ReRegisteration = async () => {
    processing.value = true

    const formData = new FormData()
    formData.append('user_id', user.value.id)
    formData.append('store_id', user.value.store.id)
    formData.append('store_name', store_name.value)
    formData.append('name', name.value)
    formData.append('email', email.value)

    await storeStore.reRegisteration(formData, setErrors, processing)
}

const setErrors = ref([])
const errors = computed(() => setErrors.value)
</script>

<template>
    <StoreLayout title="Re-Registeration">
        <ValidationErrors class="w-full" :errors="errors" />
        <div class="w-full">
            <div class="px-5 py-3">
                <form @submit.prevent="ReRegisteration" enctype="multipart/form-data">
                    <div class="space-y-3">
                        <div
                            class="border dark:!border-typography-3 dark-primary-2 border-gray-300 p-3 rounded-lg bg-light-primary-1 dark:bg-dark-primary-2 transition-all">
                            <p class="dark:text-light-primary-1 font-medium text-lg pb-2 border-b mb-3 px-3">
                                Re-Registeration
                            </p>
                            <div class="grid gap-3 p-3">
                                <div class="flex flex-col gap-2 text-sm">
                                    <label class="dark:text-light-primary-1" for="store_name">Store Name</label>
                                    <input
                                        class="text-sm opacity-50 cursor-not-allowed rounded-lg bg-light-primary-1 w-full dark:bg-dark-primary-1 dark:text-light-primary-1 border !border-gray-500 dark:!border-typography-3"
                                        type="text" v-model="store_name" id="store_name"
                                        placeholder="Enter Store Name" required disabled/>
                                </div>
                                <div class="flex flex-col gap-2 text-sm">
                                    <label class="dark:text-light-primary-1" for="name">Username</label>
                                    <input
                                        class="text-sm opacity-50 cursor-not-allowed rounded-lg bg-light-primary-1 w-full dark:bg-dark-primary-1 dark:text-light-primary-1 border !border-gray-500 dark:!border-typography-3"
                                        type="text" v-model="name" id="name"
                                        placeholder="Enter Username" required disabled/>
                                </div>
                                <div class="flex flex-col gap-2 text-sm">
                                    <label class="dark:text-light-primary-1" for="email">Email</label>
                                    <input
                                        class="text-sm rounded-lg bg-light-primary-1 w-full dark:bg-dark-primary-1 dark:text-light-primary-1 border !border-gray-500 dark:!border-typography-3"
                                        type="email" v-model="email" id="email"
                                        placeholder="Enter Email" required />
                                </div>
                            </div>
                        </div>
                        <button
                            class="bg-secondary-3 hover:bg-opacity-90 text-white px-3 py-2 rounded-lg text-sm cursor-pointer flex justify-center items-center gap-3">
                            <p>Re-Registeration</p>
                            <svg v-if="processing" role="status"
                                class="inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                                viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="currentColor" />
                                <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill="currentFill" />
                            </svg>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </StoreLayout>
</template>

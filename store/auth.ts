const state = () => ({
    token: '',
    user: {},
    isLoading: false
});

const getters = {};

const actions = {
    async login(payload: any): Promise<any> {
        const $this = useAuthStore()
        const loader = useLoadingIndicator();
        const router = useRouter();
        try {
            const { data, response } = await useFetchApi(`/user/login`, {
                method: 'POST',
                data: payload
            });

            if (response.value.status == 200) {
                console.log(data.value)
                if (data.value.token) {
                    $this.token = data.value.token
                    $this.user = data.value.user
                }

                router.push('/')
            }

        } catch (err) {
            useResponseToast(err)
        }

        $this.isLoading = false
        loader.finish();
    },

    async register(payload: any): Promise<any> {
        const $this = useAuthStore()
        const loader = useLoadingIndicator();
        const router = useRouter();

        $this.isLoading = true
        loader.start()
        try {
            const { data, response } = await useFetchApi('/user/register', {
                method: 'POST',
                data: payload
            })

            if (data.value.token) {
                $this.token = data.value.token
                $this.user = data.value.user

                router.push('/')
            }

            console.log(response)
        } catch (err) {
            useResponseToast(err)
        }
        $this.isLoading = false
        loader.finish();

    },
};


export const useAuthStore = defineStore('authStore', {
    state,
    getters,
    actions,
    persist: {
        storage: persistedState.localStorage,
        paths: ['token', 'user']
    }
});

const state = () => ({
    token: '1|hza7xc8I70Y4qDZjAQpH3e3TaI6YHnlu9suFgZ9Q96b9d1d1',
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
                if (data.value.data?.token) {
                    $this.token = data.value.data.token.access_token
                    $this.user = data.value.data.user
                }
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
        $this.isLoading = true
        loader.start()
        try {
            const { data, response } = await useFetchApi('/auth/register', {
                method: 'POST',
                data: payload
            })

            if (data.value.data?.token) {
                $this.token = data.value.data.token.access_token
                $this.user = data.value.data.user
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

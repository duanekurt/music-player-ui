import axios, { type AxiosRequestConfig } from 'axios'
import { useAxios } from '@vueuse/integrations/useAxios'
import { useAuthStore } from '~/store/auth';

export default async function useFetchApi(url: string, options: AxiosRequestConfig<any>): Promise<any> {
    const config = useRuntimeConfig();
    const auth = useAuthStore();

    const instance = axios.create({
        baseURL: `${config.public.baseUrl}/${config.public.apiVersion}`,
        headers: {
            Authorization: `Bearer ${auth.token ?? undefined}`
        }
    })

    return useAxios(url, options, instance);
} 
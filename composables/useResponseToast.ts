import { AxiosError, type AxiosResponse } from "axios";
import { toast } from "vue-sonner";

export default function useResponseToast(response: any, type?: string) {
    console.log(response)
    if (response instanceof AxiosError) {
        if (response.response?.data.message) {
            toast.error(response.response.data.message)
        } else {
            toast.error('Whoops, Something went wrong')
        }
    } else {
        if (response.value.status == 200) {
            if (type == 'info') {
                toast.info(response.value.data.message)
            } else if (type == 'warning') {
                toast.warning(response.value.data.message)
            } else if (type == 'error') {
                toast.error(response.value.data.message)
            } else if (type == 'default') {
                toast(response.value.data.message)
            }
            else {
                toast.success(response.value.data.message)
            }
        }
    }
}
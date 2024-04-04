<script setup>
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Toaster } from '@/components/ui/sonner'
import { useAuthStore } from '~/store/auth'


const authStore = useAuthStore();

const formSchema = toTypedSchema(z.object({
    email: z.string().min(2).max(50).email(),
    password: z.string().min(6).max(16)
}))

const form = useForm({
    validationSchema: formSchema,
})

const onSubmit = form.handleSubmit((values) => {
    authStore.login(values)
})


definePageMeta({
  middleware: ['auth']
})
</script>
<template>
    <div class="flex flex-row justify-center items-center h-screen">
        <Toaster richColors/>
        <Card class="w-[30%]">
            <CardHeader class="text-center">
                <CardTitle class="mb-2">Login</CardTitle>
                <CardDescription>Doesn't Have an account? Sign Up</CardDescription>

                <form @submit.prevent="onSubmit">
                    <CardContent>
                        <div class="form mt-5">
                            <FormField name="email" v-slot="{ componentField }">
                                <FormItem>
                                    <FormMessage />
                                    <FormControl>
                                        <Input placeholder="E-mail" v-bind="componentField" />
                                    </FormControl>
                                    <FormDescription />
                                </FormItem>
                            </FormField>

                            <FormField name="password" v-slot="{ componentField }">
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder="Password" v-bind="componentField" type="password" />
                                    </FormControl>
                                    <FormDescription />
                                    <FormMessage />
                                </FormItem>
                            </FormField>
                        </div>
                    </CardContent>

                    <CardFooter class="w-full">
                        <Button class="w-full" type="submit">Submit</Button>
                    </CardFooter>
                </form>
            </CardHeader>
        </Card>
    </div>
</template>

<style lang="scss" scoped></style>
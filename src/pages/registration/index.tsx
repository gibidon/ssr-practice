import {UserRegistrationForm} from '@/features/user/user-register/form'
import { trpc } from '@/shared/api'

export default function RegistrationPage(){
    const {mutate} = trpc.user.register.useMutation()

    return (<UserRegistrationForm onSubmit={mutate} />)
}
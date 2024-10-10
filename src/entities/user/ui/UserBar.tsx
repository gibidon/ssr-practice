import { useSession } from "next-auth/react"
import Link from "next/link"

export const UserBar = () => {
    const session = useSession()

   if (session.status === 'authenticated'){
    return (<div className="flex items-center gap-2">
    <div className="font-semibold border-b text-lg">
        Welcome, {session.data.user.name}
    </div>
     <button className="px-3 py-2 font-semibold text-white bg-green-500 rounded-md hover:bg-green-600">
            <Link href={'/events/create'}>
                Создать событие
            </Link>
        </button>
    </div>)
    
   }

   return (
   <div className="flex gap-1">
        <button className="px-4 py-2 font-semibold text-lg bg-blue-300 text-white rounded-md hover:bg-blue-400">
            <Link href={'/api/auth/signin'}>
                Log in
            </Link>
        </button>
       
   </div>
   )
}
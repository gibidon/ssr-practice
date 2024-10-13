import Link from "next/link"
import { useSession } from "next-auth/react"
import { signOut } from "next-auth/react"
import { NavButton } from "@/shared/ui/buttons/navButton"
import { useRouter } from "next/router"

export const UserBar = () => {
    const session = useSession()
    const {pathname} = useRouter()   
    const isRegistartionPage = pathname === '/registration' 

   if (session.status === 'authenticated'){    
   return (
   <div className="flex gap-1">
        <NavButton 
            href="/api/auth/signin"
            className="px-4 py-2 font-semibold text-md border rounded-md hover:bg-gray-200"
            text="Log in"
        />
        {!isRegistartionPage && <NavButton 
            href="/registration"
            className="px-4 py-2 font-semibold text-md border rounded-md hover:bg-gray-200"
            text="Sign up"
        />}
   </div>
   )
}}
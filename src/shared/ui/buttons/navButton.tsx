import Link from "next/link"

type NavButtonProps = {
    className?:string,
    href:string
    text?:string
    onClick?:() => void 
}

export const NavButton = ({className,href,text,onClick}:NavButtonProps) => {
    return (
        <Link href={href}>
            <button className={className} onClick={onClick}>{text}</button>
        </Link>
)}
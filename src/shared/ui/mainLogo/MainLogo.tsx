import Link from "next/link"

interface LogoProps {
    imageSrc:string
    linkTo?:string
}

export const MainLogo = ({imageSrc,linkTo}:LogoProps) => {
    return (
    <Link href={linkTo || '/'}>
        <img src={imageSrc}/>   
    </Link>
)}
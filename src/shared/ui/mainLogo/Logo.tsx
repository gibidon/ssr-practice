interface LogoProps {
    imageSrc:string
}

export const Logo = ({imageSrc}:LogoProps) => {
    return <img src={imageSrc}/>
}
import { SVGIcon } from ".";

export default function PAYMENT({fill, stroke, bgFill}: SVGIcon) {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.66663 8.33341H18.3333M3.33329 4.16675H16.6666C17.5871 4.16675 18.3333 4.91294 18.3333 5.83341V14.1667C18.3333 15.0872 17.5871 15.8334 16.6666 15.8334H3.33329C2.41282 15.8334 1.66663 15.0872 1.66663 14.1667V5.83341C1.66663 4.91294 2.41282 4.16675 3.33329 4.16675Z" stroke={stroke} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill={bgFill}/>
            <rect x="4" y="11" width="2" height="2" rx="1" fill={fill}/>
            <rect x="7" y="11" width="6" height="2" rx="1" fill={fill}/>
        </svg>
    )
}


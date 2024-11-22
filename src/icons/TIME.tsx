import { SVGIcon } from ".";


export default function TIME ({fill, stroke}: SVGIcon) {
    return (
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="5" cy="5" r="5" fill={fill}/>
        <path d="M2.5 5.5L3.81985 6.67717C4.02152 6.85703 4.3296 6.84413 4.51551 6.64803L7.5 3.5" stroke={stroke} stroke-linecap="round"/>
        </svg>
    )
}


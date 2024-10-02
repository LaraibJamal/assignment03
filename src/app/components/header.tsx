import Link from "next/link"

export default function Header(){
    return(
        <div className="header">
            <ul className="header-button">
                <Link href={"/"}>
                <li>Portfolio</li>
                </Link>
                <Link href={"/about"}>
                <li>About</li>
                </Link>
                <Link href={"/contact-us"}>
                <li>Contact Us</li>
                </Link>
            </ul>
        </div>
    )
}
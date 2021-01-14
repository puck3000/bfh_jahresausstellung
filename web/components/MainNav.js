import Link from "next/link"
import NavLink from 'components/NavLink'

export default function MainNav() {
    return (
        <nav id="mainNav">
            <ul>
                <li className="p-4">
                    <Link href="/hintergrund/huttwil" passHref>
                        <a >Partnergemeinde Huttwil</a>
                    </Link>
                </li>
                <li className="p-4">
                    <Link href="/hintergrund/dencity" passHref>
                        <a>Dencity</a>
                    </Link>
                </li>
                <li className="p-4">
                    <Link href="/hintergrund/feldstudien" passHref>
                        <a>Feldstudien BFH-SA</a>
                    </Link>
                </li>
                <li className="p-4">
                    <Link href="/themenpfade" passHref>
                        <a>Themenpfade</a>
                    </Link>
                </li>
                <li className="p-4">
                    <Link href="/projekte" passHref>
                        <a>Projektübersicht</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
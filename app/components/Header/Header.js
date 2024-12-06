import Link from "next/link";
import styles from "./header.module.css";

const Header = () => {
	return (
		<header className={styles.header}>
			<div>
				<Link href="/">Movie Finder</Link>
			</div>
			<nav className={styles.nav}>
				<ul>
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<Link href="/about">About</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;

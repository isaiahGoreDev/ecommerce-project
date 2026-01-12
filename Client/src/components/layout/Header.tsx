import styles from "@/components/layout/styles/header.module.sass";
import Icons from "@/components/Icons";

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.banner}>
				<span className={styles["banner-text"]}>
					Free standard shipping on orders over $100
				</span>
			</div>
			<nav className={styles.nav}>
				<div className={styles["nav-fill"]}>
					<div className={styles["nav-left"]}>
						<div className={styles["mobile-btn"]}>
							<span></span>
							<span></span>
						</div>
						<Icons icon="logo" />
					</div>
					<div className={styles["nav-row"]}>
						<div className={`${styles["nav-row"]} ${styles["nav-links"]}`}>
							<span>Women</span>
							<span>Men</span>
						</div>
						<div className={styles.icon}>
							<Icons icon="heart" />
						</div>
						<div className={styles.icon}>
							<Icons icon="account" />
						</div>
						<div className={styles.icon}>
							<Icons icon="cart" />
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
}

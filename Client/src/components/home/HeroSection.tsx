import styles from "./styles/heroSection.module.sass";
import Button from "@/components/ui/Button";

export default function HeroSection() {
	return (
		<div className={styles.hero}>
			<div className={styles.cta}>
				<h1>new styles</h1>
				<p>Be ready for summer 2026 with these new styles</p>
				<Button>
					<span>shop</span>
				</Button>
			</div>
			<div className={styles["hero-image"]}>
				<img src="/images/hero-2.png" alt="" />
			</div>
		</div>
	);
}

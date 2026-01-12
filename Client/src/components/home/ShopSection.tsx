import styles from "./styles/shopSection.module.sass";
import Button from "@/components/ui/Button";

const ShopSection = () => {
	return (
		<section className={styles.shop}>
			<div className={styles["shop-block"]}>
				<div className={styles.cta}>
					<h3>Shop all man</h3>
					<h2>Expand your styles</h2>
					<Button variant="secondary">
						<span>Shop</span>
					</Button>
				</div>
				<div className={styles["image-block"]}>
					<img src="/images/shop-men.jpg" alt="" />
				</div>
			</div>
			<div className={styles["shop-block"]}>
				<div className={styles.cta}>
					<h3>Shop all woman</h3>
					<h2>Get your summer styles</h2>
					<Button variant="secondary">
						<span>Shop</span>
					</Button>
				</div>
				<div className={styles["image-block"]}>
					<img src="/images/shop-women.jpg" alt="" />
				</div>
			</div>
		</section>
	);
};

export default ShopSection;

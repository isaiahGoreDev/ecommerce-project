import Icons from "../Icons";
import styles from "./productCard.module.sass";

export interface Product {
	id: string;
	name: string;
	price: number;
	imageUrl: string;
	currency?: string;
}

interface ProductCardProps {
	product: Product;
	onClick?: (product: Product) => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
	const { name, price, imageUrl, currency = "USD" } = product;

	return (
		<article className={styles.card} onClick={() => onClick?.(product)}>
			<div className={styles["card-holder"]}>
        <div className={styles['product-actions']}>
          <div className={`${styles['product-icon']} ${styles.favorite}`}>
            <Icons icon="heart"/>
          </div>
          <div className={`${styles['product-icon']} ${styles.add}`}>
            <Icons icon="add"/>
            <div className={styles['add-bg']}></div>
          </div>
        </div>
				<div className={styles['product-image']}>
					<img src={imageUrl} alt={name} loading="lazy" />
				</div>
			</div>
			<div className={styles.content}>
				<h3 className={styles.name}>{name}</h3>
				<span className={styles.price}>
					{new Intl.NumberFormat("en-US", {
						style: "currency",
						currency,
            maximumFractionDigits: 0,
					}).format(price)}
				</span>
			</div>
		</article>
	);
}

import styles from "./styles/featuredProducts.module.sass";
import { productsMock } from "@/mocks/products.mock";
import { ProductCard } from "@/components/product";

const FeaturedProducts = () => {
	return (
		<section className={styles.feature}>
			<div className={styles.grid}>
				{productsMock.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</section>
	);
};

export default FeaturedProducts;

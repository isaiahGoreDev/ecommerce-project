import FeaturedProducts from "@/components/home/FeaturedProducts";
import HeroSection from "@/components/home/HeroSection";
import ShopSection from "@/components/home/ShopSection";

export default function HomePage() {
	return (
		<main>
			<HeroSection />
			<FeaturedProducts />
			<ShopSection />
		</main>
	);
}

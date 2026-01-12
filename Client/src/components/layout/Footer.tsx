import styles from "./styles/footer.module.sass";
import Icons from "@/components/Icons";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles["footer-wrapper"]}>
				<div className={styles.grid}>
					<div className={styles.col}>
						<h3>service</h3>
						<span>shipping</span>
						<span>returns</span>
						<span>refund policy</span>
						<span>FAQ</span>
						<span>terms of service</span>
						<span>privacy policy</span>
					</div>
					<div className={styles.col}>
						<h3>company</h3>
						<span>news</span>
						<span>accessibility</span>
						<span>report a problem</span>
					</div>
					<div className={styles.col}>
						<h3>customer support</h3>
						<span>toll free (888)123-4567</span>
						<span>service@nuiora-clothing.com</span>
					</div>
					<div className={styles.col}>
						<h3>join our newsletter</h3>
						<p>stay updated with out latest news and offers.</p>
            <div className={styles['email']}>
              <input type="text" name="test_email" placeholder="Email"/>
              <button type="button"><Icons icon="chevron-right"/></button>
            </div>
					</div>
				</div>
				<div className={styles.logo}>
					<Icons icon="logo" />
				</div>
			</div>
		</footer>
	);
};

export default Footer;

import hamburger from "./hamburger";
import { initShop } from "./shop";

hamburger();

const isShopPage = /\/shop\.html$/i.test(window.location.pathname);

if (isShopPage) {
	initShop();
}

const revealTargets = Array.from(
	document.querySelectorAll(
		[
			".header__text-box > *",
			"main .heading-secondary",
			"main .heading-tertiary",
			"main .paragraph",
			"main .description",
			"main .btn",
			"main .btn-secondary",
			"main .btn-text",
			"main .shop-card",
			"main .row > [class^='col-']",
			"main .section-about_image",
			"main .gallery-image",
			"main .image__explore",
			"main .background-color",
			"main iframe",
		].join(", ")
	)
);

if (revealTargets.length > 0) {
	revealTargets.forEach((element, index) => {
		element.classList.add("reveal");
		element.style.setProperty("--reveal-delay", `${Math.min(index * 30, 180)}ms`);
	});

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("is-visible");
					observer.unobserve(entry.target);
				}
			});
		},
		{
			root: null,
			threshold: 0.1,
			rootMargin: "0px 0px -4% 0px",
		}
	);

	revealTargets.forEach((element) => observer.observe(element));
}

const scrolledNavigationPages = /\/(shop|cafe|origin)\.html$/i;
const navigation = document.querySelectorAll(".navD, .navM");

if (scrolledNavigationPages.test(window.location.pathname)) {
	const setScrolledNavigationState = () => {
		const isScrolled = window.scrollY > 10;

		navigation.forEach((nav) => {
			nav.classList.toggle("scrolled", isScrolled);
		});
	};

	setScrolledNavigationState();
	window.addEventListener("scroll", setScrolledNavigationState, {
		passive: true,
	});
}

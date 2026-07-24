const CART_STORAGE_KEY = "coffeeshop-cart-v1";

import costaRicaImage from "../img/FEND_Coffee_Costa-Rica 2.png";
import ethiopiaImage from "../img/FEND-Coffee-beans-fresh.png";
import brazilImage from "../img/FEND-Coffee-roaster.png";
import houseRoastImage from "../img/FEND-Coffee-machine-2.png";
import espressoBlendImage from "../img/FEND-Coffee-machine.png";
import filterBlendImage from "../img/FEND-Coffee-latte-art-2.png";

import groupBagIcon from "../icn/Groupbag2.svg";
import coffeeBonesIcon from "../icn/coffeebones.svg";
import handcraftedIcon from "../icn/handcrafted.svg";
import groupCupIcon from "../icn/Groupcup.svg";
import frenchPressIcon from "../icn/frenchpress.svg";
import groupMachine1Icon from "../icn/Groupmachine1.svg";
import groupBrew1Icon from "../icn/Groupbrew1.svg";
import groupMachine2Icon from "../icn/Groupmachine2.svg";
import groupBrew2Icon from "../icn/Groupbrew2.svg";
import groupBrew3Icon from "../icn/Groupbrew3.svg";

const products = [
	{
		id: "costa-rica",
		name: "Costa Rica",
		price: 8.9,
		image: costaRicaImage,
		alt: "Kaffee aus Costa Rica",
		note: "Hell, fruchtig und klar im Abgang.",
		icons: [
			{ src: groupBagIcon, alt: "Symbol Bohne" },
			{ src: coffeeBonesIcon, alt: "Symbol Röstaroma" },
			{ src: handcraftedIcon, alt: "Symbol Handarbeit" },
		],
	},
	{
		id: "ethiopia",
		name: "Äthiopien",
		price: 9.4,
		image: ethiopiaImage,
		alt: "Kaffee aus Äthiopien",
		note: "Florale Noten mit lebendiger Säure.",
		icons: [
			{ src: groupCupIcon, alt: "Symbol Cup" },
			{ src: frenchPressIcon, alt: "Symbol French Press" },
			{ src: handcraftedIcon, alt: "Symbol Handarbeit" },
		],
	},
	{
		id: "brazil",
		name: "Brasilien",
		price: 8.2,
		image: brazilImage,
		alt: "Kaffee aus Brasilien",
		note: "Nussig, weich und angenehm rund.",
		icons: [
			{ src: groupMachine1Icon, alt: "Symbol Maschine" },
			{ src: coffeeBonesIcon, alt: "Symbol Röstaroma" },
			{ src: handcraftedIcon, alt: "Symbol Handarbeit" },
		],
	},
	{
		id: "house-roast",
		name: "Hausröstung",
		price: 7.9,
		image: houseRoastImage,
		alt: "Hausröstung von Rustica",
		note: "Unser klassischer Alltagsfavorit.",
		icons: [
			{ src: groupBrew1Icon, alt: "Symbol Brew" },
			{ src: groupMachine2Icon, alt: "Symbol Maschine" },
			{ src: handcraftedIcon, alt: "Symbol Handarbeit" },
		],
	},
	{
		id: "espresso-blend",
		name: "Espresso Blend",
		price: 9.8,
		image: espressoBlendImage,
		alt: "Espresso Blend",
		note: "Kräftig, dicht und mit Crema-Fokus.",
		icons: [
			{ src: groupBrew2Icon, alt: "Symbol Brew" },
			{ src: frenchPressIcon, alt: "Symbol French Press" },
			{ src: handcraftedIcon, alt: "Symbol Handarbeit" },
		],
	},
	{
		id: "filter-blend",
		name: "Filter Blend",
		price: 8.6,
		image: filterBlendImage,
		alt: "Filter Blend",
		note: "Sauber, ruhig und sehr zugänglich.",
		icons: [
			{ src: groupBrew3Icon, alt: "Symbol Brew" },
			{ src: groupCupIcon, alt: "Symbol Cup" },
			{ src: handcraftedIcon, alt: "Symbol Handarbeit" },
		],
	},
];

const currencyFormatter = new Intl.NumberFormat("de-DE", {
	style: "currency",
	currency: "EUR",
});

function readCart() {
	try {
		const rawCart = window.localStorage.getItem(CART_STORAGE_KEY);
		if (!rawCart) {
			return [];
		}

		const parsedCart = JSON.parse(rawCart);
		return Array.isArray(parsedCart) ? parsedCart : [];
	} catch {
		return [];
	}
}

function writeCart(cart) {
	window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
}

function getProduct(productId) {
	return products.find((product) => product.id === productId);
}

function formatPrice(price) {
	return currencyFormatter.format(price);
}

function getCartQuantity(cart) {
	return cart.reduce((total, item) => total + item.quantity, 0);
}

function getCartTotal(cart) {
	return cart.reduce((total, item) => {
		const product = getProduct(item.id);
		return total + (product ? product.price * item.quantity : 0);
	}, 0);
}

function renderProducts(container) {
	container.innerHTML = products
		.map(
			(product) => `
        <article class="shop-card reveal">
          <div class="shop-card__media background-color">
            <img
              src="${product.image}"
              alt="${product.alt}"
              class="image__explore shop-card__image u-margin-bottom-medium"
            />
          </div>
          <div class="shop-card__body">
            <p class="description__black shop-card__name">${product.name}</p>
            <p class="description__grey shop-card__price">${formatPrice(product.price)}</p>
            <p class="shop-card__note">${product.note}</p>
            <div class="shop-card__icons" aria-label="Zubereitungs- und Herkunftssymbole">
              ${product.icons
					.map(
						(icon) => `
                  <img
                    src="${icon.src}"
                    alt="${icon.alt}"
                    class="icon__explore icon_filter--black"
                    title="${icon.alt}"
                  />
                `
					)
					.join("")}
            </div>
            <button
              type="button"
							class="shop-card__button"
              data-add-to-cart="${product.id}"
            >
              In den Warenkorb
            </button>
          </div>
        </article>
      `
		)
		.join("");
}

function renderCart(cart, elements) {
	const { cartItems, cartSubtotal, cartCountBadges, cartDrawer } = elements;
	const totalQuantity = getCartQuantity(cart);
	const totalPrice = getCartTotal(cart);

	cartCountBadges.forEach((badge) => {
		badge.textContent = String(totalQuantity);
		badge.classList.toggle("is-empty", totalQuantity === 0);
	});

	if (cartItems) {
		if (cart.length === 0) {
			cartItems.innerHTML = `
        <p class="cart-drawer__empty">Dein Warenkorb ist noch leer.</p>
      `;
		} else {
			cartItems.innerHTML = cart
				.map((item) => {
					const product = getProduct(item.id);
					if (!product) {
						return "";
					}

					return `
              <article class="cart-item">
                <img
                  src="${product.image}"
                  alt="${product.alt}"
                  class="cart-item__image"
                />
                <div class="cart-item__content">
                  <div class="cart-item__topline">
                    <h4 class="cart-item__name">${product.name}</h4>
                    <button
                      type="button"
                      class="cart-item__remove"
                      data-cart-remove="${product.id}"
                      aria-label="${product.name} aus dem Warenkorb entfernen"
                    >
                      Entfernen
                    </button>
                  </div>
                  <p class="cart-item__meta">${formatPrice(product.price)} pro Stück</p>
                  <div class="cart-item__controls">
                    <button type="button" class="cart-item__step" data-cart-step="-1" data-cart-id="${product.id}">-</button>
                    <span class="cart-item__quantity">${item.quantity}</span>
                    <button type="button" class="cart-item__step" data-cart-step="1" data-cart-id="${product.id}">+</button>
                    <strong class="cart-item__sum">${formatPrice(product.price * item.quantity)}</strong>
                  </div>
                </div>
              </article>
            `;
				})
				.join("");
		}
	}

	if (cartSubtotal) {
		cartSubtotal.textContent = formatPrice(totalPrice);
	}
}

function initCartToggle(toggle, openCart) {
	if (!toggle) {
		return;
	}

	toggle.addEventListener("click", (event) => {
		event.preventDefault();
		openCart();
	});
}

export function initShop() {
	const productsContainer = document.querySelector("[data-shop-products]");
	const cartDrawer = document.querySelector("[data-cart-drawer]");
	const cartOverlay = document.querySelector("[data-cart-overlay]");
	const cartItems = document.querySelector("[data-cart-items]");
	const cartSubtotal = document.querySelector("[data-cart-subtotal]");
	const cartCountBadges = Array.from(document.querySelectorAll("[data-cart-count]"));
	const cartCloseButtons = Array.from(document.querySelectorAll("[data-cart-close]"));
	const cartClearButtons = Array.from(document.querySelectorAll("[data-cart-clear]"));
	const navCartLinks = Array.from(document.querySelectorAll('.header__cart'))
		.map((image) => image.closest("a"))
		.filter(Boolean);
	const cartFab = document.querySelector("[data-cart-toggle]");

	if (!productsContainer || !cartDrawer || !cartOverlay || !cartItems || !cartSubtotal) {
		return;
	}

	navCartLinks.forEach((link) => {
		link.classList.add("header__cart-link");
		link.setAttribute("aria-label", "Warenkorb öffnen");
		if (!link.querySelector("[data-cart-count]")) {
			const badge = document.createElement("span");
			badge.className = "header__cart-badge is-empty";
			badge.setAttribute("data-cart-count", "");
			badge.textContent = "0";
			link.appendChild(badge);
		}
	});

	renderProducts(productsContainer);

	let cart = readCart();

	const closeCart = () => {
		cartDrawer.classList.remove("is-open");
		cartOverlay.classList.remove("is-open");
		cartDrawer.setAttribute("aria-hidden", "true");
	};

	const openCart = () => {
		cartDrawer.classList.add("is-open");
		cartOverlay.classList.add("is-open");
		cartDrawer.setAttribute("aria-hidden", "false");
	};

	const persistAndRender = () => {
		writeCart(cart);
		renderCart(cart, { cartItems, cartSubtotal, cartCountBadges, cartDrawer });
	};

	const addProduct = (productId) => {
		const existingItem = cart.find((item) => item.id === productId);

		if (existingItem) {
			existingItem.quantity += 1;
		} else {
			cart = [...cart, { id: productId, quantity: 1 }];
		}

		persistAndRender();
		openCart();
	};

	const stepQuantity = (productId, delta) => {
		cart = cart
			.map((item) => {
				if (item.id !== productId) {
					return item;
				}

				return { ...item, quantity: item.quantity + delta };
			})
			.filter((item) => item.quantity > 0);

		persistAndRender();
	};

	const removeProduct = (productId) => {
		cart = cart.filter((item) => item.id !== productId);
		persistAndRender();
	};

	productsContainer.addEventListener("click", (event) => {
		const addButton = event.target.closest("[data-add-to-cart]");

		if (!addButton) {
			return;
		}

		const productId = addButton.getAttribute("data-add-to-cart");

		if (productId) {
			addProduct(productId);
		}
	});

	cartItems.addEventListener("click", (event) => {
		const stepButton = event.target.closest("[data-cart-step]");
		const removeButton = event.target.closest("[data-cart-remove]");

		if (stepButton) {
			const productId = stepButton.getAttribute("data-cart-id");
			const delta = Number(stepButton.getAttribute("data-cart-step"));

			if (productId && Number.isFinite(delta)) {
				stepQuantity(productId, delta);
			}
		}

		if (removeButton) {
			const productId = removeButton.getAttribute("data-cart-remove");

			if (productId) {
				removeProduct(productId);
			}
		}
	});

	initCartToggle(cartFab, openCart);
	navCartLinks.forEach((toggle) => initCartToggle(toggle, openCart));

	cartCloseButtons.forEach((button) => {
		button.addEventListener("click", closeCart);
	});

	cartClearButtons.forEach((button) => {
		button.addEventListener("click", () => {
			cart = [];
			persistAndRender();
		});
	});

	cartOverlay.addEventListener("click", closeCart);

	persistAndRender();
}
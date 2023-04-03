let currentProducts: Product[] = products;
let categories: any = new Set<string>();
let cart = new Set<Product>();

const productsSection: HTMLElement = document.querySelector(".products");

const renderProducts = (items: Product[]) => {
    productsSection.innerHTML = "";
    for (let i = 0; i < items.length; i++) {

        let minQty = items[i].measure === Measure.Kg ? 0.1 : 1;

        const newProduct = document.createElement("div");
        newProduct.className = `product ${items[i].sale ? "on-sale" : ""}`;
        newProduct.innerHTML = `
                <img src="${items[i].image}" alt="${items[i].name}" class="item-icon">
                <h1 class="product-title">${items[i].name}</h1>
                <p class="product-description">${items[i].description}</p>
                <div class="product-quantity"><div class="product-quantity-counter"><button data-id="${items[i].id}" value="-" disabled="disabled">-</button><input data-id="${items[i].id}" type="number" max="100" min="${minQty}" step="${minQty}" value="${minQty.toFixed(1).toString()}"><button data-id="${items[i].id}" value="+">+</button></div><span class="product-measure">${items[i].measure}</span></div>
                <div class="product-price"><span class="product-price-default">$${items[i].price.toFixed(2)}</span><span class="product-price-sale">${items[i].saleAmount ? "$" + items[i].saleAmount.toFixed(2) : ""}</span></div>
                <button class="add-to-cart-button" data-id="${items[i].id}">Add to cart</button>`;

        productsSection.appendChild(newProduct);
    }
};


const renderCategories = (items: Product[]) => {
    for (let i = 0; i < items.length; i++) {
        categories.add(items[i].category);
    }

    categories = ["all", ...categories];

    const categoriesSection = document.querySelector(".categories-items");

    categories.forEach((category, index) => {
        const newCategory = document.createElement("button");
        newCategory.innerHTML = category;
        newCategory.dataset.category = category;
        index === 0 ? newCategory.className = "active" : "";

        categoriesSection.appendChild(newCategory);
    });
};

const addToCart = (productId: number) => {
    cart.add(currentProducts[productId]);

    const cartCounterElement = document.querySelector(".shopping-cart-counter p");
    cartCounterElement.parentElement.classList.add("active");
    let cartCounter: string;
    cart.size > 9 ? cartCounter = "9+" : cartCounter = cart.size.toString();
    cartCounterElement.innerHTML = cartCounter;
};


renderProducts(currentProducts);
renderCategories(currentProducts);

const categoriesButtons = document.querySelectorAll(".categories-items button");

categoriesButtons.forEach((btn) => {
    btn.addEventListener("click", (e: Event) => {
        const category = (<HTMLElement>e.target).dataset.category;

        categoriesButtons.forEach((btn) => btn.classList.remove("active"));
        (<HTMLElement>e.target).className = "active";

        if (category === "all") {
            currentProducts = products;
        } else {
            currentProducts = products.filter((product) => product.category === category);
        }
        renderProducts(currentProducts);
    });
});

const searchBarInput = document.querySelector(".search-bar input");

searchBarInput.addEventListener("input", (e: Event) => {
    const search = (<HTMLInputElement>e.target).value.toLowerCase();

    const foundProducts = currentProducts.filter((product) => {
        if (product.name.toLocaleLowerCase().includes(search)) {
            return product;
        }
    });

    const emptyState = document.querySelector(".empty-state");

    foundProducts.length === 0 ? emptyState.classList.add("active") : emptyState.classList.remove("active");

    renderProducts(foundProducts);
});

const quantityCounterButtons = document.querySelectorAll(".product-quantity-counter button");

quantityCounterButtons.forEach((btn) => {
    btn.addEventListener("click", (e: Event) => {
        const button = (<HTMLInputElement>e.target);
        const quantityCounterInput: HTMLInputElement = document.querySelector(`.product-quantity-counter input[data-id="${button.dataset.id}"]`);
        let counterInputValue = parseFloat(quantityCounterInput.value);

        if (button.value === "-") {
            (<HTMLInputElement>document.querySelector(`.product-quantity-counter button[data-id="${button.dataset.id}"][value="+"]`)).disabled = false;
            counterInputValue -= parseFloat(quantityCounterInput.step);
            quantityCounterInput.value = counterInputValue.toFixed(1).toString();

            if (parseFloat(quantityCounterInput.value) === parseFloat(quantityCounterInput.min)) {
                button.disabled = true;
            }
        } else {
            (<HTMLInputElement>document.querySelector(`.product-quantity-counter button[data-id="${button.dataset.id}"][value="-"]`)).disabled = false;
            counterInputValue += parseFloat(quantityCounterInput.step);
            quantityCounterInput.value = counterInputValue.toFixed(1).toString();

            if (parseFloat(quantityCounterInput.value) === parseFloat(quantityCounterInput.max)) {
                button.disabled = true;
            }
        }
    });
});

const addToCartButtons = document.querySelectorAll(".add-to-cart-button");

addToCartButtons.forEach((btn) => {
    btn.addEventListener("click", (e: Event) => {
        const button = (<HTMLButtonElement>e.target);

        addToCart(parseInt(button.dataset.id));
    });
});


type Product = {
    id: number;
    name: string;
    description: string;
    category: string;
    price: number;
    image: string;
    sale?: boolean;
    saleAmount?: number;
    measure: Measure;
}

enum Measure {
    Kg = "Kg",
    Liter = "L",
    Unit = "",
}

class Cart {
    products: { product: Product, quantity: number, amount: number }[] = [];

    add(product: Product, quantity: number) {

        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].product === product) {

                this.products[i].quantity += quantity;
                this.products[i].amount = this.#calculateQuantity(this.products[i].product, this.products[i].quantity);
                return;
            }
        }

        this.products.push({ product: product, quantity: quantity, amount: this.#calculateQuantity(product, quantity) });
    }

    #calculateQuantity(product: Product, quantity: number): number {
        let result: number;

        if ("sale" in product && product.sale === true) {
            result = quantity * product.saleAmount;
        } else {
            result = quantity * product.price;
        }

        return result;
    }

    totalAmount(): string {
        let totalAmount = 0;

        this.products.forEach((product) => {
            totalAmount += product.amount;
        });

        return totalAmount.toFixed(2);
    }

    removeProduct(product: Product) {
        this.products.splice(this.products.findIndex(v => v.product === product), 1);
    }

    clearCart() {
        this.products = [];
    }
}

const products: Product[] = [
    {
        id: 0,
        name: "potatoes",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste est quibusdam ad. Vitae cupiditate, reiciendis eum sunt quibusdam tenetur maiores accusamus quas itaque voluptas sint atque eaque, libero error magni.`,
        category: "vegetables",
        price: 3.5,
        image: "./images/potatoes.jpg",
        sale: true,
        saleAmount: 1.99,
        measure: Measure.Kg,
    },
    {
        id: 1,
        name: "apples",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste est quibusdam ad. Vitae cupiditate, reiciendis eum sunt quibusdam tenetur maiores accusamus quas itaque voluptas sint atque eaque, libero error magni.`,
        category: "fruits",
        price: 5,
        image: "./images/apples.jpg",
        sale: true,
        saleAmount: 4,
        measure: Measure.Kg,
    },
    {
        id: 2,
        name: "chicken",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste est quibusdam ad. Vitae cupiditate, reiciendis eum sunt quibusdam tenetur maiores accusamus quas itaque voluptas sint atque eaque, libero error magni.`,
        category: "meat",
        price: 30,
        image: "./images/chicken.jpg",
        sale: true,
        saleAmount: 19.99,
        measure: Measure.Kg,
    },
    {
        id: 3,
        name: "milk",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste est quibusdam ad. Vitae cupiditate, reiciendis eum sunt quibusdam tenetur maiores accusamus quas itaque voluptas sint atque eaque, libero error magni.`,
        category: "dairy products",
        price: 4,
        image: "./images/milk.jpg",
        measure: Measure.Liter,
    },
    {
        id: 4,
        name: "bread",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste est quibusdam ad. Vitae cupiditate, reiciendis eum sunt quibusdam tenetur maiores accusamus quas itaque voluptas sint atque eaque, libero error magni.`,
        category: "grain products",
        price: 3,
        image: "./images/bread.jpg",
        sale: false,
        saleAmount: 1.99,
        measure: Measure.Unit,
    },
    {
        id: 5,
        name: "sausages",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste est quibusdam ad. Vitae cupiditate, reiciendis eum sunt quibusdam tenetur maiores accusamus quas itaque voluptas sint atque eaque, libero error magni.`,
        category: "meat products",
        price: 40,
        image: "./images/sausages.jpg",
        sale: true,
        saleAmount: 29.99,
        measure: Measure.Kg,
    },
    {
        id: 6,
        name: "chocolate",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste est quibusdam ad. Vitae cupiditate, reiciendis eum sunt quibusdam tenetur maiores accusamus quas itaque voluptas sint atque eaque, libero error magni.`,
        category: "sweets",
        price: 20,
        image: "./images/chocolate.jpg",
        sale: true,
        saleAmount: 18.99,
        measure: Measure.Unit,
    },
    {
        id: 7,
        name: "cola",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste est quibusdam ad. Vitae cupiditate, reiciendis eum sunt quibusdam tenetur maiores accusamus quas itaque voluptas sint atque eaque, libero error magni.`,
        category: "beverages",
        price: 6,
        image: "./images/cola.jpg",
        sale: false,
        saleAmount: 5.2,
        measure: Measure.Liter,
    },
    {
        id: 8,
        name: "olive oil",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste est quibusdam ad. Vitae cupiditate, reiciendis eum sunt quibusdam tenetur maiores accusamus quas itaque voluptas sint atque eaque, libero error magni.`,
        category: "fats and oils",
        price: 20,
        image: "./images/olive-oil.jpg",
        sale: false,
        saleAmount: 18.99,
        measure: Measure.Liter,
    },
    {
        id: 9,
        name: "penauts",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste est quibusdam ad. Vitae cupiditate, reiciendis eum sunt quibusdam tenetur maiores accusamus quas itaque voluptas sint atque eaque, libero error magni.`,
        category: "grains and nuts",
        price: 10,
        image: "./images/peanuts.jpg",
        measure: Measure.Kg,
    }
]


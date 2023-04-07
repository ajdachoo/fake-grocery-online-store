var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Cart_instances, _Cart_calculateQuantity;
var Measure;
(function (Measure) {
    Measure["Kg"] = "Kg";
    Measure["Liter"] = "L";
    Measure["Unit"] = "";
})(Measure || (Measure = {}));
class Cart {
    constructor() {
        _Cart_instances.add(this);
        this.products = [];
    }
    add(product, quantity) {
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].product === product) {
                this.products[i].quantity += quantity;
                this.products[i].amount = __classPrivateFieldGet(this, _Cart_instances, "m", _Cart_calculateQuantity).call(this, this.products[i].product, this.products[i].quantity);
                return;
            }
        }
        this.products.push({ product: product, quantity: quantity, amount: __classPrivateFieldGet(this, _Cart_instances, "m", _Cart_calculateQuantity).call(this, product, quantity) });
    }
    totalAmount() {
        let totalAmount = 0;
        this.products.forEach((product) => {
            totalAmount += product.amount;
        });
        return totalAmount.toFixed(2);
    }
    removeProduct(product) {
        this.products.splice(this.products.findIndex(v => v.product === product), 1);
    }
}
_Cart_instances = new WeakSet(), _Cart_calculateQuantity = function _Cart_calculateQuantity(product, quantity) {
    let result;
    if ("sale" in product && product.sale === true) {
        result = quantity * product.saleAmount;
    }
    else {
        result = quantity * product.price;
    }
    return result;
};
const products = [
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
];

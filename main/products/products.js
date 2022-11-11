class Products {

    constructor() {
        this.classNameActive = 'products-element__btn_active';
        this.labelAdd = 'Добавить в корзину';
        this.labelRemove = 'Удалить из корзины';
    }

    handlerSetLocatStorage(element, id) {
        let { pushProduct, products } = localStorageUtil.putProducts(id);
       
        if (pushProduct) {
            element.classList.add(this.classNameActive);
            element.innerText = this.labelRemove;
        } else {
            element.classList.remove(this.classNameActive);
            element.innerText = this.labelAdd;
        }    
        shoppingCounterPage.render(products.length);    
    }

    render(CATALOG) {
        let productsStore = localStorageUtil.getProducts();
        let li = '';
        CATALOG.forEach(({ id, title, price, srcImg }) => {
            let activeClass = '';
            let activeText = '';
            price = -price*(-1);
           
            if (productsStore.indexOf(id) === -1) {
                activeText = this.labelAdd;
            } else {
                activeClass = ' ' + this.classNameActive;
                activeText = this.labelRemove;
            }
     
            li +=  `<li class="products-element">
            <div id="products-element__name" class="products-element__name">${title}</div>
            <img class="products-element__img" src="${srcImg}" />
            <span class="products-element__price">
                ⚡️ ${price.toLocaleString()} UAH
            </span>
            <button class="products-element__btn${activeClass}" onclick="productsPage.handlerSetLocatStorage(this, '${id}');">
                ${activeText}
            </button>
        </li>`;
       
            
        });
        ROOT_PRODUCTS.innerHTML = `<ul  class="products-container">${li}</ul>`

    }
}

const productsPage = new Products();
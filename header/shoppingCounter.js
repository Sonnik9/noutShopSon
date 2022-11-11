class ShoppingCounter {
    constructor() {
        this.div3 = document.createElement('div');
    }
    handlerOpenShoppingPage() {
        shoppingPage.render();
    }

    render(count) {      
        if(count==0) count = ''
        else count = -(count)*(-1);
       
        let html = `
                    <div class="header__card-shopping">
                        <img class="header__card-shopping_img" src="header/headerImg/icons8-shopping-newww.png" onclick="shoppingCounterPage.handlerOpenShoppingPage()" alt="Shopping-card"> 
                        <p id ="shoppingCounter" class="shoppingCounter">${count}</p>
                    </div>       
        `;
        this.div3.innerHTML = ''
        this.div3.innerHTML = html
        HEADER_RIGHT_SIDE.append(this.div3)
       
    }
};

const shoppingCounterPage = new ShoppingCounter();
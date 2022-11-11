class Shopping {
    handlerClear() {
        ROOT_SHOPPING.innerHTML = '';
    }

    render() {
        
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';
        let sumCatalog = 0;
       
        CATALOG.forEach(({ id, title, price }) => {
            price = -price*(-1);
            if (productsStore.indexOf(id) !== -1) {
                htmlCatalog += `
                    <tr>
                        <td class="shopping-element__name">⚡️ ${title}</td>
                        <td class="shopping-element__price">${price.toLocaleString()} UAH</td>
                    </tr>
                `;
                sumCatalog += price;
                
            }
        });

        const html = `
            <div class="shopping-container">
               
                <table>
                    ${htmlCatalog}
                    <tr>
                        <td class="shopping-element__name">💥 Сумма:</td>
                        <td class="shopping-element__price">${sumCatalog.toLocaleString()} UAH</td>
                    </tr>
                </table>
                <div class="shopping-close" onclick="shoppingPage.handlerClear()"></div>
                
            </div>
        `;
       

        ROOT_SHOPPING.innerHTML = html;
       
    }
};

const shoppingPage = new Shopping();

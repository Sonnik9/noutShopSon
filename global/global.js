// let CATALOG = [];
const productsStore = localStorageUtil.getProducts();

// menuItem.render()
// searchInput.render()
shoppingCounterPage.render(productsStore.length)
// genericHeader.render()
// console.log(productsStore.length)

productsPage.render(CATALOG);


// fetch('server/server.json')
//    .then(res => res.json())
//       .then(body => {
//            CATALOG = body;
//            console.log(CATALOG)
//            productsList.render();

//     setTimeout(() => {
//     //     spinnerPage.handleClear();
//     //     render();
   
//     }, 1000);
//     })
//    .catch(() => {
//           console.log(error)
//     // spinnerPage.handleClear();
//     // errorPage.render();
// })
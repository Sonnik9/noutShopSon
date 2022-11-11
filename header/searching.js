class Searching {

    renderProoducts() {
    
        let value = INPUT_SEARCH.value.toLowerCase().trim();
        if(value!='')  {
            var filterCATALOG = CATALOG.filter(item => {
                return item.title.toLowerCase().search(value) > -1;
             
           });
        } 
        else
            filterCATALOG = CATALOG;    
        
       ROOT_PRODUCTS.innerHTML = '';   
       productsPage.render(filterCATALOG);

       let productsTitles = document.querySelectorAll('#products-element__name');
       console.log(productsTitles)
       if (value) { // for marking of highlighting text
        productsTitles.forEach(elem => {

            if (elem.innerText.toLowerCase().search(value) == -1) {                              
                elem.innerHTML = elem.innerText;
            }
            else {                    
               let str = elem.innerText;           
               elem.innerHTML =  searchInput.insertMark(str,elem.innerText.toLowerCase().search(value),value.length);
           }

        });
        }  // if (value)
        else {          
            productsTitles.forEach(elem => {               
            elem.innerHTML = elem.innerText;          
            });
        }

    }
 
    insertMark(string,pos,len) { 
      return string.slice(0, pos) + '<mark>' + string.slice(pos, pos+len) + '</mark>' + string.slice(pos+len);
    }

}


const searchInput = new Searching();
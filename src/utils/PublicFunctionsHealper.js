function searchProduct(id, array) {
  if (!id) {
    return;
  }
  const results = array.find((items) => {
    return items.id === id;
  });

  return results;
}

function getSourceImgs(name) {
  /*

        Function : 
        
        this function it gave Path of each Image 

        Input : name of image Product

        output : path of Image
    */
  if (name) {
    const path = require(`../sources/images/product/${name}`);
    return path;
  }
}

function searchByNameOfProducts(name, dataArray) {
  if (!name) {
    return;
  }
  const searchresult = dataArray.filter((items) => {
    return items.name.slice(0, 1) === name.slice(0, 1);
  });

  return searchresult;
}
function calcPriceProduct(array) {
  /*
        This Function it's just Calc price 
        of Product
    */
  if (array.length === 0) {
    return 0;
  }
  let totol = 0;
  array.map((data) => {
    return (totol += Number.parseFloat(data.price));
  });
  return totol;
}

export {
  searchProduct,
  getSourceImgs,
  searchByNameOfProducts,
  calcPriceProduct,
};

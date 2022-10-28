

function checkIfItemInBasket(id, array) {
    if (!id) {
        return false 
    }
    // if (id < -1) {
    //     return false 
    // }
    if (array.length === 0) {
        return true
    }

    // let state = null;
    for (let i = 0; i < array.length; i++) {
        
        if (id === array[i].id) {
            return false 
        } 
    }
    return true
}

function calcPriceProduct(array) {
    /*
        This Function it's just Calc price 
        of Product
    */
    if (array.length === 0) {
        return 0
    }
    let totol = 0;
    array.map((data) => {
        return totol += Number.parseFloat(data.price)
    })
    return totol
}


export {
    checkIfItemInBasket , 
    calcPriceProduct,
}
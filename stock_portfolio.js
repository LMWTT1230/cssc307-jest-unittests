function createStock() {

    return [];
  
}

function isEmpty(portfolio){

    return portfolio.length === 0;
}

function countTickers(portfolio){

    return portfolio.length;
}

function makePurchase(portfolio, ticker, number){

    if(number <= 0){
        throw new Error(`number cannot be 0`);
    }

    const index = portfolio.findIndex(obj => obj.Ticker == ticker);

    if(index > -1){
        portfolio[index].Owned += number;
    }else{
        portfolio.push({Ticker: ticker, Owned: number});
    }
    return portfolio;
}

function makeSale(portfolio, ticker, number){

    const index = portfolio.findIndex(obj => obj.Ticker == ticker);

    if(index > -1){
        if(portfolio[index].Owned < number){
            throw new Error(`ShareSaleException`);
        }
        portfolio[index].Owned -= number;
        if(portfolio[index].Owned == 0){
            portfolio.splice(index, 1);
        }
    }else{
        throw new Error(`Ticker "${ticker}" not found in the portfolio.`);
    }
    return portfolio;
}

function shareOwned(portfolio, ticker){

    const index = portfolio.findIndex(obj => obj.Ticker == ticker);

    if(index > -1){
        return portfolio[index].Owned;
    }else{
        throw new Error(`Ticker "${ticker}" not found in the portfolio.`);
    }
}


exports.createStock = createStock;
exports.isEmpty = isEmpty;
exports.countTickers = countTickers;
exports.makePurchase = makePurchase;
exports.makeSale = makeSale;
exports.shareOwned = shareOwned;
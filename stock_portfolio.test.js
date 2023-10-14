const myFunctions = require('./stock_portfolio.js');

test('Testing createStock -- success', () => {


    expect(myFunctions.createStock().length).toBe(0);
  
  });

test('Testing isEmpty -- true', () => {

    const portfolio = myFunctions.createStock();


    expect(myFunctions.isEmpty(portfolio)).toBeTruthy();

});


test('Testing isEmpty -- false', () => {

    const portfolio = [
        { Ticker: 'A', Owned: 5 },
        { Ticker: 'B', Owned: 5 },
        { Ticker: 'C', Owned: 5 }
      ];


    expect(myFunctions.isEmpty(portfolio)).toBeFalsy();

});


test('Testing countTickers -- success', () => {

    const expected = 3;

    const portfolio = [
        { Ticker: 'A', Owned: 5 },
        { Ticker: 'B', Owned: 5 },
        { Ticker: 'C', Owned: 5 }
      ];


    expect(myFunctions.countTickers(portfolio)).toBe(expected);

});

test('Testing makePurchase -- success', () => {

    const expected = [
        { Ticker: 'GME', Owned: 7 },
        { Ticker: 'RBLX', Owned: 5 },
    ];

    const portfolio = [
        { Ticker: 'GME', Owned: 5 },
        { Ticker: 'RBLX', Owned: 5 },
      ];


    expect(myFunctions.makePurchase(portfolio, 'GME', 2)).toStrictEqual(expected);

});

test('Testing makePurchase -- success', () => {

    const expected = [
        { Ticker: 'GME', Owned: 5 },
        { Ticker: 'RBLX', Owned: 5 },
        { Ticker: 'TSLA', Owned: 5 }
    ];

    const portfolio = [
        { Ticker: 'GME', Owned: 5 },
        { Ticker: 'RBLX', Owned: 5 },
      ];


    expect(myFunctions.makePurchase(portfolio, 'TSLA', 5)).toStrictEqual(expected);

});

test('Testing makePurchase -- error', () => {


    const portfolio = [
        { Ticker: 'GME', Owned: 5 },
        { Ticker: 'RBLX', Owned: 5 },
      ];


      expect(() => myFunctions.makePurchase(portfolio, 'TSLA', 0)).toThrow();

});

test('Testing makeSale -- success', () => {

    const expected = [
        { Ticker: 'GME', Owned: 5 },
        { Ticker: 'RBLX', Owned: 3 },
    ];

    const portfolio = [
        { Ticker: 'GME', Owned: 5 },
        { Ticker: 'RBLX', Owned: 5 },
      ];


    expect(myFunctions.makeSale(portfolio, 'RBLX', 2)).toStrictEqual(expected);

});

test('Testing makeSale -- success', () => {

    const expected = [
        { Ticker: 'RBLX', Owned: 5 }
    ];

    const portfolio = [
        { Ticker: 'GME', Owned: 5 },
        { Ticker: 'RBLX', Owned: 5 },
      ];


    expect(myFunctions.makeSale(portfolio, 'GME', 5)).toStrictEqual(expected);

});

test('Testing makeSale -- error', () => {


    const portfolio = [
        { Ticker: 'GME', Owned: 5 },
        { Ticker: 'RBLX', Owned: 5 },
      ];


      expect(() => myFunctions.makeSale(portfolio, 'TSLA', 2)).toThrow();

});

test('Testing makeSale -- error', () => {


    const portfolio = [
        { Ticker: 'GME', Owned: 5 },
        { Ticker: 'RBLX', Owned: 5 },
      ];


      expect(() => myFunctions.makeSale(portfolio, 'GME', 6)).toThrow();

});

test('Testing shareOwned -- success', () => {

    const expected = 10;

    const portfolio = [
        { Ticker: 'GME', Owned: 5 },
        { Ticker: 'RBLX', Owned: 10 },
      ];


    expect(myFunctions.shareOwned(portfolio, 'RBLX')).toBe(expected);

});

test('Testing shareOwned -- error', () => {


    const portfolio = [
        { Ticker: 'GME', Owned: 5 },
        { Ticker: 'RBLX', Owned: 5 },
      ];


      expect(() => myFunctions.shareOwned(portfolio, 'TSLA')).toThrow();

});

import Home from "./components/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import StocksStocks from "./components/Stocks/Stocks";


export const routes = [
    { path: '/', component: Home },
    { path: '/portfolio', component: Portfolio },
    { path: '/stocks', component: StocksStocks }
];
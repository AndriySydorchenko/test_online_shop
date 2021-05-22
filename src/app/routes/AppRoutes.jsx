import React from 'react'
import { Link, Switch, Route } from "react-router-dom";
import NoMatchPage from "../../client/noMutch/pages/NoMatchPage";
import AllProductsPage from "../../client/products/pages/AllProductsPage";
import CartPage from "../../client/cart/pages/CartPage";
import ComparePage from "../../client/compare/pages/ComparePage";
import {useDispatch} from "react-redux";
import {addProduct} from "../../client/cart/reducer/cartReducer";
import {addProductToCompare} from "../../client/compare/reducer/comparePageReducer";


const AppRoutes = () => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const compare = JSON.parse(localStorage.getItem('compare'));
    const dispatch = useDispatch();
    if (cart) dispatch(addProduct(...cart))
    if (compare) {
        compare.map( item => dispatch(addProductToCompare(item)))
    }
    return (
        <Switch>
            <Route  exact path="/">
                <p>Home page</p>
                <div>
                    <Link to="/products">Products</Link>
                </div>
                <div>
                    <Link to="/cart">Cart</Link>
                </div>
                <div>
                    <Link to="/compare">Compare</Link>
                </div>

            </Route>
            <Route  exact path="/products">
                <AllProductsPage />
            </Route>

            <Route exact path="/cart">
                <p>Cart</p>
                <div>
                    <Link to="/products">go to Products</Link>
                </div>
                <div>
                    <Link to="/compare">go to Compare</Link>
                </div>
                <CartPage />
            </Route>

            <Route exact path="/compare">
                <p>Compare</p>
                <div>
                    <Link to="/products">go to Products</Link>
                </div>
                <div>
                    <Link to="/cart">go to Cart</Link>
                </div>
                <ComparePage/>
            </Route>


            <Route exact path="*">
                <NoMatchPage/>
            </Route>

        </Switch>
    )

}

export default AppRoutes;
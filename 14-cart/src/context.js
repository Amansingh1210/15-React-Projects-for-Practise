import React, {  useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

const initialSate = {
    loading:false,
    cart:cartItems,
    total:0,
    amount:0,
}
const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer,initialSate);

    const clearCart = ()=> {
        dispatch({ type : 'CLEAR_CART'})
    };

    const removeItem = (id) =>{
        dispatch({type: 'REMOVE', payload: id})
    };

    const increasedItem = (id) =>{
        dispatch({type: 'INCREASE', payload: id})
    };
    
    const decreasedItem = (id) =>{
        dispatch({type: 'DECREASE', payload: id})
    };
    
    const fetchData = async () =>{
        dispatch({type: 'LOADING'})
        const response = await fetch(url)
        const cart = await response.json()
        dispatch({type: 'DISPLAY_ITEMS', payload: cart})
    };

    useEffect(()=>{
        fetchData()
    },[])

    useEffect(()=>{
        dispatch({type: 'GET_TOTALS'})
    },[state.cart])
    return (
        <AppContext.Provider
            value={{
                ...state, clearCart, removeItem, increasedItem, decreasedItem
            }}
        >
            {children}
        </AppContext.Provider>
    )
}
// make sure use
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }
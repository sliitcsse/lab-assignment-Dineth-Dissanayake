import {randomUUID} from 'crypto';
import {customers, items} from "./VirtualDB.js";

export const saveCustomer = ({name, mobile}) => {
    const cus = { id:randomUUID(), name, mobile, wish:[], cart:[]};
    customers.set(cus.id, cus);
    return cus;
}

export const getAllCustomers = () => {
    return [...customers.values()];
}

export const updateCustomerWish = (cusId, {itemId}) => {
    if(!customers.has(cusId)){
        throw new Error(`Not found for the ID ${cusId}`);
    }

    let temp = customers.get(cusId);
    const cus = { id: cusId, name:temp.name, mobile:temp.mobile, wish: temp.wish.push(itemId), cart: temp.cart };
    customers.set(cusId, cus);
    return cus;
}

export const updateCustomerCart = (cusId, {itemId}) => {
    if(!customers.has(cusId)){
        throw new Error(`Not found for the ID ${cusId}`);
    }

    let temp = customers.get(cusId);
    const cus = { id: cusId, name:temp.name, mobile:temp.mobile, wish: temp.wish, cart: temp.cart.push(itemId) };
    customers.set(cusId, cus);
    return cus;
}
import {randomUUID} from "crypto";
import {items} from "./VirtualDB.js";

export const addItems = ({traderId, name, price, itemCount}) => {
    const itm = { id: randomUUID(), traderId:traderId, name:name, price:price, itemCount:itemCount, promotion:{description:'', validTil:''} };
    items.set(itm.id, itm);
    return itm;
}

export const getAllItems = (id) => {
    let val = [];
    items.forEach(((value, key) => {
        if(value.traderId == id){
            val.push(value);
        }
    }))
    return val;
}

export const updateItem = (id, {price, count}) => {
    if(!items.has(id)){
        throw new Error(`Not found for the ID ${id}`);
    }

    let temp = items.get(id);
    const itm = { id: id, traderId:temp.traderId, name:temp.name, price:price, itemCount:count, promotion:{description:temp.promotion.description, validTil:temp.promotion.validTil} };
    items.set(id, itm);
    return itm;
}

export const getAll = () => {
    return [...items.values()];
}

export const updatePromotion = ({itemId,description,validTil}) => {
    if(!items.has(itemId)){
        throw new Error(`Not found for the ID ${itemId}`);
    }

    let temp = items.get(itemId);
    const itm = { id: itemId, traderId:temp.traderId, name:temp.name, price:temp.price, itemCount:temp.itemCount, promotion:{description:description, validTil:validTil} };
    items.set(itemId, itm);
    return itm;
}

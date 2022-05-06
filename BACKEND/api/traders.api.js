import {randomUUID} from 'crypto';
import {traders} from "./VirtualDB.js";

export const saveTrader = ({name, mobile}) => {
    const trd = { id:randomUUID(), name, mobile};
    traders.set(trd.id, trd);
    return trd;
}
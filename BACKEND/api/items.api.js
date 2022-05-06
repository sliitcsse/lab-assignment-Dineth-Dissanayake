const UUID = require('uuid');


const items = new Map();

const addItem = ({name, description, quantity, price}) => {
    const item = {
        id: UUID.v4(),
        name,
        description,
        quantity,
        price,
        postedDate: new Date()
    };
    items.set(item.id, item);
};

const getItems = () => {
    return [...items.values()];
};

const getItem = (id) => {
    return items.get(id);
}


module.exports = {addItem, getItem, getItems};
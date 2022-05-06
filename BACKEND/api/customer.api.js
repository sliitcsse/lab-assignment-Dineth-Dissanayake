const UUID = require('uuid');


const customers = new Map();

const addCustomer = ({fName, email, address, contactNo}) => {
    const customer = {
        id: UUID.v4(),
        fName,
        email,
        address,
        contactNo,
        postedDate: new Date()
    };
    customers.set(customer.id, customer);
};

const getCustomer = (id) => {
    return customers.get(id);
}


module.exports = {addCustomer, getCustomer};
var crmController = require('../controllers/crmController')
const routes = (app)=>{
    app.route('/contact')
        .get((req,res,next)=>{
            console.log(`Request from ${req.originalUrl}`);
            console.log(`Request from ${req.method}`);
            next();
        },crmController.getContacts)

        //Post endpoint
        .post(crmController.addNewContact)

    app.route('/contact/:contactId')
    //get a contact by passing an id
        .get(crmController.getContactWithID)
        .put(crmController.updateContact)

        .delete(crmController.deleteContact)
};

module.exports =  routes;
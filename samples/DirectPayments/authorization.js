'use strict';

var payflow_api = require('../../');
require('../../test/configure');
var auth = payflow_api.getModel("authorization");

var data = {
    ACCT: "4716792779006088",
    EXPDATE: "1118",
    CVV2: "111",
    AMT: "100"
};

try {
    auth.exchangeData(data);
    auth.validateData();

    payflow_api.execute(auth.getParameters(), function (err, res) {
        if (err) { throw err; }
        console.log('Success');
        console.log(res);
    });

}
catch (err)
{
    console.log(err);
}
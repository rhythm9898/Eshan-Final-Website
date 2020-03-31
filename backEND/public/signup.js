$(function () {

    let newNameBox = $('#newname')
    let newAddressBox = $('#newaddress')
    let newCityBox = $('#newcity')
    let newStateBox = $('#newstate')
    let newEmailBox = $('#newemail')
    let newMobileNoBox = $('#newmobileno')
    let addCustomerBtn = $('#addcustomer')
    let customer_list = $('#todoList')

    addCustomerBtn.click(function () {       
        let newName = newNameBox.val()
        let newAddress = newAddressBox.val()
        let newCity = newCityBox.val()
        let newState = newStateBox.val()
        let newEmail = newEmailBox.val()
        let newMobileNo = newMobileNoBox.val()
        $.post(
            '/customers/',
            {name:newName,address:newAddress,city:newCity,state:newState,email:newEmail,mobileNo:newMobileNo},
            function (data) {
                customer_list.empty();
                for (customer of data) {
                    customer_list.append("<li>" + customer.name +" "+customer.address+" "+customer.city+" "+customer.state+" "+customer.email+" "+customer.mobileNo "</li>")
                }
            }
        )
    })
})

function Vehicle (model) {
    this.model = model;
}

Vehicle.prototype = {
    getModel: function () {
        console.log("The model of this vehicle is " + this.model);

    }
};

const car = new Vehicle("BMW");

car.getModel();
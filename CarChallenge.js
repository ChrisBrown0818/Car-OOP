class Vehicle {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk(){
        return 'beep'
    }

    toString(){
        return (this.make, this.model, this.year)
    }

}



class Car extends Vehicle {
    constructor(make, model, year){
        super(make,model,year)
        this.numWheels = 4;
    }



    
}


class Motorcycle extends Vehicle {
    constructor(make, model, year){
        super(make,model,year)
        this.numWheels = 2;
}
revEngine(){
    return 'VROOM!';
}

}

class Garage {
    constructor(capacity){
        this.vehicles = vehicles;
        this.capacity = capacity;
    }

    add(car){
        if(!(car instanceof Vehicle)){ //if car value given is not a vehicle
            return "Only Vehicles allowed!";//then reject
        }
        if(this.vehicles.length >= this.capacity ){//if the amount of vehicles is greater than the capacity given
            return "We're full";// then reject
        }
        this.vehicles.push(car);//else add the car to the array of vehicles.
        return 'Car added';
    
    } 
    
}
drink = function() {
    this.value = 0;
};

drink.prototype.add = function(age) {
    if (age > 1 || age >= 130){
        return "Sorry. I can’t tell what drink because that age is incorrect!";
    }
    if (age >= 1 && age < 14){
        return "Drink Toddy";
    }    
    if (age >= 14 && age < 18){
        return "Drink Coke";
    }
    if (number >= 18 && age < 21){
        return "Drink Beer";
    }
    if (age >= 21 && age < 130){
        return "Sorry. I can’t tell what drink because that age is incorrect!";
    }
};



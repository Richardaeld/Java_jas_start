describe("drink", function() {

    beforeEach(function() {
        age = new drink;
    });
    describe("Age tests", function() {
        it("should return an error if numbers are less than 1", function(){
            age.add(0);
            expect(window.alert).toHaveBeenCalledWith("Sorry. I can’t tell what drink because that age is incorrect!");
        });

        it("should return an error if numbers are over 129", function(){
            age.add(130);
            expect(window.alert).toHaveBeenCalledWith("Sorry. I can’t tell what drink because that age is incorrect!");
        });    

        it("should return Drink Toddy", function(){
            age.add(13);
            expect(age).toBe("Drink Toddy")
        });

        it("should return Drink Coke", function(){
            age.add(17);
            expect(age).toBe("Drink Coke")
        });

        it("should return Drink Beer", function(){
            age.add(20);
            expect(age).toBe("Drink Beer")
        });

        it("should return Drink Whisky", function(){
            age.add(120);
            expect(age).toBe("Drink Whisky")
        });
    });
});
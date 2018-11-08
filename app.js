// this is an example of working with objects

const person = {
    fullName: '',
    bills: [],

    write: () => console.log(`${this.fullName} pays average of tips: ${this.average}`)
    };

calcTips = () => {
        this.tips = [];
        this.finalValues = [];
                
        for (var i = 0; i < this.bills.length; i++) {
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];
            
            if (bill < 50) {
                percentage = .2;
            } else if (bill >= 50 && bill < 200) {
                percentage = .15;
            } else {
                percentage = .1;
            }
            
            // Add results to the corresponing arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }

calcAverage = (tips) => {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}

mark = Object.create(person);
mark.fullName = "Mark Smith";
mark.bills = [124, 48, 268, 180, 42];

mark.calcTips;
mark.average = calcAverage(mark.tips);

mark.write();
// code link 
//kilometer to meter start
function kilometerToMeter(kilometer) {
    var result = kilometer * 1000;
    return result;
}
var convert = kilometerToMeter(3.5);
console.log(convert);     //  output is 3500 meter  for 3.5 kilometer 
//kilometer to meter end

//budget calculator start
function clock(price) {
    var result = price * 10;
    return result;
}
function mobile(price) {
    var result = price * 5;
    return result;
}
function laptop(price) {
    var result = price * 2;
    return result;
}
var clockTotal = clock(15);
var mobileTotal = mobile(100);
var laptopTotal = laptop(500);

function budgetCalculator(clockTotal, mobileTotal, laptopTotal) {
    var total = clockTotal + mobileTotal + laptopTotal;
    return total;
}
var total = budgetCalculator(clockTotal, mobileTotal, laptopTotal);
console.log(total);       // output is 1650 for 10 clock, 5 mobile devices & 2 laptop.
//budget calculator end



// hotel cost function start
function hotelCost(stay) {
    var cost = 0;
    if (stay <= 10) {
        cost = stay * 1000;
    }
    else if (stay <= 20) {
        var firstTenDays = 10 * 1000;
        var remaining = stay - 10;
        var secondTenDays = remaining * 800;
        cost = firstTenDays + secondTenDays;
    }
    else {
        var firstTenDays = 10 * 1000;
        var secondTenDays = 10 * 800;
        var remaining = stay - 20;
        var thirdTenDays = remaining * 600;
        cost = firstTenDays + secondTenDays + thirdTenDays;
    }
    return cost;
}
var totalCost = hotelCost(25);
console.log(totalCost);   // output is 21000 cost for 25days.

// hotel cost function end



//megaFriend function start
function megaFriend(array) {
    var longestWord = "";

    array.forEach(function (word) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    });

    return longestWord;
}

var word = megaFriend(["richard", "rebeca", "russell", "mark zibing", "richard armond"]);
console.log(word); // output is "richard armond"

 //megaFriend function end




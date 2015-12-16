
// function fillArray(percent) {
//    array.push(percent + " percent");
//    array.push(Math.round((1 + percent * .01) * x[i][2]));
//    array.push(Math.round((percent * .01) * x[i][2]));
//  };
//
//
//
// new messages
// mark_rothermal [2:35 PM]
// added a JavaScript/JSON snippet
// /*
// For this challenge, you will be working with 4 commodities; Apples,
// Oranges, Bananas, and Grapes. Delicious, right?
// *When the application loads, you will need to have information
// *for each of the commodities, specifically the name and the ‘market price’ of each.
// *This information will need to be displayed in a meaningful way on the DOM.
// Every 15 seconds, the prices should change however, and with it,
// the listed price on the DOM. Specifically, the market price of each of the items should
// fluctuate up or down 50 cents (between 1 cent and 50 cents) with each 15 second interval.
// Any given fruit is not allowed to go below a cost of 50 cents, or above the cost of 9 dollars
// and 99 cents.
// ​
// *The information displayed for each of the fruit should have a
// *‘button like’ functionality where the user can interact with each
// *of the fruit displays.
// ​
// Available to the user is a ‘total cash’ and an inventory display
// that shows how much of each of the fruits they have purchased. Also in the user display,
// should be an ‘average purchased price’, which shows, on average, how much money they have spent
// on a given fruit in their inventory.
// ​
// Meaning that by clicking on the display for each of the fruits,
// allows the user to ‘buy’ one of the fruits, at market price, which will be deducted from the
// total cash. The user is not allowed to spend more than they have.
// ​
// The user will start with $100.
// ​
// Finally, style the whole experience with Bootstrap!
// ​
// Hard Mode
// ​
// Create a button below each of the Fruit buttons that allows the
// User to ‘sell’ one of their fruits of the same type at the current market price. This will also remove one from their inventory. The user should be not able to sell fruits they do not already own.
// ​
// Pro Mode
// ​
// Limit the application experience to five minutes. At the end, stop
// the price fluctuation, sell all of the fruits in their inventory at
// current market price, and then display the total money they earned
// from the experience.
// */
// ​

// // Status API Training Shop Blog About Pricing
// ​
var apple = {
  name:'apple',
  price: 2.00,
  quantity:0,
  bought: 0,
  total: 0
};
var orange ={
  name: "oranges",
  price: 2.00,
  quantity:0,
  bought: 0,
  total: 0
};
var banana ={
  name: "banana",
  price: 2.00,
  quantity:0,
  bought: 0,
  total: 0
};
var pear ={
    name:"pear",
    price: 2.00,
    quantity:0,
    bought: 0,
    total: 0
};
var fruits = [apple,orange,banana,pear];
var totalCash = 100;
// var endTotal = 0;


$(document).ready(function() {
  // while (totalCash > 0) {
    // var myVar = setInterval(function(){ changePrice() }, 2000);
  //   function changePrice() {
  //     for(var i = 0; i < fruits.length; i++) {
  //       var fruit = fruits[i];
  //       var number = 0;
  //       number = randomNumber(-50,50) * 0.01;
  //       fruit.price += number;
  //       fruit.price = roundNumber(fruit.price);
  //       $(".apple-price").text("Market Price: $" + apple.price);
  //       $(".orange-price").text("Market Price: $" + orange.price);
  //       $(".banana-price").text("Market Price: $" + banana.price);
  //       $(".pear-price").text("Market Price: $" + pear.price);
  //     }
  //   // }
  // };
  $('.total-cash').text('Total Available Cash: $'+ totalCash);
  $(".apple-buy-btn").on("click",function() {
    $('.error-message').text('Get that fruit!');
    if(totalCash > apple.price){
      console.log("click apple");
      apple.quantity++;
      apple.bought++;
      console.log("apple",apple.quantity);
      buyFruit(apple.price);
      $('.apple-purchased').text('Apples: '+ apple.quantity);
      apple.total += apple.price;
      $('.apple-average').text('Average Price: $' + roundNumber(apple.total / apple.bought));
    } else {
      $('.error-message').text('you dont not have enough money for this purchase');
    }
  });
  $(".apple-sell-btn ").on("click",function() {
    $('.error-message').text('Get that fruit!');
    if(apple.quantity>0){
      console.log("click apple");
      apple.quantity--;
      console.log("apple",apple.quantity);
      sellFruit(apple.price);
      $('.apple-purchased').text('Apples: '+ apple.quantity);
    } else {
      $('.error-message').text('you dont not have any more fruit of that type');
    }
  });
  $(".orange-buy-btn ").on("click",function() {
    $('.error-message').text('Get that fruit!');
    if(totalCash > orange.price) {
      console.log("click orange");
      orange.quantity++;
      orange.bought++;
      console.log("orange",orange.quantity);
      buyFruit(orange.price);
      $('.orange-purchased').text('Oranges: '+ orange.quantity);
      orange.total += orange.price;
      $('.orange-average').text('Average Price: $' + roundNumber(orange.total / orange.bought));
    } else {
      $('.error-message').text('you dont not have enough money for this purchase');
    }
  });
  $(".orange-sell-btn").on("click",function() {
    $('.error-message').text('Get that fruit!');
    if(orange.quantity>0){
      console.log("click orange");
      orange.quantity--;
      console.log("orange",orange.quantity);
      sellFruit(orange.price);
      $('.orange-purchased').text('Orange: '+ orange.quantity);
    } else {
      $('.error-message').text('you dont not have any more fruit of that type');
    }
  });
  $(".banana-buy-btn").on("click",function() {
    $('.error-message').text('Get that fruit!');
    if(totalCash > banana.price) {
      console.log("click banana");
      banana.quantity++;
      banana.bought++;
      console.log("banana",banana.quantity);
      buyFruit(banana.price);
      $('.banana-purchased').text('Bananas: '+ banana.quantity);
      banana.total += banana.price;
      $('.banana-average').text('Average Price: $' + roundNumber(banana.total / banana.bought));
    } else {
      $('.error-message').text('you dont not have enough money for this purchase');
    }
  });
  $(".banana-sell-btn").on("click",function() {
    $('.error-message').text('Get that fruit!');
    if(banana.quantity>0){
      console.log("click banana");
      banana.quantity--;
      console.log("banana",banana.quantity);
      sellFruit(banana.price);
      $('.banana-purchased').text('Banana: '+ banana.quantity);
    } else {
      $('.error-message').text('you dont not have any more fruit of that type');
    }
  });
  $(".pear-buy-btn").on("click",function() {
    $('.error-message').text('Get that fruit!');
    if(totalCash > pear.price) {
      console.log("click pear");
      pear.quantity++;
      pear.bought++;
      console.log("pear",pear.quantity);
      buyFruit(pear.price);
      $('.pear-purchased').text('Pears: '+ pear.quantity);
      pear.total += pear.price;
      $('.pear-average').text('Average Price: $' + roundNumber(pear.total / pear.bought));
    } else {
      $('.error-message').text('you dont not have enough money for this purchase');
    }
  });
  $(".pear-sell-btn").on("click",function() {
    $('.error-message').text('Get that fruit!');
    if(pear.quantity>0){
      console.log("click pear");
      pear.quantity--;
      console.log("pear",pear.quantity);
      sellFruit(pear.price);
      $('.pear-purchased').text('Pear: '+ pear.quantity);
    } else {
      $('.error-message').text('you dont not have any more fruit of that type');
    }
  });
  function buyFruit(price){
    totalCash -= price;
    totalCash = roundNumber(totalCash);
    $('.total-cash').text('Total Available Cash: $'+ totalCash);
  }
  function sellFruit(price){
    totalCash += price;
    totalCash = roundNumber(totalCash);
    $('.total-cash').text('Total Available Cash: $'+ totalCash);
  }
  // function randomNumber(min, max) {
  // return Math.floor(Math.random() * (1 + max - min) + min);
  // }
});

function roundNumber(number) {
  var roundNumber = +(Math.round(number + "e+2") + "e-2");
  return roundNumber;
}

function randomNumber(min, max) {
return Math.floor(Math.random() * (1 + max - min) + min);
}

$(document).ready(function() {

	var myGame = setInterval(function(){ myStopFunction() }, 300000);
	var myVar = setInterval(function(){ changePrice() }, 15000);
	var fruitPrice = 0;

	function changePrice() {
    	for(var i = 0; i < fruits.length; i++) {
      		var fruit = fruits[i];
      		var number = 0;
      		fruitPrice = fruit.price;
      		//  Ensure number != zero and fruitPrice is between 0.50 and 10.00
 			while (number == 0){
 				number = randomNumber(-50,50) * 0.01;
 				while ((fruitPrice+number) < 0.50 || (fruitPrice+number) > 9.99 ){
 					number = randomNumber(-50,50) * 0.01;
 				}
			}
      		fruit.price += number;
      		fruit.price = +(Math.round(fruit.price + "e+2")+ "e-2");
//    			console.log(fruit.price);
      $(".apple-price").text("Market Price: $" + apple.price);
      $(".orange-price").text("Market Price: $" + orange.price);
      $(".banana-price").text("Market Price: $" + banana.price);
      $(".pear-price").text("Market Price: $" + pear.price);

   		}
	}
// ​
	function myStopFunction() {
  		clearInterval(myVar);
  		clearInterval(myGame);
      sellAll();

	}
});

function sellAll(){
    for(var i = 0; i < fruits.length; i++){
      totalCash += fruits[i].quantity * fruits[i].price;
      totalCash = roundNumber(totalCash);
      // fruits[i].quantity = 0;
      // $("fruits")
    }
  alert("Game Over!  Your total is: $" + totalCash);
}

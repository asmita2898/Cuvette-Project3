let food = require('./foodChart.json');

//1.list all the food items
let foodItems = Object.values(food);
console.log(foodItems);

//2.list all the food items with category vegetables
// let vegetables = food.filter( item => item.category=="Vegetable");
// console.log(vegetables);

food.forEach((item)=>{
    if(item.category == "Vegetable"){
        console.log(item)
    }
})


// 3. list all the food items with category fruit
food.forEach((item)=>{
     if(item.category == "Fruit")
     console.log(item);
})

// 4.list all the food items with category protein
food.forEach((item)=>{
    if(item.category == "Protein")
    console.log(item);
})

// 5.list all the food items with category nuts
food.forEach((item)=>{
    if(item.category == "Nuts")
    console.log(item);
})

// 6.list all the food items with category grains
food.forEach((item)=>{
    if(item.category == "Grain")
    console.log(item);
})

// 7.list all the food items with category dairy
food.forEach((item)=>{
    if(item.category == "Dairy")
    console.log(item);
})

// 8.calorie above 100 
food.forEach((item)=>{
    if(item.calorie > 100)
    console.log(item)
})

// 9.calorie below 100
food.forEach((item)=>{
    if(item.calorie < 100)
    console.log(item)
})

// 10.highest protein content to lowest content
let descSort = food.sort(
    (a,b) => (a.proteins < b.proteins) ? 1:
    (a.protiens > b.protiens) ? -1 : 0
);
console.log(descSort)

// 11. lowest cab content to highest
let ascSort = food.sort(
    (p,q) => (p.cab > q.cab) ? 1:
    (p.cab < q.cab) ? -1 : 0
);
console.log(ascSort);
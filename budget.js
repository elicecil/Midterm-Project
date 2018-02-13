class Budget {
  constructor(totalPrice) {
    this.totalPrice = totalPrice;
    this.categories = [];
  }

  addCategory(categoryName) { // add feature so that user cannot add category if field box is empty
    // categoryName = document.getElementById('category-name-input').value;
    category = new Category(categoryName);
    this.categories.push(category);
    console.log(this.categories);
    // console.log(category);
    return category;
  }
      

  total() {
    var sum = 0;
    this.categories.forEach(category => {
      sum = sum + category.total();
      console.log(sum);
    });
    return sum;
  }

  totalRemaining() {
    var percentage = ((this.total() / this.totalPrice) * 100);
    console.log(percentage);
    if(percentage >= 100) {
      return "STOP";
    }else if(percentage <= 80) {
      console.log(percentage);
      return "#green";
    }else if(percentage <= 60) {
      console.log(percentage);
      return "#orange";
    } else {
      return "#red";
    }
  }

  removeCategory(category) { // cannot seem to get this to work
    debugger;
    var categoryName = category.name;
    // var arrayIndex = this.categories.indexOf(this.category);
    var result = this.categories.filter(item => item !== categoryName)
    if(result === categoryName) {
      this.categories.splice(0, 1, categoryName);
    }
    console.log("Hello");
  }

  // removeCategory() {
  //   var index = budget.categories.indexOf(this.category);
  //   budget.categories.filter(item => item !== index)
  //   console.log("Removed Item!");
  // }

  // removeCategory() {
  //   var index = budget.categories.indexOf(this.category);
  //   var newArray = budget.categories.filter(item => item !== index);
  //   return newArray;
  //   console.log(newArray);
  // }

  // removeCategory() {
  //   var index = budget.categories.indexOf(this.category);
  //   var thisIndex = budget.categories[index];
  //   var newArray = budget.categories.filter(index => index !== thisIndex);
  //   return newArray;
  //   console.log(newArray);
  // }

  // removeCategory() {
  // var index = budget.categories.indexOf(this.category);
  // for(var i = budget.categories.length - 1; i >= 0; i--) {
  //   if(i === index) {
  //      budget.categories.splice(i, 1);
  //   }
  // }

  // removeCategory() {
  //   var arr = budget.categories
  //   var cat = category.name
  //   var thisCat = this.name
  //   arr = arr.filter(function() { // does not work
  //       return cat !== thisCat
  //   });
  //   console.log(arr)
  // }
}

// ----------- In Console ------------------
// budget.categories.indexOf(this.category) >>>>>> this returns the index of category
// budget.categories[1] >>>>>>> accesses specific array item
// category.name >>>>>> this returns the category nameca



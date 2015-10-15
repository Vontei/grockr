app.factory('apiService', function () {

  return {
    shoppingCart: [],

    addToCart: function(item,qty){
      item.qty = qty
      this.shoppingCart.push(item)
      if(qty){
      cartTotal+= (item.price*qty);
      } else {
      cartTotal+=item.price;
      }
    },

    callYahoo: function(){
      $http.get('/yahoo').then(function (data) {
        console.log('Your response' , data)
        return data;
      })
    },


  }

})

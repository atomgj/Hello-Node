function urlRoute(obj){

   var getCart = function(){
       console.log(obj.url);
   };

   var getCommodity = function(){
       console.log(obj.url);
   };

   var getList = function(){
       console.log(obj.url);
   };

   var urlMap = {
       '/cart' : getCart,
       '/commodity' : getCommodity,
       '/list' : getList
   }; 

   var self = this;

   var route = function(){
      urlMap[obj.url]();
   };
   self.route = route;
   return self;
}


module.exports = urlRoute;

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/3000');


var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function(){
  console.log('mongo is connected');
});

var inventorySchema = new mongoose.Schema({
  productId: Number, 
  price: Number,
  description: String, 
  overview: Array,
  options: Schema.Types.Mixed, //Let's me create an obj
  quantityInStock: Number,
  availableToReturn : Boolean, 
  shippingCost : Number
});

var inventoryList = new mongoose.model('inventoryList', inventorySchema);

var randomPrice = function(number){ //Used to generate the random price and shipping cost
  return Math.random() * number; //Can Math.floor() the returned value to get the quantity in stock
}

var randomWords = "Spicy jalapeno bacon ipsum dolor amet salami cupidatat fugiat drumstick magna et tenderloin exercitation leberkas picanha consequat Dolore tempor prosciutto biltong incididunt fugiat pork loin laboris picanha shankle corned beef tongue Magna dolore andouille short loin pork loin deserunt incididunt consequat pastrami porchetta Velit fugiat et consequat bacon tail nisi picanha short ribs ipsum pancetta eu Mollit chuck deserunt swine magna alcatra spare ribs picanha Meatball andouille short loin corned beef t-bone jowl voluptate turkey filet mignon do flank sausage veniam prosciuttoCupidatat corned beef nisi drumstick mollit elit laboris fatback ullamco filet mignon turducken aute bresaola Ut tri-tip consequat cupidatat turkey dolor consectetur meatball Incididunt rump dolore aliquip hamburger Nulla aliquip turducken in in quis aute Andouille velit buffalo elit chicken labore in shankle ribeyePorchetta veniam dolore ball tip pariatur alcatra boudin corned beef landjaeger incididunt id filet mignon in cow tail Proident nulla cillum salami exercitation boudin ea in brisket tempor elit Shoulder tri-tip incididunt non nulla pork exercitation id quis porchetta aliqua Tenderloin sunt irure cillum sausage incididunt qui Picanha non bacon in elit filet mignon pig tri-tip ut Excepteur flank officia in in Ipsum cupim aliquip est laborum minim aute aliqua do boudin occaecat sirloinKielbasa meatloaf pork chop landjaeger flank chicken Ut sirloin reprehenderit meatball t-bone in Doner tail short ribs duis nostrud cupidatat cow pig deserunt turducken sausage Reprehenderit ut pork sausage tail venison andouille incididunt Beef ribs kevin officia corned beef ribeye buffalo chicken nulla id pastrami porchetta dolor landjaeger fugiat aliqua Beef ut pork swine tongue meatball corned beef in nisi ea dolore Ham hock t-bone id boudin short loin consectetur elit enim eaIn cupidatat consequat fatback dolore short loin id lorem pastrami aute proident ut picanha capicola strip steak Sed sunt meatloaf mollit sirloin strip steak do lorem In meatball occaecat landjaeger flank pariatur in chuck leberkas Porchetta quis laborum duis picanha commodo proident magna cupidatat turducken excepteur doner adipisicing sausage Pork loin pork chop flank consequat sint turkey Pastrami brisket doner capicola pork belly reprehenderit shoulder kevin boudin pork et tongue sirloin esse"


var randomPrice = function(number){ //Used to generate the random price and shipping cost
  return Math.random() * number; //Can Math.floor() the returned value to get the quantity in stock
}

var randomPhraseGenerator = function(){
  var randomWordsArray = randomWords.split(" ")  
  var returnedRandomString = ""
  var randomLength = Math.floor((randomPrice(20))) //Generates a random number between 0 - 20 
  var randomWord = Math.floor((randomPrice(341)))
  for (var i = 0; i < randomLength; i++){
    var randomWord = Math.floor((randomPrice(341)))    
    returnedRandomString += randomWordsArray[randomWord] + " "
  }
  return returnedRandomString
}

var isReturnable = function(){
  if (Math.floor(randomPrice(2)) / 2 === 0) {
    return true;
  }
  return false
}

var randomDescription = function(){
  var description = ""
  var randomWordsArray = randomWords.split(" ");    
  var randomLength = Math.floor(randomPrice(10) + 15);
  for (let i = 0; i < randomLength; i++){
    var randomWord = Math.floor((randomPrice(341)));    
    description += randomWordsArray[randomWord] + " ";
  }  
  return description;
}


//Random Price
//Quantity in stock
//Shipping cost

/*

  options: Schema.Types.Mixed, //Let's me create an obj



  overview: Array,  //Random 2-3 line 6 word description of the product, generate a random number between 0-3 and write a f
  availableToReturn : Boolean [random value ]
  description: String 
  productId: Number,  //Autoincremtning 
  price: Number,  //Random price found 
  quantityInStock: Number,  //Random number found 
  shippingCost : Number //Random cost found 
*/




var updateInventory = function(){
//.save 
}

var checkInventory = function(){
//Filter through the inventory list checking if a specific inventory is in stock
}

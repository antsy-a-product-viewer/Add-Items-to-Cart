var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/store');


var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function(){
  console.log('mongo is connected');
});

var inventorySchema = mongoose.Schema({
  productId: {
              type: Number, 
              unique: true }, 
  price: Number,
  description: String, 
  overview: Array,
  options: {}, //Let's me create an obj
  quantityInStock: Number,
  availableToReturn : Boolean, 
  shippingCosts : Number,
  manufacturingTime : Number
});

var inventoryList = mongoose.model('inventoryList', inventorySchema);


var randomWords = "Spicy jalapeno bacon ipsum dolor amet salami cupidatat fugiat drumstick magna et tenderloin exercitation leberkas picanha consequat Dolore tempor prosciutto biltong incididunt fugiat pork loin laboris picanha shankle corned beef tongue Magna dolore andouille short loin pork loin deserunt incididunt consequat pastrami porchetta Velit fugiat et consequat bacon tail nisi picanha short ribs ipsum pancetta eu Mollit chuck deserunt swine magna alcatra spare ribs picanha Meatball andouille short loin corned beef t-bone jowl voluptate turkey filet mignon do flank sausage veniam prosciuttoCupidatat corned beef nisi drumstick mollit elit laboris fatback ullamco filet mignon turducken aute bresaola Ut tri-tip consequat cupidatat turkey dolor consectetur meatball Incididunt rump dolore aliquip hamburger Nulla aliquip turducken in in quis aute Andouille velit buffalo elit chicken labore in shankle ribeyePorchetta veniam dolore ball tip pariatur alcatra boudin corned beef landjaeger incididunt id filet mignon in cow tail Proident nulla cillum salami exercitation boudin ea in brisket tempor elit Shoulder tri-tip incididunt non nulla pork exercitation id quis porchetta aliqua Tenderloin sunt irure cillum sausage incididunt qui Picanha non bacon in elit filet mignon pig tri-tip ut Excepteur flank officia in in Ipsum cupim aliquip est laborum minim aute aliqua do boudin occaecat sirloinKielbasa meatloaf pork chop landjaeger flank chicken Ut sirloin reprehenderit meatball t-bone in Doner tail short ribs duis nostrud cupidatat cow pig deserunt turducken sausage Reprehenderit ut pork sausage tail venison andouille incididunt Beef ribs kevin officia corned beef ribeye buffalo chicken nulla id pastrami porchetta dolor landjaeger fugiat aliqua Beef ut pork swine tongue meatball corned beef in nisi ea dolore Ham hock t-bone id boudin short loin consectetur elit enim eaIn cupidatat consequat fatback dolore short loin id lorem pastrami aute proident ut picanha capicola strip steak Sed sunt meatloaf mollit sirloin strip steak do lorem In meatball occaecat landjaeger flank pariatur in chuck leberkas Porchetta quis laborum duis picanha commodo proident magna cupidatat turducken excepteur doner adipisicing sausage Pork loin pork chop flank consequat sint turkey Pastrami brisket doner capicola pork belly reprehenderit shoulder kevin boudin pork et tongue sirloin esse"

// console.log(randomArray)

var randomNumberGenerator = function(number){ //Used to generate the random price and shipping cost
  return parseFloat((Math.random() * number).toFixed(2)); //Can Math.floor() the returned value to get the quantity in stock
}


var shippingCost = function(){
  return Math.floor(randomNumberGenerator(4) + 1) + .99  
}



var randomPhraseGenerator = function(){
  var randomWordsArray = randomWords.split(" ")  
  var returnedRandomString = ""
  var randomLength = Math.floor((randomNumberGenerator(20))) //Generates a random number between 0 - 20 
  var randomWord = Math.floor((randomNumberGenerator(341)))
  for (var i = 0; i < randomLength; i++){
    var randomWord = Math.floor((randomNumberGenerator(341)))    
    returnedRandomString += randomWordsArray[randomWord] + " "
  }
  return returnedRandomString
}

var itemCanReturn = function(){
  if (Math.floor(randomNumberGenerator(2)) / 2 === 0) {
    return true;
  }
  return false
}

var randomDescription = function() {
  var description = ""
  var randomWordsArray = randomWords.split(" ");    
  var randomLength = Math.floor(randomNumberGenerator(10) + 15);
  for (let i = 0; i < randomLength; i++) {
    var randomWord = Math.floor((randomNumberGenerator(341)));    
    description += randomWordsArray[randomWord] + " ";
  }  
  return description;
}

var randomOverview = function() {
  var comments = Math.floor(randomNumberGenerator(4));
  var overview = [];
  for (let i = 0; i < comments; i++) {
    overview.push(randomPhraseGenerator());
  }
  return overview;
}

var randomOptions = function() {
  var options = {};  //Storing all of the possible options
  var randomWordsArray = randomWords.split(" "); //splits the random words into an array 
  var possibleOptions = Math.floor(randomNumberGenerator(4)) //generates a number of 0 - 3 option possibilities 
  for (let i = 0; i < possibleOptions; i++) { //Iterates possibilities amount of times 
    var possibleValues = Math.floor((randomNumberGenerator(341)));  //generates a random between between 0 - 341
    var keyValue = randomWordsArray[possibleValues];  //The option selection will be this value 
    var optionSelection = [];  //Array of options being put into the options value
    var selections = Math.floor(randomNumberGenerator(20)) //Generates x amount of possibilities to select from
    for (let j = 0; j < selections; j++) { //Iterates through x amount of possibilities 
      var possibleSelection = Math.floor((randomNumberGenerator(341)));  
      optionSelection.push(randomWordsArray[possibleSelection]);
    }
    options[keyValue] = optionSelection; //Sets the key with x amount of options
  }
  return options;
}

var manufacturingTime = function(){
  Math.floor(randomNumberGenerator(6))
}


var checkInventory = function(){

//Filter through the inventory list checking if a specific inventory is in stock
}

var updateInventory = function(){
  for (let itemId = 1; itemId < 101; itemId++){
    itemId = new inventoryList({
      productId: itemId, 
      price: randomNumberGenerator(100),
      description: randomDescription(), 
      overview: randomOverview(),
      options: randomOptions(), //Let's me create an obj
      quantityInStock: randomNumberGenerator(100),
      availableToReturn : itemCanReturn(), 
      shippingCosts : shippingCost(),
      manufacturingTime : manufacturingTime()     
    });
    itemId.insert(function(err, itemId){ //Change to update and use upsert
      if (err){
        console.log("Item failed to save")
      } else{
        console.log("Item saved successfully to database")
      }
    })
  }
}

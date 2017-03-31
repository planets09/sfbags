
//use constructor object notation.
//create text variable to hold each object info.
//create text variable to hold empty elements.
//create text variable to hold textNode elements.
//Need to add textNode to newly created empty elements.

function toteBag(name, material, cost, size, image){
	this.name = name
	this.material = material
	this.cost = cost
	this.size = size
	this.image = image
}

var toteArray =[];

//calling the function
var toteDoggie = new toteBag("Doggie Diner", "cotton", 40, " 16\"W x 17\"H ", "images/doggie.jpg");
var toteGodzilla = new toteBag("Godzilla", "cotton/poly blend", 40.00, " 16\"W x 17\"H ", "images/godzilla.jpg");
var toteHouse = new toteBag("Painted Ladies", "cotton", 40, " 16\"W x 17\"H ", "images/house.jpg");
var toteGroovy = new toteBag("Grovy Cable", "cotton/poly blend", 40.00, " 16\"W x 17\"H ", "images/groovycable.jpg");
var toteLove= new toteBag("Love is Love", "cotton", 40, " 16\"W x 17\"H ", "images/loveislove.jpg");
var toteRedBear = new toteBag("Red CA Bear", "cotton/poly blend", 40.00, " 16\"W x 17\"H ", "images/redcabear.jpg");
var toteSkyline = new toteBag("Skyline Poppy", "cotton", 40, " 16\"W x 17\"H ", "images/skylinepoppy.jpg");
var toteSutro = new toteBag("Sutro", "cotton/poly blend", 40, " 16\"W x 17\"H ", "images/sutro.jpg");
var totePiggly = new toteBag("Hiddedly Piggledy", "cotton/poly blend", 40.00, " 16\"W x 17\"H ", "images/piggly.jpg");


//use .push method to push the objects into empty toteArray.
toteArray.push(toteDoggie, toteGodzilla, toteHouse, toteGroovy, toteLove, toteRedBear, toteSkyline, toteSutro, totePiggly)

for(i=0; i<toteArray.length; i++){
	var newDiv = document.createElement('DIV');
	var newtoteDiv = document.createElement('DIV');
	var nameH2 = document.createElement('H2');
	var materialH4 = document.createElement('H4');
	var costH4 = document.createElement('H4');
	var sizeH4 = document.createElement('H4');
	var image = document.createElement('img');
	var button = document.createElement('button');

	var tName = document.createTextNode(toteArray[i].name);
	var tMat = document.createTextNode("Material: " + toteArray[i].material);
	var tCost = document.createTextNode("Price: $" + toteArray[i].cost.toFixed(2));
	var tSize = document.createTextNode("Size: " + toteArray[i].size);
	var tButton = document.createTextNode("ADD TO CART");

	image.src = toteArray[i].image

//Assign .className to elements; .className gets and sets
// the value of the class attribute of the specified element.
//Now each div will have set column width:
	newDiv.className = "col-md-4";
	//each div is given a class 
	newtoteDiv.className = "tote-gallery";
	image.className = "img-responsive";
	button.className = "btn btn-success btn-md";

//Add textNode to elements.
	nameH2.appendChild(tName);
	materialH4.appendChild(tMat);
	costH4.appendChild(tCost);
	sizeH4.appendChild(tSize);
	button.appendChild(tButton);

//Add elements to div class for tote gallery.
	newtoteDiv.appendChild(image);
	newtoteDiv.appendChild(nameH2);
	newtoteDiv.appendChild(materialH4);
	newtoteDiv.appendChild(costH4);
	newtoteDiv.appendChild(sizeH4);
	newtoteDiv.appendChild(button);

//Add tote gallery into div that has column width set:
	newDiv.appendChild(newtoteDiv);

//Now target the empty HTML div id and append item:
	document.getElementById("totes").appendChild(newDiv);
}


//this object constructor is for footer section only:

function badgeImage(image, text){
	this.image = image
	this.text = text
}

var badgeArray =[];
//calling the function
var imgHeart = new badgeImage("images/badge-heart.png", "Passion, Craft, Quality");
var imgSF = new badgeImage("images/badge-sfmade.png", "SFMADE");
var imgFab = new badgeImage("images/badge-fabrico.png", "FABRICO ERGO SUM");

//use .push method to push the objects into empty badgeArray.
badgeArray.push(imgHeart, imgSF, imgFab);

for(i=0; i<badgeArray.length; i++){
	var newbadgeDiv = document.createElement('DIV');
	var newBDiv = document.createElement('DIV');
	var badgeText = document.createElement('H2');
	var image = document.createElement('img');

	var bText = document.createTextNode(badgeArray[i].text);

	image.src = badgeArray[i].image;
//Assign .className to elements; .className gets and sets
// the value of the class attribute of the specified element.
//Now each div will have set column width:
	newBDiv.className = "col-md-4";
	newbadgeDiv.className = "badge-gallery text-center";
	image.className = "image-responsive";

	badgeText.appendChild(bText);

	newbadgeDiv.appendChild(badgeText);
	newbadgeDiv.appendChild(image);

	newBDiv.appendChild(newbadgeDiv);

//Target the empty HTML div id (in footer area) and append item:
	document.getElementById('badges').appendChild(newBDiv);
}





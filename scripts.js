/*Setup Instructions - Run this on each machine!
Drag and drop the directory of all included files (keep them in the same folder)
wherever you want them to live on your computer.  Then, you can start with money.html.
You must follow the below instructions before the program will work.
I recommend Firefox web browser for usage.

1. Run this line to create the array, var mint = minter(makeCode());
	and make sure the mint maker functions are not commented out!
2. After you run it, there will be an array created called mint.
3. Once you create the array, save it to local storage using
	save("mint", mint); This will create a local storage object that can be recalled
	by the key value of "mint".  Now, you only need to do this step once.  
	Once the array is stored in local storage, COMMENT OUT the mint maker functions
	as you do not need them anymore.  You may also comment out the save line you
	just ran, but not the save function itself.  
4. After you close your web browser and are done with the program, you don't need to do 
	anything, as the functions are designed to save at certain steps along the way.
5. However, when you need to re-load the web page, run the load function with
	var mint = load("mint"); and this will re-populate the array from your local machine.
	Leave the load command you ran alone, as it will be referenced throughout the program.
	Also run var bank = load("bank"); and leave it alone as well.
	Remember that the bank balance(bank) and banking codes(mint) are only stored within the specific
	machine within local storage, on that machines hard drive.  This is NOT a secure system.
	However, it's fine for  using at home with children to teach them about money.




*/
	

// Function to check Whether both passwords 
// is same or not. 
var final_pword;
var username;
var bank;
/*var mint = [
  "VdcRF1",
  "uehDte",
  "2ixn1D",
  "4wSRbH",
  "eKQmT2",
  "3o28Rk",
  "RDxW1W",
  "kpMhm4",
  "iyhPCM",
  "8Q1VQ5",
  "u80iiu",
  "tCupKT",
  "u2nhoT",
  "a2j83l",
  "IYbzka",
  "wFzutj",
  "NTASUW",
  "3fhmvl",
  "u3Fv2o",
  "jAbsoO",
  "kaDCdi",
  "oJEwop",
  "34c8Ym",
  "IAjSF1",
  "SB7P7r",
  "7HoUFx",
  "k7asbZ",
  "07flzM",
  "Lve3Ou",
  "CJj6kX",
  "34bsiL",
  "Jqcqo9",
  "g5yq71",
  "Z86309",
  "iylKOM",
  "VqnhTR",
  "hvC8QW",
  "kgPWkX",
  "VmboBF",
  "1kxT7d",
  "90xUx6",
  "ta87gG",
  "zvxxty",
  "VnmBbd",
  "Mj1yac",
  "ChLdkU",
  "ZzqhFW",
  "06aG1u",
  "Nnss6W",
  "rPgC2w",
  "oqrJX2",
  "3JAW8g",
  "EGnHiV",
  "jWTlF4",
  "Jq62vK",
  "kfYmLP",
  "oi8FT5",
  "A9r2Eg",
  "qQldmd",
  "swsZv5",
  "RtZQgO",
  "ipbbei",
  "Dyjxwb",
  "tC8vEG",
  "vOZtU0",
  "KpBJHc",
  "dq40RH",
  "pU0VAz",
  "DcQGIK",
  "2CavuD",
  "IutpAE",
  "liR08J",
  "32jw8X",
  "FiAyze",
  "orKfVf",
  "ssP6b1",
  "YfmG52",
  "YyEcis",
  "pVM0EP",
  "nbEn90",
  "QKNuEZ",
  "MlEL06",
  "xG4NPb",
  "hmebAk",
  "PKPmxz",
  "rRlFqi",
  "i5pu7Z",
  "1MTUdL",
  "nAVhCS",
  "bqyc4Z",
  "F9Gy6R",
  "LU3az6",
  "bnYao3",
  "7G9Jpn",
  "OcnPFD",
  "m4VzDC",
  "RYUlWm",
  "3lGOSs",
  "PHlEoj",
  "Vl56Xb",
  "p5k1Fg",
  "4iIwpi",
  "glo8zo",
  "b9MTv8",
  "gy10GY",
  "wmQ7B0",
  "fB4nyG",
  "HUFSWx",
  "NWt2FR",
  "ceFVnh",
  "qjXEn8",
  "XmWDBG",
  "DcN1gE",
  "ETFiTj",
  "5VWYfT",
  "WMVKr5",
  "MktWpU",
  "8aIeK4",
  "MV7sjf",
  "yvR3lM",
  "NC45Aj",
  "vkBShq",
  "dYbo83",
  "oulblM",
  "3nkqk0",
  "1QmU3s",
  "GVFrzy",
  "qzVheL",
  "3sabwa",
  "jcyoJZ",
  "HxBrEZ",
  "9IDmCz",
  "OXb3FV",
  "029S9T",
  "tMItaE",
  "JWD6A7",
  "7Q5Agq",
  "qxcFKd",
  "2VQHJX",
  "mlZLJD",
  "SuL654",
  "hU1KxS",
  "bZFdf7",
  "HEDB8v",
  "9kg1sl",
  "80FZ9O",
  "ahWtch",
  "3shLxr",
  "GeFDt8",
  "xml0cR",
  "H6JfjI",
  "Mg41Oi",
  "ih3MJo",
  "ubyamM",
  "NSkWx2",
  "bMveD4",
  "W11TsA",
  "GGqtRj",
  "7q7cUU",
  "hxApuz",
  "yIDThF",
  "Fkwyel",
  "v5ecBB",
  "3givgw",
  "FOx1IR",
  "WJy0tH",
  "DGdtTa",
  "VCBgBb",
  "HmRvST",
  "ZaFNLY",
  "kDWvwm",
  "HR2Sxb",
  "crhb1k",
  "N2jahr",
  "FFvYkh",
  "iKoGmN",
  "D5zVD6",
  "TYr6M7",
  "oSSpQM",
  "XwUWUg",
  "8twkAf",
  "CLa6PY",
  "HnPbKg",
  "DguVpE",
  "WUMWfU",
  "9p4JMJ",
  "hYl2WP",
  "QDcz9U",
  "yxUp8l",
  "SnF9Fy",
  "mRL5rA",
  "cY4RzD",
  "x8g29x",
  "N6ehS4",
  "FK7eii",
  "89Te1i",
  "QOU4gP",
  "cahTc5",
  "0DpuyO",
  "w9jg4T",
  "lq52Jy",
  "x3uscg",
  "3galyD",
  "fpyrr9",
  "vmFRcm",
  "hORohi",
  "KpPdRU",
  "SU9wE3",
  "imesvh",
  "2fp80Z",
  "e4p2kM",
  "Gt1e1r",
  "sR3AeP",
  "jodKWP",
  "DarTXv",
  "lKRhoG",
  "sMejfB",
  "EoGFMY",
  "blaf4A",
  "IVQX6q",
  "bArSwk",
  "J27V2L",
  "UIrEPd",
  "ijYFYo",
  "ENrvHg",
  "13iuLG",
  "wY2Yxz",
  "ZiWxe8",
  "xbdvw4",
  "zKy0q3",
  "JtdjXq",
  "1gIewK",
  "Uj9Nso",
  "KjwuMd",
  "ppA0qk",
  "ykm6zY",
  "KSKa4V",
  "YfStWc",
  "TfmYnU",
  "JU3hIG",
  "RLyps5",
  "f2jTdd",
  "GfHrPJ",
  "V2tBLo",
  "ZCxIdJ",
  "CEsm4m",
  "xEo9Lv",
  "PTOu37",
  "QyFmH3",
  "uzCGuL",
  "3yLyn8",
  "rcwpos",
  "RX8fyJ",
  "kLagGB",
  "Y1uPGw",
  "QOCRWN",
  "TFrU0P",
  "u33VmY",
  "66NnqX",
  "bsteNV",
  "iED4Zx",
  "YxyuHf",
  "VKTXFJ",
  "Mp19qd",
  "nyWuCd",
  "JQSpkY",
  "JyH1Uy",
  "VfdA33",
  "GZr3Or",
  "GbyvnP",
  "J3QOi4",
  "rfMHNv",
  "r15e7V",
  "fYMXKs",
  "sRsXem",
  "WNLNLp",
  "5S6cHp",
  "Pt2vcq",
  "G235Iu",
  "grbcYJ",
  "PWyh1R",
  "INuBmk",
  "QroxTF",
  "KdM1ju",
  "UTCKSw",
  "F1P8Qd",
  "OUkPcr",
  "Nk0CeA",
  "1zEGLV",
  "xr8MU5",
  "A902tH",
  "MJhOFE",
  "h3hWYN",
  "Pbqm06",
  "EPaRuG",
  "GJ5JvF",
  "Pnqgcq",
  "KxVtGh",
  "rsZIqC",
  "WNzCW0",
  "BMDWAO",
  "WHgm1E",
  "seXJbW",
  "6zLdhu",
  "EGC6PZ",
  "WhoXQU",
  "j3nBht",
  "2PV8RS",
  "HKeHWd",
  "ObzS4L",
  "Py9eKP",
  "v2Jhw9",
  "9w6bNp",
  "CUUaeF",
  "zaNWcS",
  "l6IdyR",
  "imELsT",
  "Nbm4nD",
  "42tT9H",
  "bxfoo8",
  "rh326k",
  "SoaZJ0",
  "IJ5kwW",
  "URyPk3",
  "WZsKJ5",
  "5mHWI5",
  "csX37H",
  "HIoJYd",
  "hksBVz",
  "WGR5Y6",
  "WHm3Cy",
  "29v4c5",
  "qlDaOH",
  "dnFXik",
  "9N09rB",
  "3GgLjf",
  "Xzicux",
  "QXdZQx",
  "MHAfko",
  "DQM9XL",
  "Oti1rJ",
  "8o0uAG",
  "ypNcX8",
  "B6pthO",
  "AG0SVu",
  "IXtP2H",
  "WlJ7BS",
  "xpmDkk",
  "zzEY34",
  "1dcTeV",
  "1Xgr7I",
  "eLNmhd",
  "2UpSMv",
  "ecNxPz",
  "6oICC2",
  "A3ywdv",
  "leRD4m",
  "9S9uHe",
  "SsLqWM",
  "WmqWoY",
  "I8rn7V",
  "O2joWK",
  "ye2Vea",
  "lYk3Qd",
  "rRJUoq",
  "sbX3kB",
  "7lgn9m",
  "33v3vq",
  "36T9ws",
  "4kfYxo",
  "ZYIoPs",
  "zPCMMx",
  "Bjm0Xl",
  "PQm5w7",
  "0F4TJT",
  "xhu6kw",
  "ipadRr",
  "R7qvSq",
  "iDdcGn",
  "EMROsa",
  "gwGLlL",
  "AbYpHD",
  "ri5D0h",
  "1kYWe4",
  "fho8hY",
  "MzQoGn",
  "4q35iO",
  "kX4ZSe",
  "fAuw4k",
  "w6RGlk",
  "JEcW3x",
  "ks2csO",
  "CeJkPv",
  "tQBRXm",
  "5ZQfTT",
  "cyKbR8",
  "JM8TG2",
  "plOGw9",
  "fADo3G",
  "S3KHB8",
  "K3ythd",
  "dOIdP1",
  "Hsp2aX",
  "pOycyC",
  "JwGSkd",
  "WfF2dW",
  "jJy6pK",
  "ugVUqm",
  "VEswzO",
  "aLvzEN",
  "wJ4L3k",
  "eQEV8j",
  "A3Ohyz",
  "Y2Fc89",
  "wbW4yf",
  "yD0QH2",
  "4c6PKM",
  "iDXiEs",
  "QA4dZT",
  "zoP3f0",
  "qMCVBz",
  "jbZmSd",
  "aw3MWO",
  "q7Sd0Y",
  "pMGs2N",
  "guDP81",
  "GT0cYu",
  "l6qznB",
  "LeXwlc",
  "Hjjah4",
  "9Q7FIf",
  "qn4e6p",
  "ggOvbx",
  "NQZWSD",
  "2ljYHn",
  "2IDLLX",
  "XxshiM",
  "Zvm8zN",
  "VuEut8",
  "kOIuud",
  "DXYJQr",
  "gLLsYG",
  "VlhOW0"
];
save("bank", 0);
save("mint", mint);*/

//LOADING 
//1: var mint = load("mint"); 
//2: var bank = load("bank");
var mint = load("mint");
console.log(mint);
var bank = load("bank");
console.log(bank);


function newDoc() {
	alert("Your username is " + username + " your password is " + final_pword + " DONT FORGET IT!  WRITE IT DOWN SOMWHERE SECRET!");
	location.replace("money_login.html");
}

function checkPassword(form) { 
	username1 = form.name.value;
	password1 = form.password1.value; 
	password2 = form.password2.value; 

	// If password not entered 
	if (password1 == '') 
		alert ("Please enter Password"); 
		  
	// If confirm password not entered 
	else if (password2 == '') 
		alert ("Please enter confirm password"); 
		  
	// If Not same return False.     
	else if (password1 != password2) { 
		alert ("\nPassword did not match: Please try again...") 
		return false; 
	} 

	// If same return True. 
	else{ 
		final_pword = password2;
		username = username1;
		localStorage.setItem("username", username1);
		localStorage.setItem("pword", final_pword);
		
		alert(newDoc());	
	} 
}
function entries(){
	var w = localStorage.getItem("username");
	var x = localStorage.getItem("pword");
	var y = document.getElementById("login").value;
	var z = document.getElementById("pw").value;
	if (w == y && x == z) {
		window.open("money_manager.html"); 
	}
	else {
		alert("Your username or password is incorrect, please try again");
	}
}


function save(key, var_stored) {
  localStorage.setItem(key, JSON.stringify(var_stored));
}
//Example:
//save("mint", mint);



function load(key){
  var retrievedData = localStorage.getItem(key);
  var var_stored = JSON.parse(retrievedData);
  return var_stored;
}
//Example:
//var mint = load("mint");
//var bank = load("bank");



function makeCode(length) {
  var text = "";
  var ledger = [];
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
  for (var i = 0; i < length; i++){
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }  
  return text;
}


function minter(){
  var mint = [];
  for (var i = 0; i < 500; i++) {
    var m = makeCode(6);
    mint.push(m);
  }
  return mint;
}
//The above two functions make the code.  Line below needs to be run once to create the array.
//var mint = minter(makeCode());


//testing for saving and loading
//var mint = load(mint);
//save("mint", mint);
//mint.pop();
//save("mint", mint);


function verify(code) {
  for (var i = mint.length; --i >= 0;){
    if (mint[i] == code) {
      console.log("This is a valid code");
      mint.splice(i, 1);
      save("mint", mint);
      break;
    }
  }
}  

/* var check = mint.includes("pstPO3");
console.log(check); */

function display10(){
	document.getElementById("moneyadded").innerHTML = "10";
}

function addmoney() {
	var x = document.getElementById("add").value;
	if(mint.includes(x)){
		alert(x + " was a valid code!");
		var rmv = mint.indexOf(x);
		mint.splice(rmv,1);
		save("mint", mint);
		bank += 1;
		save("bank", bank);
		if (!("total" in sessionStorage)){
			var total=0;
			total+=1;
			sessionStorage.setItem("total", total);		
		}
		else{
			var y = parseInt(sessionStorage.getItem("total"));
			y+=1;
			sessionStorage.setItem("total", y);
			
		}
	}
}
function totals(){
	var x = sessionStorage.getItem("total");
	document.getElementById("moneyadded1").innerHTML = ("You have added $" +x);
}

function deductmoney() {
	var x = document.getElementById("deduct").value;
	bank-=x;
	alert("You have deducted $" + x);
}
function bank_total() {
	var x = document.getElementById("showtotal");
	alert("Your total bank account holds $" + bank + "!!! Keep saving..");
	
}

//save("bank", bank);


/* if(mint.includes("pstPO3")){
console.log("true");
}
 */



//console.log(ver);

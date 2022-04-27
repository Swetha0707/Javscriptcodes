//encodeURI function: The encodeURI() function is used to encode complete URI. 
//This function encode the special character except (, / ? : @ & = + $ #) characters.
//escape only encode special characters
const url="https://www.google.com/search?q=geeks for geeks";
const encodeurl=encodeURI(url);
console.log("encode using encodeurl  "+encodeurl);

const decodeurl=decodeURI(encodeurl);
console.log("Decode encodeurl  "+decodeurl);

const esc=escape(url);
console.log("Encode using escape  "+esc);

const descape=unescape(esc);
console.log("Decode escape encoded url   "+descape);

// encodeURIComponent(): The encodeURIComponent() function is used to encode some parts or components of URI. 
//This function encodes the special characters. In addition, it encodes the following characters: , / ? : @ & = + $ #

const uri="https://www.google.com/search?q=geeks for geeks";
const uriencode=encodeURIComponent(uri);
console.log("Encode using encodeURIComponent  "+uriencode);

const decd=decodeURIComponent(uriencode);
console.log("Decode using decodeUrIComponent  " +decd );
const name = "setu";
const surname = "singh";
console.log(`hello my name is ${name} and my surname is ${surname}`);
const newname = new String("singhsetu");
console.log(newname.__proto__);
console.log(newname.length);
console.log(newname.toUpperCase());
console.log(newname.charAt(4));
console.log(newname.indexOf("i"));
console.log(newname.substring(4, 7));
console.log(newname.slice(2, -4)); //negative use back side
const newstring = "  singhsetu  ";
console.log(newstring);
console.log(newstring.trim());

const url="https://x.com/explore"
console.log(url.replace("https","http"))
console.log(url.includes("setu"));//to find 


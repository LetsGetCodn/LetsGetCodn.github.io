console.log("hi :)");
var randomNum = Math.floor(Math.random()* 9)
const treasure = (location)=>{
  alert (location)
  if (location == randomNum){
  alert ("jackpot")
}else {
  alert ("Try Again :(")
}
}

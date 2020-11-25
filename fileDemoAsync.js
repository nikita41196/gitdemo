var fs=require("fs");
fs.readFile("mydata.txt",function(err,data){ console.log(data.toString()); });  //read file and code gets blocked
fs.readFile("mydata1.txt",function(err,data1){ console.log(data1.toString());}); //read file and code gets blocked

fact=1
for(i=1;i<=5;i++)
{
fact=fact*i;

}
console.log("Factorial :",fact)
function reqListener () {
    //console.log(this.responseText);
    let result=this.responseText;
    //console.log(result);
    var parser = new DOMParser();
var htmlDoc = parser.parseFromString(result, 'text/html');
//const myRes=htmlDoc.getElementById("page-gtm-values");
const myRes=htmlDoc.getElementsByClassName("topic-section__header-cta")
console.log(myRes);
const myRes1=htmlDoc.getElementsByClassName("topic-section__header-cta")
console.log(myRes1);
const myRes2=htmlDoc.getElementsByClassName("topic-section__header-cta")
console.log(myRes2);
const myRes3=htmlDoc.getElementsByClassName("topic-section__header-cta")
console.log(myRes3);
const myRes4=htmlDoc.getElementsByClassName("topic-section__header-cta")
console.log(myRes4);
const myRes5=htmlDoc.getElementsByClassName("topic-section__header-cta")
console.log(myRes5);
}
  /*   var parser = new DOMParser();
var htmlDoc = parser.parseFromString(txt, 'text/html');
htmlDoc.getElementById("someID");
  }
   */
  let oReq = new XMLHttpRequest();
  oReq.addEventListener("load", reqListener);
  const result=oReq.open("GET", "https://cors-anywhere.herokuapp.com/https://time.com/");
  /* oReq.responseType = 'text';
  const resObj=oReq.response;
  var parser = new DOMParser();
var htmlDoc = parser.parseFromString(resObj, 'text/html');
const myResult=htmlDoc.getElementById("page-gtm-values")
  //console.log(result); */
  /* document.getElementById("demo").innerHTML =result.responseText; */
  //console.log(result);
  //console.log(resObj)
  //console.log(myResult)
  /* console.log("Hi") */
  oReq.send();
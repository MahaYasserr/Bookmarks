var addBookmark = document.getElementById("bookmark");
var bookmarkURL = document.getElementById("bookmarkurl");
var myBookmarks=[]
var allLinks= []

if (localStorage.getItem("myBookmarks") !=null)  {
    myBookmarks= JSON.parse(localStorage.getItem("myBookmarks"));
    display(myBookmarks)
}

if (bookmarkURL.value = null) {
    alert("Please enter a valid URL!")
    
}


function newBookmark(){
    var myBm = addBookmark.value;
    myBookmarks.push(myBm);
    console.log(myBookmarks);
        localStorage.setItem("myBookmarks", JSON.stringify(myBookmarks));
        clear()
        

    display()
}

function display(){
    var cartona= ``
    for (let i = 0; i < myBookmarks.length; i++) {
        cartona+= `<div class="row eyefri text-center pt-3">
        <div class="col-md-3">${i}</div>
        <div class="col-md-3">${myBookmarks[i]}</div>
        <div class="col-md-3"><a href="" onclick="visit(${allLinks[i]})  class="btn  btncolor">Visit</a></div>
        <div class="col-md-3"><a " onclick="delet(${i})" class="btn btn-danger">delete</a></div>
        
    </div>`
        
    }
    document.getElementById("mydata").innerHTML=cartona
}

function delet(x){
    myBookmarks.splice(x,1)
    console.log(myBookmarks);
    localStorage.setItem("myBookmarks", JSON.stringify(myBookmarks))
    display()

}

function visit(){
    var myLink= bookmarkURL.value;
    allLinks.push(myLink)
    console.log(allLinks);
}

function clear(){
    addBookmark.value= null
    bookmarkURL.value= null

}
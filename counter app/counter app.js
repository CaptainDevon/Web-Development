let countele=document.getElementById("count-el")
console.log(countele)

let count=0
function increment()
{
    console.log("clicked")
    count+=1
    countele.innerText=count
    console.log(count)
}

let saveEle=document.getElementById("save-el")
function save()
{
    let countStr = count + " - "
    console.log(count)
    saveEle.textContent+=countStr
    count=0
    countele.innerText=count
}






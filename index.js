var a, todo = [];
           var docu = document.getElementById("add")
           var up = document.getElementById("update")
 
           
           var ad = document.getElementById("todo-iput")
           ad.style.display="none"

           function disply(){
            ad.style.display="flex"
           }

  color()        
             function color(){
            docu.style.display = "block"
            up.style.display ="none"
             }
function addlist() {
  var add = document.getElementById("input");
  if (add.value === "") {
    alert("Enter some........!");
    return;
  }
  todo.push(add.value);
  add.value = "";
  showlist();
}
function showlist() {
  var showlist = document.getElementById("show");
  showlist.innerHTML = "";
  for (var i = 0; i < todo.length; i++) {
    showlist.innerHTML += `<div class="g"><div class="gt"><li onclick="update(${i})">${todo[i]}</li></div><button class="gun" onclick="delet(${i})">delet</button></div>`;
  }
}
function update(h) {
  var doc = document.getElementById("input");
  doc.value = todo[h];
  a = h;
     docu.style.display = "none"
     up.style.display ="block"
     
  }
function updatelist(){
  todo[a] = doc.value 
   doc.value = "";
  showlist();
}

function delet(index) {
  todo.splice(index, 1);
  showlist();
}


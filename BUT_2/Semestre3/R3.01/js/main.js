console.log(document.getElementById("addForm").children[1].value)
console.log('coucou')
console.warn('coucou')
console.info('coucou')

function enteteTab() {
    let entete = document.getElementsByTagName("th");
    for (let index = 0; index < entete.length; index++) {
        console.log(entete[index].innerText);
    }
}

// function bordure() {

//     let tableHeader = document.getElementsByTagName("th") ;
//     let tableData = document.getElementsByTagName("td") ;

//     for (var i = 0; i < tableHeader.length; i++) {
//         tableHeader[i].style.border = '2px solid black'; 
//         tableHeader[i].style.borderCollapse = 'collapse'; 
//     }
//     for (var i = 0; i < tableData.length; i++) {
//         tableData[i].style.border = '2px solid black'; 
//         tableData[i].style.borderCollapse = 'collapse'; 
//     }
// } 

function bordure() {

    let fullTable = document.getElementsByTagName("table");

    for (var i = 0; i < fullTable.length; i++) {
        fullTable[i].style.border = '2px solid black';
        fullTable[i].style.borderCollapse = 'collapse';

    }
}

function bordure2() {

    let fullTable = document.getElementsByClassName("table");

    for (var i = 0; i < fullTable.length; i++) {
        fullTable[i].style.border = '2px solid black';
        fullTable[i].style.borderCollapse = 'collapse';

    }
} 


function modifyValue(){
    let lstgitem= document.getElementsByClassName("list-group-item")
    for (let index = 0; index < lstgitem.length; index++) {
        lstgitem[index].innerText="Nouvelle valeur";  
    }
}

function addValue() {
    let items = document.getElementById("items") ;
    nItem = document.createElement("li") ;
    nItem.className = "list-group-item" ;
    nItem.innerText = "Item 3" ;
    let nButton = document.createElement("button") ;
    nButton.className = "btn btn-danger btn-sm float-right"
    nButton.innerText = "X" ;

    nItem.appendChild(nButton) ;
    items.appendChild(nItem) ;
}

function CSS(){
    let e= document.getElementById("items"); //e prend la valeur de l'element item
    e.style.fontSize='12px'; //on modifie la taille de la police de e 
    e.style.color="blue"; // on modifie la couleur de la police de e

    let e2=document.getElementsByName("monFormulaire")[0]; //renvoie dans la variable e2 le premier element qui s'appelle monFormulaire
    e2.className="gros"; // on lui attribue le nom de classe 'Gros'
    console.warn(e2.className); // on affiche un message en console
}

function CSS2(){
    let e= document.getElementById("items"); 
    e.style.display ="none";
}

function CSS3(element){
    let e= document.getElementById(element); 
    e.style.display ="none";
}


// let button= document.getElementsByClassName("list-group-item")[0]
// button.addEventListener('click',function(){button.remove();})


let lstitems = document.getElementById('items')
lstitems.addEventListener('click',function(e){
    if (e.target.classList.contains('btn-danger')) {
        let li=e.target.parentElement;
        lstitems.removeChild(li);
        
    }
})

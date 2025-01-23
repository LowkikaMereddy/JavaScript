//bom(browser object model) go through with window-root element
//Dom(document object model)
//screen navigator navigation history storage fetch DOM
//Inside dom we are having root element which is document,Inside the document all html code will be stored in tree kind of structure.
//html is divided in two parts one is head and another one is body.
//inside head we are having meta tag& title tag.inside body tag all the tag are present
//Dom-->document-->html-->head-->meta,title
//Dom-->document-->html-->body-->all tags
//It is an object
// it is an api provided by window
//root element document
//is having life-span page-reloads
//used to create,delete,and update an element and it is used to provide a style for ana element.
//how to convert html structure into DOM tree?
//each tag in DOM called as node
//in-direct access in dom (methods in dom)
// 1) document. getElementById("value")
// 2) document getElementsByClassName ("value")
// 3) document getElementsByTagName ("value")
// 4) document. getElementsByName("value")
// 5) document. querySelector ("value")
// 6) document. querySelectorA11("value")

console.log(window);
console.log(document);
console.log(document.URL);
console.log(document.doctype);
console.log(document.head);
console.log(document.title);
document.title = "amazon"
console.log(document.body);


let image = document.images
console.log(img);
// console.log(img[0]);
// console.log(img[1]);
// console.log(img[2]);

for(let i=0; i<=img.length; i++){
    console.log(img[i]);
    img[i].style.height = "200px"
    img[i].style.width = "200px"
    img[i].style.borderRadius = "100%"
    img[i].alt = "image"
}
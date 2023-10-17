
let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    formvalidation()

});

let formvalidation = () => {

    if(input.value === ""){

        console.log("failure")
        msg.innerHTML = "Post Cannot Be Blank"
        
    }
    else{
       msg.innerHTML = "";
       console.log("success")
       AcceptData()
    }
         
};

let data = {};
let AcceptData = () => {
  
   data['text'] = input.value;
   createpost();

};
let createpost= () => {

    posts.innerHTML += `
    <div> <p>${data.text}</p>
          <span class="options">
        <i onClick="editpost(this)" class="fas fa-edit"></i>
        <i onClick="deletepost(this)" class="fas fa-trash-alt"></i>
           </span>
          </div> `;
          input.value = "";

}

let deletepost = (e)=>{
    e.parentElement.parentElement.remove();
}
let editpost = (e) => {
   
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
}
    
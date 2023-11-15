const card=document.querySelector('ul');
const NewButton=document.getElementById("btn-new");

NewButton.addEventListener('click',()=>{
    // const ul=document.createElement('ul');
    const div=document.createElement('div');
    div.innerHTML=`<h1>DONE</h1>`;
    card.append(div);
    console.log('clicked!');
})

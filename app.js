const card=document.querySelector('ul');
const NewButton=document.getElementById("btn-new");

const div=document.getElementById("cd");
NewButton.addEventListener('click',()=>{
    // const ul=document.createElement('ul');
    const outInput=document.getElementsByClassName("form-input")[0];
    const input=document.createElement('input');
    const daysLabel=document.createElement("label");
    const dates=new Date();
    const shortingDate={weekday:'short',month:'short',day:'numeric',year:'numeric'};
    const formattedDate=dates.toLocaleDateString('en-US',shortingDate);

    daysLabel.innerText=formattedDate;
    const tasklabel=document.createElement('label');
    tasklabel.innerText=outInput.value;
    input.type="checkbox";
    div.className="cd";
    div.append(daysLabel);
    div.append(tasklabel);
    div.append(input);


})

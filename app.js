const NewButton=document.getElementById("btn-new");
const addButton=document.getElementById('add-btn');
const inputTask=document.getElementsByClassName("form-input")[0];

NewButton.addEventListener('click',()=> {
//Card1
  const container1 = document.createElement("div");
  const card1= document.createElement("div");
  const cardContent1 = document.createElement("div");
  container1.className = "container";
  card1.className = "card";
  cardContent1.className = "card-content";
  cardContent1.innerHTML = `
  <h3>To be done!</h3>
  <label>Javascript</label>
  <input type="checkbox"></input>
`;

  //Card2

  const container2 = document.createElement("div");
  const card2= document.createElement("div");
  const cardContent2 = document.createElement("div");
  container2.className = "container";
  card2.className = "card";
  cardContent2.className = "card-content";
  cardContent2.innerHTML = `
  <h3>On going task!</h3>
  <label>Javascript</label>
  <input type="checkbox"></input>
`;

  card1.append(cardContent1);
  container1.append(card1);
  document.body.append(container1);

  card2.append(cardContent2);
  container2.append(card2);
  document.body.append(container2);




})


















addButton.addEventListener('click',()=> {


// const outInput=document.getElementsByClassName("form-input")[0];
// const input=document.createElement('input');
// const daysLabel=document.createElement("label");
// const dates=new Date();
// const shortingDate={weekday:'short',month:'short',day:'numeric',year:'numeric'};
// const formattedDate=dates.toLocaleDateString('en-US',shortingDate);
// daysLabel.innerText=formattedDate;
// const tasklabel=document.createElement('label');
// tasklabel.innerText=outInput.value;
// input.type="checkbox";


})
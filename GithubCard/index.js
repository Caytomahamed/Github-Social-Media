
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/



/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

*/


/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/




// co CARD 


function githubCard(imgAc,AcName,Acusername,Acloction,Acaddr,Acfollowers,Acfollowering,AcBio){

  //Creat element 
  const card =document.createElement('div')
  const cardImg =document.createElement('img')
  const cardInfo =document.createElement('div')
  const name =document.createElement('h3')
  const username =document.createElement('p')
  const location=document.createElement('p')
  const Profile =document.createElement('p')
  const ProfileAddr=document.createElement('a')
  const followers =document.createElement('p')
  const followering =document.createElement('p')
  const Bio =document.createElement('p')
 

  //connect 
  card.appendChild(cardImg)
  card.appendChild(cardInfo)
  cardInfo.appendChild(name)
  cardInfo.appendChild(username)
  cardInfo.appendChild(location)
  cardInfo.appendChild(Profile)
  cardInfo.appendChild(followers)
  cardInfo.appendChild(followering)
  cardInfo.appendChild(Bio)
  Profile.appendChild(ProfileAddr)
  
  //added conten

  cardImg.src =imgAc//
  name.textContent =AcName//
  username.textContent =Acusername//
  location.textContent = "Loction: " + "  " + Acloction//
  Profile.textContent = "profile: " + Acaddr
  ProfileAddr.href =Acaddr
  followers.textContent ="followers:  " + Acfollowers
  followering.textContent ="followering  " + Acfollowering
  Bio.textContent=AcBio


  //add CSS
  card.classList.add("card")
  cardInfo.classList.add("card-info")
  name.classList.add("name")
  username.classList.add("username")


  // return parent 
  return card
}

// SELECT PARENT ELEMET 
const cards=document.querySelector(".cards")




//USTAADKA 

//HTTP / API REQUEST 


//PROMISE 1
axios.get("https://api.github.com/users/duraanali")

.then(response => {

   let imgAcc = response.data.avatar_url
   let AccName = response.data.name
   let Accusername = response.data.login
   let Accloction = response.data.location
   let Accaddr = response.data.html_url
   let Accfollowers= response.data.followers
   let Accfollowering = response.data.following
   let AccBio = response.data.bio

   
cards.appendChild(githubCard(imgAcc,AccName,Accusername,Accloction,Accaddr,Accfollowers,Accfollowering,AccBio))
 });



// CAYDARUUS CARD 

//HTTP / API REQUEST
axios.get("https://api.github.com/users/caytomahamed")

//PROMISE 2

.then(response => {

  let imgAcc = response.data.avatar_url
  let AccName = response.data.name
  let Accusername = response.data.login
  let Accloction = response.data.location
  let Accaddr = response.data.html_url
  let Accfollowers= response.data.followers
  let Accfollowering = response.data.following
  let AccBio = response.data.bio

  
cards.appendChild(githubCard(imgAcc,AccName,Accusername,Accloction,Accaddr,Accfollowers,Accfollowering,AccBio))
 });



//JOHN DOE

//HTTP / API REQUEST
axios.get("https://api.github.com/users/abdifatahdev")

//PROMISE 3

.then(response => {
  let imgAcc = response.data.avatar_url
  let AccName = response.data.name
  let Accusername = response.data.login
  let Accloction = response.data.location
  let Accaddr = response.data.html_url
  let Accfollowers= response.data.followers
  let Accfollowering = response.data.following
  let AccBio = response.data.bio

  
cards.appendChild(githubCard(imgAcc,AccName,Accusername,Accloction,Accaddr,Accfollowers,Accfollowering,AccBio))
 })

 .catch(err => {
  console.log(err.message)
})



// COLCULATION  ERRORS


// imgAc,AcName,Acusername,Acloction,Acaddr,Acfollowers,Acfollowering,AcBio  =   data waxa laga soo jiidaayo magaceeda 

// imgAcc,AccName,Accusername,Accloction,Accaddr,Accfollowers,Accfollowering,AccBio     =  data waxa laga soo jiidaayo magaceeda 


//CONTENT
// cardImg.src =imgAc//data.avatar_url
// name.textContent =AcName//data.name
// username.textContent =Acusername//data.login
// location.textContent = "Loction: " + "  " + Acloction//data.location
// Profile.textContent = "profile: " + Acaddr
// ProfileAddr.href =Acaddr//data.html_url
// followers.textContent ="followers:  " + Acfollowers//data.followers
// followering.textContent ="followering  " + Acfollowering//data.following
// Bio.textContent=AcBio//data.bio





/*
  STEP 4: Pass the data received from Github into your function, and append the returned markup to the DOM as a child of .cards
*/


/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers, manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each user, and adding that card to the DOM.
*/



// const followersArray = ["khalidino","abdifatahdev"];


// axios.get("https://api.github.com/users/duraanali/followers")

// .then(res => {
//   res.data.forEach((data)=>{

  
//    if ( data.name == followersArray) {
//     let imgAcc = data.avatar_url
//     let AccName = data.name
//     let Accusername = data.login
//     let Accloction = data.location
//     let Accaddr = data.html_url
//     let Accfollowers= data.followers
//     let Accfollowering = data.following
//     let AccBio = data.bio

//     cards.appendChild(githubCard(imgAcc,AccName,Accusername,Accloction,Accaddr,Accfollowers,Accfollowering,AccBio))    
//    }
  
//   } )
// })


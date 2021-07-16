// var name = ''
// var name = ''
// var name = ''
// var name = ''

// var onNameChange = (e) =>{
//     console.log(e.target.value)
//     document.getElementById('Name').innerHTML = e.target.value
// }

console.log(window.location.href);

var firebaseConfig = {
    apiKey: "AIzaSyCzrlCN_QpUHpSno5O1neGFzRMQiYz6TyE",
    authDomain: "card-it-87130.firebaseapp.com",
    projectId: "card-it-87130",
    storageBucket: "card-it-87130.appspot.com",
    messagingSenderId: "488021775472",
    appId: "1:488021775472:web:eb59dfda195d6f2bd050b5",
    measurementId: "G-K8688WC6YE"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); 
 }
  const projectFirestore = firebase.firestore();

document.getElementById("input-name").onchange = function(event) { 
    document.getElementById('Name').innerHTML = event.target.value
}

document.getElementById("input-college-name").onchange = function(event) { 
    document.getElementById('college-name').innerHTML = event.target.value
}

document.getElementById("input-phone").onchange = function(event) { 
    document.getElementById('phone').innerHTML = event.target.value
}

document.getElementById("input-email").onchange = function(event) { 
    document.getElementById('email').innerHTML = event.target.value
}

document.getElementById("input-portfolio").onchange = function(event) { 
    document.getElementById('portfolio').innerHTML = event.target.value
}

document.getElementById("input-linkedin").onchange = function(event) { 
    document.getElementById('linkedin').href = event.target.value
    // document.getElementById('linkedintest').innerHTML = event.target.value
}

document.getElementById("input-about").onchange = function(event) { 
    document.getElementById('about').innerHTML = event.target.value
}

document.getElementById("input-image").onchange = function(event) { 
    window.image = event.target.files[0];
    console.log(image)
    document.getElementById('card-image').src = URL.createObjectURL(image);
}

// console.log(document.getElementById("submit-card"))

// document.getElementById("submit-card").onClick = function(event) { 
// alert('hello')
// }  

window.url_link = document.getElementById('url').href
window.url = document.getElementById('url').innerHTML
window.url_text =document.getElementById('url-text').innerHTML
window.name = document.getElementById("input-name").value
var ChangeUrl = (name) =>{
    url_text.innerHTML = 'Card Link :'
    url.innerHTML = 'https://card-it.netlify.app/?id=1&user='+name
    url_link = 'https://card-it.netlify.app/?id=1&user='+name
}

document.getElementById("submit-card").addEventListener("click", function(event){
    // alert('hello')
    event.preventDefault()
    var name = document.getElementById("input-name").value
    var college = document.getElementById("input-college-name").value
    var phone = document.getElementById("input-phone").value
    var email = document.getElementById("input-email").value
    var portfolio = document.getElementById("input-portfolio").value
    var linkedin = document.getElementById("input-linkedin").value
    var about = document.getElementById("input-about").value
    
   

    // var storageRef = firebase.storage().ref('/images/'+image.name);
//     firebase.storage().ref(`/images/${image.name}`).put(image).snapshot.ref.getDownloadURL().then((url)=>{
//         console.log(url)
//         projectFirestore.collection('1').doc(name).set({ name,college,phone,email,portfolio,linkedin,about,url }).then(
//             alert('successfully Hosted'),
//             document.getElementById('url').href = 'https://card-it.netlify.app/?id=1&user='+name,
// document.getElementById('url').innerHTML ='https://card-it.netlify.app/?id=1&user='+name,
// document.getElementById('url-text').innerHTML = 'Card Link :'
//         ) 
// })


firebase.storage().ref(`/images/${image.name}`).put(image).on('state_changed,()' , (snap) => {
    let percentage = (snap.bytesTransferred / snap.tatalBytes)*100;
}, (err)=> {
console.log(err)
}, async () => {
    const url = await firebase.storage().ref(`/images/${image.name}`).getDownloadURL();
    projectFirestore.collection('1').doc(name).set({ name,college,phone,email,portfolio,linkedin,about,url }).then(
        alert('successfully Hosted'),
        document.getElementById('url').href = 'https://card-it.netlify.app/?id=1&user='+name,
        document.getElementById('url').innerHTML ='https://card-it.netlify.app/?id=1&user='+name,
        document.getElementById('url-text').innerHTML = 'Card Link :'
    ) 
})



})


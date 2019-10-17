var firebaseConfig = {
  apiKey: "AIzaSyBGWQ0ZvH0R6NFUAS_CqmgIyV_hSPBzUJk",
  authDomain: "fooddeliveryapp-51a8d.firebaseapp.com",
  databaseURL: "https://fooddeliveryapp-51a8d.firebaseio.com",
  projectId: "fooddeliveryapp-51a8d",
  storageBucket: "fooddeliveryapp-51a8d.appspot.com",
  messagingSenderId: "192100795693",
  appId: "1:192100795693:web:7baae6ed79369e7260bfa4",
  measurementId: "G-6ZJXM0ELTY"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

document.addEventListener('init', function (event) {
  var page = event.target;



  if (page.id === 'Foodcategory') {
    console.log("FoodCategory");

    // $("#menubtn").click(function () {
    //   $("#sidemenu")[0].open();
    // });


    $("#carousel").empty();
    db.collection("recommended").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        var item = `<ons-carousel-item modifier="nodivider" id="item${doc.data().id}" class="recomended_item">
          <div class="thumbnail" style="background-image: url('${doc.data().url}')">
          </div>
          <div class="recomended_item_title" id="item1_${doc.data().id}">${doc.data().Name}</div>
      </ons-carousel-item>`
        $("#carousel").append(item);
      });
    });

  }


  if (page.id === 'register.html') {
    console.log("register");

    $("#signup-buttons").click(function () {
      console.log("signup");
      $("#content")[0].load("FoodCatergory.html");
      $("#menu")[0].close();
    });
   
  }

  if (page.id === 'menu') {
    console.log("menu");

    $("#login").click(function () {
      $("#content")[0].load("login.html");
      $("#menu")[0].close();
    });

    $("#logout").click(function () {
      //firebase sign out
      firebase.auth().signOut().then(function () {
        // Sign-out successful.
        $("#content")[0].load("login.html");
        $("#menu")[0].close();
      }).catch(function (error) {
        // An error happened.
        console.log(error.message);
      });
    });

  }

  if (page.id === 'login') {
    console.log("login");

    $("#signup-button").click(function () {
      $("#content")[0].load("Register.html");
      $("#menu")[0].close();
    });

    $("#signinbtn").click(function () {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        content.load('index.html');
      }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
    });
   
    // $("#backhomebtn").click(function () {
    //   $("#content")[0].load("FoodCategory.html");
    //   $("#menu")[0].close();
    // });

  }

  //   if (page.id === 'login') {
  //     console.log("login")
  //     firebase.auth().onAuthStateChanged(function (user) {
  //       if (user) {
  //         // User is signed in.
  //         var displayName = user.displayName;
  //         var email = user.email;
  //         var emailVerified = user.emailVerified;
  //         var photoURL = user.photoURL;
  //         var isAnonymous = user.isAnonymous;
  //         var uid = user.uid;
  //         var providerData = user.providerData;
  //         // console.log(${email} User is signed in.);

  //         $("#content")[0].load("index.html");
  //         // ...
  //       } else {
  //         // User is signed out.
  //         // ...
  //         console.log("User is signed out.");

  //       }
  //     });
  //     $("#signinbtn").click(function () {
  //       var username = $("#username").val();
  //       var password = $("#password").val();


  //       firebase.auth().signInWithEmailAndPassword(username, password)
  //         .then(function (result) {
  //           console.log(result);
  //          $("#signinbtn").click(function(){
  //          var username = $("#username").val();
  //          var password = $("#password").val();
  //          firebase.auth().signInWithEmailAndPassword(username, password).catch(function(error) {

  //         console.log(error.message);
  //       });

  //     })
  //     });
  //     });


  //     $('#gmailbtn').click( function googleLogin() {
  //       firebase.auth().signInWithRedirect(provider);
  //       firebase.auth().getRedirectResult().then(function(result) {
  //         if (result.credential) {
  //           // This gives you a Google Access Token. You can use it to access the Google API.
  //           var token = result.credential.accessToken;
  //           // ...
  //         }
  //         // The signed-in user info.
  //         var user = result.user;
  //         console.log('user'+token);

  //       }).catch(function(error) {
  //         // Handle Errors here.
  //         var errorCode = error.code;
  //         var errorMessage = error.message;
  //         // The email of the user's account used.
  //         var email = error.email;
  //         // The firebase.auth.AuthCredential type that was used.
  //         var credential = error.credential;
  //         // ...
  //         console.log('error'+errorCode);
  //       });
  //     });

  //   }








});
$("#card").empty();
db.collection("category").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    var item1 = `<ons-card modifier="nodivider"id="item${doc.data().id}" class="category_item">
          <div class="imgcategory" style="background-image: url('${doc.data().img}')">
          </div>
          <div class="category_item_title" id="item1_${doc.data().id}">${doc.data().Name}</div>
      </ons-card>`
    $("#card").append(item1);
  });
});

$("#list").empty();
db.collection("list").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    var item2 = `<ons-card modifier="chevron" id="item${doc.data().id}" class="list_item">
          <div class="imglist" style="background-image: url('${doc.data().url}')">
          </div>
          <div class="imgrate" style="background-image: url('${doc.data().rate}')">
          </div>
          <div class="list_item_title" id="item1_${doc.data().id}">${doc.data().Name}</div>
          <div class="list_title" id="item1_${doc.data().id}">${doc.data().title}</div>
      </ons-card>`
    $("#list").append(item2);
  });
});

$("#menu").empty();
db.collection("menu").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    var item3 = `<ons-card modifier="chevron" id="item${doc.data().id}" class="menu_item">
          <div class="imgmenu" style="background-image: url('${doc.data().url}')">
          </div>
          <div class="imgprice" id="item1_${doc.data().id}">${doc.data().price}</div>
          <div class="menu_item_title" id="item2_${doc.data().id}">${doc.data().Name}</div>
          <div class="menu_title" id="item3_${doc.data().id}">${doc.data().title}</div>
      </ons-card>`
    $("#menu").append(item3);
  });
});

$("#LOGO").empty();
db.collection("LOGO").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    var item4 = `<ons-card modifier="chevron" id="item${doc.data().id}" class="logo_item">
          <div class="imglogo" style="background-image: url('${doc.data().URL}')">
          </div>
          
      </ons-card>`
    $("#LOGO").append(item4);
  });
});

window.fn = {};

window.fn.open = function () {
  var menu = document.getElementById('menu');
  menu.open();
};

window.fn.load = function (page) {
  var content = document.getElementById('content');
  var menu = document.getElementById('menu');
  content.load(page)
    .then(menu.close.bind(menu));
};

window.fn.pushPage = function (page, anim) {
  if (anim) {
    document.getElementById('myNavigator').pushPage(page.id, { data: { title: page.title }, animation: anim });
  } else {
    document.getElementById('myNavigator').pushPage(page.id, { data: { title: page.title } });
  }
};


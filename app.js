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
  if (page.id === 'menu') {
    console.log("menu");

    $("#login").click(function () {
      $("#content")[0].load("login.html");  
      $("#menu")[0].close();   
    });

    $("#logout").click(function () {
      //firebase sign out
      firebase.auth().signOut().then(function() {
        // Sign-out successful.
        $("#content")[0].load("login.html");  
        $("#menu")[0].close();   
      }).catch(function(error) {
        // An error happened.
        console.log(error.message);
      });
    });

    $("#home").click(function () {
      $("#content")[0].load("FoodCategory.html");  
      $("#menu")[0].close();   
    });
  }






});

window.fn = {};

window.fn.open = function() {
  var menu = document.getElementById('menu');
  menu.open();
};

window.fn.load = function(page) {
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

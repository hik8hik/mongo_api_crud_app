const addcheckbox = document.getElementById("puactinaci");
const upcheckbox = document.getElementById("upactinaci");

if (addcheckbox) {
  //CONTROL THE VALUE OF CHECKBOX IN NEW USER
  addcheckbox.addEventListener("change", (event) => {
    if (event.currentTarget.checked) {
      document.getElementById("yesnos").innerHTML = "Active";
      document.getElementById("puactinaci").value = "Active";
      document.getElementById("chstatus").value = "Active";
    } else {
      document.getElementById("yesnos").innerHTML = "Inactive";
      document.getElementById("puactinaci").value = "Inactive";
      document.getElementById("chstatus").value = "Inactive";
    }
  });
} else if (upcheckbox) {
  //CONTROL THE VALUE OF CHECKBOX IN UPDATE USER
  upcheckbox.addEventListener("change", (event) => {
    if (event.currentTarget.checked) {
      document.getElementById("lblupactinaci").innerHTML = "Active";
      document.getElementById("upactinaci").value = "Active";
      document.getElementById("chstatus").value = "Active";
      console.log("Active");
    } else {
      document.getElementById("lblupactinaci").innerHTML = "Inactive";
      document.getElementById("upactinaci").value = "Inactive";
      document.getElementById("chstatus").value = "Inactive";
      console.log("Inactive");
    }
  });
}

// DO AFTER LISTENING TO SUBMIT
$("#add_user").submit(function (event) {
  alert("Data Added Successfully");
});

$("#update_user").submit(function (event) {
  event.preventDefault();
  data = {};
  //GET THE UNUNDEXED ARRAY
  var unindexed_array = $(this).serializeArray();
  $.map(unindexed_array, function (n, i) {
    data[n["name"]] = n["value"];
  });
  // VARIABLE TO MAKE REQUEST
  var request = {
    "url": `http://localhost:3000/api/users/${data.id}`,
    "method": "PUT",
    "data": data,
  };
  //CALL AJAX TO SEND THE DATA
  $.ajax(request).done(function (response) {
    alert("Update Success");
  });
});

if (window.location.pathname == "/") {
  $ondelete = $(".table tbody td a.delete");
  $ondelete.click(function () {
    var id = $(this).attr("data-id");

    var request = {
      "url": `http://localhost:3000/api/users/${id}`,
      "method": "DELETE",
    };

    if (confirm("Are You Sure You Want To Delete user")) {
      $.ajax(request).done(function (response) {
        alert("Deletion Success");
        location.reload();
      });
    }
  });
}

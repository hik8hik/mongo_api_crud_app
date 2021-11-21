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

  var unindexed_array = $(this).serializeArray();
  console.log(unindexed_array);
  alert("Update Success");
});

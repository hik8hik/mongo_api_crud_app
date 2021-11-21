//CONTROL THE VALUE OF CHECKBOX
const checkbox = document.getElementById("actinaci");

checkbox.addEventListener("change", (event) => {
  if (event.currentTarget.checked) {
    document.getElementById("yesnos").innerHTML = "Active";
    document.getElementById("actinaci").value = "Active";
  } else {
    document.getElementById("yesnos").innerHTML = "Inactive";
    document.getElementById("actinaci").value = "Inactive";
  }
});

$("#add_user").submit(function (event) {
  alert("Data Added Successfully");
});

$("#update_user").submit(function (event) {
  event.preventDefault();

  var unindexed_array = $(this).serializeArray();
  console.log(unindexed_array);
  alert("Update Success");
});

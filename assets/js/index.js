$("#add-user").submit(function (event) {
  alert("Data Added Successfully");
});

//CONTROL THE VALUE OF CHECKBOX
const checkbox = document.getElementById('actinaci')

checkbox.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
    alert('checked');
    document.getElementById('yesnos').innerHTML = 'Active';
    document.getElementById("actinaci").value = "Active";
} else {
    alert('not checked');
    document.getElementById('yesnos').innerHTML = 'Inactive';
    document.getElementById("actinaci").value = "Inactive";
  }
})

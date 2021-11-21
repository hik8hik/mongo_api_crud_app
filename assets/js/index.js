$("#add-user").submit(function (event) {
  alert("Data Added Successfully");
});

//CONTROL THE VALUE OF CHECKBOX
const checkbox = document.getElementById('actinaci')

checkbox.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
    alert('checked');
  } else {
    alert('not checked');
  }
})

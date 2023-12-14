$('.dataTable').DataTable();

// const date = new Date(); // Replace this with your actual date
// const formattedDate = date.toLocaleDateString('en-US', {
//   year: 'numeric',
//   month: 'short',
//   day: 'numeric',
// });

// console.log(formattedDate);


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("confirmDelete").addEventListener("click", function () {
      var userId = document.getElementById("userIdInput").value;
      axios
        .delete(`/api/user/${userId}`)
        .then(function (response) {
          console.log(response.data);
          alert(response.data);
          window.location.reload();
        })
        .catch(function (error) {
          console.error(error);
          alert("An error occurred while deleting the user.");
        });
      $("#delete").modal("hide");
    });
  });


  $('#delete').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget);
    var userId = button.data('user');
    $('#userIdInput').val(userId);
  });
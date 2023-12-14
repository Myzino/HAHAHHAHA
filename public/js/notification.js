$(document).ready(function() {
  $('.dataTable').DataTable({
    order: [[3, 'desc']],
  });
});


const date = new Date(); // Replace this with your actual date
const formattedDate = date.toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("confirmDelete").addEventListener("click", function () {
      var notificationId = document.getElementById("notificationIdInput").value;
      axios
        .delete(`/api/notification/${notificationId}`)
        .then(function (response) {
          console.log(response.data);
          alert(response.data);
          window.location.reload();
        })
        .catch(function (error) {
          console.error(error);
          alert("An error occurred while deleting the Leave Request data.");
        });
      $("#delete").modal("hide");
    });
  });


  $('#delete').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget);
    var notificationId = button.data('notification');
    $('#notificationIdInput').val(notificationId);
  });
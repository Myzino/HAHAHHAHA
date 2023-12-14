$('.dataTable').DataTable();



document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("confirmDelete").addEventListener("click", function () {
      var bidId = document.getElementById("bidIdInput").value;
      axios
        .delete(`/api/bid/${bidId}`)
        .then(function (response) {
          console.log(response.data);
          alert(response.data);
          window.location.reload();
        })
        .catch(function (error) {
          console.error(error);
          alert("An error occurred while deleting the bid.");
        });
      $("#delete").modal("hide");
    });
  });


  $('#delete').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget);
    var bidId = button.data('bid');
    $('#bidIdInput').val(bidId);
  });
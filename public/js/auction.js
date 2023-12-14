$('.dataTable').DataTable();



document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("confirmDelete").addEventListener("click", function () {
      var auctionId = document.getElementById("auctionIdInput").value;
      axios
        .delete(`/api/auction/${auctionId}`)
        .then(function (response) {
          console.log(response.data);
          alert(response.data);
          window.location.reload();
        })
        .catch(function (error) {
          console.error(error);
          alert("An error occurred while deleting the auction.");
        });
      $("#delete").modal("hide");
    });
  });


  $('#delete').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget);
    var auctionId = button.data('auction');
    $('#auctionIdInput').val(auctionId);
  });
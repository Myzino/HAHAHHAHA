$('.dataTable').DataTable();



document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("confirmDelete").addEventListener("click", function () {
      var shippingId = document.getElementById("shippingIdInput").value;
      axios
        .delete(`/api/shipping/${shippinghId}`)
        .then(function (response) {
          console.log(response.data);
          alert(response.data);
          window.location.reload();
        })
        .catch(function (error) {
          console.error(error);
          alert("An error occurred while deleting the shipping data.");
        });
      $("#delete").modal("hide");
    });
  });


  $('#delete').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget);
    var shippingId = button.data('shipping');
    $('#shippingIdInput').val(shippingId);
  });
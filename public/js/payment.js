$('.dataTable').DataTable();



document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("confirmDelete").addEventListener("click", function () {
      var paymentId = document.getElementById("paymentIdInput").value;
      axios
        .delete(`/api/payment/${paymentId}`)
        .then(function (response) {
          console.log(response.data);
          alert(response.data);
          window.location.reload();
        })
        .catch(function (error) {
          console.error(error);
          alert("An error occurred while deleting the payment data.");
        });
      $("#delete").modal("hide");
    });
  });


  $('#delete').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget);
    var paymentId = button.data('payment');
    $('#paymentIdInput').val(paymentId);
  });
$(document).ready(function () {
  $("#example").DataTable({
    serverSide: true,
    ajax: {
      url: "api/individuals",
      type: "GET",
      dataSrc: "",
    },
    columns: [{ data: "last_name" }, { data: "first_name" }],
    paging: true,
    searching: true,
    ordering: true,
    info: true,
    language: {
      search: "Search by name: ",
      searchPlaceholder: "Enter name here",
      lengthMenu: "Show _MENU_ records per page",
      info: "Showing _START_ to _END_ of _TOTAL_ records",
      infoEmpty: "No records available",
      infoFiltered: "(filtered from _MAX_ total records)",
      paginate: {
        first: "First",
        last: "Last",
        next: "Next",
        previous: "Previous",
      },
    },
  });
});

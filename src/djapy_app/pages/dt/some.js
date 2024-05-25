$(document).ready(function () {
  var dataSrc = [
    {
      name: "Student 1",
      age: 30,
      city: "New York",
      email: "student1@gmail.com",
    },
    {
      name: "Student 2",
      age: 30,
      city: "New York",
      email: "student2@gmail.com",
    },
    {
      name: "Student 3",
      age: 30,
      city: "New York",
      email: "student3@gmail.com",
    },
    {
      name: "Student 4",
      age: 30,
      city: "New York",
      email: "student4@gmail.com",
    },
  ];

  $("#example").DataTable({
    //data: dataSrc,
    serverSide: true,
    ajax: {
      url: "some",
      type: "GET",
      dataSrc: "",
    },
    columns: [{ data: "fields.l_name" }, { data: "fields.f_name" }],
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
        kj: "",
        k: ""
      },
    },
  });
});

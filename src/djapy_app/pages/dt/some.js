$(document).ready(function () {
  AjaxDatatableViewUtils.initialize_table(
    $("#some"),
    "dt/some",
    {
      // extra_options (example)
      processing: false,
      autoWidth: false,
      full_row_select: true,
      scrollX: false,
    },
    {
      // extra_data
      // ..
    },
  );
});

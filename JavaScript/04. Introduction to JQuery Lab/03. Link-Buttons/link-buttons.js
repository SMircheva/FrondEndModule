function attachEvents() {
   $('.button').on('click', selectedTown);
   function selectedTown () {
        $('.button').removeClass('selected');
        $(this)
           .addClass('selected');

   }

}
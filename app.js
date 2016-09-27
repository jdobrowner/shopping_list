$( function() {
  addItem();
  checkItem();
  deleteItem();
});

function addItem() {
  $('#js-shopping-list-form').submit( function(event) {
      event.preventDefault();
      var text = '<li><span class="shopping-item">' + $('#shopping-list-entry').val() + '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button> <button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>';
      $('.shopping-list').append(text);
    });
}

function checkItem() {
  $('.shopping-list').on( 'click', '.shopping-item-toggle', function(event) {
    $(this).closest('li').children('li span').toggleClass('shopping-item__checked');
    //();
  });
}

function deleteItem() {
  $('.shopping-list').on( 'click', '.shopping-item-delete', function(event) {
    $(this).closest('li').remove();
  });
}

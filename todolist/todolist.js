
//user enters items to list, items are added to list
$("#formToDo").on('submit',function(e){
  e.preventDefault();
  var userInput= $("#new-todo-item").val()
  $("#listContainer").append("<li>"+userInput+ '<input type="button" class="edit" value="Edit">'+ '<input type="button" class=" delete" value="Delete">'+"</li>" )
  $('#new-todo-item').val('');
  updateListCount();
})

function updateListCount(){
  var count= $("li").length;
  $("h3").text("You have "+count+ " task(s) left!");
}
//make delete button remove list item

$('#listContainer').on('click', '.delete',function(){
    $(this).parent().remove();
    updateListCount();
});
//clear all items in list
$( "#clearBtn" ).click(function() {
  $( "li" ).remove();
});

//mark list items as markComplete
$(document).ready(function(){
  $("ul").on("click" ,"li", function (){
   $(this).toggleClass("markComplete");

})
$("ul").on("mouseleave" ,"li", function (){
    $(".delete, .edit").hide();
    $(".delete, .edit").addClass("new");
});


$("ul").on("mouseenter" ,"li", function (){
    $(".delete, .edit").show();
    $(".delete, .edit").addClass("new");
});

});

//trying to put the value of the list into an input




//clear the items with new class--that is mark completed
$( "#clearDone" ).click(function() {
  $( "li.markComplete" ).remove();
  updateListCount();
});

//EDIT TASK
//user clicks on edit button
$(document).on("click", '.edit', function () {
    // make the span editable and focus it
      $(this).parent().prop("contenteditable", true).focus();
    return false;
  });

  /*$('#listContainer').on('click', '.edit',function(){
      var editInput = $(this).parent().val();
      $(this).parent().replaceWith( '<li> <input type="text" id=newEditInput value=""> </li>' )
  });*/



$( document ).ready(function() {
    console.log( "ready!" );
    
    //set global variables for ajax json calls
    var month;
    var hour;
    var hemi;

    



$("#month").on('change',function(){
        month = $(this).val();
      });

    $("#hour").on('change',function(){
        hour = $(this).val();  
      });

    $("#hemisphere").on('change',function(){
        hemi = $(this).val();   
      });



//bug time button ajax table load function      

$('#crittertimeload').click(function(){

/*    console.log(month);
console.log(hour);
console.log(hemi);*/
$("#timeloadbug tbody").empty();


$.ajax({
    url: hemi,
    dataType: 'json',
    type: 'get',
    cache: false,
    success: function (data) {
      $(data.bugs).each(function (index, bug) {
        if (bug.time.indexOf(hour) > -1 && bug.month.indexOf(month) > -1) {
  
          var tableRow =
            '<tr><td>' +
            bug.name +
            '</td><td> <img src=' +
            bug.image +
            ' class="img-fluid" alt="responsive image"></td><td>' +
            bug.price +
            '</td><td>' +
            bug.location +
            '</td></tr>';
          $(tableRow).appendTo('#timeloadbug tbody');
          
        }
  
      }); 
    },
  });


  $("#timeloadfish tbody").empty();
   
  $.ajax({
    url: hemi,
    dataType: 'json',
    type: 'get',
    cache: false,
    success: function (data) {
      $(data.fish).each(function (index, fish) {
        if (fish.time.indexOf(hour) > -1 && fish.month.indexOf(month) > -1) {
  
          var tableRow =
            '<tr><td>' +
            fish.name +
            '</td><td> <img src=' +
            fish.image +
            ' class="img-fluid" alt="responsive image"></td><td>' +
            fish.price +
            '</td><td>' +
            fish.location +
            '</td><td>' +
            fish.shadowsize +
            '</td></tr>';
          $(tableRow).appendTo('#timeloadfish tbody');
          
        }
  
      }); 
    },
  });


});















  
    
  




}); //document ready end tag


 

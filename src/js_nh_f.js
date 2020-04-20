$.ajax({
  url: 'src/critters_nh.json',
  dataType: 'json',
  type: 'get',
  cache: false,
  success: function (data) {
    var d = new Date();
    // console.log(localdate); *debugging
    var h = JSON.stringify(d.getHours());
    // console.log(h); *debugging
    switch (h) {
      case '1':
        h = '01';
        break;
      case '2':
        h = '02';
        break;
      case '3':
        h = '03';
        break;
      case '4':
        h = '04';
        break;
      case '5':
        h = '05';
        break;
      case '6':
        h = '06';
        break;
      case '7':
        h = '07';
        break;
      case '8':
        h = '08';
        break;
      case '9':
        h = '09';
        break;
    }
    //console.log(h); * debugging
    var m = d.getMonth() + 1;
    //console.log(m); *debugging
    var sMonth;
    switch (m) {
      case 1:
        sMonth = 'Jan';
        break;
      case 2:
        sMonth = 'Feb';
        break;
      case 3:
        sMonth = 'Mar';
        break;
      case 4:
        sMonth = 'Apr';
        break;
      case 5:
        sMonth = 'May';
        break;
      case 6:
        sMonth = 'Jun';
        break;
      case 7:
        sMonth = 'July';
        break;
      case 8:
        sMonth = 'Aug';
        break;
      case 9:
        sMonth = 'Sept';
        break;
      case 10:
        sMonth = 'Oct';
        break;
      case 11:
        sMonth = 'Nov';
        break;
      case 12:
        sMonth = 'Dec';
        break;
    }
    //console.log(sMonth); *debugging
    $(data.fish).each(function (index, value) {
      if (value.time.indexOf(h) > -1 && value.month.indexOf(sMonth) > -1) {
        //console.log(value.name); *debugging
        var iPrice = Number(value.price);
        var tblRow =
          '<tr>' +
          '<td scope="row">' +
          value.name +
          '</td>' +
          '<td> <img src=' +
          value.image +
          ' class="img-fluid" alt="responsive image"></td>' +
          '<td>' +
          iPrice +
          '</td>' +
          '<td>' +
          value.location +
          '</td>' +
          '<td>' +
          value.shadowsize +
          '</td></tr>';
        $(tblRow).appendTo('#userdata tbody');
      }
    });
  },
  beforeSend: function(){
    $('#loader').show()
},
complete: function(){
  $('#loader').hide();
}
});

function sortTable(n) {
  var table,
    rows,
    switching,
    i,
    x,
    y,
    shouldSwitch,
    dir,
    switchcount = 0;
  table = document.getElementById('userdata');
  switching = true;
  // Set the sorting direction to ascending:
  dir = 'asc';
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /* Loop through all table rows (except the
    first, which contains table headers): */
    for (i = 1; i < rows.length - 1; i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
      one from current row and one from the next: */
      x = rows[i].getElementsByTagName('TD')[n];
      y = rows[i + 1].getElementsByTagName('TD')[n];
      /* Check if the two rows should switch place,
      based on the direction, asc or desc: */
      if (dir == 'asc') {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } else if (dir == 'desc') {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      // Each time a switch is done, increase this count by 1:
      switchcount++;
    } else {
      /* If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again. */
      if (switchcount == 0 && dir == 'asc') {
        dir = 'desc';
        switching = true;
      }
    }
  }
}

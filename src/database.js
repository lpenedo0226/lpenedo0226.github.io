$.ajax({
    url: 'src/critters_nh.json',
    dataType: 'json',
    type: 'get',
    cache: false,
    success: function (data) {
      $(data.bugs).each(function (index, bug) {
        
  
          var tableRow =
            '<tr><td>' +
            bug.name +
            '</td><td> <img src=' +
            bug.image +
            ' class="img-fluid" alt="responsive image"></td><td>' +
            bug.price +
            '</td><td>' +
            bug.location +
            '</td><td>' +
              bug.rarity +
              '</td><td>'+
                bug.month +
            '</td></tr>';
          $(tableRow).appendTo('#userdatafullbugs_nh tbody');
          
        
  
      }); 
    },
  });
  
  $.ajax({
    url: 'src/critters_nh.json',
    dataType: 'json',
    type: 'get',
    cache: false,
    success: function (data) {
      $(data.fish).each(function (index, fish) {
        
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
            fish.rarity +
            '</td><td>'+
              fish.month + 
              '</td><td>'+
              
            fish.shadowsize +
            '</td></tr>';
          $(tableRow).appendTo('#userdatafullfish_nh tbody');
          
        
  
      }); 
    },
  });
  
  
  $.ajax({
    url: 'src/critters_sh.json',
    dataType: 'json',
    type: 'get',
    cache: false,
    success: function (data) {
      $(data.bugs).each(function (index, bug) {
        
  
          var tableRow =
            '<tr><td>' +
            bug.name +
            '</td><td> <img src=' +
            bug.image +
            ' class="img-fluid" alt="responsive image"></td><td>' +
            bug.price +
            '</td><td>' +
            bug.location +
            '</td><td>' +
              bug.rarity +
              '</td><td>'+
                bug.month +
            '</td></tr>';
          $(tableRow).appendTo('#userdatafullbugs_sh tbody');
          
        
  
      }); 
    },
  });
  
  $.ajax({
    url: 'src/critters_sh.json',
    dataType: 'json',
    type: 'get',
    cache: false,
    success: function (data) {
      $(data.fish).each(function (index, fish) {
        
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
            fish.rarity +
            '</td><td>'+
              fish.month + 
              '</td><td>'+
              
            fish.shadowsize +
            '</td></tr>';
          $(tableRow).appendTo('#userdatafullfish_sh tbody');
          
        
  
      }); 
    },
  });

  //Sort Table Head Click Function

$('th').click(function () {
    var table = $(this).parents('table').eq(0);
    var rows = table
      .find('tr:gt(0)')
      .toArray()
      .sort(comparer($(this).index()));
    this.asc = !this.asc;
    if (!this.asc) {
      rows = rows.reverse();
    }
    for (var i = 0; i < rows.length; i++) {
      table.append(rows[i]);
    }
  });
  function comparer(index) {
    return function (a, b) {
      var valA = getCellValue(a, index),
        valB = getCellValue(b, index);
      return $.isNumeric(valA) && $.isNumeric(valB)
        ? valA - valB
        : valA.toString().localeCompare(valB);
    };
  }
  function getCellValue(row, index) {
    return $(row).children('td').eq(index).text();
  }
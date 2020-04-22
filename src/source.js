// Convert Standard Hours to Military
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
  case '0':
    h='24';
    break;
}

//Convert Month to String Reference
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

//AJAX JSON call fish northern

$.ajax({
  url: 'src/critters_nh.json',
  dataType: 'json',
  type: 'get',
  cache: false,
  success: function (data) {
    $(data.fish).each(function (index, fish) {
      if (fish.time.indexOf(h) > -1 && fish.month.indexOf(sMonth) > -1) {

        var tableRow =
          '<tr><td class="pt-5">' +
          fish.name +
          '</td><td> <img src=' +
          fish.image +
          ' class="img-fluid" alt="responsive image"></td><td class="pt-5">' +
          fish.price +
          '</td><td class="pt-5">' +
          fish.location +
          '</td><td class="pt-5">' +
          fish.shadowsize +
          '</td></tr>';
        $(tableRow).appendTo('#userdatafish_nh tbody');
        
      }

    }); 
  },
});

//AJAX JSON call fish southern

$.ajax({
  url: 'src/critters_sh.json',
  dataType: 'json',
  type: 'get',
  cache: false,
  success: function (data) {
    $(data.fish).each(function (index, fish) {
      if (fish.time.indexOf(h) > -1 && fish.month.indexOf(sMonth) > -1) {

        var tableRow =
          '<tr><td class="pt-5">' +
          fish.name +
          '</td><td> <img src=' +
          fish.image +
          ' class="img-fluid" alt="responsive image"></td><td class="pt-5">' +
          fish.price +
          '</td><td class="pt-5">' +
          fish.location +
          '</td><td class="pt-5">' +
          fish.shadowsize +
          '</td></tr class="pt-5">';
        $(tableRow).appendTo('#userdatafish_sh tbody');
        
      }

    }); 
  },
});

//AJAX JSON call bugs northern

$.ajax({
  url: 'src/critters_nh.json',
  dataType: 'json',
  type: 'get',
  cache: false,
  success: function (data) {
    $(data.bugs).each(function (index, bug) {
      if (bug.time.indexOf(h) > -1 && bug.month.indexOf(sMonth) > -1) {

        var tableRow =
          '<tr><td class="pt-5">' +
          bug.name +
          '</td><td> <img src=' +
          bug.image +
          ' class="img-fluid" alt="responsive image"></td><td class="pt-5">' +
          bug.price +
          '</td><td class="pt-5">' +
          bug.location +
          '</td></tr>';
        $(tableRow).appendTo('#userdatabugs_nh tbody');
        
      }

    }); 
  },
});


//AJAX JSON call bugs southern

$.ajax({
  url: 'src/critters_sh.json',
  dataType: 'json',
  type: 'get',
  cache: false,
  success: function (data) {
    $(data.bugs).each(function (index, bug) {
      if (bug.time.indexOf(h) > -1 && bug.month.indexOf(sMonth) > -1) {

        var tableRow =
          '<tr><td class="pt-5">' +
          bug.name +
          '</td><td> <img src=' +
          bug.image +
          ' class="img-fluid" alt="responsive image"></td><td class="pt-5">' +
          bug.price +
          '</td><td class="pt-5">' +
          bug.location +
          '</td></tr>';
        $(tableRow).appendTo('#userdatabugs_sh tbody');
        
      }

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

// Military to Standard Time and Output to Page
function convert(input) {
  return moment(input, 'HH:mm:ss').format('h:mm A');
}

var d = new Date();
var mTime = d.getHours() + ':' + d.getMinutes();
var cTime = convert(mTime);
$('#currenttime').text(cTime);
var cDate = d.getMonth() + 1 + '/' + d.getDate() + '/' + d.getFullYear();
$('#currentdate').text(cDate);


//debugging

console.log(sMonth);
console.log(h);




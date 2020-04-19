$.ajax({
    url: 'critters.json',
    dataType: 'json',
    type: 'get',
    cache: false,
    success: function (data) {
      var d = new Date();
      var localdate = ((d.getMonth()+1) + '/' + d.getDate() + '/' + d.getFullYear() + ' ' + d.getHours() + ':' + d.getMinutes());
      var c = JSON.stringify(localdate);
      console.log(localdate);
      $('#currentdate').text(c);
      var h = JSON.stringify(d.getHours());
      console.log(h);
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
      console.log(h);
      var m = d.getMonth() + 1;
      console.log(m);

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
          sMonth = 'Sep';
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
      console.log(sMonth);

      $(data.fish).each(function (index, value) {
        if (
          value.time.indexOf(h) > -1 &&
          value.month.indexOf(sMonth) > -1
        ) {
          console.log(value.name);
          var tblRow = '<tr>' + '<td>' + value.name + '</td>' + 
            '<td> <img src=' + value.image + '></td>' +
            '<td>' + value.price + '</td>' +
            '<td>' + value.location +
            '</td>' + '<td>' +
            value.shadowsize + '</td>' +
            '<td>' + value.rarity +
            '</td></tr>';
          $(tblRow).appendTo('#userdata tbody');
        }
      });
    },
  });

 
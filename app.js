(function(_) {
      var cities = [
            {name: 'Nova York', passagem: '1550.00', hotel: '1800.00'},
            {name: 'Paris',     passagem: '1720.00', hotel: '2100.00'},
            {name: 'Londres',   passagem: '1630.00', hotel: '2500.00'},
            {name: 'Amsterdam', passagem: '1430.00', hotel: '1750.00'},
            {name: 'Santiago',  passagem: '600.00',  hotel: '1150.00'},
            {name: 'Buenos Aires', passagem: '520.00', hotel: '950.00'},
            {name: 'Barcelona', passagem: '1390.00', hotel: '1670.00'},
            {name: 'Lisboa',    passagem: '1280.00', hotel: '1450.00'},
            {name: 'Vancouver', passagem: '1590.00', hotel: '1320.00'},
            {name: 'Roma',      passagem: '1400.00', hotel: '1950.00'},
      ];

      var template = _.template('<% _.forEach(cities, function(city) { %>'+
              '<li class="col-xs-4">'+ 
                  '<div class="list-group-item">'+
                        '<h4 class="list-group-item-heading"><%- city.name %></h4>'+
                        '<p class="list-group-item-text">Passagem: R$ <%- city.passagem %></p>'+
                        '<p class="list-group-item-text">Hotel: R$ <%- city.hotel %></p>'+
                        '<p class="list-group-item-text">Total: R$ </p>'+
                  '</div>'+
              '</li>'+
          '<% }); %>'),
          compiled = template({cities: cities});

      var travelBoard = document.getElementById('travel-board');
      travelBoard.innerHTML = compiled;
})(window._)

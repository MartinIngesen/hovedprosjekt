// A=6 B=5 C=4 D=3 E=2 F=1

// Martin data: [6, 6, 5, 5, 6, 6, 5, 6, 6, 5, 4, 6, 6, 6, 6, 1],
// Kirstine data: [5, 5, 6, 5, 5, 6, 6, 6, 6, 6, 6, 5, 4, 4, 6, 5],
// Idar data: [5, 6, 4, 5, 6, 6, 4, 5, 5, 5, 5, 5, 4, 5, 5],
// Jonas data: [5, 6, 5, 5, 4, 6, 6, 5, 6, 6, 4, 6, 5, 5, 5],


var labels = ["Databases 1", "Programming 1", "Creative Web Project", "Digital Technology", "Programming 2", "Unity Development", "Iterative Web Project", "Information Security", "Advanced Java Programming", "Software Architecture", "Algorithms and Datastructures", "Advanced Java Programming 2", "Ruby on Rails", "Mobile Development", "Project Software Engineering"]

var barChartData = {
    labels: labels,
    datasets: [{
        label: 'Karakter',
        backgroundColor: "rgba(151,187,205,0.5)",
        data: [6, 6, 5, 5, 6, 6, 5, 6, 6, 5, 4, 6, 6, 6, 6, 1],
        borderColor: 'white',
        borderWidth: 0
    }, {
        type: 'line',
        label: 'Snitt',
        backgroundColor: "rgba(220,220,220,0.3)",
        data: [4, 4, 5, 3, 4, 4, 5, 4, 4, 4, 4, 4, 5, 4, 5],
      }, ]

};

$('#portfolioModal6').on('shown.bs.modal', function (event) {
  alert(1);
  var button = $(event.relatedTarget);
  var modal = $(this);
  var canvas = modal.find('#martin-karakterer');

  // Chart initialisieren
  var ctx = canvas[0].getContext("2d");
  console.log(ctx)
  //var ctx = $('#martin-karakterer').get(0).getContext('2d');
  var thing = new Chart(ctx, {
      type: 'bar',
      data: barChartData,
      options: {
          responsive: true,
      }
  });

});
$('#portfolioModal6').modal();

// A=6 B=5 C=4 D=3 E=2 F=1

// Martin data: [6, 6, 5, 5, 6, 6, 5, 6, 6, 5, 4, 6, 6, 6, 6, 1],
// Kirstine data: [5, 5, 6, 5, 5, 6, 6, 6, 6, 6, 5, 4, 4, 6, 5, 1],
// Idar data:   [5, 6, 4, 5, 6, 6, 4, 5, 5, 5, 5, 5, 4, 5, 5, 1],
// Jonas data:  [5, 6, 5, 5, 4, 6, 6, 5, 6, 6, 4, 6, 5, 5, 5, 1],
// Fredrick data:[5, 5, 5, 6, 6, 5, 5, 5, 6, 6, 5, 6, 6, 6, 5, 1],


var labels = ["Databases 1", "Programming 1", "Creative Web Project", "Digital Technology", "Programming 2", "Unity Development", "Iterative Web Project", "Information Security", "Advanced Java Programming", "Software Architecture", "Algorithms and Datastructures", "Advanced Java Programming 2", "Ruby on Rails", "Mobile Development", "Project Software Engineering"]
var jonaslabels = ["Databases 1", "Programming 1", "Creative Web Project", "Digital Technology", "Programming 2", "Digital Culture", "Iterative Web Project", "Information Security", "Advanced Java Programming", "Software Architecture", "Algorithms and Datastructures", "Advanced Java Programming 2", "Ruby on Rails", "Mobile Development", "Project Software Engineering"]
var kirstinelabels = ["Databases 1", "Programming 1", "Creative Web Project", "Digital Technology", "Programming 2", "Animation", "Iterative Web Project", "Information Security", "Advanced Java Programming", "Software Architecture", "Algorithms and Datastructures", "Advanced Java Programming 2", "Ruby on Rails", "Mobile Development", "Project Software Engineering"]

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

// Fredrick
$('#portfolioModal1').on('shown.bs.modal',function(event){
  // Chart initialisieren
  var ctx = $('canvas#fredrick-karakterer').get(0).getContext("2d");
  //var ctx = $('#martin-karakterer').get(0).getContext('2d');
  var thing = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: labels,
          datasets: [{
              label: 'Karakter',
              backgroundColor: "rgba(151,187,205,0.5)",
              data: [5, 5, 5, 6, 6, 5, 5, 5, 6, 6, 5, 6, 6, 6, 5, 1],
              borderColor: 'white',
              borderWidth: 0
          }, {
              type: 'line',
              label: 'Snitt',
              backgroundColor: "rgba(220,220,220,0.3)",
              data: [4, 4, 5, 3, 4, 4, 5, 4, 4, 4, 4, 4, 5, 4, 5],
            }, ]

      },
      options: {
          responsive: true,
      }
  });
});

// Idar
$('#portfolioModal2').on('shown.bs.modal',function(event){
  // Chart initialisieren
  var ctx = $('canvas#idar-karakterer').get(0).getContext("2d");
  //var ctx = $('#martin-karakterer').get(0).getContext('2d');
  var thing = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: labels,
          datasets: [{
              label: 'Karakter',
              backgroundColor: "rgba(151,187,205,0.5)",
              data: [5, 6, 4, 5, 6, 6, 4, 5, 5, 5, 5, 5, 4, 5, 5, 1],
              borderColor: 'white',
              borderWidth: 0
          }, {
              type: 'line',
              label: 'Snitt',
              backgroundColor: "rgba(220,220,220,0.3)",
              data: [4, 4, 5, 3, 4, 4, 5, 4, 4, 4, 4, 4, 5, 4, 5],
            }, ]

      },
      options: {
          responsive: true,
      }
  });
});

// Jonas
$('#portfolioModal3').on('shown.bs.modal',function(event){
  // Chart initialisieren
  var ctx = $('canvas#jonas-karakterer').get(0).getContext("2d");
  //var ctx = $('#martin-karakterer').get(0).getContext('2d');
  var thing = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: jonaslabels,
          datasets: [{
              label: 'Karakter',
              backgroundColor: "rgba(151,187,205,0.5)",
              data: [5, 6, 5, 5, 4, 6, 6, 5, 6, 6, 4, 6, 5, 5, 5, 1],
              borderColor: 'white',
              borderWidth: 0
          }, {
              type: 'line',
              label: 'Snitt',
              backgroundColor: "rgba(220,220,220,0.3)",
              data: [4, 4, 5, 3, 4, 4, 5, 4, 4, 4, 4, 4, 5, 4, 5],
            }, ]

      },
      options: {
          responsive: true,
      }
  });
});

// Kirstine
$('#portfolioModal4').on('shown.bs.modal',function(event){
  // Chart initialisieren
  var ctx = $('canvas#kirstine-karakterer').get(0).getContext("2d");
  //var ctx = $('#martin-karakterer').get(0).getContext('2d');
  var thing = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: kirstinelabels,
          datasets: [{
              label: 'Karakter',
              backgroundColor: "rgba(151,187,205,0.5)",
              data: [5, 5, 6, 5, 6, 5, 6, 6, 6, 6, 5, 4, 4, 6, 5, 1],
              borderColor: 'white',
              borderWidth: 0
          }, {
              type: 'line',
              label: 'Snitt',
              backgroundColor: "rgba(220,220,220,0.3)",
              data: [4, 4, 5, 3, 4, 4, 5, 4, 4, 4, 4, 4, 5, 4, 5],
            }, ]

      },
      options: {
          responsive: true,
      }
  });
});

// Martin
$('#portfolioModal5').on('shown.bs.modal',function(event){
  // Chart initialisieren
  var ctx = $('canvas#martin-karakterer').get(0).getContext("2d");
  //var ctx = $('#martin-karakterer').get(0).getContext('2d');
  var thing = new Chart(ctx, {
      type: 'bar',
      data: {
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

      },
      options: {
          responsive: true,
      }
  });
});

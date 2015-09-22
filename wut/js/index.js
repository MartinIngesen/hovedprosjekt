var data = {
    labels: ["Arkitektur", "Design", "Sikkerhet", "Persistent lagring", "Nettverk", "", ""],
    datasets: [

        {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [78, 77, 67, 85, 96, 88, 100]
        }
    ]
};

var ctx = document.getElementById("radar-canvas").getContext("2d");
var myRadarChart = Chart.Radar(ctx, {
  data: data,
  options: {}
});

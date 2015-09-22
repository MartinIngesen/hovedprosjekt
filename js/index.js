var data = {
    labels: ["Backend", "Frontend", "Arkitektur", "Design", "Sikkerhet", "Databaser", "Testing", "Prosjektstyring", "Kommunikasjon"],
    datasets: [

        {
            label: "Pacman",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [85, 67, 83, 60, 83, 95, 90, 90, 94]
        }
    ]
};

var ctx = document.getElementById("radar-canvas").getContext("2d");
var myRadarChart = new Chart(ctx, {data: data, type: 'radar', options: {}});

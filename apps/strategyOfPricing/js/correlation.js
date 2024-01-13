
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.load('current', {'packages':['table']});

google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(drawTable);

function drawChart() {
    var dataIbisHotels = google.visualization.arrayToDataTable([
        ['GDP', 'Room rate'],
        [3408, 48.36],
        [4347, 31.62],
        [4347, 31.62],
        [4347, 33.48],
        [4794, 27.9],
        [4794, 36.27],
        [4794, 36.27],
        [4794, 38.13],
        [5208, 56.73],
        [5767, 75.33],
        [6698, 72.54],
        [6966, 74.4],
        [7544, 21.39],
        [7544, 24.18],
        [7544, 27.9],
        [7544, 30.69],
        [7544, 39.99],
        [9221, 33.48],
        [9221, 46.5],
        [9358, 50.22],
        [9593, 47.43],
        [11273, 46.5],
        [11273, 51.15],
        [11273, 51.15],
        [11273, 55.8],
        [11273, 65.1],
        [11273, 74.4],
        [11273, 83.7],
        [11895, 44.64],
        [11895, 50.22],
        [13577, 59.52],
        [13577, 85.56],
        [14339, 68.82],
        [14406, 20.46],
        [14406, 32.55],
        [14406, 43.71],
        [15040, 46.5],
        [15040, 46.5],
        [15040, 49.29],
        [15612, 60.45],
        [15612, 79.05],
        [15901, 45.57],
        [15901, 68.82],
        [18841, 44.64],
        [18981, 41.85],
        [18981, 41.85],
        [18981, 46.5],
        [22195, 55.8],
        [23262, 44.64],
        [24950, 53.94],
        [24950, 65.1],
        [25492, 90.21],
        [27130, 65.1],
        [29480, 70.68],
        [29480, 79.05],
        [29830, 55.8],
        [29830, 55.8],
        [29830, 79.05],
        [29997, 55.8],
        [29997, 96.72],
        [33910, 74.4],
        [33910, 79.98],
        [33910, 90.21],
        [33910, 102.3],
        [35059, 79.05],
        [35059, 106.95],
        [36081, 66.96],
        [36081, 71.61],
        [36081, 74.4],
        [36081, 79.05],
        [36081, 79.05],
        [36274, 74.4],
        [38204, 80.91],
        [38204, 90.21],
        [38775, 80.91],
        [39492, 46.5],
        [39761, 62.31],
        [39761, 74.4],
        [39764, 80.91],
        [39764, 85.56],
        [39764, 111.6],
        [39764, 117.18],
        [39764, 122.76],
        [40973, 74.4],
        [40973, 79.05],
        [40973, 108.81],
        [41950, 94.86],
        [41950, 102.3],
        [41950, 119.97],
        [45944, 107.88],
        [47439, 62.31],
        [56694, 104.16]
    ]);

    var dataFourSeasonsHotels = google.visualization.arrayToDataTable([
        ['GDP', 'Room rate'],
        [3408, 199.679487179487],
        [4347, 240],
        [4347, 460],
        [4794, 314.615384615385],
        [5126, 253.440170940171],
        [5767, 324.604700854701],
        [6417, 240],
        [6417, 320],
        [6417, 430],
        [7544, 251.282051282051],
        [7544, 392.628205128205],
        [9221, 177.291666666667],
        [9221, 638.888888888889],
        [9221, 728.333333333333],
        [13577, 323.354700854701],
        [14194, 568.055555555555],
        [14339, 295],
        [14406, 440],
        [14744, 643.910256410256],
        [15239, 445],
        [15901, 520],
        [18841, 227.222222222222],
        [22607, 545.352564102564],
        [23262, 353.942307692308],
        [24950, 332.094017094017],
        [29480, 257.809829059829],
        [29480, 454.444444444444],
        [33885, 551.282051282051],
        [33910, 332.094017094017],
        [33910, 690.405982905983],
        [35059, 427.483974358974],
        [39171, 207.190170940171],
        [39171, 428.83547008547],
        [39171, 448.108974358974],
        [39492, 196.634615384615],
        [39764, 234.246794871795],
        [41950, 801.282051282051],
        [45944, 641.025641025641],
        [46860, 400],
        [56694, 260.448717948718],
        [88222, 823.717948717949]
    ]);



    var options = {
        hAxis: { title: 'GDP (PPP) per capita'},
        vAxis: { title: 'Room rate (1 night for 2 people)'},
        pointSize: 10,
        series: {
            0: { pointShape: 'star' }
        },
        chartArea: { width: '50%' },
        trendlines: {
            0: {
                type: 'linear',
                showR2: true,
                visibleInLegend: true
            }
        }
    };



    options.colors = ['#c62828'];
    var chartLinearIbisHotels = new google.visualization.ScatterChart(document.getElementById('chartLinearIbisHotels'));
    chartLinearIbisHotels.draw(dataIbisHotels, options);

    options.colors = ['#1565C0'];
    var chartLinearFourSeasonsHotels = new google.visualization.ScatterChart(document.getElementById('chartLinearFourSeasonsHotels'));
    chartLinearFourSeasonsHotels.draw(dataFourSeasonsHotels, options);

}



function drawTable() {
    var dataIbisHotels = new google.visualization.DataTable();
    dataIbisHotels.addColumn('string', 'City');
    dataIbisHotels.addColumn('string', 'Continent');
    dataIbisHotels.addColumn('number', 'Room rate (USD)');
    dataIbisHotels.addColumn('number', 'GDP (PPP) per capita');

    //data.addColumn('boolean', 'Full Time Employee');
    dataIbisHotels.addRows([
        ['New Delhi', 'Asia / Pacific', 48.36, 3408],
        ['Surabaya', 'Asia / Pacific', 31.62, 4347],
        ['Pekanbaru', 'Asia / Pacific', 31.62, 4347],
        ['Jakarta', 'Asia / Pacific', 33.48, 4347],
        ['Ouarzazate', 'Middle East / Africa', 27.9, 4794],
        ['Fes', 'Middle East / Africa', 36.27, 4794],
        ['Meknes', 'Middle East / Africa', 36.27, 4794],
        ['Moussafir Oujda', 'Middle East / Africa', 38.13, 4794],
        ['Asunción', 'The Americas', 56.73, 5208],
        ['Amman', 'Middle East / Africa', 75.33, 5767],
        ['Kiev', 'Europe', 72.54, 6698],
        ['Tlemcen', 'Middle East / Africa', 74.4, 6966],
        ['Hangzhou', 'Asia / Pacific', 21.39, 7544],
        ['Mingshan', 'Asia / Pacific', 24.18, 7544],
        ['Shanghai', 'Asia / Pacific', 27.9, 7544],
        ['Chengdu', 'Asia / Pacific', 30.69, 7544],
        ['Beijing', 'Asia / Pacific', 39.99, 7544],
        ['Bangkok', 'Asia / Pacific', 33.48, 9221],
        ['Phuket', 'Asia / Pacific', 46.5, 9221],
        ['Lima', 'The Americas', 50.22, 9358],
        ['Bogotá', 'The Americas', 47.43, 9593],
        ['Sao Jose', 'The Americas', 46.5, 11273],
        ['Criciuma', 'The Americas', 51.15, 11273],
        ['Macapa', 'The Americas', 51.15, 11273],
        ['Caxias do Sul', 'The Americas', 55.8, 11273],
        ['Amazonas', 'The Americas', 65.1, 11273],
        ['Salvador ', 'The Americas', 74.4, 11273],
        ['Sao Paulo', 'The Americas', 83.7, 11273],
        ['Sibiu', 'Europe', 44.64, 11895],
        ['Bucarest', 'Europe', 50.22, 11895],
        ['Bursa', 'Europe', 59.52, 13577],
        ['Istanbul', 'Europe', 85.56, 13577],
        ['Montevideo', 'The Americas', 68.82, 14339],
        ['Mexico City', 'The Americas', 20.46, 14406],
        ['Merida', 'The Americas', 32.55, 14406],
        ['Cancun', 'The Americas', 43.71, 14406],
        ['Santiago', 'The Americas', 46.5, 15040],
        ['Concepcion', 'The Americas', 46.5, 15040],
        ['antofagasta', 'The Americas', 49.29, 15040],
        ['Kazan', 'Europe', 60.45, 15612],
        ['Omsk', 'Europe', 79.05, 15612],
        ['Mendoza', 'The Americas', 45.57, 15901],
        ['Buenos Aires', 'The Americas', 68.82, 15901],
        ['Budapest', 'Europe', 44.64, 18841],
        ['Warsaw', 'Europe', 41.85, 18981],
        ['Poznan', 'Europe', 41.85, 18981],
        ['Krakow', 'Europe', 46.5, 18981],
        ['Bratislava', 'Europe', 55.8, 22195],
        ['Lisboa', 'Europe', 44.64, 23262],
        ['Plzen', 'Europe', 53.94, 24950],
        ['Praha', 'Europe', 65.1, 24950],
        ['Muscat', 'Middle East / Africa', 90.21, 25492],
        ['Wellington', 'Asia / Pacific', 65.1, 27130],
        ['Roma', 'Europe', 70.68, 29480],
        ['Milano', 'Europe', 79.05, 29480],
        ['Madrid', 'Europe', 55.8, 29830],
        ['Sevilla', 'Europe', 55.8, 29830],
        ['Barcelona', 'Europe', 79.05, 29830],
        ['Busan', 'Asia / Pacific', 55.8, 29997],
        ['Seoul', 'Asia / Pacific', 96.72, 29997],
        ['Marseille', 'Europe', 74.4, 33910],
        ['Nice', 'Europe', 79.98, 33910],
        ['Moutiers', 'Europe', 90.21, 33910],
        ['Paris', 'Europe', 102.3, 33910],
        ['Edinburgh', 'Europe', 79.05, 35059],
        ['London', 'Europe', 106.95, 35059],
        ['Berlin', 'Europe', 66.96, 36081],
        ['Dortmund', 'Europe', 71.61, 36081],
        ['Stuttgart', 'Europe', 74.4, 36081],
        ['Munich', 'Europe', 79.05, 36081],
        ['Regensburg', 'Europe', 79.05, 36081],
        ['Liège', 'Europe', 74.4, 36274],
        ['Stockholm', 'Europe', 80.91, 38204],
        ['Göteborg', 'Europe', 90.21, 38204],
        ['Kuwait City', 'Middle East / Africa', 80.91, 38775],
        ['Dublin', 'Europe', 46.5, 39492],
        ['Graz', 'Europe', 62.31, 39761],
        ['Vienna', 'Europe', 74.4, 39761],
        ['Townsville', 'Asia / Pacific', 80.91, 39764],
        ['Melbourne', 'Asia / Pacific', 85.56, 39764],
        ['Brisbane', 'Asia / Pacific', 111.6, 39764],
        ['Perth', 'Asia / Pacific', 117.18, 39764],
        ['Sydney', 'Asia / Pacific', 122.76, 39764],
        ['Rotterdam', 'Europe', 74.4, 40973],
        ['Utrecht', 'Europe', 79.05, 40973],
        ['Amsterdam', 'Europe', 108.81, 40973],
        ['Sion', 'Europe', 94.86, 41950],
        ['Lausanne', 'Europe', 102.3, 41950],
        ['Geneva', 'Europe', 119.97, 41950],
        ['Hong Kong', 'Asia / Pacific', 107.88, 45944],
        ['Dubai', 'Middle East / Africa', 62.31, 47439],
        ['Singapore', 'Asia / Pacific', 104.16, 56694]
        
    ]);


    var dataFourSeasonsHotels = new google.visualization.DataTable();
    dataFourSeasonsHotels.addColumn('string', 'City');
    dataFourSeasonsHotels.addColumn('string', 'Continent');
    dataFourSeasonsHotels.addColumn('number', 'Room rate (USD)');
    dataFourSeasonsHotels.addColumn('number', 'GDP (PPP) per capita');

    //data.addColumn('boolean', 'Full Time Employee');
    dataFourSeasonsHotels.addRows([
        ['Mumbai', 'Asia / Pacific', 199.679487179487, 3408],
        ['Jakarta', 'Asia / Pacific', 240, 4347],
        ['Bali', 'Asia / Pacific', 460, 4347],
        ['Marrakech', 'Middle East / Africa', 314.615384615385, 4794],
        ['Damascus', 'Middle East / Africa', 253.440170940171, 5126],
        ['Amman', 'Middle East / Africa', 324.604700854701, 5767],
        ['Cairo', 'Middle East / Africa', 240, 6417],
        ['Sharm El Sheikh', 'Middle East / Africa', 320, 6417],
        ['Alexandria', 'Middle East / Africa', 430, 6417],
        ['Shanghai', 'Asia / Pacific', 251.282051282051, 7544],
        ['Hangzhou', 'Asia / Pacific', 392.628205128205, 7544],
        ['Bangkok', 'Asia / Pacific', 177.291666666667, 9221],
        ['Chiang Mai', 'Asia / Pacific', 638.888888888889, 9221],
        ['Koh Samui', 'Asia / Pacific', 728.333333333333, 9221],
        ['Istanbul', 'Europe', 323.354700854701, 13577],
        ['Mauritius', 'Middle East / Africa', 568.055555555555, 14194],
        ['Carmelo, Uruguay', 'The Americas', 295, 14339],
        ['México, D.F.', 'The Americas', 440, 14406],
        ['Langkawi', 'Asia / Pacific', 643.910256410256, 14744],
        ['Beirut', 'Middle East / Africa', 445, 15239],
        ['Buenos Aires', 'The Americas', 520, 15901],
        ['Budapest', 'Europe', 227.222222222222, 18841],
        ['Riyadh', 'Middle East / Africa', 545.352564102564, 22607],
        ['Lisbon', 'Europe', 353.942307692308, 23262],
        ['Prague', 'Europe', 332.094017094017, 24950],
        ['Florence', 'Europe', 257.809829059829, 29480],
        ['Milan', 'Europe', 454.444444444444, 29480],
        ['Tokyo', 'Asia / Pacific', 551.282051282051, 33885],
        ['Provence', 'Europe', 332.094017094017, 33910],
        ['Paris', 'Europe', 690.405982905983, 33910],
        ['London', 'Europe', 427.483974358974, 35059],
        ['Vancouver', 'The Americas', 207.190170940171, 39171],
        ['Toronto', 'The Americas', 428.83547008547, 39171],
        ['Whistler', 'The Americas', 448.108974358974, 39171],
        ['Dublin', 'Europe', 196.634615384615, 39492],
        ['Sydney', 'Asia / Pacific', 234.246794871795, 39764],
        ['Geneva', 'Europe', 801.282051282051, 41950],
        ['Hong Kong', 'Asia / Pacific', 641.025641025641, 45944],
        ['USA', 'The Americas', 400, 46860],
        ['Singapore', 'Asia / Pacific', 260.448717948718, 56694],
        ['Doha', 'Middle East / Africa', 823.717948717949, 88222]
    ]);





    var tableIbisHotels = new google.visualization.Table(document.getElementById('table_div_ibis_hotels'));
    tableIbisHotels.draw(dataIbisHotels, {showRowNumber: true, width: '100%'});


    var tableFourSeasonsHotels = new google.visualization.Table(document.getElementById('table_div_four_seasons_hotels'));
    tableFourSeasonsHotels.draw(dataFourSeasonsHotels, {showRowNumber: true, width: '100%'});


  }
document.getElementById("get").onclick = function () {
    var lat = $("#lat").val();
    var long = $("#long").val();
    var apikey = "2d4df159bcf73eda0e727c38161ef566";
    var url1 = "http://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + long + "&appid=" + apikey;

    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            console.log(this.response);
            console.log(JSON.parse(this.response));
            populateGridWithJSON(this.response);
        }
    };
    try {
        request.open("GET", url1);
        request.send();
    }
    catch (ex) {
        alert("Exception of type " + ex.name + " occured: " + ex.message + ".");
    }

}

function populateGridWithJSON(response) {
    
    var json = JSON.parse(response);
    var date = new Date(json.list[0].dt * 1000);
    var time = new String(json.list[0].dt_txt);

    //populate left column with dates
    $("#date1").text(date.toString().substring(0, 15));
    $("#date2").text(date.addOneDay());
    $("#date3").text(date.addTwoDays());
    $("#date4").text(date.addThreeDays());
    $("#date5").text(date.addFourDays());

    $("#city").text("Forecast for " + json.city.name);

    //for x-axis on line chart 
    var p = time.toString().substring(11, 13);
    if (p == 00 || p == 03 || p == 06 || p == 09 || p == 12 || p == 15 || p == 18 || p == 21) {

        var xValues = ["0 am", "3 am", "6 am", "9 am", "12 pm", "3 pm", "6 pm", "9 pm"];
        $("#2_firstRow").text("0 am");
        $("#3_firstRow").text("3 am");
        $("#4_firstRow").text("6 am");
        $("#5_firstRow").text("9 am");
        $("#6_firstRow").text("12 pm");
        $("#7_firstRow").text("3 pm");
        $("#8_firstRow").text("6 pm");
        $("#9_firstRow").text("9 pm");
    }
    else if (p == 01 || p == 04 || p == 07 || p == 10 || p == 13 || p == 16 || p == 19 || p == 22) {

        var xValues = ["1 am", "4 am", "7 am", "10 am", "1 pm", "4 pm", "7 pm", "10 pm"];
        $("#2_firstRow").text("1 am");
        $("#3_firstRow").text("4 am");
        $("#4_firstRow").text("7 am");
        $("#5_firstRow").text("10 am");
        $("#6_firstRow").text("1 pm");
        $("#7_firstRow").text("4 pm");
        $("#8_firstRow").text("7 pm");
        $("#9_firstRow").text("10 pm");
    }
     
    var j = 0;
    var k = 1;

    /* to populate grid with weather data. use switch case to find
    starting position in grid then loop through every spot after that */
    switch (time.toString().substring(11, 13)) {
        case "00":
            j = 1;
            for (var k = 0; k < 40; k++) {
                var iconcode = json.list[k].weather[0].icon;
                var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
                $("#" + j).append("<br>" + Math.round(json.list[k].main.temp - 273.15) + '\xB0' + "C" + "<br>" + json.list[k].weather[0].description);
                $('#img' + j).attr('src', iconurl);
                j++;
            }
            break;
        case "03":
            j = 2;
            for (var k = 0; k < 40; k++) {
                var iconcode = json.list[k].weather[0].icon;
                var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
                $("#" + j).append("<br>" + Math.round(json.list[k].main.temp - 273.15) + '\xB0' + "C"  + "<br>" + json.list[k].weather[0].description);
                $('#img' + j).attr('src', iconurl);
                j++;
            }
            break;
        case "06":
            j = 3;
            for (var k = 0; k < 40; k++) {
                var iconcode = json.list[k].weather[0].icon;
                var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
                $("#" + j).append("<br>" + Math.round(json.list[k].main.temp - 273.15) + '\xB0' + "C"  + "<br>" + json.list[k].weather[0].description);
                $('#img' + j).attr('src', iconurl);
                j++;
            }
            break;
        case "09":
            j = 4;
            for (var k = 0; k < 40; k++) {
                var iconcode = json.list[k].weather[0].icon;
                var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
                $("#" + j).append("<br>" + Math.round(json.list[k].main.temp - 273.15) + '\xB0' + "C"  + "<br>" + json.list[k].weather[0].description);
                $('#img' + j).attr('src', iconurl);
                j++;
            }
            break;
        case "12":
            j = 5;
            for (var k = 0; k < 40; k++) {
                var iconcode = json.list[k].weather[0].icon;
                var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
                $("#" + j).append("<br>" + Math.round(json.list[k].main.temp - 273.15) + '\xB0' + "C"  + "<br>" + json.list[k].weather[0].description);
                $('#img' + j).attr('src', iconurl);
                j++;
            }
            break;
        case "15":
            j = 6;
            for (var k = 0; k < 40; k++) {
                var iconcode = json.list[k].weather[0].icon;
                var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
                $("#" + j).append("<br>" + Math.round(json.list[k].main.temp - 273.15) + '\xB0' + "C"  + "<br>" + json.list[k].weather[0].description);
                $('#img' + j).attr('src', iconurl);
                j++;
            }
            break;
        case "18":
            j = 7;
            for (var k = 0; k < 40; k++) {
                var iconcode = json.list[k].weather[0].icon;
                var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
                $("#" + j).append("<br>" + Math.round(json.list[k].main.temp - 273.15) + '\xB0' + "C"  + "<br>" + json.list[k].weather[0].description);
                $('#img' + j).attr('src', iconurl);
                j++;
            }
            break;
        case "21":
            j = 8;
            for (var k = 0; k < 40; k++) {
                var iconcode = json.list[k].weather[0].icon;
                var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
                $("#" + j).append("<br>" + Math.round(json.list[k].main.temp - 273.15) + '\xB0' + "C"  + "<br>" + json.list[k].weather[0].description);
                $('#img' + j).attr('src', iconurl);
                j++;
            }
            break;
        case "01":
            j = 1;
            for (var k = 0; k < 40; k++) {
                var iconcode = json.list[k].weather[0].icon;
                var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
                $("#" + j).append("<br>" + Math.round(json.list[k].main.temp - 273.15) + '\xB0' + "C"  + "<br>" + json.list[k].weather[0].description);
                $('#img' + j).attr('src', iconurl);
                j++;
            }
            break;
        case "04":
            j = 2;
            for (var k = 0; k < 40; k++) {
                var iconcode = json.list[k].weather[0].icon;
                var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
                $("#" + j).append("<br>" + Math.round(json.list[k].main.temp - 273.15) + '\xB0' + "C"  + "<br>" + json.list[k].weather[0].description);
                $('#img' + j).attr('src', iconurl);
                j++;
            }
            break;
        case "07":
            j = 3;
            for (var k = 0; k < 40; k++) {
                var iconcode = json.list[k].weather[0].icon;
                var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
                $("#" + j).append("<br>" + Math.round(json.list[k].main.temp - 273.15) + '\xB0' + "C"  + "<br>" + json.list[k].weather[0].description);
                $('#img' + j).attr('src', iconurl);
                j++;
            }
            break;
        case "10":
            j = 4;
            for (var k = 0; k < 40; k++) {
                var iconcode = json.list[k].weather[0].icon;
                var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
                $("#" + j).append("<br>" + Math.round(json.list[k].main.temp - 273.15) + '\xB0' + "C"  + "<br>" + json.list[k].weather[0].description);
                $('#img' + j).attr('src', iconurl);
                j++;
            }
            break;
        case "13":
            j = 5;
            for (var k = 0; k < 40; k++) {
                var iconcode = json.list[k].weather[0].icon;
                var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
                $("#" + j).append("<br>" + Math.round(json.list[k].main.temp - 273.15) + '\xB0' + "C"  + "<br>" + json.list[k].weather[0].description);
                $('#img' + j).attr('src', iconurl);
                j++;
            }
            break;
        case "16":
            j = 6;
            for (var k = 0; k < 40; k++) {
                var iconcode = json.list[k].weather[0].icon;
                var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
                $("#" + j).append("<br>" + Math.round(json.list[k].main.temp - 273.15) + '\xB0' + "C"  + "<br>" + json.list[k].weather[0].description);
                $('#img' + j).attr('src', iconurl);
                j++;
            }
            break;
        case "19":
            j = 7;
            for (var k = 0; k < 40; k++) {
                var iconcode = json.list[k].weather[0].icon;
                var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
                $("#" + j).append("<br>" + Math.round(json.list[k].main.temp - 273.15) + '\xB0' + "C"  + "<br>" + json.list[k].weather[0].description);
                $('#img' + j).attr('src', iconurl);
                j++;
            }
            break;
        case "22":
            j = 8;
            for (var k = 0; k < 40; k++) {
                var iconcode = json.list[k].weather[0].icon;
                var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
                $("#" + j).append("<br>" + Math.round(json.list[k].main.temp - 273.15) + '\xB0' + "C"  + "<br>" + json.list[k].weather[0].description);
                $('#img' + j).attr('src', iconurl);
                j++;
            }
            break;
    }

    //line chart
    var dataSetDay1 = new Array();
    var dataSetDay2 = new Array();
    var dataSetDay3 = new Array();
    var dataSetDay4 = new Array();
    var dataSetDay5 = new Array();

    /*loop through every spot and if it is in the first row then the 
     * temp is added to the first day data set for the line graph. 
     * this is done for every row. this is done by comparing the 
     * day of the spot and the day on the left in the first column. */
    for (var t = 0; t < 40; t++) {
        var time2 = new String(json.list[t].dt_txt);

        if (time2.substring(8, 10) ==
            $("#date1").text().toString().substring(8, 10)) {
            dataSetDay1.push(Math.round(json.list[t].main.temp - 273.15));
        } 
        else if (time2.substring(8, 10) ==
            $("#date2").text().toString().substring(8, 10)) {

            dataSetDay2.push(Math.round(json.list[t].main.temp - 273.15));
        }
        else if (time2.substring(8, 10) ==
            $("#date3").text().toString().substring(8, 10)) {

            dataSetDay3.push(Math.round(json.list[t].main.temp - 273.15));
        }
        else if (time2.substring(8, 10) ==
            $("#date4").text().toString().substring(8, 10)) {

            dataSetDay4.push(Math.round(json.list[t].main.temp - 273.15));
        }
        else if (time2.substring(8, 10) ==
            $("#date5").text().toString().substring(8, 10)) {

            dataSetDay5.push(Math.round(json.list[t].main.temp - 273.15));
        }

    } 
    
    var myCanvas = new Chart("lineChart", {
        type: "line",
        data: {
            labels: xValues,
            datasets: [{
                data: dataSetDay1,
                borderColor: "red",
                fill: false
            }, {
                data: dataSetDay2,
                borderColor: "blue",
                fill: false
                },
                {
                    data: dataSetDay3,
                    borderColor: "green",
                    fill: false
                },
                {
                    data: dataSetDay4,
                    borderColor: "yellow",
                    fill: false
                },
                {
                    data: dataSetDay5,
                    borderColor: "purple",
                    fill: false
                }]
        },
        options: {
            legend: {display: false}
        }
    });
}

Date.prototype.addOneDay = function (d) {
    return new Date(Date.now() + 1 * 86400000).toString().substring(0, 15);
}
Date.prototype.addTwoDays = function (d) {
    return new Date(Date.now() + 2 * 86400000).toString().substring(0, 15);
}
Date.prototype.addThreeDays = function (d) {
    return new Date(Date.now() + 3 * 86400000).toString().substring(0, 15);
}
Date.prototype.addFourDays = function (d) {
    return new Date(Date.now() + 4 * 86400000).toString().substring(0, 15);
}

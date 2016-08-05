// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
//= require Chart

$(document).ready(function(){



    function updateChart(){
        let sessions = $('#sessions').val()
        let length = $('#length').val()

        $.ajax({
          url: 'http://localhost:4000/predict',
          type: 'get',
          crossDomain: true,
          dataType: 'jsonp',
          data: {SessionLength: sessions, NumSessions: length},
          success: function(data){
            console.log('data')
            console.log(data)
          }
        })
        // .done(function(response) {
        //   console.log(response)
        //   console.log("success");
        // })
        // .fail(function() {
        //   console.log("error");
        // })
        // .always(function() {
        //   console.log("complete");
        // });

       ctx1 = document.getElementById("myChart-1");
       myChart1 = new Chart(ctx1, {
          type: 'bar',
          data: {
              labels: ["Sessions", "Length"],
              datasets: [{
                  label: '# of Sessions',
                  data: [sessions],
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)'
                  ],
                  borderColor: [
                      'rgba(255,99,132,1)',
                      'rgba(54, 162, 235, 1)'
                  ],
                  borderWidth: 1
              },
              {
                  label: '# of Length of time',
                  data: [length],
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)'
                  ],
                  borderColor: [
                      'rgba(255,99,132,1)',
                      'rgba(54, 162, 235, 1)'
                  ],
                  borderWidth: 1
              }]
          },
          options: {
              scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero:true
                      }
                  }]
              }
          }
      });
    }

    $(()=>{
      $('#submit').click(updateChart)
    })

})


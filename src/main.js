import {Doctor} from './doctor.js';
import {websiteVerify} from './logic.js';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';

$(function(){
  main();
});

export function main()
{
  $('#btn-submit').click(function(){
      let practice = $('#input-practice').val();
      let name = $('#input-name').val();
      $('#input-pracice').val("");
      $('#input-name').val("");
      $.ajax({
        url: `https://api.betterdoctor.com/2016-03-01/doctors?location=wa-seattle&skip=0&limit=8&specialty_uid=${practice}&name=${name}&user_key=${process.env.apiKey}`,
        type: `GET`,
        data: {
          format: `json`
        },
        success: function(response){
          let website = websiteVerify(response.data[0].practices[1].website);

          $('#show-name').text(`Name: ${response.data[0].practices[0].name}`);
          $('#show-address').text(`Address: ${response.data[0].practices[0].visit_address.street}`);
          $('#show-phone').text(`Phone: ${response.data[0].practices[0].phones[0].number}`);
          $('#show-website').text(`Website: ${website}`);
          $('#show-accepts').text(`Accepting new patients: ${response.data[0].practices[0].accepts_new_patients}`);
        },
        error: function(){
          $('#errors').text("There was an error with the request.")
        }
      });
    });

}

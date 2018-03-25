import {websiteVerify} from './logic.js';
import {stringify} from './logic.js';
import {phonify} from './logic.js';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';

$(function(){
  main();
});

export function main()
{
  $('#btn-submit').click(function(){
      let query = $('#input-query').val();
      let name = $('#input-name').val();
      $('#input-query').val("");
      $('#input-name').val("");
      $.ajax({
        url: `https://api.betterdoctor.com/2016-03-01/doctors?location=wa-seattle&skip=0&limit=8&query=${query}&name=${name}&user_key=${process.env.apiKey}`,
        type: `GET`,
        data: {
          format: `json`
        },
        success: function(response){

            for(let i = 0; i <= response.data.length; i++)
            {
              $('#details').text("<li><strong>" + response.data[i].practices[0].name + "</strong>" +
                                      "<ul>" +
                                        "<li>Address: " + response.data[i].practices[0].visit_address.street + "</li>" +
                                        "<li>Phone: " +  phonify(response.data[i].practices[0].phones[0].number) + "</li>" +
                                        "<li>Website: " + websiteVerify(response.data[i].practices[0].website) + "</li>" +
                                        "<li>Accepting new patients: " + stringify(response.data[i].practices[0].accepts_new_patients) + "</li>" +
                                      "</ul>" +
                                    "</li>");
            }
        },
        error: function(){
          $('#errors').text("There was an error with the request.");
        }
    });
  });
}

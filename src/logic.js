import {main} from './main.js';

export function formVerify()
{
  if(illness == ''|| name == '')
  {
    alert('Please fill out at least one field');
  }
}

export function websiteVerify(website)
{
  if(website == undefined)
  {
    return "N/A";
  }
  else return website;
}

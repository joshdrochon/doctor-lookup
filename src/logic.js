export function websiteVerify(website)
{
  if(website == undefined)
  {
    return "N/A";
  }
  else return website;
}

export function stringify(bool)
{
  if(bool == true)
  {
    return "Yes";
  }
  else return "No";
}

export function phonify(num)
{
  var num2 = ("" + num).replace(/\D/g, '');
  var m = num2.match(/^(\d{3})(\d{3})(\d{4})$/);
  return (!m) ? null : "(" + m[1] + ") " + m[2] + "-" + m[3];
}

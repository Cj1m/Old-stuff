function sendRequestMail() {
    var name = document.getElementById("name").value;
    var skype = document.getElementById("skype").value;
    var price = document.getElementById("price").value;
    var desc = document.getElementById("description").value;

    var bodyText = "Name: " + name+ "<br> Skype: " +skype+"<br> Price: " +price + "<br>Plugin Description:" +desc;

    $.ajax({
      type: 'POST',
      url: 'https://mandrillapp.com/api/1.0/messages/send.json',
      data: {
        'key': '8oFG6V6YBJAJbWZLL7rHbQ',
        'message': {
          'from_email': 'cj1mckay@gmail.com',
          'to': [
              {
                'email': 'cj1mckay@gmail.com',
                'name': '',
                'type': 'to'
              }
            ],
          'autotext': 'true',
          'subject': 'Plugin Request Form',
          'html': bodyText
        }
      }
     }).done(function(response) {
       alert("Form successfully submitted! Cj1mckay will be in contact with you on skype in the next few hours!");
     });
}


function sendAppMail() {
    var name = document.getElementById("ign").value;
    var skype = document.getElementById("skype").value;
    var exp = document.getElementById("exp").value;

    var bodyText = "IGN: " + name+ "<br> Skype: " +skype+"<br>Experience: " +exp;

    $.ajax({
      type: 'POST',
      url: 'https://mandrillapp.com/api/1.0/messages/send.json',
      data: {
        'key': '8oFG6V6YBJAJbWZLL7rHbQ',
        'message': {
          'from_email': 'cj1mckay@gmail.com',
          'to': [
              {
                'email': 'cj1mckay@gmail.com',
                'name': '',
                'type': 'to'
              }
            ],
          'autotext': 'true',
          'subject': 'Application Form',
          'html': bodyText
        }
      }
     }).done(function(response) {
       alert("Form successfully submitted! Cj1mckay will be in contact with you on skype in the next few hours!");
     });
}

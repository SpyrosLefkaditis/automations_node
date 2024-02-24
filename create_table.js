const jsonData = {
  "dark_table": `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Dark Table Example</title>
<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
<h2>Dark Table Example</h2>
<table class="table table-dark table-striped-columns table-hover">
<thead>
<tr>
<th scope="col">First</th>
<th scope="col">Second</th>
<th scope="col">Third</th>
</tr>
</thead>
<tbody>
<tr>
<td>Content</td>
<td>Content</td>
<td>Content</td>
</tr>
<tr>
<td>Content</td>
<td>Content</td>
<td>Content</td>
</tr>
<tr>
<td>Content</td>
<td>Content</td>
<td>Content</td>
</tr>
</tbody>
</table>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.bundle.min.js"></script>
</body>
</html>`,

  "login_form": '',


  "css": "",
  "script": ""
};
  
function table_dark(jsonData) {
  const html = jsonData.dark_table;
  console.log(html);
 
}

function light_table(jsonData) {
  const html = jsonData.light_table;
  console.log(html);

}
table_dark(jsonData);




// it will print     console.log("Enter the automation to see the documentaion type documentation()") in ducmen fucntion and main it will run as exe an  oyu can copy the output it wil ahve lgoin forms and other 
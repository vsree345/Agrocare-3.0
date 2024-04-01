const apiUrl = "https://api.data.gov.in/resource/9eaaa510-83c9-4071-96d8-f8bbef1a019d?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json";
const dataContainer = document.getElementById('data-container');

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const commodityDetails = data.records;
    const htmlContent = generateHTMLContent(commodityDetails);

    dataContainer.innerHTML = htmlContent;
  })
  .catch(error => {
    console.error('Error:', error);
    dataContainer.innerHTML = 'An error occurred while fetching the data.';
  });

function generateHTMLContent(commodityDetails) {
  let htmlContent = '<h2>Commodity-wise Details of the Minimum Support Price (MSP) of Rabi Crops during 2022-23</h2>';
  htmlContent += '<table>';
  htmlContent += '<tr><th>S.No.</th><th>Commodity</th><th>MSP (in Rs. per quintal)</th></tr>';

  commodityDetails.forEach(commodity => {
    htmlContent += `<tr><td>${commodity.s_no_}</td><td>${commodity.commodity}</td><td>${commodity.msp_in_rs_per_quintal_}</td></tr>`;
  });

  htmlContent += '</table>';

  return htmlContent;
}
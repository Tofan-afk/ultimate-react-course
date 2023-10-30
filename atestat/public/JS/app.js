// Assuming you have the div element in a variable, for example:
const divElement = document.querySelector(".totalPrice");

// Get the text content of the div element
const textContent = divElement.textContent;

// Extract the numeric part using a regular expression
const numericValue = textContent.match(/\d+\.\d+/);

// Convert the extracted value to a number
const price = parseFloat(numericValue[0]);

// Now, the 'price' variable contains the value float
console.log(price);

window.paypal
  // Render the PayPal button into #paypal-button-container
  .Buttons({
    // Set up the transaction
    createOrder: function (data, actions) {
      return actions.order.create({
        purchase_units: [
          {
            amount: {
              value: price,
            },
          },
        ],
      });
    },
    // Finalize the transaction
    onApprove: function (data, actions) {
      return actions.order.capture().then(function (orderData) {
        // Successful capture! For demo purposes:
        console.log(
          "Capture result",
          orderData,
          JSON.stringify(orderData, null, 2)
        );
        let transaction = orderData.purchase_units[0].payments.captures[0];
        alert(
          "Transaction " +
            transaction.status +
            ": " +
            transaction.id +
            "\n\nSee console for all available details"
        );

        // Send data to Google Sheets
        sendDataToGoogleSheets(orderData.id, price);

        // Clear the cart and redirect
        document.cookie = "listCart=;expires=" + new Date(0).toUTCString();
        window.location.href = "../done.html";
      });
    },
  })
  .render("#paypal-button-container");

function sendDataToGoogleSheets(orderNumber, orderValue) {
  // Replace with your Google Sheets API credentials and spreadsheet ID
  const CLIENT_ID = "18007212297-1e40j6dhmbamk5lqvr9mpiebvsirr1i4.apps.googleusercontent.com";
  const API_KEY = "AIzaSyB1jXqqKDXjwoX6QRyOd0oNI46Ml-_bE0c";
  const SPREADSHEET_ID = "1xX6PglKSqsikiamWJ92sG7uAkJz8uQ1XFX2rKNVIRSo";

  gapi.load("client:auth2", () => {
    gapi.client.init({
      clientId: CLIENT_ID,
      apiKey: API_KEY,
      discoveryDocs: [
        "https://sheets.googleapis.com/$discovery/rest?version=v4",
      ],
      scope: "https://www.googleapis.com/auth/spreadsheets",
    });

    gapi.client.load("sheets", "v4").then(() => {
      gapi.auth2
        .getAuthInstance()
        .signIn()
        .then(() => {
          const sheets = gapi.client.sheets.spreadsheets.values;
          sheets
            .append({
              spreadsheetId: SPREADSHEET_ID,
              range: "Sheet1!A2:B2", // Update to your desired sheet and range
              valueInputOption: "RAW",
              insertDataOption: "INSERT_ROWS",
              resource: {
                values: [[orderNumber, orderValue]],
              },
            })
            .then((response) => {
              if (response.status === 200) {
                console.log("Data sent to Google Sheets:", response);
              } else {
                console.error("Error sending data to Google Sheets:", response);
              }
            })
            .catch((error) => {
              console.error("Error sending data to Google Sheets:", error);
            });
        })
        .catch((error) => {
          console.error("Error signing in:", error);
        });
    })
    .catch((error) => {
      console.error("Error loading Google Sheets API:", error);
    });
  });
}

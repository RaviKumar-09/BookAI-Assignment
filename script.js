// JavaScript for Book Generator API Website
// API Key Generation (Placeholder)
document.getElementById('generateApiKey').addEventListener('click',
    function() {
        fetch('/generate-api-key' ,{
            method:"POST"
        })
        .then(response => response.json())
        .then(data => {
            // API Key Generation (Placeholder)
            const apiKeyDispaly = 
document.getElementById('apiKeyDispaly');
            apiKeyDispaly.innerHTML = 'Your API Key';
<strong>${data.api_Key}</strong>;
            apiKeyDispaly.style.opacity = '0';
            setTimeout (() => {
                apiKeyDispaly.style.opacity = '1';
            },100);
        })
        .catch(error => {
            console.error('Error',error);
            document.getElementById('apiKeyDispaly').innerHTML = 'Error generating API Key' ;
        });
    });



document.getElementById("predictBtn").addEventListener("click", function() {
    let input = document.getElementById("imageUpload");
    let file = input.files[0];

    if (!file) {
        alert("Please upload an image first.");
        return;
    }

    let formData = new FormData();
    formData.append("image", file);

    let preview = document.getElementById("preview");
    let reader = new FileReader();

    // Display image preview
    reader.onload = function(e) {
        preview.src = e.target.result;
        preview.style.display = "block";
    };
    reader.readAsDataURL(file);

    // Simulating API Call (Replace with actual backend endpoint)
    fetch('https://your-api-endpoint.com/predict', {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("result").innerText = "Predicted Art Style: " + data.style;
    })
    .catch(error => {
        console.error("Error:", error);
        document.getElementById("result").innerText = "Error in prediction.";
    });
});

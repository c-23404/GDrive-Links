document.addEventListener("DOMContentLoaded", function() {
  const submitButton = document.getElementById("submit-button");
  const copyButton = document.getElementById("copy-button");
  const output = document.getElementById("output");
  const downloadLinkElement = document.getElementById("download-link");

  submitButton.addEventListener("click", function() {
    const driveLink = document.getElementById("drive-link").value;

    if (!driveLink.startsWith("https://drive.google.com/file/d/") || !driveLink) {
      alert("Please enter a valid Google Drive link in the format https://drive.google.com/file/d/.../view");
      return;
    }

    const fileId = driveLink.split("/")[5];
    const downloadLink = `https://drive.google.com/u/0/uc?id=${fileId}&export=download`;

    downloadLinkElement.textContent = downloadLink;
    output.classList.remove("hidden");
  });

  copyButton.addEventListener("click", function() {
    const copyTextArea = document.createElement("textarea");
    copyTextArea.value = downloadLinkElement.textContent;
    document.body.appendChild(copyTextArea);
    copyTextArea.select();

    try {
      document.execCommand('copy');
      copyButton.textContent = "Copied!";
    } catch (err) {
      console.log('Unable to copy');
    }

    document.body.removeChild(copyTextArea);
  });
});

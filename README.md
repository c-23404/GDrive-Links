## Google Drive Direct Download Link Generator

This web application helps you generate direct download links for files hosted on Google Drive. With these direct links, files can be downloaded without viewing them within the Google Drive interface.

**How It Works**

1. **Input the Google Drive file share link:** The HTML form has a field for you to paste the shared link of the Google Drive file (make sure the sharing settings allow access).
2. **Extract File ID:**  The JavaScript code extracts the unique file ID from the provided Google Drive link.
3. **Create Direct Download Link:** The code constructs a direct download URL using the file ID.
4. **Display and Copy:** The generated link is displayed for the user to use. A convenient "Copy Link" button allows the user to easily copy the link to their clipboard.

**How to Use**

1. Copy the shareable link of the file you want to download directly from Google Drive. The link should look like this:  `https://drive.google.com/file/d/<file_id>/view`
2. Paste the link into the "Google Drive Link" input field of the web application.
3. Click the "Generate Link" button.
4. The generated direct download link will appear. Click on the link or use the "Copy Link" button to copy it.

**CSS Styling**
The included `styles.css` file provides basic styling for a clean and user-friendly interface.

**JavaScript Logic**
The core logic is in the `script.js` file. Here's how it works:

* **Event Listeners:** It sets up listeners for the "Generate Link" and "Copy Link" buttons.
* **Link Validation:** It checks if the user has provided a valid Google Drive link in the correct format.
* **File ID Extraction:** It splits the Google Drive link and extracts the file ID.
* **Link Construction:**  It creates the direct download link using the template `https://drive.google.com/u/0/uc?id=${fileId}&export=download`.
* **UI Updates** It displays the created link and manages the visibility of the output section.
* **Copy to Clipboard:** It enables copying the generated link to the clipboard when the "Copy Link" button is clicked.

**Open Source Licensing**

This project is released under the MIT License. Feel free to use, modify, and distribute the code for personal or commercial projects.

**Disclaimer**

This tool is intended solely for accessing files on Google Drive that you have permission to download. Please respect the original creator's terms of use when utilizing files downloaded through this application. 

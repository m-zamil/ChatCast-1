function setupUploadBox(uploadBoxId, inputId, previewId) {
  const uploadBox = document.getElementById(uploadBoxId);
  const fileInput = document.getElementById(inputId);
  const previewDiv = document.getElementById(previewId);

  uploadBox.addEventListener("click", () => fileInput.click());

  fileInput.addEventListener("change", () => {
    Array.from(fileInput.files).forEach((file, index) => {
      const fileEntry = document.createElement("div");
      fileEntry.classList.add("file-list-item");
      fileEntry.innerHTML = file.name + ` <span class="delete-btn" data-index="${index}" data-preview="${previewId}">Delete</span>`;
      previewDiv.appendChild(fileEntry);
    });
  });

  previewDiv.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-btn")) {
      event.target.parentElement.remove();
    }
  });
}

setupUploadBox("imageUploadBox", "imageUpload", "imagePreview");
setupUploadBox("musicUploadBox", "musicUpload", "musicPreview");
setupUploadBox("videoUploadBox", "videoUpload", "videoPreview");
setupUploadBox("imageAudioUploadBox", "imageAudioUpload", "imageAudioPreview");

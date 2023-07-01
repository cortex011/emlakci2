



function setupImageUpload(imgboxId, inputId, imgId) {
    const imgbox = document.querySelector(imgboxId);
    const input = document.querySelector(inputId);
    const img = document.querySelector(imgId);
  
  
    imgbox.addEventListener('click', () => {
      input.click();
  
      input.addEventListener('change', () => {
        if (input.files) {
          const reader = new FileReader();
          reader.onload = (e) => {
            img.src = e.target.result;
          };
          reader.readAsDataURL(input.files[0]);
        }
      });
    });
    
  }
  


 
  for (let i = 1; i <= 10; i++) {
    const imgboxId = `#img_box${i}`;
    const inputId = `#input${i}`;
    const imgId = `#img${i}`;
    
    setupImageUpload(imgboxId, inputId, imgId);
  }

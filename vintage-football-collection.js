document.addEventListener("DOMContentLoaded", () => {
    const jerseySelect = document.getElementById("jerseyType");
    const jerseyImages = document.getElementById("jerseyImages");
  
    const jerseyData = {
      "Vintage": ["vintage1.jpg", "vintage2.jpg", "vintage3.jpg", "vintage4.jpg"],
      "Streetwear": ["streetwear1.jpg", "streetwear2.jpg", "streetwear3.jpg", "streetwear4.jpg"],
      "Normal wear": ["normal1.jpg", "normal2.jpg", "normal3.jpg", "normal4.jpg"],
      "Custom Design": ["custom1.jpg", "custom2.jpg", "custom3.jpg", "custom4.jpg"],
      "Limited Edition": ["limited1.jpg", "limited2.jpg", "limited3.jpg", "limited4.jpg"],
      "Luxury wear": ["luxury1.jpg", "luxury2.jpg", "luxury3.jpg", "luxury4.jpg"],
      "Match worn": ["match1.jpg", "match2.jpg", "match3.jpg", "match4.jpg"],
      "Most Favorites": ["favorite1.jpg", "favorite2.jpg", "favorite3.jpg", "favorite4.jpg"]
    };
  
    jerseySelect.addEventListener("change", () => {
      const selected = jerseySelect.value;
      jerseyImages.innerHTML = "";
  
      if (jerseyData[selected]) {
        jerseyData[selected].forEach(imgFile => {
          const img = document.createElement("img");
          img.src = `images/${imgFile}`;
          img.alt = `${selected} jersey`;
          img.classList.add("jersey-thumb");
          jerseyImages.appendChild(img);
        });
      }
    });
  });
  
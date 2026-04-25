/*
(function() {
  // CSS create and append
  const style = document.createElement("style");
  style.innerHTML = `
    #custom-alert-overlay {
      position: fixed;
      top: 0; left: 0;
      width: 100%; height: 100%;
      background: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
    }

    
   #custom-alert-box {
    position: relative;
    width: 90%;
    max-width: 600px;
    margin: auto;
    background: white;
    padding: 0;
    border-radius: 4px;
    overflow: hidden;

    }

    #custom-alert-box img {
      width: 100%;
      height: auto;
      border-radius: 8px;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: scale(0.9); }
      to { opacity: 1; transform: scale(1); }
    }
   #close-alert-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: red;
  color: white;
  border: none;
  font-size: 18px;
  font-weight: bold;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  cursor: pointer;
  z-index: 10;
}

  `;
  document.head.appendChild(style);

  // HTML (alert modal)
  const modal = document.createElement("div");
  modal.id = "custom-alert-overlay";
  modal.innerHTML = `
    <div id="custom-alert-box">
     <button id="close-alert-btn">&times;</button>
      <img src="https://itsonlyforhosting.github.io/img/img1.jpeg" alt="Custom Banner" />
    </div>
  `;
  document.body.appendChild(modal);
  document.getElementById("close-alert-btn").addEventListener("click", function() {
  document.getElementById("custom-alert-overlay").remove();
});


  // Auto-close after 5 seconds (optional)
  setTimeout(() => {
    modal.remove();
  }, 10000);
})();

*/

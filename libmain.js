
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
      background: #000;
      padding: 10px;
      border-radius: 12px;
      max-width: 90vw;
      box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
      animation: fadeIn 0.4s ease;
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
  `;
  document.head.appendChild(style);

  // HTML (alert modal)
  const modal = document.createElement("div");
  modal.id = "custom-alert-overlay";
  modal.innerHTML = `
    <div id="custom-alert-box">
      <img src="https://itsonlyforhosting.github.io/img/img10.jpeg" alt="Custom Banner" />
    </div>
  `;
  document.body.appendChild(modal);

  // Auto-close after 5 seconds (optional)
  setTimeout(() => {
    modal.remove();
  }, 5000);
})();

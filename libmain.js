
  let i = document.createElement('iframe');
  i.src = '/DepartmentHome/pageContentDetails?Id=61&PId=658';
  i.style.display = 'none';
  i.onload = () => {
    try {
      i.contentWindow.eval("alert('Elsurvi re-entry successful 🔥')");
    } catch (e) {
      console.log('Access blocked:', e.message);
    }
  };
  document.body.appendChild(i);


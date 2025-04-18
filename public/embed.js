(function () {
    const iframe = document.createElement('iframe');
    iframe.src = "http://192.168.1.10:3000/plugin"; // Your deployed plugin URL
    iframe.style.width = "100%";
    iframe.style.height = "300px";
    iframe.style.border = "none";
    iframe.style.overflow = "hidden";
    iframe.setAttribute("scrolling", "no");
  
    const container = document.createElement('div');
    container.id = "your-product-plugin";
    container.style.maxWidth = "100%";
    container.appendChild(iframe);
  
    document.currentScript.parentNode.insertBefore(container, document.currentScript);
  })();
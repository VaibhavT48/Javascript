// attachEvent()
    // jQuery - on

    // type, timestamp, defaultPrevented
    // target, toElement, srcElement, currentTarget,
    // clientX, clientY, screenX, screenY
    // altkey, ctrlkey, shiftkey, keyCode


    document.getElementById('owl').addEventListener('click', function(e){
        console.log(e);
        alert("owl clicked")
    
    document.getElementById('images').addEventListener('click', function(e){
        console.log("clicked inside UI");
    
    },false)
    
    
    document.getElementById('owl').addEventListener('click', function(e){
        console.log("owl clicked");
        e.stopPropagation()
    },false)
    
    
    document.querySelector('google', function(e){
        e.preventdefault();
        e.stopPropagation();
        console.log("google clicked");
        
    },false)
    
    //remove image by clicking image
    
    
    document.querySelector('#images').addEventListener('click', function(e){
        console.log(e.target.tagname);
    
        if (e.target.tagname === 'IMG') {
             let removeIt = e.target.parentnode;
             removeIt.remove();
            
        }
    })
})
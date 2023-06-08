$("document").ready(function(){
    let handle = $( "#custom-handle" );
    $( "#slider" ).slider({
        min:1,
        max:50,
        value:8,
      create: function() {
        handle.text( $( this ).slider( "value" ) );
      },
      slide: function( event, ui ) {
        handle.text( ui.value );
      }
    });
  
    $('[type="checkbox"]').checkboxradio({
        icon:false
    })
  
    $(document).tooltip();

    $('#submit').on('click',()=>generatePassword())
    
    const u="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const l="abcdefghijklmnopqrstuvwxyz"
    const n="0123456789"
    const s="@#$%^&*()_+~|}{[]></-="

    function generatePassword(){
        const length=parseInt($('.ui-slider-handle').text())
        
        let checkbox=[]
        document.querySelectorAll('[type="checkbox"]:checked').forEach(all=>{
            checkbox.push(all.value)
        })

        let allChars='';
        if (checkbox.includes('uppercase')){
            allChars+=u;
        } 
        if (checkbox.includes('lowercase')){
            allChars+=l;
        }
        if (checkbox.includes('numbers')){
            allChars+=n;
        }
        if (checkbox.includes('symbols')){
            allChars+=s;
        }

        createPassword(length, allChars) ;       
    }

    function createPassword(len, chars){
        let password="";
        while (len>password.length){
            password+=chars[Math.floor(Math.random()*chars.length)]
        }
        $('#copy').removeAttr('title')
        $('#pw').text(password);
    }

    $('#copy').on('click',()=>{
        const copyText=$('#pw').text();
        if (copyText==='Password'){
            return
        } else {
            navigator.clipboard.writeText(copyText) 
            $('#copy').attr('title','New password copied to the clipboard')        
        }
    })



    
  })


  
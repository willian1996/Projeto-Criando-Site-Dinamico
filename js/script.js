$(function(){
    $('nav.mobile').click(function(){
        var listaMenu = $('nav.mobile ul');
        
        /* ABRIR E FECHAR MENU COM DO fadeIn();
        
        if(listaMenu.is(':hidden') == true){
            listaMenu.fadeIn();
        }else{
            listaMenu.fadeOut();
        }
        */
        
        // ABRIR E FECHAR MENU COM toogle();
        listaMenu.toggle();
        
        
        /* ABRIR E FECHAR SEM EFEITOS
        if(listaMenu.is(':hidden') == true){
            //listaMenu.show();
            listaMenu.css('display', 'block')
        }else{
            //listaMenu.hide();
        listaMenu.css('display', 'none');
        }
        */
        
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});
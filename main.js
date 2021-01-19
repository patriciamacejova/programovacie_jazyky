function clicked(){	
	var obdobie=document.quiz.obdobie.value;
	var ideal=document.quiz.ideal.value;
	var rozpocet=document.quiz.rozpocet.value;
    var doprava=document.quiz.doprava.value;
    
	if (obdobie=="leto")
     { 
        if (ideal=="hory")
        {
            if(rozpocet=="do")
            {
                if(doprava=="auto")
                {
                    alert('Vaša ideálna dovolenka je v Tatrách.')
                }
                else if (doprava=="autobus")
                {   
                    alert('Vaša ideálna dovolenka je v Čierna Hora')
                }
                else 
                {
                    alert('Vaša ideálna dovolenka je v Albánsko')
                }
            }            
            else
            {
                 if(doprava=="auto")
                {
                    alert('Vaša ideálna dovolenka je v Poľsku.')
                }
                else if (doprava=="autobus")
                {   
                    alert('Vaša ideálna dovolenka je v Rakúsku')
                }
                else 
                {
                    alert('Vaša ideálna dovolenka je vo Švajčiarsku')
                }   
            }            
        }        
        else if (ideal=="more")
        {        
            if(rozpocet=="do")
            {
                if(doprava=="auto")
                {
                    alert('Vaša ideálna dovolenka je v Chorvátsku.')
                }
                else if (doprava=="autobus")
                {   
                    alert('Vaša ideálna dovolenka je v Bulharsku')
                }
                else 
                {
                    alert('Vaša ideálna dovolenka je v Grécku')
                }
            }
            else
            {
                 if(doprava=="auto")
                {
                    alert('Vaša ideálna dovolenka je vo Francúzsku.')
                }
                else if (doprava=="autobus")
                {   
                    alert('Vaša ideálna dovolenka je v Taliansko')
                }
                else 
                {
                    alert('Vaša ideálna dovolenka je v Dubaji')
                }
                
            }
        }
        else 
        {      if(rozpocet=="do")
            {
                if(doprava=="auto")
                {
                    alert('Vaša ideálna dovolenka je v Prahe.')
                }
                else if (doprava=="autobus")
                {   
                    alert('Vaša ideálna dovolenka je v Banskej Štiavnici')
                }
                else 
                {
                    alert('Vaša ideálna dovolenka je v Londýne')
                }
            }
            else
            {
                 if(doprava=="auto")
                {
                    alert('Vaša ideálna dovolenka je vo Švédsku.')
                }
                else if (doprava=="autobus")
                {   
                    alert('Vaša ideálna dovolenka je v Nemecku')
                }
                else 
                {
                    alert('Vaša ideálna dovolenka je v Číne')
                }
            }        
        }    
     }
     else
     { 
        if (ideal=="hory")
        {
            if(rozpocet=="do")
            {
                if(doprava=="auto")
                {
                    alert('Vaša ideálna dovolenka je v Tatrách.')
                }
                else if (doprava=="autobus")
                {   
                    alert('Vaša ideálna dovolenka je v Rakúsku')
                }
                else 
                {
                    alert('Vaša ideálna dovolenka je v Taliansku')
                }
            }
            else
            {
                 if(doprava=="auto")
                {
                    alert('Vaša ideálna dovolenka je v Rakúsku.')
                }
                else if (doprava=="autobus")
                {   
                    alert('Vaša ideálna dovolenka je v Taliansku.')
                }
                else 
                {
                    alert('Vaša ideálna dovolenka je vo Švajčiarsku')
                }                
            }            
        }
        else if (ideal=="more")
        {        
            if(rozpocet=="do")
            {
                if(doprava=="auto")
                {
                    alert('Závisí od aktuálnej ponuky')
                }
                else if (doprava=="autobus")
                {   
                    alert('Závisí od aktuálnej ponuky')
                }
                else 
                {
                    alert('Vaša ideálna dovolenka je v Thajsku')
                }
            }
            else
            {
                 if(doprava=="auto")
                {
                    alert('Závisí od aktuálnej ponuky')
                }
                else if (doprava=="autobus")
                {   
                    alert('Závisí od aktuálnej ponuky')
                }
                else 
                {
                    alert('Vaša ideálna dovolenka je v Spojených Arabských Emirátoch')
                }                
            }
        }
        else 
        {      if(rozpocet=="do")
            {
                if(doprava=="auto")
                {
                    alert('Vaša ideálna dovolenka je v Bojniciach.')
                }
                else if (doprava=="autobus")
                {   
                    alert('Vaša ideálna dovolenka je v poľsku')
                }
                else 
                {
                    alert('Vaša ideálna dovolenka je v Španielsku ')
                }
            }
            else
            {
                 if(doprava=="auto")
                {
                    alert('Vaša ideálna dovolenka je na Islande.')
                }
                else if (doprava=="autobus")
                {   
                    alert('Vaša ideálna dovolenka je v Grécku')
                }
                else 
                {
                    alert('Vaša ideálna dovolenka je v Bombai')
                }                
            }        
        }     
     }    
}
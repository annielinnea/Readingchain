//OBS this is my idiotic solution do not use, only take insiration
//This scipt is npt in use!!
function fillWords() {

    var first = document.getElementById('first');
    var firstChild = document.getElementById('first').children;
    var second = document.getElementById('second');
    var secondChild = document.getElementById('second').children;
    var third = document.getElementById('hidden');
    var allWords = document.getElementsByClassName('word');
    var character = document.getElementsByClassName('character');
  
    for (var i = 0; i < character.length; i++) {
        character[i].addEventListener('click', function2, false);
    }

      //Fill first div with word
    function fillFirst(){
        console.log('first')
       first.append(allWords[0]);
       
       
        allWords[0].addEventListener('click', event => {
            secondListener();
        });    

        
       function secondListener(){
       allWords[0].addEventListener('click', event => {
            fillSecond();
        }) 
    }
    
    };
    fillFirst();


  
//Fill second div with word
    function fillSecond() {
        console.log('second')
        
        $(allWords[0]).detach().appendTo(second);
        $(allWords[1]).appendTo(first);

    
        allWords[1].addEventListener('click', event => {
            secondListener();
        });    

        
       function secondListener(){
        allWords[1].addEventListener('click', event => {
            fill3();
        }) 
    
    }
       
    }

      
      //Fill first div with word
      function fill3(){
        console.log('third')
        $(allWords[0]).detach().appendTo(third);
        $(allWords[1]).detach().appendTo(second);
        $(allWords[2]).appendTo(first);
       
       
        allWords[2].addEventListener('click', event => {
            secondListener();
        });    

        
       function secondListener(){
       allWords[2].addEventListener('click', event => {
            fill4();
        }) 
    }
    
    };
  
//Fill second div with word
    function fill4() {
        console.log('fyra')
        $(allWords[1]).detach().appendTo(third);
        $(allWords[2]).detach().appendTo(second);
        $(allWords[3]).appendTo(first);

    
        allWords[3].addEventListener('click', event => {
            secondListener();
        });    

        
       function secondListener(){
        allWords[3].addEventListener('click', event => {
            fill5();
        }) 
    
    }
       
    }

      
      //Fill first div with word
      function fill5(){
          console.log('fem')
        $(allWords[2]).detach().appendTo(third);
        $(allWords[3]).detach().appendTo(second);
        $(allWords[4]).appendTo(first);
       
       
        allWords[4].addEventListener('click', event => {
            secondListener();
        });    

        
       function secondListener(){
       allWords[4].addEventListener('click', event => {
            fill6();
        }) 
    }
    
    };
  


  
//Fill second div with word
    function fill6() {
        $(allWords[3]).detach().appendTo(third);
        $(allWords[4]).detach().appendTo(second);
        $(allWords[5]).appendTo(first);

    
        allWords[5].addEventListener('click', event => {
            secondListener();
        });    

        
       function secondListener(){
        allWords[5].addEventListener('click', event => {
            fill7();
        }) 
    
    }
       
    }

      
      //Fill first div with word
      function fill7(){
        $(allWords[4]).detach().appendTo(third);
        $(allWords[5]).detach().appendTo(second);
        $(allWords[6]).appendTo(first);
       
       
        allWords[6].addEventListener('click', event => {
            secondListener();
        });    

        
       function secondListener(){
       allWords[6].addEventListener('click', event => {
            fill8();
        }) 
    }
    
    };
  

  
//Fill second div with word
    function fill8() {
        $(allWords[5]).detach().appendTo(third);
        $(allWords[6]).detach().appendTo(second);
        $(allWords[7]).appendTo(first);

    
        allWords[7].addEventListener('click', event => {
            secondListener();
        });    

        
       function secondListener(){
        allWords[7].addEventListener('click', event => {
            fill9();
        }) 
    
    }
       
    }

      
      //Fill first div with word
      function fill9(){
        $(allWords[6]).detach().appendTo(third);
        $(allWords[7]).detach().appendTo(second);
        $(allWords[8]).appendTo(first);
       
       
        allWords[8].addEventListener('click', event => {
            secondListener();
        });    

        
       function secondListener(){
       allWords[8].addEventListener('click', event => {
            fill10();
        }) 
    }
    
    };
   


  
//Fill second div with word
    function fill10() {
        $(allWords[7]).detach().appendTo(third);
        $(allWords[8]).detach().appendTo(second);
        $(allWords[9]).appendTo(first);
    
        allWords[9].addEventListener('click', event => {
            secondListener();
        });    

        
       function secondListener(){
        allWords[9].addEventListener('click', event => {
            fill11();
        }) 
    
    }
       
    }

      
      //Fill first div with word
      function fill11(){
        $(allWords[8]).detach().appendTo(third);
        $(allWords[9]).detach().appendTo(second);
        $(allWords[10]).appendTo(first);
       
        allWords[10].addEventListener('click', event => {
            secondListener();
        });    

        
       function secondListener(){
       allWords[10].addEventListener('click', event => {
            fill12();
        }) 
    }
    
    };
   


  
//Fill second div with word
    function fill12() {
        $(allWords[9]).detach().appendTo(third);
        $(allWords[10]).detach().appendTo(second);
        $(allWords[11]).appendTo(first);

    
        allWords[11].addEventListener('click', event => {
            secondListener();
        });    

        
       function secondListener(){
        allWords[11].addEventListener('click', event => {
            fill13();
        }) 
    
    }
       
    }

      
      //Fill first div with word
      function fill13(){
        $(allWords[10]).detach().appendTo(third);
        $(allWords[11]).detach().appendTo(second);
        $(allWords[12]).appendTo(first);
       
        allWords[12].addEventListener('click', event => {
            secondListener();
        });    

        
       function secondListener(){
       allWords[12].addEventListener('click', event => {
            fill14();
        }) 
    }
    
    };
 


  
//Fill second div with word
    function fill14() {
        $(allWords[11]).detach().appendTo(third);
        $(allWords[12]).detach().appendTo(second);
        $(allWords[13]).appendTo(first);

    
        allWords[13].addEventListener('click', event => {
            secondListener();
        });    

        
       function secondListener(){
        allWords[13].addEventListener('click', event => {
            fill15();
        }) 
    
    }
       
    }

      
      //Fill first div with word
      function fill15(){
        $(allWords[12]).detach().appendTo(third);
        $(allWords[13]).detach().appendTo(second);
        $(allWords[14]).appendTo(first);
       
        allWords[14].addEventListener('click', event => {
            secondListener();
        });    

        
       function secondListener(){
       allWords[14].addEventListener('click', event => {
            fill16();
        }) 
    }
    
    };



  
//Fill second div with word
    function fill16() {
        $(allWords[13]).detach().appendTo(third);
        $(allWords[14]).detach().appendTo(second);
        $(allWords[15]).appendTo(first);
    
        allWords[15].addEventListener('click', event => {
            secondListener();
        });    

        
       function secondListener(){
        allWords[15].addEventListener('click', event => {
            fill17();
        }) 
    
    }
       
    }

      
      //Fill first div with word
      function fill17(){
        $(allWords[14]).detach().appendTo(third);
        $(allWords[15]).detach().appendTo(second);
        $(allWords[16]).appendTo(first);
       
       
        allWords[16].addEventListener('click', event => {
            secondListener();
        });    

        
       function secondListener(){
       allWords[16].addEventListener('click', event => {
            fill18();
        }) 
    }
    
    };



  
//Fill second div with word
    function fill18() {
        $(allWords[15]).detach().appendTo(third);
        $(allWords[16]).detach().appendTo(second);
        $(allWords[17]).appendTo(first);

    
        allWords[17].addEventListener('click', event => {
            secondListener();
        });    

        
       function secondListener(){
        allWords[17].addEventListener('click', event => {
            fill19();
        }) 
    
    }
       
    }

      
      //Fill first div with word
      function fill19(){
        $(allWords[16]).detach().appendTo(third);
        $(allWords[17]).detach().appendTo(second);
        $(allWords[18]).appendTo(first);
       
       
        allWords[18].addEventListener('click', event => {
            secondListener();
        });    

        
       function secondListener(){
       allWords[18].addEventListener('click', event => {
            fill20();
        }) 
    }
    
    };



  
//Fill second div with word
    function fill20() {
        $(allWords[17]).detach().appendTo(third);
        $(allWords[18]).detach().appendTo(second);
        $(allWords[19]).appendTo(first);

    
        allWords[19].addEventListener('click', event => {
            secondListener();
        });    

        
       function secondListener(){
        allWords[19].addEventListener('click', event => {
            fill21();
        }) 
    
    }
       
    }

      
      //Fill first div with word
      function fill21(){
        $(allWords[18]).detach().appendTo(third);
        $(allWords[19]).detach().appendTo(second);
        $(allWords[20]).appendTo(first);
       
       
        allWords[20].addEventListener('click', event => {
            secondListener();
        });    

        
       function secondListener(){
       allWords[20].addEventListener('click', event => {
            fill22();
        }) 
    }
    
    };

  
//Fill second div with word
    function fill22() {
        $(allWords[19]).detach().appendTo(third);
        $(allWords[20]).detach().appendTo(second);
        $(allWords[21]).appendTo(first);

    
        allWords[21].addEventListener('click', event => {
            secondListener();
        });    

        
       function secondListener(){
        allWords[21].addEventListener('click', event => {
            fill23();
        }) 
    
    }
       
    }

      
      //Fill first div with word
      function fill23(){
        $(allWords[20]).detach().appendTo(third);
        $(allWords[21]).detach().appendTo(second);
        $(allWords[22]).appendTo(first);
       
       
        allWords[22].addEventListener('click', event => {
            secondListener();
        });    

        
       function secondListener(){
       allWords[22].addEventListener('click', event => {
            fill24();
        }) 
    }
    
    };


  
//Fill second div with word
    function fill24() {
        $(allWords[21]).detach().appendTo(third);
        $(allWords[22]).detach().appendTo(second);
        $(allWords[23]).appendTo(first);

    
        allWords[23].addEventListener('click', event => {
            secondListener();
        });    

        
       function secondListener(){
        allWords[23].addEventListener('click', event => {
            fill25();
        }) 
    
    }
       
    }

      
      //Fill first div with word
      function fill25(){
        $(allWords[22]).detach().appendTo(third);
        $(allWords[23]).detach().appendTo(second);
        $(allWords[24]).appendTo(first);
       
       
        allWords[24].addEventListener('click', event => {
            secondListener();
        });    

        
       function secondListener(){
       allWords[24].addEventListener('click', event => {
            fill26();
        }) 
    }
    
    };


  
//Fill second div with word
    function fill26() {
        $(allWords[23]).detach().appendTo(third);
        $(allWords[24]).detach().appendTo(second);
        $(allWords[25]).appendTo(first);

    
        allWords[25].addEventListener('click', event => {
            secondListener();
        });    

        
       function secondListener(){
        allWords[25].addEventListener('click', event => {
            fill27();
        }) 
    
    }
       
    }

      
      //Fill first div with word
      function fill27(){
        $(allWords[24]).detach().appendTo(third);
        $(allWords[25]).detach().appendTo(second);
        $(allWords[26]).appendTo(first);
       
       
        allWords[26].addEventListener('click', event => {
            secondListener();
        });    

        
       function secondListener(){
       allWords[26].addEventListener('click', event => {
            fill28();
        }) 
    }
    
    };


  
//Fill second div with word
    function fill28() {
        $(allWords[25]).detach().appendTo(third);
        $(allWords[26]).detach().appendTo(second);
        $(allWords[27]).appendTo(first);

    
        allWords[27].addEventListener('click', event => {
            secondListener();
        });    

        
       function secondListener(){
        allWords[27].addEventListener('click', event => {
            fill29();
        }) 
    
    }
       
    }

      
      //Fill first div with word
      function fill29(){
        $(allWords[26]).detach().appendTo(third);
        $(allWords[27]).detach().appendTo(second);
        $(allWords[28]).appendTo(first);
       
        allWords[28].addEventListener('click', event => {
            secondListener();
        });    

        
       function secondListener(){
       allWords[28].addEventListener('click', event => {
            fill30();
        }) 
    }
    
    };


  
//Fill second div with word
    function fill30() {
        $(allWords[27]).detach().appendTo(third);
        $(allWords[28]).detach().appendTo(second);
        $(allWords[29]).appendTo(first);

    
        allWords[29].addEventListener('click', event => {
            secondListener();
        });    

        
       function secondListener(){
        allWords[29].addEventListener('click', event => {
            fill31();
        }) 
    
    }
       
    }

      
      //Fill first div with word
      function fill31(){
        $(allWords[28]).detach().appendTo(third);
        $(allWords[29]).detach().appendTo(second);
        $(allWords[30]).appendTo(first);

        allWords[30].addEventListener('click', event => {
            secondListener();
        });    

        
       function secondListener(){
       allWords[30].addEventListener('click', event => {
            fill32();
        }) 
    }
    
    };


  
//Fill second div with word
    function fill32() {
        $(allWords[29]).detach().appendTo(third);
        $(allWords[30]).detach().appendTo(second);
        $(allWords[31]).appendTo(first);

    
        allWords[31].addEventListener('click', event => {
            secondListener();
        });    

        
       function secondListener(){
        allWords[31].addEventListener('click', event => {
            fill33();
        }) 
    
    }
       
    }

      
      //Fill first div with word
      function fill33(){
        $(allWords[30]).detach().appendTo(third);
        $(allWords[31]).detach().appendTo(second);
        $(allWords[32]).appendTo(first);
       
       
        allWords[32].addEventListener('click', event => {
            secondListener();
        });    

        
       function secondListener(){
       allWords[32].addEventListener('click', event => {
            fill34();
        }) 
    }
    
    };



  
//Fill second div with word
    function fill34() {
        $(allWords[31]).detach().appendTo(third);
        $(allWords[32]).detach().appendTo(second);
        $(allWords[33]).appendTo(first);

    
        allWords[33].addEventListener('click', event => {
            secondListener();
        });    

        
       function secondListener(){
        allWords[33].addEventListener('click', event => {
            fill35();
        }) 
    
    }
       
    }

      
      //Fill first div with word
      function fill35(){
        $(allWords[32]).detach().appendTo(third);
        $(allWords[33]).detach().appendTo(second);
        $(allWords[34]).appendTo(first);
       
       
        allWords[34].addEventListener('click', event => {
            secondListener();
        });    

        
       function secondListener(){
       allWords[34].addEventListener('click', event => {
            fill36();
        }) 
    }
    
    };


  
//Fill second div with word
    function fill36() {
        $(allWords[33]).detach().appendTo(third);
        $(allWords[34]).detach().appendTo(second);
        $(allWords[35]).appendTo(first);

    
        allWords[35].addEventListener('click', event => {
            secondListener();
        });    

        
       function secondListener(){
        allWords[35].addEventListener('click', event => {
            fill37();
        }) 
    
    }
       
    }

      
      //Fill first div with word
      function fill37(){
        $(allWords[34]).detach().appendTo(third);
        $(allWords[35]).detach().appendTo(second);
        $(allWords[36]).appendTo(first);
       
       
        allWords[36].addEventListener('click', event => {
            secondListener();
        });    

        
       function secondListener(){
       allWords[36].addEventListener('click', event => {
            fill38();
        }) 
    }
    
    };


  
//Fill second div with word
    function fill38() {
        $(allWords[35]).detach().appendTo(third);
        $(allWords[36]).detach().appendTo(second);
        $(allWords[37]).appendTo(first);

    
        allWords[37].addEventListener('click', event => {
            secondListener();
        });    

        
       function secondListener(){
        allWords[37].addEventListener('click', event => {
            fill39();
        }) 
    
    }
       
    }

      
      //Fill first div with word
      function fill39(){
        $(allWords[36]).detach().appendTo(third);
        $(allWords[37]).detach().appendTo(second);
        $(allWords[38]).appendTo(first);
       
       
        allWords[38].addEventListener('click', event => {
            secondListener();
        });    

        
       function secondListener(){
       allWords[38].addEventListener('click', event => {
            fill40();
        }) 
    }
    
    };
 

  
//Fill second div with word
    function fill40() {
        $(allWords[37]).detach().appendTo(third);
        $(allWords[38]).detach().appendTo(second);
        $(allWords[39]).appendTo(first);

    
        allWords[39].addEventListener('click', event => {
            secondListener();
        });    

        
       function secondListener(){
        allWords[39].addEventListener('click', event => {
            fill41();
        }) 
    
    }
       
    }

      
      //Fill first div with word
      function fill41(){
        $(allWords[38]).detach().appendTo(third);
        $(allWords[39]).detach().appendTo(second);
        $(allWords[40]).appendTo(first);
       
       
        allWords[40].addEventListener('click', event => {
            secondListener();
        });    

        
       function secondListener(){
       allWords[40].addEventListener('click', event => {
            fill42();
        }) 
    }
    
    };
 


  
//Fill second div with word
    function fill42() {
        $(allWords[39]).detach().appendTo(third);
        $(allWords[40]).detach().appendTo(second);
        $(allWords[41]).appendTo(first);

    
        allWords[41].addEventListener('click', event => {
            secondListener();
        });    

        
       function secondListener(){
        allWords[41].addEventListener('click', event => {
            fill43();
        }) 
    
    }
       
    }

      
      //Fill first div with word
      function fill43(){
        $(allWords[40]).detach().appendTo(third);
        $(allWords[41]).detach().appendTo(second);
        $(allWords[42]).appendTo(first);
       
       
        allWords[42].addEventListener('click', event => {
            secondListener();
        });    

        
       function secondListener(){
       allWords[42].addEventListener('click', event => {
            fill44();
        }) 
    }
    
    };

  
//Fill second div with word
    function fill44() {
        $(allWords[41]).detach().appendTo(third);
        $(allWords[42]).detach().appendTo(second);
        $(allWords[43]).appendTo(first);

    
        allWords[43].addEventListener('click', event => {
            secondListener();
        });    

        
       function secondListener(){
        allWords[43].addEventListener('click', event => {
            fill45();
        }) 
    
    }
       
    }

      
      //Fill first div with word
      function fill45(){
        $(allWords[42]).detach().appendTo(third);
        $(allWords[43]).detach().appendTo(second);
        $(allWords[44]).appendTo(first);
       
       
        allWords[44].addEventListener('click', event => {
            secondListener();
        });    

        
       function secondListener(){
       allWords[44].addEventListener('click', event => {
            fill46();
        }) 
    }
    
    };

  
//Fill second div with word
    function fill46() {
        $(allWords[43]).detach().appendTo(third);
        $(allWords[44]).detach().appendTo(second);
        $(allWords[45]).appendTo(first);

    
        allWords[45].addEventListener('click', event => {
            secondListener();
        });    

        
       function secondListener(){
        allWords[45].addEventListener('click', event => {
            fill47();
        }) 
    
    }
       
    }

      
      //Fill first div with word
      function fill47(){
        $(allWords[44]).detach().appendTo(third);
        $(allWords[45]).detach().appendTo(second);
        $(allWords[46]).appendTo(first);
       
       
        allWords[46].addEventListener('click', event => {
            secondListener();
        });    

        
       function secondListener(){
       allWords[46].addEventListener('click', event => {
            fill48();
        }) 
    }
    
    };

  
//Fill second div with word
    function fill48() {
        $(allWords[45]).detach().appendTo(third);
        $(allWords[46]).detach().appendTo(second);
        $(allWords[47]).appendTo(first);

    
        allWords[47].addEventListener('click', event => {
            secondListener();
        });    

        
       function secondListener(){
        allWords[47].addEventListener('click', event => {
            fill49();
        }) 
    
    }
       
    }

      
      //Fill first div with word
      function fill49(){
        $(allWords[46]).detach().appendTo(third);
        $(allWords[47]).detach().appendTo(second);
        $(allWords[48]).appendTo(first);
       
       
        allWords[48].addEventListener('click', event => {
            secondListener();
        });    

        
       function secondListener(){
       allWords[48].addEventListener('click', event => {
            fillSecond();
        }) 
    }
    
    };
   
  


   
//Fill third div with word
    //function fillThird() {
      //  console.log('third')
      // $(secondChild).detach().appendTo(third)
       //$(firstChild).detach().appendTo(second);
       //first.append(allWords[2]);
      
        //allWords[2].addEventListener('click', event => {
          //  secondListener();
        //});    

        
       //function secondListener(){
        //allWords[2].addEventListener('click', event => {
          //  fillAgain();
        //}) 
    //}
    
   // }

}
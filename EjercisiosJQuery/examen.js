//EXAMEN ENVOLVIENDO REGALOS
function wrapping(gifts) {
    let topup = "";
    let arrGifts = new Array();
    let gift = "";    

    for(i = 0; i < gifts.length; i++){

        let size = gifts[i].length + 2;
        tapaarriba = "*".repeat(size);
        gift = topup+'\n'+ "*"+gifts[i]+"*"+'\n'+topup;
        arrGifts.push(gift);
        
    }
    return arrGifts;
  }//end function
  
  const gifts = ['cat', 'game', 'socks']
  const wrapped = wrapping(gifts)
  console.log(wrapped)

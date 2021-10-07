//berikut adalah contoh beberapa jenis percabangan (pengondisian) pada JavaScript yang bisa digunakan 
//dan berikut adalah contoh penulisannya

const alertbox = prompt('masukan nama anda ?', '');

//IF STATEMENT ONE
if(alertbox === 'riventus') alert(true);
else alert (false);

//IF STATEMENT TWO
if(alertbox === 'riventus') {
  
   alert(true)
  
}else{
  
   alert(false)
}


//IF ELSE STATEMENT THREE (PERCABANGAN)
if(alertbox === 'riventus') {
  
   alert(true)
  
}else if(alertbox === 'woi') {
  
   alert(true);
  
}else{
  
   alert(false)
}


//SWITCH STATEMENT (PERCABANGAN)

switch(alertbox) {
    
  case 'riventus':
    alert(true);
    break;
    
  case 'woi':
    alert(true);
    break;
    
  case 'saputra':
    alert(true);
    break;
    
  default:
    
    alert(false);
}

//berikut adalah contoh NESTED PERCABANGAN (BERSARANG)

//IF STATEMENT NESTED (BERSARANG)
if(alertbox === 'riventus') {
  
    alert(true);
     
}else{
  
   if(alertbox == 'woi') {
     
       alert(true); 
     
   }else{
     
      if(alertbox === 'saputra') {
        
        alert (true);
        
      }else {
        
         alert (false);
      }
   }
}

//SWITCH STATEMENT (BERSARANG)
switch(alertbox) {
    
  case 'riventus':
  case 'woi':
  case 'saputra':
    
    alert(true);
    break;

  default:
    
    alert(false);
}
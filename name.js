
    document.getElementById('submit').addEventListener('click',(event)=>{
        event.preventDefault();
        let maleNames =['kwasi','kwadwo','kwabena','kwaku','yaw','kofi','kwame']
        let femaleNames =['Akosua','Adwoa','Abena','Akua','Yaa','Afua','Ama']
        console.log(maleNames[1])
       let date =document.getElementById('dob').value;
       let gender =document.getElementById('gender').value;
       console.log(gender)
       //console.log(date)
       
       let d =new Date(date).getDate();
       if (d<0 && d>31){
           console.log('invalid')

       }
       else{
           console.log('valid')
       }
       let newDate =new Date(date).getDay();
       console.log(newDate);
       if (newDate === 0){
           //console.log(maleNames[0])
           if (gender ==='male'){
              // console.log(maleNames[0])
               document.getElementById("name").innerHTML = maleNames[0];
           }
           else
           {
              // console.log(femaleNames[0])
                document.getElementById("name").innerHTML = femaleNames[0];
           }
       }
       else if (newDate === 1){
            if (gender === 'male'){
                document.getElementById("name").innerHTML =maleNames[1];
            }
            else
            {
                document.getElementById("name").innerHTML =femaleNames[1];
            }
        } 
        else if (newDate===2){
            if (gender==='male'){
                document.getElementById("name").innerHTML = maleNames[2];
            }
            else{
                document.getElementById("name").innerHTML=femaleNames[2];
            }
        }  
        else if (newDate ===3){
            if (gender==='male'){
                document.getElementById("name").innerHTML=maleNames[3];
            }
            else{
                document.getElementById("name").innerHTML=femaleNames[3];
            }
        }
        else if (newDate===4){
            if (gender=== 'male'){
                document.getElementById("name").innerHTML=maleNames[4];
            }
            else{
                document.getElementById("name").innerHTML=femaleNames[4]
            }
        }
        else if(newDate===5){
            if (gender ==='male'){
                document.getElementById("name").innerHTML=maleNames[5];
            }
            else{
                document.getElementById("name").innerHTML=femaleNames[5];
            }
        }
        else{
            if (gender ==='male'){
                document.getElementById("name").innerHTML=maleNames[6];
            }
            else{
                document.getElementById("name").innerHTML=femaleNames[6];
            }
        }
    })


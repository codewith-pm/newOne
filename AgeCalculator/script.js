
    const para = document.querySelector('.para')
    let toDay = new Date();
    let [currentYear, currentMonth, currentDate] = toDay.toISOString().split('T')[0].split('-')

function calculate(){
    let dateOfbirth = document.getElementById('birthDate').value
    console.log(dateOfbirth)
   
    let birth = new Date(dateOfbirth)
    const [birthYear, birthMonth, birthDate]=birth.toISOString().split('T')[0].split('-')
    let month, day;
    let year = currentYear - birthYear;

    if(currentMonth<birthMonth){
        year--;
        currentMonth= Number(currentMonth)
        currentMonth +=12
        month = currentMonth - birthMonth;
    }else{
        month = currentMonth - birthMonth;
    }

    if(currentDate<birthDate){
        month--;
        console.log(month)
        let excessDays= new Date(birthYear, birthMonth, 0).getDate()
        day = parseInt(currentDate) + parseInt(excessDays) - birthDate
    }else{
        day = currentDate - birthDate
    }

    console.log(year, month, day)
        para.textContent=`You are ${year} Years ${month} Months and ${day} Days old.`
    }



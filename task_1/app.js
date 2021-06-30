set_LocalStorage = () => {

    let username = document.getElementById('Name').value
    let fatherName = document.getElementById('Father_Name').value;
    let userGamil = document.getElementById('Gmail').value;
    let userNumber = document.getElementById('Number').value;
  
    user_list = {
  
      name: username,
      fatherName:fatherName,
      gmail:userGamil,
      phone:userNumber,
    }
  
    localStorage.setItem('user_data',JSON.stringify(user_list));
  
  }
  
  get_LocalStorage =  ()=> {
    
    let getUserList = localStorage.getItem('user_data');
    let convert = getUserList
    let resut = JSON.parse(convert)
    
    let user_name = document.getElementById('name')
    let user_fname = document.getElementById('fname')
    let user_gmail = document.getElementById('gmail')
    let user_phone = document.getElementById('phone')
    
    user_name.innerHTML = resut.name;
    user_fname.innerHTML = resut. fatherName;
    user_gmail.innerHTML = resut.gmail;
    user_phone.innerHTML = resut. phone;
    console.log (resut)
    
  }
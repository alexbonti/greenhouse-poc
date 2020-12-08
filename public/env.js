$(document).ready(function(){
  console.log('Ready')
  
  //bind the button
  $('#recordButton').click( () =>{
    $('#recordForm').submit( (e) => {
      e.preventDefault();

      const areaID = document.getElementById('areaID').value;
      const insectsAmount = document.getElementById('insectsAmount').value;
      const timeStamp = e.timeStamp;


      let data = {
        areaID,
        insectsAmount,
        timeStamp
      }

      $.get('/record/save', data, (result) => {
        alert(result);
      })
    })
  })
  

  //test get call
  // $.get('/test?user_name="Fantastic User"',(result)=>{
  //   console.log(result)
  // })


})

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

      $.post('/record', data, (result) => {
        $('#recordForm')[0].reset();
        alert(result);
      })
    })
  })
  

  //test get call
  // $.get('/test?user_name="Fantastic User"',(result)=>{
  //   console.log(result)
  // })


})

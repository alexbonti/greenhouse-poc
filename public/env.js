$(document).ready(function(){
  console.log('Ready')

  $('.modal').modal();

  //bind the button
  $('.recordButton').click( (e) =>{
      e.preventDefault();

      const areaID = e.target.id;
      const insectsAmount = document.getElementById(`${areaID}_insectsAmount`).value;
      const date = moment().format('LL');

      let data = {
        areaID,
        insectsAmount,
        date
      }

      // console.log(data);

      $.post('/record', data, (result) => {
        // console.log(result)
        if (result === 'success' ) {
          
        }
      })

      // window.location.replace('/dashboard');
  })


  
  $('#addAreaButton').click( () => {
    const areaID = document.getElementById('areaID').value
    // console.log(areaID)

    let data = {
      areaID
    };

    $.post('/record/createArea', data)

    location.reload();
    // , (result) => {
    //   alert(result);
    // })

  })


})

$(document).ready(function(){
  console.log('Ready')

  $('.modal').modal();

  //bind the button
  $('.recordButton').click( () =>{

      const areaID = document.getElementById('card-title').innerHTML.toString().trim();
      const insectsAmount = document.getElementById(`${areaID}_insectsAmount`).value;

      const date = moment().format('LL');

      // console.log()
      let data = {
        areaID,
        insectsAmount,
        date
      }

      // console.log(data);

      $.post('/record', data)

      location.reload();
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

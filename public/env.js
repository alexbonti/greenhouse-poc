$(document).ready(function(){
  console.log('Ready Test')

  $('.modal').modal();

  //bind the button

  $('.cardPod').click((e)=>{
    console.log(e.target)
    e.preventDefault();
    //alert(e.id)

  })

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

      $.post('/counter', data, (result) => {
        // console.log(result)
        if (result === 'success' ) {
          $('main').html(`
            <div class='preloader-wrapper big active'>
              <div class='spinner-layer spinner-blue-only'>
                <div class='circle-clipper left'>
                  <div class='circle'></div>
                </div><div class='gap-patch'>
                  <div class='circle'></div>
                </div><div class='circle-clipper right'>
                  <div class='circle'></div>
                </div>
              </div>
            </div>
          `);

          setTimeout(()=>{
            window.location.reload();
          },2000)
        }
      })

  })


  
  $('#addAreaButton').click( () => {
    const areaID = document.getElementById('areaID').value
    // console.log(areaID)

    let data = {
      areaID
    };

    $.post('/counter/createArea', data, (result) => {
      // console.log(result)
      if (result === 'success' ) {
        $('main').html(`
          <div class='preloader-wrapper big active'>
            <div class='spinner-layer spinner-blue-only'>
              <div class='circle-clipper left'>
                <div class='circle'></div>
              </div><div class='gap-patch'>
                <div class='circle'></div>
              </div><div class='circle-clipper right'>
                <div class='circle'></div>
              </div>
            </div>
          </div>
        `);

        setTimeout(()=>{
          window.location.reload();
        },2000)
      }
    })
  })

})

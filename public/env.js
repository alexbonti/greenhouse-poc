$(document).ready(function(){
  console.log('Ready Test')

  $('.modal').modal();

  //bind the button

  $('.cardPod').click((e)=>{
    let el=$(e.target)
    console.log(el.closest('.cardPod').attr('id'))
    e.preventDefault();
    //alert(e.id)

  })

  $('.recordButton').click( (e) =>{
      e.preventDefault();
    

      const _id = e.target.id;
      const insectsAmount = document.getElementById(`${_id}_insectsAmount`).value;
      const timeStamp = moment().unix();

      let data = {
        _id,
        insectsAmount,
        timeStamp
      }

    //  console.log(data);

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
          },1000)
        }
      })

  })


  
  $('#addAreaButton').click( () => {
    const podName = document.getElementById('podName').value
    // console.log(podName)

    let data = {
      podName
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

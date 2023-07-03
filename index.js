function addingEventListener() {
    const input = document.getElementById('input');
  
    input.addEventListener('click', function() {
      // Handle the event here
    });
  }
  

  function addingEventListener() {
    const input = document.getElementById('input');
  
    input.addEventListener('click', function() {
      alert('I was clicked!');
    });
  }


  function addingEventListener() {
    const input = document.getElementById('input');
  
    function clickAlert() {
      alert('I was clicked!');
    }
  
    input.addEventListener('click', clickAlert);
  }



  function addingEventListener() {
    const input = document.getElementById('input');
  
    function clickAlert() {
      alert('I was clicked!');
    }
  
    input.addEventListener('click', clickAlert);
  }
  
  addingEventListener();
  
  
  

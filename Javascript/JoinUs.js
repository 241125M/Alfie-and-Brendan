 document.getElementById('JoinEventFormID').addEventListener('submit', function(Prevent) {
    Prevent.preventDefault(); // This is to prevent actual POST Submission

    // Retrieve Form Values
    const JoinEventname = document.getElementById('JoinEventName').value;
    const JoinEventemail = document.getElementById('JoinEventEmail').value;
    const JoinEventtel = document.getElementById('JoinEventTel').value;
    const JoinEventevent = document.getElementById('JoinEventevent').value;

    // Display User Input back to User for Verification
    document.getElementById('JoinEventDataName').textContent = JoinEventname;
    document.getElementById('JoinEventDataEmail').textContent = JoinEventemail;
    document.getElementById('JoinEventDataTel').textContent = JoinEventtel;
    document.getElementById('JoinEventDataNameEvent').textContent = JoinEventevent;

    document.getElementById('EventFormData').classList.remove('d-none');
  });


   document.getElementById('JoinTeamFormID').addEventListener('submit', function(Prevent) {
    Prevent.preventDefault(); // This is to prevent actual POST Submission

    // Retrieve Form Values
    const JoinTeamname = document.getElementById('JoinTeamName').value;
    const JoinTeamemail = document.getElementById('JoinTeamEmail').value;
    const JoinTeamtel = document.getElementById('JoinTeamTel').value;

    // Display User Input back to User for Verification
    document.getElementById('JoinTeamDataName').textContent = JoinTeamname;
    document.getElementById('JoinTeamDataEmail').textContent = JoinTeamemail;
    document.getElementById('JoinTeamDataTel').textContent = JoinTeamtel;

    document.getElementById('JoinTeamFormData').classList.remove('d-none');
  });
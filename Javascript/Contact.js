 document.getElementById('ContactFormID').addEventListener('submit', function(Prevent) {
    Prevent.preventDefault(); // This is to prevent actual POST Submission

    // Retrieve Form Values
    const Contactname = document.getElementById('ContactFormName').value;
    const Contactemail = document.getElementById('ContactFormEmail').value;
    const Contactnumber = document.getElementById('ContactFormTel').value;
    const Contactsubject = document.getElementById('ContactFormSubject').value;
    const Contactenquiry = document.getElementById('ContactFormTextarea').value;

    // Display User Input back to User for Verification
    document.getElementById('ContactDataBackName').textContent = Contactname;
    document.getElementById('ContactDataBackEmail').textContent = Contactemail;
    document.getElementById('ContactDataBackNumber').textContent = Contactnumber;
    document.getElementById('ContactDataBackSubject').textContent = Contactsubject;


  const enquiryreturn = document.getElementById('ContactDataBackEnquiry');
  enquiryreturn.textContent = Contactenquiry;
  enquiryreturn.style.whiteSpace = 'pre-wrap'; 
  enquiryreturn.style.wordBreak = 'break-word' // To Ensure line break for Enquiry (Enquiry input is long)

    document.getElementById('ContactFormData').classList.remove('d-none');
  });
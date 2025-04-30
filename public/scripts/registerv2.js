// 🌵 Nevaeh & Marvin 4.30.2025 iss#26 LAYOUT#2


document.addEventListener('DOMContentLoaded', () => {
    // Show the “Specify” box only when “Other” is chosen:
    document.querySelectorAll('input[name="classification"]').forEach(radio => {
      radio.addEventListener('change', () => {
        document.getElementById('specifyClass').style.display =
          radio.value === 'Other' ? 'block' : 'none';
      });
    });
  
    // When “Yes, Submit” is clicked in the modal:
    const submitButton = document.getElementById('submitForm');
    const form = document.getElementById('registration-form');
  
    if (submitButton && form) {
      submitButton.addEventListener('click', () => {
        form.submit();
      });
    }
  
    // ---- research toggle handlers ----
  
    const hasResearchToggle        = document.getElementById('hasResearchToggle');
    const researchCont             = document.getElementById('researchCont');
    const canSubResearchCont       = document.getElementById('canSubResearchCont');
    const canSubResearchToggle     = document.getElementById('canSubResearchToggle');
  
    if (hasResearchToggle && researchCont && canSubResearchCont && canSubResearchToggle) {
      // show/hide the entire Research section
      hasResearchToggle.addEventListener('change', () => {
        researchCont.style.display = hasResearchToggle.checked ? 'block' : 'none';
  
        if (!hasResearchToggle.checked) {
          canSubResearchToggle.checked = false;
          canSubResearchCont.style.display = 'none';
        }
      });
  
      // show/hide the “ready to submit” container when its toggle is clicked
      canSubResearchToggle.addEventListener('change', () => {
        canSubResearchCont.style.display = canSubResearchToggle.checked ? 'block' : 'none';
      });
    }
  });
  
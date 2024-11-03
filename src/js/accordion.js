 let activeAccordion = null;

  function toggleAccordion(id) {
    const content = document.getElementById(`content-${id}`);
    const moreDetails = document.getElementById(`more-details-${id}`);
    const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';

    // Close any currently open accordion
    if (activeAccordion && activeAccordion !== id) {
      const activeContent = document.getElementById(`content-${activeAccordion}`);
      const activeMoreDetails = document.getElementById(`more-details-${activeAccordion}`);
      activeContent.style.maxHeight = '0px';
      activeMoreDetails.style.display = 'inline-block';
    }

    // Toggle the clicked accordion
    if (isOpen) {
      content.style.maxHeight = '0px';
      moreDetails.style.display = 'inline-block';
      activeAccordion = null;
    } else {
      content.style.maxHeight = content.scrollHeight + 'px'; // Set to scrollHeight for full expansion
      moreDetails.style.display = 'none';
      activeAccordion = id;
    }
  }
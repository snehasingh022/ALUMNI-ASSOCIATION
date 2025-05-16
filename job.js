function applyForJob(jobTitle) {
    alert("You have applied for the " + jobTitle + " position.");
  }

  function filterJobs() {
    // Get all job containers
    let jobContainers = document.querySelectorAll('.job-container');
    
    // Get selected job type filters
    let selectedTypes = Array.from(document.querySelectorAll('.filter-group input[type="checkbox"]:checked'))
                             .filter(input => input.value === "Full-Time" || input.value === "Part-Time" || input.value === "Internship")
                             .map(el => el.value);

    // Get selected department filters
    let selectedDepartments = Array.from(document.querySelectorAll('.filter-group input[type="checkbox"]:checked'))
                                   .filter(input => input.value === "Engineering" || input.value === "Marketing" || input.value === "Sales" || input.value === "HR")
                                   .map(el => el.value);
    
    // Get selected location filters
    let selectedLocations = Array.from(document.querySelectorAll('.filter-group input[type="checkbox"]:checked'))
                                 .filter(input => input.value === "New York" || input.value === "San Francisco" || input.value === "Remote")
                                 .map(el => el.value);
    
    // Filter jobs based on the selected filters
    jobContainers.forEach(job => {
      let jobType = job.dataset.type;
      let jobDept = job.dataset.department;
      let jobLoc = job.dataset.location;

      // Check if the job matches the selected filters
      let matchType = selectedTypes.length === 0 || selectedTypes.includes(jobType);
      let matchDept = selectedDepartments.length === 0 || selectedDepartments.includes(jobDept);
      let matchLoc = selectedLocations.length === 0 || selectedLocations.includes(jobLoc);

      // Show or hide the job based on the filter match
      if (matchType && matchDept && matchLoc) {
        job.style.display = 'block';
      } else {
        job.style.display = 'none';
      }
    });
  }
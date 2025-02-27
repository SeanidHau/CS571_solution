function submitApplication(e) {
    e.preventDefault(); // You can ignore this; prevents the default form submission!
    
    // 获取选择的工作
    const selectedJob = document.querySelector('input[name="job"]:checked');
    
    // 检查是否选择了工作
    if (!selectedJob) {
        alert("Please select a job!");
    } else {
        const jobType = selectedJob.value;
        alert("Thank you for applying to be a " + jobType + "!");
    }
}
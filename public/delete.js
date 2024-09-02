import { message, token } from "./index.js";
import { showJobs } from "./jobs.js";

let deleteButton = null;

export const handleDelete = async (jobId) => {
  let method = "DELETE";
  let url = `/api/v1/jobs/${jobId}`;      
  try {
    const response = await fetch(url, {
      method: method,
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  
    if (response.status === 204) {
        // a 204 is expected for a successful delete
        message.textContent = "The job entry was deleted.";
        showJobs();
    } else {
      message.textContent = resp.msg;
    }
  } catch (err) {
    console.log(err);
    message.textContent = "A communication error occurred.";
  }
}
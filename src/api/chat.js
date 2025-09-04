const API_URL = "http://localhost:5001/api/chat"; // temp test

const sendMessageToApi = async (message) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });

    const data = await response.json();
    return data.reply; // return from server.js
  } catch (error) {
    console.error("Error sending message:", error);
    return "Oops, something went wrong.";
  }
};

export default sendMessageToApi;

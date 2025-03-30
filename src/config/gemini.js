import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";


const apiKey = "AIzaSyDwLXQJqrv4M6aMYiqVg0d9a80SuKS6_no";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-pro-exp-03-25",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 65536,
  responseModalities: [
  ],
  responseMimeType: "text/plain",
};

async function run(prompt) {
  const chatSession = model.startChat({
    generationConfig,
    history: [
    ],
  });

  const result = await chatSession.sendMessage(prompt);
  // TODO: Following code needs to be updated for client-side apps.

  console.log(result.response.text());
}

export default run;
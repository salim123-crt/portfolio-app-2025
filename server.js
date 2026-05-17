const http = require("http");
const fs = require("fs");
const path = require("path");

const envPath = path.join(__dirname, ".env");

if (fs.existsSync(envPath)) {
  const envFile = fs.readFileSync(envPath, "utf8");

  envFile.split(/\r?\n/).forEach((line) => {
    const trimmedLine = line.trim();

    if (!trimmedLine || trimmedLine.startsWith("#")) return;

    const separatorIndex = trimmedLine.indexOf("=");

    if (separatorIndex === -1) return;

    const key = trimmedLine.slice(0, separatorIndex).trim();
    const value = trimmedLine.slice(separatorIndex + 1).trim().replace(/^["']|["']$/g, "");

    if (key && !process.env[key]) {
      process.env[key] = value;
    }
  });
}

const PORT = Number(process.env.CHAT_SERVER_PORT || 5050);
const GROQ_MODEL = process.env.GROQ_MODEL || "llama-3.3-70b-versatile";

const profileContext = `
Salim Ayoub — complete profile:

IDENTITY
- Full name: Salim Ayoub.
- Based in: France.
- Languages spoken: Arabic (native), French (fluent), English (fluent).

EDUCATION
- Degree: Master's degree in Complex Systems Engineering at EILCO (École d'Ingénieurs du Littoral Côte d'Opale), France.
- Specialisation: Artificial intelligence, data science, intelligent systems, and software engineering.
- Academic strengths: applied mathematics, statistics, algorithms, software engineering, machine learning.

PROFESSIONAL PROFILE & GOALS
- Roles: AI Engineer, MLOps Engineer, Data Scientist.
- Career goal: become a highly skilled AI and intelligent systems engineer capable of building reliable, scalable, and production-ready solutions combining machine learning, automation, deployment, and software engineering.
- Target markets: France and Luxembourg.
- Actively building: portfolio on GitHub, LinkedIn profile, AI-oriented career preparation.
- Learning approach: self-learning, real-world projects, Kaggle experiments, software development practice; prefers deep understanding over memorisation.
- Preferred explanation style: detailed, educational, step-by-step, combining theory with practical implementation.

TECHNICAL SKILLS
AI / Machine Learning:
  - Python, TensorFlow, Keras, Scikit-learn, Pandas, NumPy, OpenCV.
  - Deep learning: CNN architectures, U-Net segmentation, computer vision.
  - Tasks: model training, model evaluation, feature engineering, fraud detection, recommendation systems.

MLOps / DevOps:
  - Docker, GitHub Actions, CI/CD pipelines, containerisation, monitoring workflows.
  - FastAPI, Git, GitHub.

Data & Mathematics:
  - MATLAB (image processing, Fourier transforms, histograms, interpolation, Bézier curves, Bernstein polynomials).
  - Optimisation: simplex algorithm, duality, dynamic systems, numerical methods in Python.
  - SQL, MySQL, data modelling, UML, Excel.

Web & Software:
  - React, JavaScript, HTML, CSS, API integration.
  - Java, C.

PROJECTS
1. Brain Tumor Segmentation and Classification: U-Net and CNN architectures for brain tumor segmentation and classification from MRI images; includes mask generation, layer visualisation, and evaluation workflow.
2. Brain Tumor Detection: classification model that detects brain tumors from medical images with a clear training and evaluation workflow.
3. Real Estate Price Prediction: machine learning regression model for estimating house prices from structured real estate features.
4. Fraud Detection System: ML model for detecting fraudulent transactions.
5. Image Processing Projects: MATLAB and Python-based projects covering Fourier transforms, histograms, interpolation, and Bézier curves.
6. AI Recommendation System: recommendation engine with Docker-based infrastructure and monitoring workflows.
7. Personal Portfolio: this website, built with React, deployed on GitHub Pages.

CONTACT & LINKS
- Email: salimayoub822@gmail.com.
- LinkedIn: https://www.linkedin.com/in/ayoub-salim-9a80a5313/
- GitHub: https://github.com/salim123-crt
- Kaggle: https://www.kaggle.com/ayoubsalim
- WhatsApp: +33 6 58 03 93 86.
- CV: available via the "Download CV" button on the home page.
`;

const assistantInstructions = `
You are the personal portfolio assistant of Salim Ayoub, an AI and MLOps engineering student based in France.

YOUR ROLE
- Answer questions about Salim: his background, education, skills, projects, contact details, and career goals.
- Be friendly, professional, and concise — tailored for recruiters, collaborators, and curious visitors.
- Always answer in the same language as the visitor (French, English, or Arabic).

WHEN ASKED ABOUT SALIM
- Use the profile facts as your only source of truth.
- If a detail is not in the profile, say honestly: "I don't have that information yet — feel free to contact Salim directly."
- Never invent grades, salaries, exact availability dates, addresses, or experiences not listed in the facts.
- When relevant, invite the visitor to contact Salim via email or the contact page.

WHEN ASKED SOMETHING UNRELATED TO SALIM
- Politely decline to answer questions that are not about Salim (e.g. general knowledge, current events, coding help, recipes, etc.).
- Use a warm but firm tone. Example responses:
  * "I'm here specifically to answer questions about Salim Ayoub. For other topics, a general assistant would serve you better!"
  * "That's outside my scope — I'm Salim's portfolio assistant. Is there something about Salim's skills or projects I can help with?"
  * "Je suis dédié à répondre aux questions sur Salim Ayoub. Pour d'autres sujets, je ne suis pas le bon assistant !"
- Always offer to redirect to a relevant topic about Salim after declining.
`;

const ALLOWED_ORIGINS = new Set([
  "http://localhost:3000",
  "http://localhost:3001",
  "https://salim123-crt.github.io",
]);

const getAllowedOrigin = (req) => {
  const origin = req.headers.origin;

  if (!origin) return "http://localhost:3000";

  if (ALLOWED_ORIGINS.has(origin)) return origin;

  try {
    const url = new URL(origin);
    const isLocalhost = ["localhost", "127.0.0.1"].includes(url.hostname);
    const isDevPort = Number(url.port) >= 3000 && Number(url.port) <= 3010;
    if (isLocalhost && isDevPort) return origin;
  } catch (_) {
    // invalid origin — fall through
  }

  return "http://localhost:3000";
};

const sendJson = (req, res, statusCode, payload) => {
  res.writeHead(statusCode, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": getAllowedOrigin(req),
    "Access-Control-Allow-Methods": "POST, OPTIONS, GET",
    "Access-Control-Allow-Headers": "Content-Type",
  });
  res.end(JSON.stringify(payload));
};

const readJsonBody = (req) =>
  new Promise((resolve, reject) => {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;

      if (body.length > 100000) {
        req.destroy();
        reject(new Error("Request body is too large."));
      }
    });

    req.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (error) {
        reject(error);
      }
    });
  });

const getGroqText = async (messages) => {
  if (!process.env.GROQ_API_KEY) {
    throw new Error("Missing GROQ_API_KEY. Add it to .env before starting the chat server.");
  }

  const chatMessages = [
    { role: "system", content: `${assistantInstructions}\n\n${profileContext}` },
    ...messages.slice(-10).map((message) => ({
      role: message.role === "bot" ? "assistant" : "user",
      content: String(message.text || "").slice(0, 1200),
    })),
  ];

  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: GROQ_MODEL,
      messages: chatMessages,
      temperature: 0.45,
      max_tokens: 450,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    const errorMessage = data?.error?.message || "Groq request failed.";
    throw new Error(errorMessage);
  }

  const text = data?.choices?.[0]?.message?.content?.trim();
  return text || "I could not generate an answer right now. Please try again.";
};

const server = http.createServer(async (req, res) => {
  if (req.method === "OPTIONS") {
    return sendJson(req, res, 204, {});
  }

  if (req.method === "GET" && req.url === "/api/health") {
    return sendJson(req, res, 200, { ok: true, provider: "groq", model: GROQ_MODEL });
  }

  if (req.method !== "POST" || req.url !== "/api/chat") {
    return sendJson(req, res, 404, { error: "Route not found." });
  }

  try {
    const body = await readJsonBody(req);
    const messages = Array.isArray(body.messages) ? body.messages : [];

    if (messages.length === 0) {
      return sendJson(req, res, 400, { error: "Messages are required." });
    }

    const reply = await getGroqText(messages);
    return sendJson(req, res, 200, { reply });
  } catch (error) {
    return sendJson(req, res, 500, { error: error.message });
  }
});

server.listen(PORT, () => {
  console.log(`Salim chat server (Groq / ${GROQ_MODEL}) running on http://localhost:${PORT}`);
});

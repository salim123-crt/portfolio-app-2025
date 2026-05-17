import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronDown } from "react-icons/hi";
import { FaRobot, FaPaperPlane } from "react-icons/fa";
import "./style.scss";

const GROQ_API_KEY = process.env.REACT_APP_GROQ_API_KEY || "";
const GROQ_MODEL   = process.env.REACT_APP_GROQ_MODEL   || "llama-3.3-70b-versatile";
const GROQ_URL     = "https://api.groq.com/openai/v1/chat/completions";

const SYSTEM_PROMPT = `You are speaking as Salim Ayoub himself — answer in first person ("I", "my", "me") as if Salim is personally responding to visitors on his portfolio.

STRICT RULES — never break these:
1. ONLY answer questions about Salim Ayoub, his skills, projects, education, contact, or this portfolio. NOTHING else.
2. If the question is not about Salim — even slightly — reply ONLY with: "I'm here exclusively to answer questions about Salim Ayoub. Feel free to ask me about his skills, projects, or how to contact him!" (translate to the visitor's language). Do NOT answer the question at all.
3. Never answer general knowledge, coding help, current events, jokes, math problems, or anything unrelated to Salim. Refuse every time without exception.
4. Professional, confident, and warm tone — like Salim speaking directly to a recruiter.
5. Maximum 3 sentences OR a clean bullet list (max 5 items). Never write long paragraphs.
6. Always reply in the visitor's language (French, English, or Arabic).

PORTFOLIO NAVIGATION:
• Home (/): my introduction, Hire me button, Download CV (PDF), social links
• About (/about): my background, education, and personal journey
• Skills (/skills): all my technical skills with visual progress cards
• Portfolio (/portfolio): all my projects with tech stack and GitHub links
• Contact (/contact): contact form to reach me directly

HOW TO REACH ME:
• Email: salimayoub822@gmail.com
• WhatsApp: +33 6 58 03 93 86
• LinkedIn: https://www.linkedin.com/in/ayoub-salim-9a80a5313/
• GitHub: https://github.com/salim123-crt
• Kaggle: https://www.kaggle.com/ayoubsalim
• CV: downloadable from the Home page

MY PROFILE:
• I am Salim Ayoub, an AI & MLOps Engineering student based in France
• Master's in Complex Systems Engineering at EILCO, France
• Targeting roles: AI Engineer, MLOps Engineer, Data Scientist — France or Luxembourg
• Languages: Arabic (native), French (fluent), English (fluent)

MY TECHNICAL SKILLS:
• AI / ML: Python, TensorFlow, Keras, Scikit-learn, PyTorch, OpenCV, CNNs, U-Net, computer vision, NLP
• MLOps / DevOps: Docker, GitHub Actions, CI/CD pipelines, FastAPI, Git
• Data & Math: Pandas, NumPy, SQL, MySQL, MATLAB, Fourier transforms, optimisation
• Web & Software: React, JavaScript, HTML, CSS, Java, C

MY PROJECTS:
• Brain Tumor Segmentation & Classification — U-Net + CNN on MRI images
• Brain Tumor Detection — full classification pipeline with evaluation
• Real Estate Price Prediction — ML regression on structured housing data
• Fraud Detection System — ML model for transaction fraud
• Image Processing — MATLAB & Python: Fourier, histograms, Bézier curves
• AI Recommendation System — Docker-based engine with monitoring workflow
• This Portfolio — built with React, deployed on GitHub Pages`;

const WELCOME = "Hi! I'm Salim's assistant 👋\nAsk me anything about his skills, projects, CV, or how to contact him.";

const SUGGESTIONS = ["Who is Salim?", "His skills", "His projects", "Download CV", "Contact him", "Hire him"];

const HIRE_MESSAGE = `Here's a ready-to-send email you can copy:

To: salimayoub822@gmail.com
Subject: Job Opportunity — I'd like to hire you

Hello Salim,

I visited your portfolio and I'm impressed by your work in AI and MLOps.

I'd love to discuss a potential opportunity with you.

Looking forward to hearing from you.

Best regards,
[Your name]
[Your company / position]`;

const callGroq = async (messages) => {
  if (!GROQ_API_KEY) throw new Error("API key missing — check .env");

  const groqMessages = [
    { role: "system", content: SYSTEM_PROMPT },
    ...messages.slice(-8).map((m) => ({
      role: m.role === "bot" ? "assistant" : "user",
      content: String(m.text || "").slice(0, 800),
    })),
  ];

  const response = await fetch(GROQ_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${GROQ_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: GROQ_MODEL,
      messages: groqMessages,
      temperature: 0.3,
      max_tokens: 200,
    }),
  });

  const data = await response.json();
  if (!response.ok) throw new Error(data?.error?.message || "Groq error");
  return data.choices?.[0]?.message?.content?.trim() || "Sorry, try again.";
};

const Dots = () => (
  <div className="chatbot__bubble chatbot__bubble--bot chatbot__bubble--typing">
    <span /><span /><span />
  </div>
);

const ChatBot = () => {
  const [isOpen, setIsOpen]     = useState(true);   // open by default
  const [messages, setMessages] = useState([{ role: "bot", text: WELCOME }]);
  const [input, setInput]       = useState("");
  const [loading, setLoading]   = useState(false);
  const bottomRef               = useRef(null);
  const inputRef                = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 150);
  }, [isOpen]);

  const send = async (text) => {
    const q = (text || input).trim();
    if (!q || loading) return;

    const next = [...messages, { role: "user", text: q }];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const reply = await callGroq(next);
      setMessages((prev) => [...prev, { role: "bot", text: reply }]);
    } catch (err) {
      setMessages((prev) => [...prev, { role: "bot", text: `Erreur : ${err.message}` }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chatbot">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chatbot__window"
            initial={{ opacity: 0, y: 28, scale: 0.93 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 28, scale: 0.93 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
          >
            {/* Header */}
            <div className="chatbot__header">
              <div className="chatbot__header-info">
                <span className="chatbot__header-avatar">
                  <FaRobot size={16} />
                </span>
                <div>
                  <p className="chatbot__header-name">Ask about Salim</p>
                  <p className="chatbot__header-sub">Portfolio assistant · Online</p>
                </div>
              </div>
              {/* Minimize button */}
              <button
                className="chatbot__minimize-btn"
                onClick={() => setIsOpen(false)}
                aria-label="Minimize chat"
              >
                <HiChevronDown size={22} />
              </button>
            </div>

            {/* Messages */}
            <div className="chatbot__messages">
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  className={`chatbot__bubble chatbot__bubble--${m.role}`}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  {m.text}
                </motion.div>
              ))}
              {loading && <Dots />}
              <div ref={bottomRef} />
            </div>

            {/* Suggestions */}
            <div className="chatbot__suggestions">
              {SUGGESTIONS.map((q) =>
                q === "Hire him" ? (
                  <button
                    key={q}
                    className="chatbot__hire-btn"
                    disabled={loading}
                    onClick={() =>
                      setMessages((prev) => [...prev, { role: "bot", text: HIRE_MESSAGE }])
                    }
                  >
                    ✉ Hire him
                  </button>
                ) : (
                  <button key={q} onClick={() => send(q)} disabled={loading}>
                    {q}
                  </button>
                )
              )}
            </div>

            {/* Input */}
            <form
              className="chatbot__input-row"
              onSubmit={(e) => { e.preventDefault(); send(); }}
            >
              <input
                ref={inputRef}
                type="text"
                className="chatbot__input"
                placeholder="Ask a question…"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={loading}
              />
              <button
                type="submit"
                className="chatbot__send-btn"
                disabled={loading || !input.trim()}
                aria-label="Send"
              >
                <FaPaperPlane size={14} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating robot button — always visible, reopens the chat when minimized */}
      <motion.button
        className={`chatbot__toggle${isOpen ? " chatbot__toggle--open" : ""}`}
        onClick={() => setIsOpen((v) => !v)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.92 }}
        aria-label={isOpen ? "Minimize chat" : "Open chat assistant"}
      >
        <FaRobot size={22} />
        {!isOpen && <span className="chatbot__toggle-dot" />}
      </motion.button>
    </div>
  );
};

export default ChatBot;

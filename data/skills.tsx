import { Code2, Layers, Brain, Cloud, Database } from "lucide-react"

export const skillsData = {
  badges: [
    { name: "Python", icon: <Code2 className="w-5 h-5 mr-2" /> },
    { name: "React", icon: <Layers className="w-5 h-5 mr-2" /> },
    { name: "AWS", icon: <Cloud className="w-5 h-5 mr-2" /> },
    { name: "AI Tools", icon: <Brain className="w-5 h-5 mr-2" /> },
    { name: "Docker", icon: <Layers className="w-5 h-5 mr-2" /> },
    { name: "Next.js", icon: <Layers className="w-5 h-5 mr-2" /> },
    { name: "TypeScript", icon: <Code2 className="w-5 h-5 mr-2" /> },
    { name: "SQL", icon: <Database className="w-5 h-5 mr-2" /> },
    { name: "LangChain", icon: <Brain className="w-5 h-5 mr-2" /> },
    { name: "RESTful APIs", icon: <Code2 className="w-5 h-5 mr-2" /> },
  ],
  detailed: {
    "Programming Languages": ["C", "C++", "Python", "Java", "HTML/CSS", "JavaScript", "TypeScript", "SQL", "MySQL"],
    "Frameworks & Libraries": [
      "Next.js",
      "React Native",
      "Git",
      "Flask",
      "RESTful APIs",
      "Pandas",
      "NumPy",
      "Seaborn",
      "Matplotlib",
      "Scikit-Learn",
      "tensorflow"
    ],
    "AI/ML Technologies": ["Llama (3.1, 3.2)", "LangChain", "IBM Watson X", "Watson Assistant", "LLM APIs", "RAG", "Gradio", "Sreamlit", "LangChain", "Hugging Face", "Ollama", "LLMs"],
    "Cloud & Tools": ["AWS", "Docker", "VPC", "IAM", "CloudWatch", "SNS", "AWS RDS", "AWS CloudFormation", "AWS CLI", "AWS Lambda"],
  },
}

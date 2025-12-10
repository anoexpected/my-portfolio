'use client';

import YouTubeEmbed from '@/components/ui/YouTubeEmbed';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { portfolioContent } from '@/config/content';
import { useTheme } from '@/providers/ThemeProvider';
import { cn } from '@/utils/classNames';
import { ExternalLink, Calendar, CheckCircle2, Lightbulb, Target } from 'lucide-react';

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { theme } = useTheme();
  const projectId = params.id as string;
  const project = portfolioContent.projects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className={cn(
        "min-h-screen flex items-center justify-center transition-colors duration-300",
        theme === 'dark' ? "bg-dark-navy" : "bg-light-bg"
      )}>
        <div className="text-center">
          <h1 className={cn(
            "text-4xl font-bold mb-4",
            theme === 'dark' ? "text-text-primary-dark" : "text-text-primary-light"
          )}>
            Project Not Found
          </h1>
          <Link 
            href="/#projects" 
            className={cn(
              "hover:underline",
              theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark"
            )}
          >
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const hasDetailedInfo = project.overview && project.background && project.architecture;
  const isFloatChat = projectId === 'floatchat';
  const isWalmartCoPilot = projectId === 'walmart-copilot';
  const isMedlink = projectId === 'medlink';
  const isPaperAI = projectId === 'paperai';

  // Special FloatChat layout
  if (isFloatChat) {
    return (
      <div className={cn(
        "min-h-screen transition-colors duration-300",
        theme === 'dark' ? "bg-dark-navy" : "bg-light-bg"
      )}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header Section */}
          <div className="mb-6">
            <Link 
              href="/#projects" 
              className={cn(
                "flex items-center gap-2 mb-8 transition-colors hover:underline",
                theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark"
              )}
            >
              ← Back to Projects
            </Link>
            
            <h1 className={cn(
              "text-5xl md:text-6xl font-bold mb-4",
              theme === 'dark' ? "text-text-primary-dark" : "text-text-primary-light"
            )}>
              FloatChat
            </h1>
            
            <p className={cn(
              "text-xl md:text-2xl mb-6",
              theme === 'dark' ? "text-gray-300" : "text-gray-700"
            )}>
              AI-Powered Conversational Interface for ARGO Ocean Data Discovery and Visualization
            </p>
            
            <div className={cn(
              "flex gap-3 text-sm",
              theme === 'dark' ? "text-gray-400" : "text-gray-600"
            )}>
              <span>{project.timeline || "January 2025"}</span>
              <span>•</span>
              <span>AI · Data Science · Ocean Research</span>
            </div>
          </div>

          {/* YouTube Video */}
          {project.demo?.youtubeVideoId && (
            <div className="mb-16">
              <YouTubeEmbed
                videoId={project.demo.youtubeVideoId}
                title={`${project.title} - Demo`}
                caption={project.demo.caption}
              />
            </div>
          )}

          {/* Overview Section */}
          <section className="mb-16">
            <h2 className={cn(
              "text-3xl font-bold mb-6",
              theme === 'dark' ? "text-text-primary-dark" : "text-text-primary-light"
            )}>
              Overview
            </h2>
            
            <p className={cn(
              "text-lg leading-relaxed mb-4",
              theme === 'dark' ? "text-gray-300" : "text-gray-700"
            )}>
              FloatChat is an <span className="italic">intelligent conversational AI system</span> that revolutionizes how researchers interact with ARGO float data. The platform addresses a critical gap in oceanographic research: making vast, complex datasets <span className="italic">accessible, understandable, and actionable</span> through natural language.
            </p>
            
            <p className={cn(
              "text-lg leading-relaxed",
              theme === 'dark' ? "text-gray-300" : "text-gray-700"
            )}>
              By combining a <span className={cn("font-semibold", theme === 'dark' ? "text-white" : "text-gray-900")}>RAG-based AI chatbot</span> with <span className={cn("font-semibold", theme === 'dark' ? "text-white" : "text-gray-900")}>interactive data visualizations</span> and <span className={cn("font-semibold", theme === 'dark' ? "text-white" : "text-gray-900")}>real-time dashboards</span>, FloatChat enables users to query complex oceanographic data conversationally and receive instant, context-aware insights with supporting visualizations.
            </p>
          </section>

          {/* The Problem Section */}
          <section className="mb-16">
            <h2 className={cn(
              "text-3xl font-bold mb-6",
              theme === 'dark' ? "text-text-primary-dark" : "text-text-primary-light"
            )}>
              The Problem
            </h2>
            
            <p className={cn(
              "text-lg leading-relaxed mb-4",
              theme === 'dark' ? "text-gray-300" : "text-gray-700"
            )}>
              Working with oceanographic data, I discovered that researchers face significant barriers when accessing ARGO float measurements:
            </p>
            
            <ul className={cn(
              "space-y-3 text-lg ml-6 mb-6",
              theme === 'dark' ? "text-gray-300" : "text-gray-700"
            )}>
              <li className="flex items-start">
                <span className={cn("mr-3", theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark")}>•</span>
                <span><span className={cn("font-semibold", theme === 'dark' ? "text-white" : "text-gray-900")}>Complex data structures</span> requiring specialized knowledge to navigate FTP repositories</span>
              </li>
              <li className="flex items-start">
                <span className={cn("mr-3", theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark")}>•</span>
                <span><span className={cn("font-semibold", theme === 'dark' ? "text-white" : "text-gray-900")}>Time-intensive queries</span> through traditional interfaces and command-line tools</span>
              </li>
              <li className="flex items-start">
                <span className={cn("mr-3", theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark")}>•</span>
                <span><span className={cn("font-semibold", theme === 'dark' ? "text-white" : "text-gray-900")}>Lack of intuitive visualization</span> tools for spatial and temporal ocean data</span>
              </li>
              <li className="flex items-start">
                <span className={cn("mr-3", theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark")}>•</span>
                <span><span className={cn("font-semibold", theme === 'dark' ? "text-white" : "text-gray-900")}>Steep learning curve</span> for students and researchers new to oceanography</span>
              </li>
            </ul>
            
            <p className={cn(
              "text-lg leading-relaxed",
              theme === 'dark' ? "text-gray-300" : "text-gray-700"
            )}>
              These challenges slow down critical research on ocean warming, salinity changes, and climate patterns. I built FloatChat to <span className="italic">democratize access to oceanographic data</span> by providing an intelligent, conversational interface that makes this data accessible to anyone.
            </p>
          </section>

          {/* Architecture Section */}
          <section className="mb-16">
            <h2 className={cn(
              "text-3xl font-bold mb-6",
              theme === 'dark' ? "text-text-primary-dark" : "text-text-primary-light"
            )}>
              Architecture & Technical Approach
            </h2>
            
            <p className={cn(
              "text-lg leading-relaxed mb-6",
              theme === 'dark' ? "text-gray-300" : "text-gray-700"
            )}>
              FloatChat is built on a modern, scalable architecture designed for both performance and accuracy:
            </p>
            
            <div className="mb-8">
              <h3 className={cn(
                "text-2xl font-semibold mb-4",
                theme === 'dark' ? "text-white" : "text-gray-900"
              )}>
                Core Components
              </h3>
              
              <div className={cn(
                "space-y-4 text-lg",
                theme === 'dark' ? "text-gray-300" : "text-gray-700"
              )}>
                <div className={cn(
                  "border-l-2 pl-4",
                  theme === 'dark' ? "border-cyan-primary" : "border-cyan-dark"
                )}>
                  <h4 className={cn(
                    "font-semibold mb-2",
                    theme === 'dark' ? "text-white" : "text-gray-900"
                  )}>
                    RAG-Powered Chatbot
                  </h4>
                  <p>Leverages <span className={cn("font-mono", theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark")}>Groq LLM (Qwen2.5-32B)</span> with Retrieval-Augmented Generation to provide accurate, context-aware responses. The system uses <span className={cn("font-mono", theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark")}>ChromaDB</span> for efficient vector storage and <span className={cn("font-mono", theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark")}>PostgreSQL</span> for structured float metadata.</p>
                </div>
                
                <div className={cn(
                  "border-l-2 pl-4",
                  theme === 'dark' ? "border-cyan-primary" : "border-cyan-dark"
                )}>
                  <h4 className={cn(
                    "font-semibold mb-2",
                    theme === 'dark' ? "text-white" : "text-gray-900"
                  )}>
                    Data Pipeline
                  </h4>
                  <p>Automated ingestion from ARGO global repositories (ftp.ifremer.fr) and Indian Argo Project (INCOIS). Custom data cleaning modules handle inconsistencies, while embedding modules process metadata for semantic search.</p>
                </div>
                
                <div className={cn(
                  "border-l-2 pl-4",
                  theme === 'dark' ? "border-cyan-primary" : "border-cyan-dark"
                )}>
                  <h4 className={cn(
                    "font-semibold mb-2",
                    theme === 'dark' ? "text-white" : "text-gray-900"
                  )}>
                    Interactive Dashboards
                  </h4>
                  <p>Built with <span className={cn("font-mono", theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark")}>Streamlit</span>, featuring geographic float maps powered by <span className={cn("font-mono", theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark")}>Folium</span>, time-series analysis, and vertical profile visualizations. Dashboards update dynamically based on user queries and selections.</p>
                </div>
              </div>
            </div>

            {/* Architecture Image */}
            {project.architectureImage && (
              <div className={cn(
                "my-8 rounded-lg overflow-hidden border",
                theme === 'dark' ? "border-gray-700" : "border-gray-300"
              )}>
                <Image 
                  src={project.architectureImage} 
                  alt="FloatChat System Architecture"
                  width={1200}
                  height={600}
                  className="w-full"
                />
                <p className={cn(
                  "text-center text-sm mt-2",
                  theme === 'dark' ? "text-gray-400" : "text-gray-600"
                )}>
                  System architecture: data ingestion, RAG pipeline, and visualization layer
                </p>
              </div>
            )}
            
            <div className="mt-8">
              <h3 className={cn(
                "text-2xl font-semibold mb-4",
                theme === 'dark' ? "text-white" : "text-gray-900"
              )}>
                Backend API
              </h3>
              <p className={cn(
                "text-lg leading-relaxed",
                theme === 'dark' ? "text-gray-300" : "text-gray-700"
              )}>
                <span className={cn("font-mono", theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark")}>FastAPI</span> powers the backend with RESTful endpoints for data retrieval, query processing, and orchestration between the LLM, vector database, and visualization components. The API handles real-time similarity search and response generation with sub-second latency.
              </p>
            </div>
          </section>

          {/* Key Features Section */}
          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <section className="mb-16">
              <h2 className={cn(
                "text-3xl font-bold mb-6",
                theme === 'dark' ? "text-text-primary-dark" : "text-text-primary-light"
              )}>
                Key Features
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {project.keyFeatures.map((feature, idx) => (
                  <div 
                    key={idx}
                    className={cn(
                      "border rounded-lg p-6",
                      theme === 'dark' 
                        ? "bg-gray-800/50 border-gray-700" 
                        : "bg-gray-50 border-gray-300"
                    )}
                  >
                    <h3 className={cn(
                      "text-xl font-semibold mb-3",
                      theme === 'dark' ? "text-white" : "text-gray-900"
                    )}>
                      {feature.title}
                    </h3>
                    <p className={cn(
                      theme === 'dark' ? "text-gray-300" : "text-gray-700"
                    )}>
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Challenges & Solutions Section */}
          {project.challenges && project.challenges.length > 0 && (
            <section className="mb-16">
              <h2 className={cn(
                "text-3xl font-bold mb-6",
                theme === 'dark' ? "text-text-primary-dark" : "text-text-primary-light"
              )}>
                Challenges & Solutions
              </h2>
              
              <div className="space-y-6">
                {project.challenges.map((challenge, idx) => {
                  if (typeof challenge === 'string') {
                    // Fallback for old string format
                    return (
                      <div key={idx} className={cn(
                        "border-l-4 pl-6",
                        theme === 'dark' ? "border-cyan-primary" : "border-cyan-dark"
                      )}>
                        <p className={cn(
                          "text-lg",
                          theme === 'dark' ? "text-gray-300" : "text-gray-700"
                        )}>
                          {challenge}
                        </p>
                      </div>
                    );
                  }
                  return (
                    <div 
                      key={idx} 
                      className={cn(
                        "border-l-4 pl-6",
                        theme === 'dark' ? "border-cyan-primary" : "border-cyan-dark"
                      )}
                    >
                      <h3 className={cn(
                        "text-xl font-semibold mb-2",
                        theme === 'dark' ? "text-white" : "text-gray-900"
                      )}>
                        {challenge.title}
                      </h3>
                      <p className={cn(
                        "text-lg mb-2",
                        theme === 'dark' ? "text-gray-300" : "text-gray-700"
                      )}>
                        <span className={cn("font-semibold", theme === 'dark' ? "text-gray-200" : "text-gray-800")}>Challenge:</span> {challenge.challenge}
                      </p>
                      <p className={cn(
                        "text-lg",
                        theme === 'dark' ? "text-gray-300" : "text-gray-700"
                      )}>
                        <span className={cn("font-semibold", theme === 'dark' ? "text-gray-200" : "text-gray-800")}>Solution:</span> {challenge.solution}
                      </p>
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* Impact & Results Section */}
          <section className="mb-16">
            <h2 className={cn(
              "text-3xl font-bold mb-6",
              theme === 'dark' ? "text-text-primary-dark" : "text-text-primary-light"
            )}>
              Impact & Results
            </h2>
            
            <p className={cn(
              "text-lg leading-relaxed mb-6",
              theme === 'dark' ? "text-gray-300" : "text-gray-700"
            )}>
              FloatChat demonstrates how AI can bridge the gap between complex scientific data and intuitive user interfaces:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className={cn(
                "text-center p-6 rounded-lg border",
                theme === 'dark' 
                  ? "bg-gray-800/30 border-gray-700" 
                  : "bg-gray-50 border-gray-300"
              )}>
                <div className={cn(
                  "text-4xl font-bold mb-2",
                  theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark"
                )}>
                  60%
                </div>
                <div className={cn(
                  theme === 'dark' ? "text-gray-300" : "text-gray-700"
                )}>
                  Faster data discovery vs traditional FTP browsing
                </div>
              </div>
              
              <div className={cn(
                "text-center p-6 rounded-lg border",
                theme === 'dark' 
                  ? "bg-gray-800/30 border-gray-700" 
                  : "bg-gray-50 border-gray-300"
              )}>
                <div className={cn(
                  "text-4xl font-bold mb-2",
                  theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark"
                )}>
                  &lt;2s
                </div>
                <div className={cn(
                  theme === 'dark' ? "text-gray-300" : "text-gray-700"
                )}>
                  Average response time for complex queries
                </div>
              </div>
              
              <div className={cn(
                "text-center p-6 rounded-lg border",
                theme === 'dark' 
                  ? "bg-gray-800/30 border-gray-700" 
                  : "bg-gray-50 border-gray-300"
              )}>
                <div className={cn(
                  "text-4xl font-bold mb-2",
                  theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark"
                )}>
                  10K+
                </div>
                <div className={cn(
                  theme === 'dark' ? "text-gray-300" : "text-gray-700"
                )}>
                  ARGO float records indexed and searchable
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className={cn(
                "text-2xl font-semibold mb-4",
                theme === 'dark' ? "text-white" : "text-gray-900"
              )}>
                Key Takeaways
              </h3>
              <div className={cn(
                "space-y-3 text-lg",
                theme === 'dark' ? "text-gray-300" : "text-gray-700"
              )}>
                {project.takeaways?.map((takeaway, idx) => (
                  <p key={idx}>
                    • {takeaway}
                  </p>
                ))}
              </div>
            </div>
          </section>

          {/* Tools & Links Sidebar */}
          <div className={cn(
            "border-t pt-8",
            theme === 'dark' ? "border-gray-700" : "border-gray-300"
          )}>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Tools */}
              {project.tools && project.tools.length > 0 && (
                <section>
                  <h3 className={cn(
                    "text-xl font-bold mb-4",
                    theme === 'dark' ? "text-text-primary-dark" : "text-text-primary-light"
                  )}>
                    Tools & Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, idx) => (
                      <span 
                        key={idx} 
                        className={cn(
                          "px-3 py-1 rounded-full text-sm",
                          theme === 'dark'
                            ? "bg-cyan-primary/10 text-cyan-primary border border-cyan-primary/20"
                            : "bg-cyan-dark/10 text-cyan-dark border border-cyan-dark/20"
                        )}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </section>
              )}

              {/* Links */}
              <section>
                <h3 className={cn(
                  "text-xl font-bold mb-4",
                  theme === 'dark' ? "text-text-primary-dark" : "text-text-primary-light"
                )}>
                  Links
                </h3>
                <div className="space-y-2">
                  {(project.liveUrl || project.link) && (
                    <a 
                      href={project.liveUrl || project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "flex items-center gap-2 hover:underline transition-colors",
                        theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark"
                      )}
                    >
                      View Project <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  {(project.githubUrl || project.github) && (
                    <a 
                      href={project.githubUrl || project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "flex items-center gap-2 hover:underline transition-colors",
                        theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark"
                      )}
                    >
                      View on GitHub <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Special Walmart CoPilot layout
  if (isWalmartCoPilot) {
    return (
      <div className={cn(
        "min-h-screen transition-colors duration-300",
        theme === 'dark' ? "bg-dark-navy" : "bg-light-bg"
      )}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header Section */}
          <div className="mb-6">
            <Link 
              href="/#projects" 
              className={cn(
                "flex items-center gap-2 mb-8 transition-colors hover:underline",
                theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark"
              )}
            >
              ← Back to Projects
            </Link>
            
            <h1 className={cn(
              "text-5xl md:text-6xl font-bold mb-4",
              theme === 'dark' ? "text-text-primary-dark" : "text-text-primary-light"
            )}>
              Walmart In-Store CoPilot
            </h1>
            
            <p className={cn(
              "text-xl md:text-2xl mb-6",
              theme === 'dark' ? "text-gray-300" : "text-gray-700"
            )}>
              AI shopping assistant that locates items, optimizes shopping lists, and provides real-time store navigation
            </p>
            
            <div className={cn(
              "flex gap-3 text-sm",
              theme === 'dark' ? "text-gray-400" : "text-gray-600"
            )}>
              <span>{project.timeline || "July 2025"}</span>
              <span>•</span>
              <span>AI Agents · Retail · LLM</span>
            </div>
          </div>

          {/* YouTube Video */}
          {project.demo?.youtubeVideoId && (
            <div className="mb-16">
              <YouTubeEmbed
                videoId={project.demo.youtubeVideoId}
                title={`${project.title} - Demo`}
                caption={project.demo.caption}
              />
            </div>
          )}

          {/* Overview Section */}
          <section className="mb-16">
            <h2 className={cn(
              "text-3xl font-bold mb-6",
              theme === 'dark' ? "text-text-primary-dark" : "text-text-primary-light"
            )}>
              Overview
            </h2>
            
            <p className={cn(
              "text-lg leading-relaxed mb-4",
              theme === 'dark' ? "text-gray-300" : "text-gray-700"
            )}>
              Walmart In-Store CoPilot is an <span className="italic">intelligent AI assistant</span> designed to transform the in-store shopping experience at Walmart Supercenters. The application helps customers efficiently navigate large stores, locate items instantly, optimize their shopping routes, and discover meal ideas—all through a conversational interface.
            </p>
            
            <p className={cn(
              "text-lg leading-relaxed",
              theme === 'dark' ? "text-gray-300" : "text-gray-700"
            )}>
              Built with a <span className={cn("font-semibold", theme === 'dark' ? "text-white" : "text-gray-900")}>multi-agent architecture</span> powered by <span className={cn("font-semibold", theme === 'dark' ? "text-white" : "text-gray-900")}>Llama 3.1</span> and <span className={cn("font-semibold", theme === 'dark' ? "text-white" : "text-gray-900")}>LangChain</span>, the Co-Pilot integrates with real-time store data through the Model Context Protocol (MCP) to provide accurate aisle locations, price checks, stock levels, and personalized recommendations.
            </p>
          </section>

          {/* The Problem Section */}
          <section className="mb-16">
            <h2 className={cn(
              "text-3xl font-bold mb-6",
              theme === 'dark' ? "text-text-primary-dark" : "text-text-primary-light"
            )}>
              The Problem
            </h2>
            
            <p className={cn(
              "text-lg leading-relaxed mb-4",
              theme === 'dark' ? "text-gray-300" : "text-gray-700"
            )}>
              Shopping in large retail stores like Walmart Supercenters can be overwhelming and time-consuming. Customers face several pain points:
            </p>
            
            <ul className={cn(
              "space-y-3 text-lg ml-6 mb-6",
              theme === 'dark' ? "text-gray-300" : "text-gray-700"
            )}>
              <li className="flex items-start">
                <span className={cn("mr-3", theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark")}>•</span>
                <span><span className={cn("font-semibold", theme === 'dark' ? "text-white" : "text-gray-900")}>Difficulty locating items</span> in massive stores with hundreds of aisles</span>
              </li>
              <li className="flex items-start">
                <span className={cn("mr-3", theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark")}>•</span>
                <span><span className={cn("font-semibold", theme === 'dark' ? "text-white" : "text-gray-900")}>Inefficient shopping paths</span> that waste time zigzagging through the store</span>
              </li>
              <li className="flex items-start">
                <span className={cn("mr-3", theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark")}>•</span>
                <span><span className={cn("font-semibold", theme === 'dark' ? "text-white" : "text-gray-900")}>No real-time stock information</span> leading to wasted trips to empty shelves</span>
              </li>
              <li className="flex items-start">
                <span className={cn("mr-3", theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark")}>•</span>
                <span><span className={cn("font-semibold", theme === 'dark' ? "text-white" : "text-gray-900")}>Limited personalized assistance</span> without having to find store employees</span>
              </li>
            </ul>
            
            <p className={cn(
              "text-lg leading-relaxed",
              theme === 'dark' ? "text-gray-300" : "text-gray-700"
            )}>
              I built the Walmart In-Store CoPilot to solve these challenges by creating an <span className="italic">always-available AI shopping companion</span> that makes shopping faster, easier, and more enjoyable.
            </p>
          </section>

          {/* Architecture Section */}
          <section className="mb-16">
            <h2 className={cn(
              "text-3xl font-bold mb-6",
              theme === 'dark' ? "text-text-primary-dark" : "text-text-primary-light"
            )}>
              Architecture & Technical Approach
            </h2>
            
            <p className={cn(
              "text-lg leading-relaxed mb-6",
              theme === 'dark' ? "text-gray-300" : "text-gray-700"
            )}>
              The Co-Pilot uses a sophisticated multi-agent architecture where specialized AI agents collaborate to handle different aspects of the shopping experience:
            </p>
            
            <div className="mb-8">
              <h3 className={cn(
                "text-2xl font-semibold mb-4",
                theme === 'dark' ? "text-white" : "text-gray-900"
              )}>
                Agent System
              </h3>
              
              <div className={cn(
                "space-y-4 text-lg",
                theme === 'dark' ? "text-gray-300" : "text-gray-700"
              )}>
                <div className={cn(
                  "border-l-2 pl-4",
                  theme === 'dark' ? "border-cyan-primary" : "border-cyan-dark"
                )}>
                  <h4 className={cn(
                    "font-semibold mb-2",
                    theme === 'dark' ? "text-white" : "text-gray-900"
                  )}>
                    Navigation Agent
                  </h4>
                  <p>Specializes in providing precise aisle locations and optimal routes through the store. Integrates with the Store Layout API via MCP to access real-time floor plans and calculate efficient shopping paths.</p>
                </div>
                
                <div className={cn(
                  "border-l-2 pl-4",
                  theme === 'dark' ? "border-cyan-primary" : "border-cyan-dark"
                )}>
                  <h4 className={cn(
                    "font-semibold mb-2",
                    theme === 'dark' ? "text-white" : "text-gray-900"
                  )}>
                    Personalization Agent
                  </h4>
                  <p>Delivers meal suggestions and recipe ideas based on customer preferences and available ingredients. Connects to Customer Profile DB through MCP to provide tailored recommendations.</p>
                </div>
                
                <div className={cn(
                  "border-l-2 pl-4",
                  theme === 'dark' ? "border-cyan-primary" : "border-cyan-dark"
                )}>
                  <h4 className={cn(
                    "font-semibold mb-2",
                    theme === 'dark' ? "text-white" : "text-gray-900"
                  )}>
                    Inventory Agent
                  </h4>
                  <p>Provides real-time price checks and stock level information. Queries the Real-Time Inventory API via MCP to ensure customers know product availability before heading to an aisle.</p>
                </div>
                
                <div className={cn(
                  "border-l-2 pl-4",
                  theme === 'dark' ? "border-cyan-primary" : "border-cyan-dark"
                )}>
                  <h4 className={cn(
                    "font-semibold mb-2",
                    theme === 'dark' ? "text-white" : "text-gray-900"
                  )}>
                    Coordinator (Wallaby LLM)
                  </h4>
                  <p>Central orchestrator powered by <span className={cn("font-mono", theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark")}>Llama 3.1</span> running via <span className={cn("font-mono", theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark")}>Ollama</span>. Routes user queries to appropriate agents and synthesizes responses into natural, conversational answers.</p>
                </div>
              </div>
            </div>

            {/* Architecture Image */}
            {project.architectureImage && (
              <div className={cn(
                "my-8 rounded-lg overflow-hidden border",
                theme === 'dark' ? "border-gray-700" : "border-gray-300"
              )}>
                <Image 
                  src={project.architectureImage} 
                  alt="Walmart In-Store CoPilot Multi-Agent Architecture"
                  width={1200}
                  height={800}
                  className="w-full bg-white"
                />
                <p className={cn(
                  "text-center text-sm mt-2",
                  theme === 'dark' ? "text-gray-400" : "text-gray-600"
                )}>
                  Multi-agent system with MCP integration for real-time store data access
                </p>
              </div>
            )}
            
            <div className="mt-8">
              <h3 className={cn(
                "text-2xl font-semibold mb-4",
                theme === 'dark' ? "text-white" : "text-gray-900"
              )}>
                Frontend & Backend
              </h3>
              <div className={cn(
                "grid md:grid-cols-2 gap-6 text-lg",
                theme === 'dark' ? "text-gray-300" : "text-gray-700"
              )}>
                <div>
                  <h4 className={cn(
                    "font-semibold mb-2",
                    theme === 'dark' ? "text-white" : "text-gray-900"
                  )}>
                    Frontend
                  </h4>
                  <p>Built with <span className={cn("font-mono", theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark")}>HTML5</span>, <span className={cn("font-mono", theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark")}>Tailwind CSS</span>, and <span className={cn("font-mono", theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark")}>JavaScript</span>. Features an interactive store map, conversational chat interface, and shopping list management UI.</p>
                </div>
                <div>
                  <h4 className={cn(
                    "font-semibold mb-2",
                    theme === 'dark' ? "text-white" : "text-gray-900"
                  )}>
                    Backend
                  </h4>
                  <p><span className={cn("font-mono", theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark")}>FastAPI</span> server orchestrates agent communication using <span className={cn("font-mono", theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark")}>LangChain</span> framework. <span className={cn("font-mono", theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark")}>fastmcp</span> library connects to MCP servers for store data. Served with <span className={cn("font-mono", theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark")}>Uvicorn</span> ASGI server.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Key Features Section */}
          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <section className="mb-16">
              <h2 className={cn(
                "text-3xl font-bold mb-6",
                theme === 'dark' ? "text-text-primary-dark" : "text-text-primary-light"
              )}>
                Key Features
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {project.keyFeatures.map((feature, idx) => (
                  <div 
                    key={idx}
                    className={cn(
                      "border rounded-lg p-6",
                      theme === 'dark' 
                        ? "bg-gray-800/50 border-gray-700" 
                        : "bg-gray-50 border-gray-300"
                    )}
                  >
                    <h3 className={cn(
                      "text-xl font-semibold mb-3",
                      theme === 'dark' ? "text-white" : "text-gray-900"
                    )}>
                      {feature.title}
                    </h3>
                    <p className={cn(
                      theme === 'dark' ? "text-gray-300" : "text-gray-700"
                    )}>
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Challenges & Solutions Section */}
          {project.challenges && project.challenges.length > 0 && (
            <section className="mb-16">
              <h2 className={cn(
                "text-3xl font-bold mb-6",
                theme === 'dark' ? "text-text-primary-dark" : "text-text-primary-light"
              )}>
                Challenges & Solutions
              </h2>
              
              <div className="space-y-6">
                {project.challenges.map((challenge, idx) => {
                  if (typeof challenge === 'string') {
                    // Fallback for old string format
                    return (
                      <div key={idx} className={cn(
                        "border-l-4 pl-6",
                        theme === 'dark' ? "border-cyan-primary" : "border-cyan-dark"
                      )}>
                        <p className={cn(
                          "text-lg",
                          theme === 'dark' ? "text-gray-300" : "text-gray-700"
                        )}>
                          {challenge}
                        </p>
                      </div>
                    );
                  }
                  return (
                    <div 
                      key={idx} 
                      className={cn(
                        "border-l-4 pl-6",
                        theme === 'dark' ? "border-cyan-primary" : "border-cyan-dark"
                      )}
                    >
                      <h3 className={cn(
                        "text-xl font-semibold mb-2",
                        theme === 'dark' ? "text-white" : "text-gray-900"
                      )}>
                        {challenge.title}
                      </h3>
                      <p className={cn(
                        "text-lg mb-2",
                        theme === 'dark' ? "text-gray-300" : "text-gray-700"
                      )}>
                        <span className={cn("font-semibold", theme === 'dark' ? "text-gray-200" : "text-gray-800")}>Challenge:</span> {challenge.challenge}
                      </p>
                      <p className={cn(
                        "text-lg",
                        theme === 'dark' ? "text-gray-300" : "text-gray-700"
                      )}>
                        <span className={cn("font-semibold", theme === 'dark' ? "text-gray-200" : "text-gray-800")}>Solution:</span> {challenge.solution}
                      </p>
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* Impact & Results Section */}
          <section className="mb-16">
            <h2 className={cn(
              "text-3xl font-bold mb-6",
              theme === 'dark' ? "text-text-primary-dark" : "text-text-primary-light"
            )}>
              Impact & Results
            </h2>
            
            {project.results && project.results.length > 0 && (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {project.results.map((result, idx) => (
                  <div 
                    key={idx}
                    className={cn(
                      "text-center p-6 rounded-lg border",
                      theme === 'dark' 
                        ? "bg-gray-800/30 border-gray-700" 
                        : "bg-gray-50 border-gray-300"
                    )}
                  >
                    <div className={cn(
                      "text-lg font-medium",
                      theme === 'dark' ? "text-gray-300" : "text-gray-700"
                    )}>
                      {result}
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            <div className="mb-6">
              <h3 className={cn(
                "text-2xl font-semibold mb-4",
                theme === 'dark' ? "text-white" : "text-gray-900"
              )}>
                Key Takeaways
              </h3>
              <div className={cn(
                "space-y-3 text-lg",
                theme === 'dark' ? "text-gray-300" : "text-gray-700"
              )}>
                {project.takeaways?.map((takeaway, idx) => (
                  <p key={idx}>
                    • {takeaway}
                  </p>
                ))}
              </div>
            </div>
          </section>

          {/* Tools & Links Sidebar */}
          <div className={cn(
            "border-t pt-8",
            theme === 'dark' ? "border-gray-700" : "border-gray-300"
          )}>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Tools */}
              {project.tools && project.tools.length > 0 && (
                <section>
                  <h3 className={cn(
                    "text-xl font-bold mb-4",
                    theme === 'dark' ? "text-text-primary-dark" : "text-text-primary-light"
                  )}>
                    Tools & Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, idx) => (
                      <span 
                        key={idx} 
                        className={cn(
                          "px-3 py-1 rounded-full text-sm",
                          theme === 'dark'
                            ? "bg-cyan-primary/10 text-cyan-primary border border-cyan-primary/20"
                            : "bg-cyan-dark/10 text-cyan-dark border border-cyan-dark/20"
                        )}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </section>
              )}

              {/* Links */}
              <section>
                <h3 className={cn(
                  "text-xl font-bold mb-4",
                  theme === 'dark' ? "text-text-primary-dark" : "text-text-primary-light"
                )}>
                  Links
                </h3>
                <div className="space-y-2">
                  {(project.liveUrl || project.link) && (
                    <a 
                      href={project.liveUrl || project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "flex items-center gap-2 hover:underline transition-colors",
                        theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark"
                      )}
                    >
                      View Project <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  {(project.githubUrl || project.github) && (
                    <a 
                      href={project.githubUrl || project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "flex items-center gap-2 hover:underline transition-colors",
                        theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark"
                      )}
                    >
                      View on GitHub <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Special Medlink layout
  if (isMedlink) {
    return (
      <div className={cn(
        "min-h-screen transition-colors duration-300",
        theme === 'dark' ? "bg-dark-navy" : "bg-light-bg"
      )}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header Section */}
          <div className="mb-6">
            <Link 
              href="/#projects" 
              className={cn(
                "flex items-center gap-2 mb-8 transition-colors hover:underline",
                theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark"
              )}
            >
              ← Back to Projects
            </Link>
            
            <div className="mb-4">
              <span className={cn(
                "text-sm font-medium",
                theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark"
              )}>
                IBM Call for Code Challenge · AI Engineer
              </span>
            </div>
            
            <h1 className={cn(
              "text-5xl md:text-6xl font-bold mb-4",
              theme === 'dark' ? "text-text-primary-dark" : "text-text-primary-light"
            )}>
              Medlink
            </h1>
            
            <p className={cn(
              "text-xl md:text-2xl mb-6",
              theme === 'dark' ? "text-gray-300" : "text-gray-700"
            )}>
              Advanced healthcare platform streamlining patient registration, appointments, and doctor-patient communication
            </p>
            
            <div className={cn(
              "flex gap-3 text-sm",
              theme === 'dark' ? "text-gray-400" : "text-gray-600"
            )}>
              <span>{project.timeline || "October 2024"}</span>
              <span>•</span>
              <span>Healthcare · IBM Watson · AI</span>
            </div>
          </div>

          {/* YouTube Video */}
          {project.demo?.youtubeVideoId && (
            <div className="mb-16">
              <YouTubeEmbed
                videoId={project.demo.youtubeVideoId}
                title={`${project.title} - Demo`}
                caption={project.demo.caption}
              />
            </div>
          )}

          {/* Overview Section */}
          <section className="mb-16">
            <h2 className={cn(
              "text-3xl font-bold mb-6",
              theme === 'dark' ? "text-text-primary-dark" : "text-text-primary-light"
            )}>
              Overview
            </h2>
            
            <p className={cn(
              "text-lg leading-relaxed mb-4",
              theme === 'dark' ? "text-gray-300" : "text-gray-700"
            )}>
              Medlink is an <span className="italic">advanced medical web application</span> designed to transform the healthcare system by streamlining patient registration, appointment booking, and secure communication between doctors and patients. Built for the IBM Call for Code Challenge, the platform integrates cutting-edge <span className={cn("font-semibold", theme === 'dark' ? "text-white" : "text-gray-900")}>IBM Watson X</span> technology to provide intelligent, AI-driven healthcare services.
            </p>
            
            <p className={cn(
              "text-lg leading-relaxed",
              theme === 'dark' ? "text-gray-300" : "text-gray-700"
            )}>
              As <span className={cn("font-semibold", theme === 'dark' ? "text-white" : "text-gray-900")}>AI Engineer</span> on the team, I specialized in IBM Watson X integration, developing an AI-powered appointment scheduling system and creating an intelligent chatbot using Watson Assistant that streamlines the entire booking process for patients and healthcare providers.
            </p>
          </section>

          {/* My Role Section */}
          {project.myRole && project.myRole.length > 0 && (
            <section className="mb-16">
              <h2 className={cn(
                "text-3xl font-bold mb-6",
                theme === 'dark' ? "text-text-primary-dark" : "text-text-primary-light"
              )}>
                My Role as AI Engineer
              </h2>
              
              <div className={cn(
                "space-y-4 text-lg",
                theme === 'dark' ? "text-gray-300" : "text-gray-700"
              )}>
                {project.myRole.map((role, idx) => (
                  <div key={idx} className="flex items-start">
                    <span className={cn("mr-4 text-2xl", theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark")}>→</span>
                    <div>
                      <h3 className={cn(
                        "font-semibold mb-2",
                        theme === 'dark' ? "text-white" : "text-gray-900"
                      )}>
                        {role.title}
                      </h3>
                      <p>{role.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* The Problem Section */}
          <section className="mb-16">
            <h2 className={cn(
              "text-3xl font-bold mb-6",
              theme === 'dark' ? "text-text-primary-dark" : "text-text-primary-light"
            )}>
              The Problem
            </h2>
            
            <p className={cn(
              "text-lg leading-relaxed mb-4",
              theme === 'dark' ? "text-gray-300" : "text-gray-700"
            )}>
              Healthcare systems worldwide face critical challenges that impact both patients and providers:
            </p>
            
            <ul className={cn(
              "space-y-3 text-lg ml-6 mb-6",
              theme === 'dark' ? "text-gray-300" : "text-gray-700"
            )}>
              <li className="flex items-start">
                <span className={cn("mr-3", theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark")}>•</span>
                <span><span className={cn("font-semibold", theme === 'dark' ? "text-white" : "text-gray-900")}>Inefficient appointment scheduling</span> leading to long wait times and administrative overhead</span>
              </li>
              <li className="flex items-start">
                <span className={cn("mr-3", theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark")}>•</span>
                <span><span className={cn("font-semibold", theme === 'dark' ? "text-white" : "text-gray-900")}>Poor patient engagement</span> due to lack of accessible communication channels with doctors</span>
              </li>
              <li className="flex items-start">
                <span className={cn("mr-3", theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark")}>•</span>
                <span><span className={cn("font-semibold", theme === 'dark' ? "text-white" : "text-gray-900")}>Security concerns</span> around patient data and medical records</span>
              </li>
              <li className="flex items-start">
                <span className={cn("mr-3", theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark")}>•</span>
                <span><span className={cn("font-semibold", theme === 'dark' ? "text-white" : "text-gray-900")}>Manual processes</span> that waste healthcare workers' time on administrative tasks</span>
              </li>
            </ul>
            
            <p className={cn(
              "text-lg leading-relaxed",
              theme === 'dark' ? "text-gray-300" : "text-gray-700"
            )}>
              Medlink addresses these challenges by leveraging <span className="italic">AI and modern web technologies</span> to create an intelligent, secure, and user-friendly healthcare platform that improves patient experience while reducing administrative burden.
            </p>
          </section>

          {/* Architecture Section */}
          <section className="mb-16">
            <h2 className={cn(
              "text-3xl font-bold mb-6",
              theme === 'dark' ? "text-text-primary-dark" : "text-text-primary-light"
            )}>
              Architecture & Technical Stack
            </h2>
            
            <p className={cn(
              "text-lg leading-relaxed mb-6",
              theme === 'dark' ? "text-gray-300" : "text-gray-700"
            )}>
              Medlink is built on a modern, secure architecture designed specifically for healthcare applications:
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className={cn(
                  "text-2xl font-semibold mb-4",
                  theme === 'dark' ? "text-white" : "text-gray-900"
                )}>
                  Frontend
                </h3>
                <div className={cn(
                  "space-y-3 text-lg",
                  theme === 'dark' ? "text-gray-300" : "text-gray-700"
                )}>
                  <p><span className={cn("font-mono", theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark")}>Next.js</span> and <span className={cn("font-mono", theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark")}>React</span> for a responsive, server-side rendered web application</p>
                  <p><span className={cn("font-mono", theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark")}>Tailwind CSS</span> for modern, accessible UI design</p>
                  <p><span className={cn("font-mono", theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark")}>Carbon Design</span> for IBM-aligned component library</p>
                  <p><span className={cn("font-mono", theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark")}>SweetAlert</span> for user-friendly notifications</p>
                </div>
              </div>
              
              <div>
                <h3 className={cn(
                  "text-2xl font-semibold mb-4",
                  theme === 'dark' ? "text-white" : "text-gray-900"
                )}>
                  Backend
                </h3>
                <div className={cn(
                  "space-y-3 text-lg",
                  theme === 'dark' ? "text-gray-300" : "text-gray-700"
                )}>
                  <p><span className={cn("font-mono", theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark")}>Django</span> with <span className={cn("font-mono", theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark")}>Django REST Framework</span> for robust API development</p>
                  <p><span className={cn("font-mono", theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark")}>MySQL</span> database for structured healthcare data storage</p>
                  <p><span className={cn("font-mono", theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark")}>JWT Authentication</span> for secure session management</p>
                  <p><span className={cn("font-mono", theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark")}>Python</span> for backend business logic</p>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className={cn(
                "text-2xl font-semibold mb-4",
                theme === 'dark' ? "text-white" : "text-gray-900"
              )}>
                AI & Intelligence Layer
              </h3>
              
              <div className={cn(
                "space-y-4 text-lg",
                theme === 'dark' ? "text-gray-300" : "text-gray-700"
              )}>
                <div className={cn(
                  "border-l-2 pl-4",
                  theme === 'dark' ? "border-cyan-primary" : "border-cyan-dark"
                )}>
                  <h4 className={cn(
                    "font-semibold mb-2",
                    theme === 'dark' ? "text-white" : "text-gray-900"
                  )}>
                    IBM Watson X
                  </h4>
                  <p>Powers the AI-driven appointment scheduling system with advanced natural language processing capabilities. Analyzes patient preferences, doctor availability, and medical urgency to suggest optimal appointment times.</p>
                </div>
                
                <div className={cn(
                  "border-l-2 pl-4",
                  theme === 'dark' ? "border-cyan-primary" : "border-cyan-dark"
                )}>
                  <h4 className={cn(
                    "font-semibold mb-2",
                    theme === 'dark' ? "text-white" : "text-gray-900"
                  )}>
                    Watson Assistant
                  </h4>
                  <p>Provides conversational interface for appointment booking. Trained on healthcare-specific intents and entities to understand patient queries about scheduling, doctor specializations, and appointment modifications.</p>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className={cn(
                "text-2xl font-semibold mb-4",
                theme === 'dark' ? "text-white" : "text-gray-900"
              )}>
                Security & Authentication
              </h3>
              <div className="grid md:grid-cols-2 gap-6 text-lg">
                <div className={cn(
                  "border rounded-lg p-5",
                  theme === 'dark' 
                    ? "bg-gray-800/50 border-gray-700" 
                    : "bg-gray-50 border-gray-300"
                )}>
                  <h4 className={cn(
                    "font-semibold mb-2",
                    theme === 'dark' ? "text-white" : "text-gray-900"
                  )}>
                    Multi-Factor Authentication
                  </h4>
                  <p className={cn(
                    theme === 'dark' ? "text-gray-300" : "text-gray-700"
                  )}>
                    Implemented <span className="font-semibold">Google Sign-In</span> with <span className="font-semibold">2FA using OTP codes</span> for enhanced account security
                  </p>
                </div>
                <div className={cn(
                  "border rounded-lg p-5",
                  theme === 'dark' 
                    ? "bg-gray-800/50 border-gray-700" 
                    : "bg-gray-50 border-gray-300"
                )}>
                  <h4 className={cn(
                    "font-semibold mb-2",
                    theme === 'dark' ? "text-white" : "text-gray-900"
                  )}>
                    Data Encryption
                  </h4>
                  <p className={cn(
                    theme === 'dark' ? "text-gray-300" : "text-gray-700"
                  )}>
                    Password hashing with industry-standard algorithms and encrypted storage for sensitive patient information
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className={cn(
                "text-2xl font-semibold mb-4",
                theme === 'dark' ? "text-white" : "text-gray-900"
              )}>
                Additional Services
              </h3>
              <p className={cn(
                "text-lg",
                theme === 'dark' ? "text-gray-300" : "text-gray-700"
              )}>
                <span className={cn("font-mono", theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark")}>Resend</span> for email notifications and appointment reminders, ensuring patients stay informed about their healthcare schedules.
              </p>
            </div>
          </section>

          {/* Key Features Section */}
          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <section className="mb-16">
              <h2 className={cn(
                "text-3xl font-bold mb-6",
                theme === 'dark' ? "text-text-primary-dark" : "text-text-primary-light"
              )}>
                Key Features
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {project.keyFeatures.map((feature, idx) => (
                  <div 
                    key={idx}
                    className={cn(
                      "border rounded-lg p-6",
                      theme === 'dark' 
                        ? "bg-gray-800/50 border-gray-700" 
                        : "bg-gray-50 border-gray-300"
                    )}
                  >
                    <h3 className={cn(
                      "text-xl font-semibold mb-3",
                      theme === 'dark' ? "text-white" : "text-gray-900"
                    )}>
                      {feature.title}
                    </h3>
                    <p className={cn(
                      theme === 'dark' ? "text-gray-300" : "text-gray-700"
                    )}>
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Challenges & Solutions Section */}
          {project.challenges && project.challenges.length > 0 && (
            <section className="mb-16">
              <h2 className={cn(
                "text-3xl font-bold mb-6",
                theme === 'dark' ? "text-text-primary-dark" : "text-text-primary-light"
              )}>
                Challenges & Solutions
              </h2>
              
              <div className="space-y-6">
                {project.challenges.map((challenge, idx) => {
                  if (typeof challenge === 'string') {
                    // Fallback for old string format
                    return (
                      <div key={idx} className={cn(
                        "border-l-4 pl-6",
                        theme === 'dark' ? "border-cyan-primary" : "border-cyan-dark"
                      )}>
                        <p className={cn(
                          "text-lg",
                          theme === 'dark' ? "text-gray-300" : "text-gray-700"
                        )}>
                          {challenge}
                        </p>
                      </div>
                    );
                  }
                  return (
                    <div 
                      key={idx} 
                      className={cn(
                        "border-l-4 pl-6",
                        theme === 'dark' ? "border-cyan-primary" : "border-cyan-dark"
                      )}
                    >
                      <h3 className={cn(
                        "text-xl font-semibold mb-2",
                        theme === 'dark' ? "text-white" : "text-gray-900"
                      )}>
                        {challenge.title}
                      </h3>
                      <p className={cn(
                        "text-lg mb-2",
                        theme === 'dark' ? "text-gray-300" : "text-gray-700"
                      )}>
                        <span className={cn("font-semibold", theme === 'dark' ? "text-gray-200" : "text-gray-800")}>Challenge:</span> {challenge.challenge}
                      </p>
                      <p className={cn(
                        "text-lg",
                        theme === 'dark' ? "text-gray-300" : "text-gray-700"
                      )}>
                        <span className={cn("font-semibold", theme === 'dark' ? "text-gray-200" : "text-gray-800")}>Solution:</span> {challenge.solution}
                      </p>
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* Impact & Results Section */}
          <section className="mb-16">
            <h2 className={cn(
              "text-3xl font-bold mb-6",
              theme === 'dark' ? "text-text-primary-dark" : "text-text-primary-light"
            )}>
              Impact & Results
            </h2>
            
            {project.results && project.results.length > 0 && (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {project.results.map((result, idx) => (
                  <div 
                    key={idx}
                    className={cn(
                      "text-center p-6 rounded-lg border",
                      theme === 'dark' 
                        ? "bg-gray-800/30 border-gray-700" 
                        : "bg-gray-50 border-gray-300"
                    )}
                  >
                    <div className={cn(
                      "text-lg font-medium",
                      theme === 'dark' ? "text-gray-300" : "text-gray-700"
                    )}>
                      {result}
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            <div className="mb-6">
              <h3 className={cn(
                "text-2xl font-semibold mb-4",
                theme === 'dark' ? "text-white" : "text-gray-900"
              )}>
                Key Takeaways
              </h3>
              <div className={cn(
                "space-y-3 text-lg",
                theme === 'dark' ? "text-gray-300" : "text-gray-700"
              )}>
                {project.takeaways?.map((takeaway, idx) => (
                  <p key={idx}>
                    • {takeaway}
                  </p>
                ))}
              </div>
            </div>
          </section>

          {/* Tools & Links Sidebar */}
          <div className={cn(
            "border-t pt-8",
            theme === 'dark' ? "border-gray-700" : "border-gray-300"
          )}>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Tools */}
              {project.tools && project.tools.length > 0 && (
                <section>
                  <h3 className={cn(
                    "text-xl font-bold mb-4",
                    theme === 'dark' ? "text-text-primary-dark" : "text-text-primary-light"
                  )}>
                    Tools & Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, idx) => (
                      <span 
                        key={idx} 
                        className={cn(
                          "px-3 py-1 rounded-full text-sm",
                          theme === 'dark'
                            ? "bg-cyan-primary/10 text-cyan-primary border border-cyan-primary/20"
                            : "bg-cyan-dark/10 text-cyan-dark border border-cyan-dark/20"
                        )}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </section>
              )}

              {/* Links */}
              <section>
                <h3 className={cn(
                  "text-xl font-bold mb-4",
                  theme === 'dark' ? "text-text-primary-dark" : "text-text-primary-light"
                )}>
                  Links
                </h3>
                <div className="space-y-2">
                  {(project.liveUrl || project.link) && (
                    <a 
                      href={project.liveUrl || project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "flex items-center gap-2 hover:underline transition-colors",
                        theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark"
                      )}
                    >
                      View Project <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  {(project.githubUrl || project.github) && (
                    <a 
                      href={project.githubUrl || project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "flex items-center gap-2 hover:underline transition-colors",
                        theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark"
                      )}
                    >
                      View on GitHub <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Special PaperAI layout
  if (isPaperAI) {
    return (
      <div className={cn(
        "min-h-screen transition-colors duration-300",
        theme === 'dark' ? "bg-dark-navy" : "bg-light-bg"
      )}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header Section */}
          <div className="mb-6">
            <Link 
              href="/#projects" 
              className={cn(
                "flex items-center gap-2 mb-8 transition-colors hover:underline",
                theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark"
              )}
            >
              ← Back to Projects
            </Link>
            
            <h1 className={cn(
              "text-5xl md:text-6xl font-bold mb-4",
              theme === 'dark' ? "text-text-primary-dark" : "text-text-primary-light"
            )}>
              PaperAI
            </h1>
            
            <p className={cn(
              "text-xl md:text-2xl mb-6",
              theme === 'dark' ? "text-gray-300" : "text-gray-700"
            )}>
              AI-powered study buddy and research assistant for organizing, analyzing, and summarizing research materials
            </p>
            
            <div className={cn(
              "flex gap-3 text-sm",
              theme === 'dark' ? "text-gray-400" : "text-gray-600"
            )}>
              <span>{project.timeline || "January 2025"}</span>
              <span>•</span>
              <span>RAG · Research Tools · AI</span>
            </div>
          </div>

          {/* YouTube Video */}
          {project.demo?.youtubeVideoId && (
            <div className="mb-16">
              <YouTubeEmbed
                videoId={project.demo.youtubeVideoId}
                title={`${project.title} - Demo`}
                caption={project.demo.caption}
              />
            </div>
          )}

          {/* Overview Section */}
          <section className="mb-16">
            <h2 className={cn(
              "text-3xl font-bold mb-6",
              theme === 'dark' ? "text-text-primary-dark" : "text-text-primary-light"
            )}>
              Overview
            </h2>
            
            <p className={cn(
              "text-lg leading-relaxed mb-4",
              theme === 'dark' ? "text-gray-300" : "text-gray-700"
            )}>
              PaperAI is a <span className="italic">cutting-edge web application</span> designed to empower researchers, students, and professionals by helping them organize, analyze, and summarize study materials efficiently. Built with <span className={cn("font-semibold", theme === 'dark' ? "text-white" : "text-gray-900")}>AI-driven tools</span> and powered by <span className={cn("font-semibold", theme === 'dark' ? "text-white" : "text-gray-900")}>Retrieval-Augmented Generation (RAG)</span>, PaperAI transforms how users interact with academic papers and research documents.
            </p>
            
            <p className={cn(
              "text-lg leading-relaxed",
              theme === 'dark' ? "text-gray-300" : "text-gray-700"
            )}>
              The platform enables users to chat with multiple documents simultaneously, automatically generate linked notes, extract concise summaries, and even create literature review drafts—all through an intuitive web interface that makes research more productive and less overwhelming.
            </p>
          </section>

          {/* The Problem Section */}
          <section className="mb-16">
            <h2 className={cn(
              "text-3xl font-bold mb-6",
              theme === 'dark' ? "text-text-primary-dark" : "text-text-primary-light"
            )}>
              The Problem
            </h2>
            
            <p className={cn(
              "text-lg leading-relaxed mb-4",
              theme === 'dark' ? "text-gray-300" : "text-gray-700"
            )}>
              Researchers, students, and professionals face significant challenges when working with academic papers and research materials:
            </p>
            
            <ul className={cn(
              "space-y-3 text-lg ml-6 mb-6",
              theme === 'dark' ? "text-gray-300" : "text-gray-700"
            )}>
              <li className="flex items-start">
                <span className={cn("mr-3", theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark")}>•</span>
                <span><span className={cn("font-semibold", theme === 'dark' ? "text-white" : "text-gray-900")}>Information overload</span> from managing dozens or hundreds of research papers</span>
              </li>
              <li className="flex items-start">
                <span className={cn("mr-3", theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark")}>•</span>
                <span><span className={cn("font-semibold", theme === 'dark' ? "text-white" : "text-gray-900")}>Time-consuming manual analysis</span> reading through lengthy PDFs to extract key insights</span>
              </li>
              <li className="flex items-start">
                <span className={cn("mr-3", theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark")}>•</span>
                <span><span className={cn("font-semibold", theme === 'dark' ? "text-white" : "text-gray-900")}>Difficulty synthesizing information</span> across multiple papers for literature reviews</span>
              </li>
              <li className="flex items-start">
                <span className={cn("mr-3", theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark")}>•</span>
                <span><span className={cn("font-semibold", theme === 'dark' ? "text-white" : "text-gray-900")}>Lack of intelligent search</span> within document collections beyond basic keyword matching</span>
              </li>
            </ul>
            
            <p className={cn(
              "text-lg leading-relaxed",
              theme === 'dark' ? "text-gray-300" : "text-gray-700"
            )}>
              I built PaperAI to solve these challenges by creating an <span className="italic">intelligent research companion</span> that leverages AI to make document analysis faster, more accurate, and genuinely helpful for serious research work.
            </p>
          </section>

          {/* Architecture Section */}
          <section className="mb-16">
            <h2 className={cn(
              "text-3xl font-bold mb-6",
              theme === 'dark' ? "text-text-primary-dark" : "text-text-primary-light"
            )}>
              Architecture & Technical Approach
            </h2>
            
            <p className={cn(
              "text-lg leading-relaxed mb-6",
              theme === 'dark' ? "text-gray-300" : "text-gray-700"
            )}>
              PaperAI is built on a modern RAG (Retrieval-Augmented Generation) architecture optimized for academic document analysis:
            </p>
            
            <div className="mb-8">
              <h3 className={cn(
                "text-2xl font-semibold mb-4",
                theme === 'dark' ? "text-white" : "text-gray-900"
              )}>
                Core RAG Pipeline
              </h3>
              
              <div className={cn(
                "space-y-4 text-lg",
                theme === 'dark' ? "text-gray-300" : "text-gray-700"
              )}>
                <div className={cn(
                  "border-l-2 pl-4",
                  theme === 'dark' ? "border-cyan-primary" : "border-cyan-dark"
                )}>
                  <h4 className={cn(
                    "font-semibold mb-2",
                    theme === 'dark' ? "text-white" : "text-gray-900"
                  )}>
                    Document Processing
                  </h4>
                  <p>PDF parsing and text extraction with structure preservation. Documents are chunked intelligently to maintain context while enabling efficient retrieval. Metadata extraction captures paper titles, authors, and sections.</p>
                </div>
                
                <div className={cn(
                  "border-l-2 pl-4",
                  theme === 'dark' ? "border-cyan-primary" : "border-cyan-dark"
                )}>
                  <h4 className={cn(
                    "font-semibold mb-2",
                    theme === 'dark' ? "text-white" : "text-gray-900"
                  )}>
                    Vector Embeddings & Storage
                  </h4>
                  <p>Text chunks are converted to high-dimensional embeddings using state-of-the-art models. Stored in a vector database for lightning-fast semantic search that understands meaning, not just keywords.</p>
                </div>
                
                <div className={cn(
                  "border-l-2 pl-4",
                  theme === 'dark' ? "border-cyan-primary" : "border-cyan-dark"
                )}>
                  <h4 className={cn(
                    "font-semibold mb-2",
                    theme === 'dark' ? "text-white" : "text-gray-900"
                  )}>
                    RAG Retrieval System
                  </h4>
                  <p>When users ask questions, the system performs similarity search to retrieve the most relevant document chunks. Context is then augmented with these retrieved passages before generation.</p>
                </div>
                
                <div className={cn(
                  "border-l-2 pl-4",
                  theme === 'dark' ? "border-cyan-primary" : "border-cyan-dark"
                )}>
                  <h4 className={cn(
                    "font-semibold mb-2",
                    theme === 'dark' ? "text-white" : "text-gray-900"
                  )}>
                    LLM Generation Layer
                  </h4>
                  <p>Powered by <span className={cn("font-mono", theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark")}>Llama 3.2</span> running locally via <span className={cn("font-mono", theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark")}>Ollama</span> for privacy and speed. The model generates answers grounded in retrieved documents, with citations to source papers.</p>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className={cn(
                  "text-2xl font-semibold mb-4",
                  theme === 'dark' ? "text-white" : "text-gray-900"
                )}>
                  Frontend
                </h3>
                <p className={cn(
                  "text-lg",
                  theme === 'dark' ? "text-gray-300" : "text-gray-700"
                )}>
                  <span className={cn("font-mono", theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark")}>Next.js</span> and <span className={cn("font-mono", theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark")}>React</span> for a responsive, modern web interface. Real-time streaming responses provide instant feedback as the AI generates answers.
                </p>
              </div>
              
              <div>
                <h3 className={cn(
                  "text-2xl font-semibold mb-4",
                  theme === 'dark' ? "text-white" : "text-gray-900"
                )}>
                  Backend
                </h3>
                <p className={cn(
                  "text-lg",
                  theme === 'dark' ? "text-gray-300" : "text-gray-700"
                )}>
                  <span className={cn("font-mono", theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark")}>Python</span> with <span className={cn("font-mono", theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark")}>FastAPI</span> handles document processing, RAG orchestration, and LLM inference. <span className={cn("font-mono", theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark")}>LangChain</span> framework manages the RAG pipeline.
                </p>
              </div>
            </div>
          </section>

          {/* Key Features Section */}
          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <section className="mb-16">
              <h2 className={cn(
                "text-3xl font-bold mb-6",
                theme === 'dark' ? "text-text-primary-dark" : "text-text-primary-light"
              )}>
                Key Features
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {project.keyFeatures.map((feature, idx) => (
                  <div 
                    key={idx}
                    className={cn(
                      "border rounded-lg p-6",
                      theme === 'dark' 
                        ? "bg-gray-800/50 border-gray-700" 
                        : "bg-gray-50 border-gray-300"
                    )}
                  >
                    <h3 className={cn(
                      "text-xl font-semibold mb-3",
                      theme === 'dark' ? "text-white" : "text-gray-900"
                    )}>
                      {feature.title}
                    </h3>
                    <p className={cn(
                      theme === 'dark' ? "text-gray-300" : "text-gray-700"
                    )}>
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Challenges & Solutions Section */}
          {project.challenges && project.challenges.length > 0 && (
            <section className="mb-16">
              <h2 className={cn(
                "text-3xl font-bold mb-6",
                theme === 'dark' ? "text-text-primary-dark" : "text-text-primary-light"
              )}>
                Challenges & Solutions
              </h2>
              
              <div className="space-y-6">
                {project.challenges.map((challenge, idx) => {
                  if (typeof challenge === 'string') {
                    // Fallback for old string format
                    return (
                      <div key={idx} className={cn(
                        "border-l-4 pl-6",
                        theme === 'dark' ? "border-cyan-primary" : "border-cyan-dark"
                      )}>
                        <p className={cn(
                          "text-lg",
                          theme === 'dark' ? "text-gray-300" : "text-gray-700"
                        )}>
                          {challenge}
                        </p>
                      </div>
                    );
                  }
                  return (
                    <div 
                      key={idx} 
                      className={cn(
                        "border-l-4 pl-6",
                        theme === 'dark' ? "border-cyan-primary" : "border-cyan-dark"
                      )}
                    >
                      <h3 className={cn(
                        "text-xl font-semibold mb-2",
                        theme === 'dark' ? "text-white" : "text-gray-900"
                      )}>
                        {challenge.title}
                      </h3>
                      <p className={cn(
                        "text-lg mb-2",
                        theme === 'dark' ? "text-gray-300" : "text-gray-700"
                      )}>
                        <span className={cn("font-semibold", theme === 'dark' ? "text-gray-200" : "text-gray-800")}>Challenge:</span> {challenge.challenge}
                      </p>
                      <p className={cn(
                        "text-lg",
                        theme === 'dark' ? "text-gray-300" : "text-gray-700"
                      )}>
                        <span className={cn("font-semibold", theme === 'dark' ? "text-gray-200" : "text-gray-800")}>Solution:</span> {challenge.solution}
                      </p>
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* Impact & Results Section */}
          <section className="mb-16">
            <h2 className={cn(
              "text-3xl font-bold mb-6",
              theme === 'dark' ? "text-text-primary-dark" : "text-text-primary-light"
            )}>
              Impact & Results
            </h2>
            
            <p className={cn(
              "text-lg leading-relaxed mb-6",
              theme === 'dark' ? "text-gray-300" : "text-gray-700"
            )}>
              PaperAI demonstrates how RAG technology can revolutionize academic research workflows:
            </p>
            
            {project.results && project.results.length > 0 && (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {project.results.map((result, idx) => (
                  <div 
                    key={idx}
                    className={cn(
                      "text-center p-6 rounded-lg border",
                      theme === 'dark' 
                        ? "bg-gray-800/30 border-gray-700" 
                        : "bg-gray-50 border-gray-300"
                    )}
                  >
                    <div className={cn(
                      "text-lg font-medium",
                      theme === 'dark' ? "text-gray-300" : "text-gray-700"
                    )}>
                      {result}
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            <div className="mb-6">
              <h3 className={cn(
                "text-2xl font-semibold mb-4",
                theme === 'dark' ? "text-white" : "text-gray-900"
              )}>
                Key Takeaways
              </h3>
              <div className={cn(
                "space-y-3 text-lg",
                theme === 'dark' ? "text-gray-300" : "text-gray-700"
              )}>
                {project.takeaways?.map((takeaway, idx) => (
                  <p key={idx}>
                    • {takeaway}
                  </p>
                ))}
              </div>
            </div>
          </section>

          {/* Tools & Links Sidebar */}
          <div className={cn(
            "border-t pt-8",
            theme === 'dark' ? "border-gray-700" : "border-gray-300"
          )}>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Tools */}
              {project.tools && project.tools.length > 0 && (
                <section>
                  <h3 className={cn(
                    "text-xl font-bold mb-4",
                    theme === 'dark' ? "text-text-primary-dark" : "text-text-primary-light"
                  )}>
                    Tools & Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, idx) => (
                      <span 
                        key={idx} 
                        className={cn(
                          "px-3 py-1 rounded-full text-sm",
                          theme === 'dark'
                            ? "bg-cyan-primary/10 text-cyan-primary border border-cyan-primary/20"
                            : "bg-cyan-dark/10 text-cyan-dark border border-cyan-dark/20"
                        )}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </section>
              )}

              {/* Links */}
              <section>
                <h3 className={cn(
                  "text-xl font-bold mb-4",
                  theme === 'dark' ? "text-text-primary-dark" : "text-text-primary-light"
                )}>
                  Links
                </h3>
                <div className="space-y-2">
                  {(project.liveUrl || project.link) && (
                    <a 
                      href={project.liveUrl || project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "flex items-center gap-2 hover:underline transition-colors",
                        theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark"
                      )}
                    >
                      View Project <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  {(project.githubUrl || project.github) && (
                    <a 
                      href={project.githubUrl || project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "flex items-center gap-2 hover:underline transition-colors",
                        theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark"
                      )}
                    >
                      View on GitHub <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default layout for other projects
  return (
    <div className={cn(
      "min-h-screen transition-colors duration-300",
      theme === 'dark' ? "bg-dark-navy" : "bg-light-bg"
    )}>
      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link 
          href="/#projects"
          className={cn(
            "hover:underline mb-8 inline-flex items-center gap-2 transition-colors",
            theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark"
          )}
        >
          ← Back to Projects
        </Link>
        <h1 className={cn(
          "text-4xl md:text-5xl font-bold mb-4",
          theme === 'dark' ? "text-text-primary-dark" : "text-text-primary-light"
        )}>
          {project.title}
        </h1>
        <p className={cn(
          "text-lg",
          theme === 'dark' ? "text-text-secondary-dark" : "text-text-secondary-light"
        )}>
          {project.shortDescription || project.description}
        </p>
      </div>

      {/* YOUTUBE VIDEO SECTION */}
      {project.demo?.youtubeVideoId && (
        <div className="max-w-4xl mx-auto px-4 mb-16">
          <YouTubeEmbed
            videoId={project.demo.youtubeVideoId}
            title={`${project.title} - Demo`}
            caption={project.demo.caption}
          />
        </div>
      )}

      {/* Project details section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {hasDetailedInfo ? (
          /* DETAILED PROJECT LAYOUT */
          <div className="space-y-12">
            {/* Overview Section */}
            {project.overview && (
              <section>
                <h2 className={cn(
                  "text-3xl font-bold mb-4",
                  theme === 'dark' ? "text-text-primary-dark" : "text-text-primary-light"
                )}>
                  Overview
                </h2>
                <p className={cn(
                  "text-lg leading-relaxed",
                  theme === 'dark' ? "text-text-secondary-dark" : "text-text-secondary-light"
                )}>
                  {project.overview}
                </p>
              </section>
            )}

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Left column - Main content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Background */}
                {project.background && (
                  <section>
                    <h3 className={cn(
                      "text-2xl font-bold mb-4",
                      theme === 'dark' ? "text-text-primary-dark" : "text-text-primary-light"
                    )}>
                      Background
                    </h3>
                    <p className={cn(
                      "leading-relaxed",
                      theme === 'dark' ? "text-text-secondary-dark" : "text-text-secondary-light"
                    )}>
                      {project.background}
                    </p>
                  </section>
                )}

                {/* Architecture */}
                {project.architecture && (
                  <section>
                    <h3 className={cn(
                      "text-2xl font-bold mb-4",
                      theme === 'dark' ? "text-text-primary-dark" : "text-text-primary-light"
                    )}>
                      Architecture
                    </h3>
                    <p className={cn(
                      "leading-relaxed mb-6",
                      theme === 'dark' ? "text-text-secondary-dark" : "text-text-secondary-light"
                    )}>
                      {project.architecture}
                    </p>
                    {/* Architecture Image */}
                    {project.architectureImage && (
                      <div className="relative w-full rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                        <Image
                          src={project.architectureImage}
                          alt={`${project.title} Architecture Diagram`}
                          width={1200}
                          height={800}
                          className="w-full h-auto object-contain"
                          priority
                        />
                      </div>
                    )}
                  </section>
                )}

                {/* Challenges */}
                {project.challenges && project.challenges.length > 0 && (
                  <section>
                    <h3 className={cn(
                      "text-2xl font-bold mb-4 flex items-center gap-2",
                      theme === 'dark' ? "text-text-primary-dark" : "text-text-primary-light"
                    )}>
                      <Target className="w-6 h-6" />
                      Challenges
                    </h3>
                    <ul className="space-y-3">
                      {project.challenges.map((challenge, idx) => (
                        <li key={idx} className={cn(
                          "flex items-start gap-3",
                          theme === 'dark' ? "text-text-secondary-dark" : "text-text-secondary-light"
                        )}>
                          <span className={cn(
                            "mt-1 flex-shrink-0 w-2 h-2 rounded-full",
                            theme === 'dark' ? "bg-cyan-primary" : "bg-cyan-dark"
                          )} />
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                {/* Results & Takeaways - Combined */}
                {(project.results && project.results.length > 0) || (project.takeaways && project.takeaways.length > 0) ? (
                  <section>
                    <h3 className={cn(
                      "text-2xl font-bold mb-4",
                      theme === 'dark' ? "text-text-primary-dark" : "text-text-primary-light"
                    )}>
                      Results & Takeaways
                    </h3>
                    
                    {/* Results */}
                    {project.results && project.results.length > 0 && (
                      <div className="mb-6">
                        <h4 className={cn(
                          "text-lg font-semibold mb-3 flex items-center gap-2",
                          theme === 'dark' ? "text-text-primary-dark" : "text-text-primary-light"
                        )}>
                          <CheckCircle2 className="w-5 h-5" />
                          Results
                        </h4>
                        <ul className="space-y-3">
                          {project.results.map((result, idx) => (
                            <li key={idx} className={cn(
                              "flex items-start gap-3",
                              theme === 'dark' ? "text-text-secondary-dark" : "text-text-secondary-light"
                            )}>
                              <span className={cn(
                                "mt-1 flex-shrink-0 w-2 h-2 rounded-full",
                                theme === 'dark' ? "bg-cyan-primary" : "bg-cyan-dark"
                              )} />
                              <span>{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Takeaways */}
                    {project.takeaways && project.takeaways.length > 0 && (
                      <div>
                        <h4 className={cn(
                          "text-lg font-semibold mb-3 flex items-center gap-2",
                          theme === 'dark' ? "text-text-primary-dark" : "text-text-primary-light"
                        )}>
                          <Lightbulb className="w-5 h-5" />
                          Takeaways
                        </h4>
                        <ul className="space-y-3">
                          {project.takeaways.map((takeaway, idx) => (
                            <li key={idx} className={cn(
                              "flex items-start gap-3",
                              theme === 'dark' ? "text-text-secondary-dark" : "text-text-secondary-light"
                            )}>
                              <span className={cn(
                                "mt-1 flex-shrink-0 w-2 h-2 rounded-full",
                                theme === 'dark' ? "bg-cyan-primary" : "bg-cyan-dark"
                              )} />
                              <span>{takeaway}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </section>
                ) : null}
              </div>

              {/* Right column - Sidebar */}
              <div className="space-y-8">
                {/* Timeline */}
                {project.timeline && (
                  <section>
                    <h3 className={cn(
                      "text-xl font-bold mb-4",
                      theme === 'dark' ? "text-text-primary-dark" : "text-text-primary-light"
                    )}>
                      Timeline
                    </h3>
                    <div className={cn(
                      "text-sm",
                      theme === 'dark' ? "text-text-secondary-dark" : "text-text-secondary-light"
                    )}>
                      {project.timeline}
                    </div>
                  </section>
                )}

                {/* Tools */}
                {project.tools && project.tools.length > 0 && (
                  <section>
                    <h3 className={cn(
                      "text-xl font-bold mb-4",
                      theme === 'dark' ? "text-text-primary-dark" : "text-text-primary-light"
                    )}>
                      Tools
                    </h3>
                    <div className="space-y-2">
                      {project.tools.map((tool, idx) => (
                        <div 
                          key={idx} 
                          className={cn(
                            "text-sm",
                            theme === 'dark' ? "text-text-secondary-dark" : "text-text-secondary-light"
                          )}
                        >
                          {tool}
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* Links */}
                <section>
                  <h3 className={cn(
                    "text-xl font-bold mb-4",
                    theme === 'dark' ? "text-text-primary-dark" : "text-text-primary-light"
                  )}>
                    Links
                  </h3>
                  <div className="space-y-2">
                    {(project.liveUrl || project.link) && (
                      <a 
                        href={project.liveUrl || project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          "flex items-center gap-2 hover:underline transition-colors",
                          theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark"
                        )}
                      >
                        View Project <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {(project.githubUrl || project.github) && (
                      <a 
                        href={project.githubUrl || project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          "flex items-center gap-2 hover:underline transition-colors",
                          theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark"
                        )}
                      >
                        View on GitHub <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </section>
              </div>
            </div>
          </div>
        ) : (
          /* SIMPLE PROJECT LAYOUT */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left column - content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <section>
                <h2 className={cn(
                  "text-3xl font-bold mb-4",
                  theme === 'dark' ? "text-text-primary-dark" : "text-text-primary-light"
                )}>
                  Overview
                </h2>
                <p className={cn(
                  "text-lg leading-relaxed",
                  theme === 'dark' ? "text-text-secondary-dark" : "text-text-secondary-light"
                )}>
                  {project.overview || project.description}
                </p>
              </section>
            </div>

            {/* Right column - sidebar */}
            <div className="space-y-8">
              {/* Tools & Services */}
              {project.tools && project.tools.length > 0 && (
                <section>
                  <h3 className={cn(
                    "text-xl font-bold mb-4",
                    theme === 'dark' ? "text-text-primary-dark" : "text-text-primary-light"
                  )}>
                    Tools & Services
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, idx) => (
                      <span 
                        key={idx} 
                        className={cn(
                          "px-3 py-1 rounded-full text-sm",
                          theme === 'dark'
                            ? "bg-cyan-primary/10 text-cyan-primary border border-cyan-primary/20"
                            : "bg-cyan-dark/10 text-cyan-dark border border-cyan-dark/20"
                        )}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </section>
              )}

              {/* Links */}
              <section>
                <h3 className={cn(
                  "text-xl font-bold mb-4",
                  theme === 'dark' ? "text-text-primary-dark" : "text-text-primary-light"
                )}>
                  Links
                </h3>
                <div className="space-y-2">
                  {(project.liveUrl || project.link) && (
                    <a 
                      href={project.liveUrl || project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "flex items-center gap-2 hover:underline transition-colors",
                        theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark"
                      )}
                    >
                      View Project <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  {(project.githubUrl || project.github) && (
                    <a 
                      href={project.githubUrl || project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "flex items-center gap-2 hover:underline transition-colors",
                        theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark"
                      )}
                    >
                      View on GitHub <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </section>
            </div>
          </div>
        )}
      </div>

      {/* Back to projects footer */}
      <div className={cn(
        "max-w-4xl mx-auto px-4 py-12 border-t transition-colors",
        theme === 'dark' 
          ? "border-gray-700" 
          : "border-gray-300"
      )}>
        <Link 
          href="/#projects"
          className={cn(
            "hover:underline transition-colors",
            theme === 'dark' ? "text-cyan-primary" : "text-cyan-dark"
          )}
        >
          ← Back to Projects
        </Link>
      </div>
    </div>
  );
}

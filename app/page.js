'use client'

import { useState, useEffect } from 'react'
import './globals.css'

export default function PitchDeck() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    <Slide1 key="1" />,
    <Slide2 key="2" />,
    <Slide3 key="3" />,
    <Slide4 key="4" />,
    <Slide5 key="5" />,
    <Slide6 key="6" />,
    <Slide7 key="7" />,
    <Slide8 key="8" />,
    <Slide9 key="9" />,
    <Slide10 key="10" />,
    <Slide11 key="11" />,
    <Slide12 key="12" />
  ]

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight' && currentSlide < slides.length - 1) {
        setCurrentSlide(currentSlide + 1)
      } else if (e.key === 'ArrowLeft' && currentSlide > 0) {
        setCurrentSlide(currentSlide - 1)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [currentSlide, slides.length])

  return (
    <>
      {slides[currentSlide]}
      <div className="navigation">
        <button
          className="nav-button"
          onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
          disabled={currentSlide === 0}
        >
          ← Previous
        </button>
        <button
          className="nav-button"
          onClick={() => setCurrentSlide(Math.min(slides.length - 1, currentSlide + 1))}
          disabled={currentSlide === slides.length - 1}
        >
          Next →
        </button>
      </div>
      <div className="slide-counter">
        {currentSlide + 1} / {slides.length}
      </div>
    </>
  )
}

// Slide 1: Cover
function Slide1() {
  return (
    <div className="slide fade-in">
      <div className="neural-pattern"></div>
      <div className="content content-center">
        <h1 className="glow" style={{fontSize: '92px', marginBottom: '40px'}}>
          AI That Builds the Future<br />of Real Estate
        </h1>
        <p className="subtitle" style={{fontSize: '42px', marginBottom: '60px'}}>
          Build Tech Deploy – Your AI Transformation Partner
        </p>
        <div style={{marginTop: '80px', fontSize: '28px', color: '#B27CFF', letterSpacing: '2px'}}>
          AI CONSULTANCY FOR REAL ESTATE LEADERS
        </div>
      </div>
    </div>
  )
}

// Slide 2: Problem Statement
function Slide2() {
  return (
    <div className="slide fade-in">
      <div className="neural-pattern"></div>
      <div className="logo">Build Tech Deploy</div>
      <div className="content">
        <h2>The Real Estate Challenge</h2>
        <div className="grid-2">
          <div className="card">
            <h3>Traditional Inefficiencies</h3>
            <ul>
              <li>Slow sales cycles eating into revenue</li>
              <li>Data trapped in disconnected silos</li>
              <li>Manual property management workflows</li>
              <li>Limited customer behavior insights</li>
            </ul>
          </div>
          <div className="card">
            <h3>Market Pressure</h3>
            <ul>
              <li>Rising customer expectations for speed</li>
              <li>Competitors adopting AI-first strategies</li>
              <li>Need for data-driven decision making</li>
              <li>Demand for 24/7 digital experiences</li>
            </ul>
          </div>
        </div>
        <div className="highlight-box" style={{marginTop: '50px'}}>
          <p style={{fontSize: '28px', textAlign: 'center'}}>
            <strong>The industry is at a tipping point:</strong> Real estate businesses that don't embrace AI transformation risk falling behind permanently.
          </p>
        </div>
      </div>
    </div>
  )
}

// Slide 3: Our Solution
function Slide3() {
  return (
    <div className="slide fade-in">
      <div className="neural-pattern"></div>
      <div className="logo">Build Tech Deploy</div>
      <div className="content">
        <h2>AI Solutions That Deliver Results</h2>
        <p style={{fontSize: '26px', marginBottom: '50px', textAlign: 'center', maxWidth: '1100px', margin: '0 auto 50px'}}>
          Build Tech Deploy is an <strong>AI consultancy</strong> delivering measurable efficiency and innovation to real estate businesses.
        </p>
        <div className="grid-3">
          <div className="card">
            <h3>Strategic AI Design</h3>
            <p>Custom AI strategies aligned with your business goals and market position</p>
          </div>
          <div className="card">
            <h3>CRM Automation</h3>
            <p>Intelligent workflows that eliminate manual tasks and accelerate sales</p>
          </div>
          <div className="card">
            <h3>Property Intelligence</h3>
            <p>Advanced dashboards with predictive analytics and market insights</p>
          </div>
          <div className="card">
            <h3>Digital Twins</h3>
            <p>Virtual property models for immersive customer experiences</p>
          </div>
          <div className="card">
            <h3>Predictive Analytics</h3>
            <p>ML-powered forecasting for pricing, demand, and investment decisions</p>
          </div>
          <div className="card">
            <h3>24/7 AI Agents</h3>
            <p>Conversational AI handling leads, inquiries, and customer support</p>
          </div>
        </div>
      </div>
    </div>
  )
}

// Slide 4: How We Work
function Slide4() {
  return (
    <div className="slide fade-in">
      <div className="neural-pattern"></div>
      <div className="logo">Build Tech Deploy</div>
      <div className="content">
        <h2>Our Project Oversight Model</h2>
        <p style={{fontSize: '24px', marginBottom: '40px', textAlign: 'center'}}>
          End-to-end client engagement with <strong>Agile delivery, transparent reporting, and co-creation</strong>
        </p>
        <div className="process-step">
          <h3>1. Discovery & Process Mapping</h3>
          <p>We analyze your workflows, identify bottlenecks, and map opportunities for AI integration</p>
        </div>
        <div className="process-step">
          <h3>2. AI Model Selection & Integration</h3>
          <p>Choose and configure the right AI technologies for your specific use cases</p>
        </div>
        <div className="process-step">
          <h3>3. Automation Build</h3>
          <p>Develop custom solutions with your team, ensuring alignment at every stage</p>
        </div>
        <div className="process-step">
          <h3>4. Deployment & Ongoing Optimization</h3>
          <p>Launch with full support, then continuously improve based on performance data</p>
        </div>
      </div>
    </div>
  )
}

// Slide 5: Industry Scenarios
function Slide5() {
  return (
    <div className="slide fade-in">
      <div className="neural-pattern"></div>
      <div className="logo">Build Tech Deploy</div>
      <div className="content">
        <h2>Real Estate AI in Action</h2>
        <div className="scenario">
          <h3>Scenario 1: AI-Powered Lead Qualification</h3>
          <p>Automatically score and prioritize leads using behavioral data and predictive models, enabling sales teams to focus on high-value opportunities with forecasted conversion rates.</p>
        </div>
        <div className="scenario">
          <h3>Scenario 2: Smart Property Valuation</h3>
          <p>Machine learning models analyze market trends, comparable sales, and property features to provide instant, accurate valuations that adapt in real-time.</p>
        </div>
        <div className="scenario">
          <h3>Scenario 3: Intelligent Document Processing</h3>
          <p>AI extracts and validates data from contracts, inspections, and legal documents—reducing processing time from hours to seconds while ensuring accuracy.</p>
        </div>
        <div className="scenario">
          <h3>Scenario 4: Virtual Assistants</h3>
          <p>Conversational AI agents provide 24/7 support to property buyers and tenants, answering questions, scheduling viewings, and guiding through the application process.</p>
        </div>
      </div>
    </div>
  )
}

// Slide 6: Case Study
function Slide6() {
  return (
    <div className="slide fade-in">
      <div className="neural-pattern"></div>
      <div className="logo">Build Tech Deploy</div>
      <div className="content">
        <h2>Case Study: RUA Alharam Properties</h2>
        <div className="highlight-box">
          <h3 style={{fontSize: '36px', textAlign: 'center', marginBottom: '30px'}}>
            AI-Driven Sales Cloud Implementation
          </h3>
          <p style={{fontSize: '22px', marginBottom: '40px', textAlign: 'center'}}>
            Challenge: Manual lead management, slow follow-ups, and limited visibility into sales pipeline performance
          </p>
          <div className="grid-2" style={{gap: '50px'}}>
            <div>
              <h3 style={{color: '#DA77F2', fontSize: '28px'}}>Solution Delivered</h3>
              <ul style={{marginTop: '20px'}}>
                <li>Custom Salesforce integration with AI lead scoring</li>
                <li>Automated follow-up sequences</li>
                <li>Real-time dashboard with predictive analytics</li>
                <li>WhatsApp chatbot for instant customer engagement</li>
              </ul>
            </div>
            <div>
              <h3 style={{color: '#2E6FF2', fontSize: '28px'}}>Results</h3>
              <div className="metrics" style={{flexDirection: 'column', gap: '30px', marginTop: '20px'}}>
                <div className="metric">
                  <span className="metric-value">+35%</span>
                  <span className="metric-label">Faster Deal Closure</span>
                </div>
                <div className="metric">
                  <span className="metric-value">-40%</span>
                  <span className="metric-label">Admin Time Saved</span>
                </div>
                <div className="metric">
                  <span className="metric-value">3x</span>
                  <span className="metric-label">Lead Response Speed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Slide 7: Innovation Edge
function Slide7() {
  return (
    <div className="slide fade-in">
      <div className="neural-pattern"></div>
      <div className="logo">Build Tech Deploy</div>
      <div className="content">
        <h2>Our Innovation Edge</h2>
        <div className="grid-2" style={{marginTop: '50px'}}>
          <div className="card" style={{padding: '40px'}}>
            <h3>Generative AI Dashboards</h3>
            <p>Ask questions in plain language and receive instant insights from your data with natural language processing</p>
          </div>
          <div className="card" style={{padding: '40px'}}>
            <h3>24/7 AI Chat Agents</h3>
            <p>Conversational AI that never sleeps—handling inquiries, bookings, and support across multiple channels</p>
          </div>
          <div className="card" style={{padding: '40px'}}>
            <h3>Automated Reporting</h3>
            <p>Generate comprehensive reports automatically with AI-powered analysis and recommendations</p>
          </div>
          <div className="card" style={{padding: '40px'}}>
            <h3>Visual Data Insights</h3>
            <p>Transform complex data into intuitive visualizations that drive better decision-making</p>
          </div>
        </div>
        <div className="highlight-box" style={{marginTop: '50px'}}>
          <p style={{fontSize: '26px', textAlign: 'center'}}>
            <strong>Integration Expertise:</strong> Salesforce • Supabase • Custom LLM Agents • OpenAI • Claude • AWS
          </p>
        </div>
      </div>
    </div>
  )
}

// Slide 8: ROI & Business Impact
function Slide8() {
  return (
    <div className="slide fade-in">
      <div className="neural-pattern"></div>
      <div className="logo">Build Tech Deploy</div>
      <div className="content content-center">
        <h2 style={{marginBottom: '60px'}}>Measurable Business Impact</h2>
        <div className="metrics" style={{width: '100%', maxWidth: '1200px'}}>
          <div className="metric">
            <span className="metric-value">30-50%</span>
            <span className="metric-label">Time Savings</span>
          </div>
          <div className="metric">
            <span className="metric-value">3-5x</span>
            <span className="metric-label">Faster Response Times</span>
          </div>
          <div className="metric">
            <span className="metric-value">99%</span>
            <span className="metric-label">Data Accuracy</span>
          </div>
          <div className="metric">
            <span className="metric-value">40%</span>
            <span className="metric-label">Cost Reduction</span>
          </div>
        </div>
        <div className="grid-2" style={{marginTop: '80px', gap: '50px'}}>
          <div className="card" style={{padding: '40px'}}>
            <h3>Customer Experience</h3>
            <ul>
              <li>Instant responses to inquiries</li>
              <li>Personalized property recommendations</li>
              <li>Seamless digital journey from search to close</li>
            </ul>
          </div>
          <div className="card" style={{padding: '40px'}}>
            <h3>Operational Excellence</h3>
            <ul>
              <li>Automated routine tasks and workflows</li>
              <li>Real-time visibility across operations</li>
              <li>Data-driven strategic decisions</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

// Slide 9: Our Team & Approach
function Slide9() {
  return (
    <div className="slide fade-in">
      <div className="neural-pattern"></div>
      <div className="logo">Build Tech Deploy</div>
      <div className="content">
        <h2>Cross-Disciplinary Expertise</h2>
        <p style={{fontSize: '26px', textAlign: 'center', marginBottom: '50px'}}>
          A team that combines <strong>AI innovation, software engineering, and project management mastery</strong>
        </p>
        <div className="grid-2" style={{gap: '40px'}}>
          <div className="card" style={{padding: '40px'}}>
            <h3>AI Consultants</h3>
            <p>Strategic advisors who understand both technology and business transformation</p>
          </div>
          <div className="card" style={{padding: '40px'}}>
            <h3>Software Engineers</h3>
            <p>Full-stack developers specializing in AI integration and custom solutions</p>
          </div>
          <div className="card" style={{padding: '40px'}}>
            <h3>Project Managers</h3>
            <p>Agile delivery experts ensuring transparency and timely execution</p>
          </div>
          <div className="card" style={{padding: '40px'}}>
            <h3>QA Specialists</h3>
            <p>Quality assurance professionals ensuring reliability and performance</p>
          </div>
        </div>
        <div className="highlight-box" style={{marginTop: '50px'}}>
          <p style={{fontSize: '28px', textAlign: 'center', lineHeight: '1.7'}}>
            We are both your <strong>strategic advisor</strong> and <strong>technical executor</strong>—<br/>
            partnering with you from strategy through deployment and beyond.
          </p>
        </div>
      </div>
    </div>
  )
}

// Slide 10: Why Now?
function Slide10() {
  return (
    <div className="slide fade-in">
      <div className="neural-pattern"></div>
      <div className="logo">Build Tech Deploy</div>
      <div className="content">
        <h2>Why Partner With Us Now?</h2>
        <div className="grid-2" style={{marginTop: '60px', gap: '50px'}}>
          <div>
            <div className="scenario">
              <h3>AI is Ready for Real Estate</h3>
              <p>Technology has matured to the point where AI delivers reliable, production-ready results for property businesses.</p>
            </div>
            <div className="scenario">
              <h3>First-Mover Advantage</h3>
              <p>Early adopters are already seeing 30-50% efficiency gains and leaving competitors behind.</p>
            </div>
          </div>
          <div>
            <div className="scenario">
              <h3>Customer Expectations</h3>
              <p>Modern buyers and renters expect instant, personalized digital experiences—AI makes this scalable.</p>
            </div>
            <div className="scenario">
              <h3>Proven ROI</h3>
              <p>Our clients consistently see positive ROI within 6-12 months through time savings and revenue acceleration.</p>
            </div>
          </div>
        </div>
        <div className="highlight-box" style={{marginTop: '50px'}}>
          <p style={{fontSize: '32px', textAlign: 'center', fontWeight: '600'}}>
            The question isn't <em>if</em> you'll adopt AI—<br/>
            it's whether you'll lead the transformation or follow.
          </p>
        </div>
      </div>
    </div>
  )
}

// Slide 11: Our Commitment
function Slide11() {
  return (
    <div className="slide fade-in">
      <div className="neural-pattern"></div>
      <div className="logo">Build Tech Deploy</div>
      <div className="content content-center">
        <h2 style={{marginBottom: '60px'}}>Our Commitment to You</h2>
        <div className="grid-3">
          <div className="card" style={{padding: '35px', textAlign: 'center'}}>
            <h3 style={{fontSize: '30px'}}>Partnership</h3>
            <p>We work alongside your team, not above them—building capabilities together</p>
          </div>
          <div className="card" style={{padding: '35px', textAlign: 'center'}}>
            <h3 style={{fontSize: '30px'}}>Transparency</h3>
            <p>Clear communication, regular updates, and full visibility into progress</p>
          </div>
          <div className="card" style={{padding: '35px', textAlign: 'center'}}>
            <h3 style={{fontSize: '30px'}}>Innovation</h3>
            <p>Continuous exploration of emerging AI technologies to keep you ahead</p>
          </div>
          <div className="card" style={{padding: '35px', textAlign: 'center'}}>
            <h3 style={{fontSize: '30px'}}>Results</h3>
            <p>Focus on measurable outcomes that drive real business value</p>
          </div>
          <div className="card" style={{padding: '35px', textAlign: 'center'}}>
            <h3 style={{fontSize: '30px'}}>Scalability</h3>
            <p>Solutions designed to grow with your business needs</p>
          </div>
          <div className="card" style={{padding: '35px', textAlign: 'center'}}>
            <h3 style={{fontSize: '30px'}}>Excellence</h3>
            <p>Rigorous quality standards in every line of code and every strategy</p>
          </div>
        </div>
        <p style={{fontSize: '28px', marginTop: '70px', color: '#B27CFF', fontWeight: '600'}}>
          We don't just build technology—we build lasting competitive advantages.
        </p>
      </div>
    </div>
  )
}

// Slide 12: Call to Action
function Slide12() {
  return (
    <div className="slide fade-in">
      <div className="neural-pattern"></div>
      <div className="content content-center">
        <h1 style={{fontSize: '82px', marginBottom: '50px'}} className="glow">
          Let's Build Your AI Advantage<br/>in Real Estate
        </h1>
        <p style={{fontSize: '32px', marginBottom: '60px', maxWidth: '900px'}}>
          Partner with Build Tech Deploy to transform your business with AI-driven innovation and measurable results.
        </p>
        <button className="cta">Schedule a Consultation</button>
        <div className="contact-info">
          <p style={{fontSize: '26px', marginTop: '60px'}}>
            <strong>Contact:</strong> hello@buildtechdeploy.com
          </p>
          <p style={{fontSize: '26px', marginTop: '20px'}}>
            <strong>Website:</strong> www.buildtechdeploy.com
          </p>
          <p style={{fontSize: '24px', marginTop: '50px', color: '#e0d5f0'}}>
            📱 Scan QR code for instant connection
          </p>
        </div>
        <div style={{
          width: '180px',
          height: '180px',
          background: 'white',
          margin: '40px auto',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '14px',
          color: '#3D1A78',
          fontWeight: '600',
          border: '4px solid #B27CFF',
          boxShadow: '0 0 40px rgba(178, 124, 255, 0.5)'
        }}>
          [QR CODE]
        </div>
      </div>
    </div>
  )
}

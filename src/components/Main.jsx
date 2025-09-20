import React from 'react'
import './Main.css'
import seoImage from '../assets/genAI_bild.png'
import image1 from '../assets/genAI_bild2.png'
import image2 from '../assets/genAI_bild3.png'

const Main = () => {
  return (
    <main className="main">
      <section className="hero">
        <h1>Welcome to the SEO club!</h1>
        <p>Learn how important SEO is for your website</p>
      </section>
      
      <section className="image-section">
        <img src={seoImage} alt="SEO Illustration" className="feature-image" />
      </section>
      
      <section className="features">
        <div className="feature-card">
          <h2>What Is SEO and Why Does It Matter?</h2>
          <p>Search Engine Optimization (SEO) is the practice of improving a website's visibility on search engines like Google. By optimizing your site's structure, content, and technical elements, you make it easier for search engines to understand and rank your pages. Strong SEO helps businesses attract organic traffic, build trust with users, and stand out in a competitive digital market.</p>
        </div>
        <div className="feature-card">
          <h2>The Key Elements of Effective SEO</h2>
          <p>Successful SEO is built on several pillars: keyword research, on-page optimization, technical SEO, and link building. Keyword research ensures you target the terms your audience is actually searching for. On-page optimization involves structuring content with headings, meta tags, and internal links. Technical SEO focuses on site speed, mobile-friendliness, and indexability. Finally, quality backlinks signal authority and relevance to search engines.</p>
        </div>
        <div className="feature-card">
          <h2>Long-Term Benefits of SEO for Your Business</h2>
          <p>Unlike paid advertising, SEO is a long-term investment that continues to drive results over time. A well-optimized site can generate consistent organic traffic without ongoing ad spend. Moreover, SEO builds credibility—appearing at the top of search results makes your brand look trustworthy and authoritative. When combined with great content and user experience, SEO can help your business grow sustainably.</p>
        </div>
      </section>

      <section className="additional-images">
        <div className="image-container">
          <img src={image1} alt="SEO Optimization" className="additional-image" />
          <img src={image2} alt="SEO Strategy" className="additional-image" />
        </div>
      </section>
    </main>
  )
}

export default Main
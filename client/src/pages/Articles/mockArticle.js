const mockArticle = {
    category: "Tech News",
    title: "The Future of AI: What to Expect in the Next Decade",
    description: "AI is evolving rapidly. Here's how it may shape our world by 2035.",
    author: {
      name: "Jane Doe",
      avatar: "/avatars/jane.png",
      role: "Tech Reporter",
    },
    date: "April 4, 2025",
    image: {
      src: "/images/ai-future.jpg",
      alt: "AI Future",
      caption: "Illustration of futuristic AI integration in society",
    },
    content: [
      {
        type: "paragraph",
        text: "Artificial intelligence is transforming industries across the globe. From healthcare to finance, AI is making a profound impact."
      },
      {
        type: "subtitle",
        text: "AI in Healthcare"
      },
      {
        type: "paragraph",
        text: "In the coming years, AI is expected to revolutionize diagnostics, drug discovery, and patient monitoring."
      },
      {
        type: "image",
        src: "/images/ai-health.jpg",
        alt: "AI in healthcare",
        caption: "AI assisting doctors in hospitals"
      },
      {
        type: "ad"
      },
      {
        type: "subtitle",
        text: "Risks and Ethical Challenges"
      },
      {
        type: "paragraph",
        text: "With great power comes great responsibility. AI ethics will be at the forefront of future debates."
      }
    ],
    tags: ["AI", "Technology", "Future", "Ethics"],
    recommendations: [
      {
        title: "How AI Is Shaping Education",
        slug: "/articles/ai-in-education"
      },
      {
        title: "Top 10 AI Startups to Watch",
        slug: "/articles/top-ai-startups"
      }
    ],
    next: {
      title: "The Rise of Quantum Computing",
      slug: "/articles/quantum-computing"
    }
  };
  
  export default mockArticle;
  
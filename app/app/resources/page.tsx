
import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { 
  BookOpen, 
  FileText, 
  Award, 
  HelpCircle,
  Calendar,
  Clock,
  User,
  ArrowRight,
  Download,
  ExternalLink,
  Search,
  Filter,
  Star,
  TrendingUp
} from 'lucide-react'
import NewsletterSignup from '@/components/forms/newsletter-signup'

export const metadata: Metadata = {
  title: 'Resources | Research, Stories & Tools',
  description: 'Access Bondspire\'s library of research reports, success stories, educational content, and practical tools for creating positive change.',
  keywords: ['resources', 'research', 'success stories', 'educational content', 'tools', 'reports'],
  openGraph: {
    title: 'Resources | Research, Stories & Tools',
    description: 'Access Bondspire\'s library of research reports, success stories, educational content, and practical tools for creating positive change.',
    url: 'https://wearebondspire.com/resources',
  },
}

const featuredResources = [
  {
    type: 'Research Report',
    title: 'The State of Financial Inequality in Middle-Class America',
    excerpt: 'Comprehensive analysis of wealth-building barriers facing working families and evidence-based solutions that actually work.',
    author: 'Bondspire Research Team',
    publishedAt: '2024-12-15',
    readTime: '15 min read',
    category: 'Financial Inequality',
    image: '/images/resources/financial-inequality-report.jpg',
    downloadUrl: '/downloads/financial-inequality-report.pdf',
    featured: true
  },
  {
    type: 'Success Story',
    title: 'From Paycheck to Paycheck to $50K Net Worth: The Johnson Family Journey',
    excerpt: 'How a teaching family used our framework to build substantial wealth in 18 months while maintaining their values.',
    author: 'Maria Rodriguez',
    publishedAt: '2024-11-28',
    readTime: '8 min read',
    category: 'Success Stories',
    image: '/images/resources/johnson-family-story.jpg',
    href: '/resources/success-stories/johnson-family',
    featured: true
  },
  {
    type: 'Blog Post',
    title: 'Why Radical Transparency is Our Competitive Advantage',
    excerpt: 'Breaking down how complete openness about our processes, failures, and successes builds stronger community trust.',
    author: 'Alex Thompson',
    publishedAt: '2024-12-08',
    readTime: '6 min read',
    category: 'Transparency',
    image: '/images/resources/radical-transparency-blog.jpg',
    href: '/resources/blog/radical-transparency-advantage',
    featured: true
  }
]

const blogPosts = [
  {
    title: 'Building Community Resilience in a Digital Age',
    excerpt: 'Practical strategies for creating authentic local connections when everything is going digital.',
    author: 'Maria Rodriguez',
    publishedAt: '2024-12-01',
    readTime: '7 min read',
    category: 'Community Building',
    image: '/images/blog/community-resilience.jpg'
  },
  {
    title: 'The Hidden Costs of Traditional Financial Advice',
    excerpt: 'Breaking down why conventional wealth-building strategies don\'t work for middle-class families.',
    author: 'David Chen',
    publishedAt: '2024-11-20',
    readTime: '9 min read',
    category: 'Financial Education',
    image: '/images/blog/traditional-finance-costs.jpg'
  },
  {
    title: 'Educational Access: Beyond the College Degree',
    excerpt: 'Exploring alternative pathways to valuable skills and meaningful credentials.',
    author: 'Sarah Kim',
    publishedAt: '2024-11-15',
    readTime: '6 min read',
    category: 'Education',
    image: '/images/blog/beyond-college-degree.jpg'
  },
  {
    title: 'Information Integrity in the Age of Misinformation',
    excerpt: 'Tools and frameworks for evaluating information quality and building community trust.',
    author: 'Alex Thompson',
    publishedAt: '2024-11-05',
    readTime: '8 min read',
    category: 'Information Integrity',
    image: '/images/blog/information-integrity.jpg'
  }
]

const researchReports = [
  {
    title: 'Community Connection Impact Study 2024',
    description: 'Analysis of how authentic local relationships improve family financial outcomes and overall wellbeing.',
    publicationDate: '2024-10-30',
    pages: '42 pages',
    downloadUrl: '/downloads/community-connection-study.pdf',
    category: 'Community Research'
  },
  {
    title: 'Transparency in Business: Trust Building Metrics',
    description: 'Quantitative analysis of how radical transparency affects customer loyalty, employee satisfaction, and business outcomes.',
    publicationDate: '2024-09-15',
    pages: '28 pages',
    downloadUrl: '/downloads/transparency-metrics-study.pdf',
    category: 'Business Research'
  },
  {
    title: 'Alternative Education Outcomes Report',
    description: 'Comparison study of skills-based learning vs. traditional credentialing in real-world employment outcomes.',
    publicationDate: '2024-08-22',
    pages: '35 pages',
    downloadUrl: '/downloads/alternative-education-outcomes.pdf',
    category: 'Education Research'
  }
]

const successStories = [
  {
    title: 'The Martinez Family: Building Wealth Through Community',
    summary: 'Single mother creates $25K emergency fund while supporting two kids through our community-based approach.',
    participant: 'Elena Martinez',
    location: 'Phoenix, AZ',
    outcome: '$25,000 emergency fund in 14 months',
    category: 'Financial Empowerment',
    image: '/images/success-stories/elena-martinez.jpg'
  },
  {
    title: 'From Isolated to Community Leader: Robert\'s Journey',
    summary: 'Retired teacher overcomes social isolation to become local mutual aid coordinator.',
    participant: 'Robert Thompson',
    location: 'Burlington, VT',
    outcome: 'Organized 3 community programs serving 120+ families',
    category: 'Community Building',
    image: '/images/success-stories/robert-thompson.jpg'
  },
  {
    title: 'The Kim Family Business: Values-Aligned Success',
    summary: 'Local restaurant implements transparency practices and sees 40% increase in customer loyalty.',
    participant: 'James & Lisa Kim',
    location: 'Portland, OR',
    outcome: '40% increase in repeat customers',
    category: 'Business Transformation',
    image: '/images/success-stories/kim-family-business.jpg'
  }
]

const faqCategories = [
  {
    category: 'Getting Started',
    questions: [
      {
        question: 'How do I know if Bondspire is right for my family?',
        answer: 'Bondspire works best for middle-class families who value transparency, community connection, and are committed to building wealth without compromising their values. If you\'re frustrated with traditional financial advice and want to be part of a supportive community, we\'re likely a good fit.'
      },
      {
        question: 'What makes your approach different from other financial programs?',
        answer: 'Three key differences: 1) Radical transparency - we share our failures alongside successes, 2) Community-first - real relationships, not just digital connections, 3) Middle-class focused - designed for families with jobs, kids, and real constraints, not trust fund babies.'
      },
      {
        question: 'Do I need any specific qualifications or income level to participate?',
        answer: 'No specific qualifications required. Our programs work for families across various income levels, from $30K to $150K+ annually. The key is commitment to the process and willingness to engage with the community.'
      }
    ]
  },
  {
    category: 'Our Programs',
    questions: [
      {
        question: 'How long does the Generational Wealth Framework take to complete?',
        answer: 'The core framework is designed to be completed over 4-6 months, working about 2-3 hours per week. However, you have lifetime access and can work at your own pace. The community aspect continues indefinitely.'
      },
      {
        question: 'What kind of support do I get during the program?',
        answer: 'You get access to our private community, monthly group coaching calls, email support, resource library, and most importantly - connections with other families on the same journey.'
      },
      {
        question: 'Are there any additional costs beyond the initial program fee?',
        answer: 'No. We believe in radical transparency in pricing. The $497 fee includes everything - no hidden costs, no upsells, no recurring fees. We make money when you succeed, not by nickel and diming you.'
      }
    ]
  },
  {
    category: 'Community & Values',
    questions: [
      {
        question: 'What does "radical transparency" mean in practice?',
        answer: 'We share our financial reports, decision-making processes, failures, and limitations publicly. You can see exactly how we operate, what we earn, where money goes, and what challenges we face. This builds trust and accountability.'
      },
      {
        question: 'How do you ensure the community remains supportive and inclusive?',
        answer: 'We have clear community guidelines focused on mutual support, respectful dialogue, and shared learning. We actively moderate to maintain a safe, inclusive environment where diverse perspectives are welcomed and valued.'
      },
      {
        question: 'Can I participate if I don\'t live near other community members?',
        answer: 'Absolutely. While we encourage local connections, we have online community spaces, virtual events, and tools to help you connect with members in your area or build local networks using our frameworks.'
      }
    ]
  }
]

export default function ResourcesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-midnight-navy to-bond-blue text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 container-content text-center">
          <h1 className="text-heading-1 font-montserrat font-bold mb-6">
            Resources for Real Change
          </h1>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto mb-8">
            Access our library of research reports, success stories, educational content, 
            and practical tools—all created to help you build wealth, strengthen community, 
            and create positive impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Link href="#featured" className="btn-secondary border-white text-white hover:bg-white hover:text-bond-blue">
              Explore Resources
            </Link>
            <Link href="#newsletter" className="btn-primary bg-white text-bond-blue hover:bg-sky-tint">
              Get Updates
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section id="featured" className="section-padding bg-white">
        <div className="container-content">
          <div className="text-center mb-12">
            <h2 className="text-heading-2 font-montserrat font-bold text-midnight-navy mb-4">
              Featured Resources
            </h2>
            <p className="text-body text-slate-gray max-w-3xl mx-auto leading-relaxed">
              Our latest and most impactful content, featuring research findings, success stories, 
              and insights from our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredResources.map((resource) => (
              <article key={resource.title} className="bg-sky-tint/20 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative aspect-[16/9]">
                  <Image
                    src={resource.image}
                    alt={resource.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-bond-blue text-white px-3 py-1 rounded-full text-xs font-montserrat font-semibold">
                      {resource.type}
                    </span>
                  </div>
                  {resource.featured && (
                    <div className="absolute top-4 right-4">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-slate-gray mb-3">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{resource.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{resource.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="font-montserrat font-bold text-midnight-navy mb-3 leading-tight">
                    {resource.title}
                  </h3>
                  
                  <p className="text-slate-gray text-sm leading-relaxed mb-4">
                    {resource.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-bond-blue bg-bond-blue/10 px-2 py-1 rounded">
                      {resource.category}
                    </span>
                    
                    {resource.downloadUrl ? (
                      <a
                        href={resource.downloadUrl}
                        className="inline-flex items-center space-x-1 text-bond-blue hover:text-spire-pink transition-colors duration-300 group"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Download className="w-4 h-4" />
                        <span className="text-sm font-montserrat font-medium">Download</span>
                      </a>
                    ) : (
                      <Link
                        href={resource.href || '#'}
                        className="inline-flex items-center space-x-1 text-bond-blue hover:text-spire-pink transition-colors duration-300 group"
                      >
                        <span className="text-sm font-montserrat font-medium">Read More</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="section-padding bg-sky-tint/30">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Blog Posts */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-heading-3 font-montserrat font-bold text-midnight-navy flex items-center">
                  <BookOpen className="w-6 h-6 text-bond-blue mr-3" />
                  Latest Blog Posts
                </h2>
                <Link href="/resources/blog" className="text-bond-blue hover:text-spire-pink font-montserrat font-medium text-sm">
                  View All
                </Link>
              </div>
              
              <div className="space-y-6">
                {blogPosts.map((post) => (
                  <article key={post.title} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 text-xs text-slate-gray mb-2">
                          <span>{post.author}</span>
                          <span>•</span>
                          <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                        
                        <h3 className="font-montserrat font-bold text-midnight-navy mb-2 leading-tight">
                          {post.title}
                        </h3>
                        
                        <p className="text-slate-gray text-sm leading-relaxed mb-3">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-bond-blue bg-bond-blue/10 px-2 py-1 rounded">
                            {post.category}
                          </span>
                          <ArrowRight className="w-4 h-4 text-bond-blue" />
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Research Reports & Success Stories */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Research Reports */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-heading-3 font-montserrat font-bold text-midnight-navy flex items-center">
                    <FileText className="w-6 h-6 text-gradient-purple mr-3" />
                    Research Reports
                  </h2>
                  <Link href="/resources/research" className="text-bond-blue hover:text-spire-pink font-montserrat font-medium text-sm">
                    View All
                  </Link>
                </div>
                
                <div className="space-y-4">
                  {researchReports.map((report) => (
                    <div key={report.title} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <h4 className="font-montserrat font-bold text-midnight-navy mb-2">
                        {report.title}
                      </h4>
                      <p className="text-slate-gray text-sm mb-3 leading-relaxed">
                        {report.description}
                      </p>
                      <div className="flex items-center justify-between text-xs text-slate-gray">
                        <div className="flex items-center space-x-3">
                          <span>{new Date(report.publicationDate).toLocaleDateString()}</span>
                          <span>{report.pages}</span>
                        </div>
                        <a
                          href={report.downloadUrl}
                          className="flex items-center space-x-1 text-bond-blue hover:text-spire-pink transition-colors duration-300"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Download className="w-4 h-4" />
                          <span>PDF</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Success Stories */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-heading-3 font-montserrat font-bold text-midnight-navy flex items-center">
                    <Award className="w-6 h-6 text-spire-pink mr-3" />
                    Success Stories
                  </h2>
                  <Link href="/resources/success-stories" className="text-bond-blue hover:text-spire-pink font-montserrat font-medium text-sm">
                    View All
                  </Link>
                </div>
                
                <div className="space-y-4">
                  {successStories.map((story) => (
                    <div key={story.title} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex items-start space-x-3">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                          <Image
                            src={story.image}
                            alt={story.participant}
                            fill
                            className="object-cover"
                          />
                        </div>
                        
                        <div className="flex-1">
                          <h4 className="font-montserrat font-bold text-midnight-navy mb-1 text-sm">
                            {story.title}
                          </h4>
                          <p className="text-slate-gray text-xs mb-2">
                            {story.participant} • {story.location}
                          </p>
                          <p className="text-slate-gray text-sm leading-relaxed mb-2">
                            {story.summary}
                          </p>
                          <div className="bg-bond-blue/10 rounded px-2 py-1">
                            <p className="text-bond-blue font-montserrat font-semibold text-xs">
                              {story.outcome}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <div className="text-center mb-12">
            <h2 className="text-heading-2 font-montserrat font-bold text-midnight-navy mb-4 flex items-center justify-center">
              <HelpCircle className="w-8 h-8 text-bond-blue mr-3" />
              Frequently Asked Questions
            </h2>
            <p className="text-body text-slate-gray max-w-3xl mx-auto leading-relaxed">
              Get answers to common questions about our programs, community, and approach to creating positive change.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category) => (
              <div key={category.category} className="mb-12">
                <h3 className="font-montserrat font-bold text-xl text-midnight-navy mb-6 pb-2 border-b border-sky-tint">
                  {category.category}
                </h3>
                
                <div className="space-y-6">
                  {category.questions.map((item) => (
                    <div key={item.question} className="bg-sky-tint/20 rounded-lg p-6">
                      <h4 className="font-montserrat font-bold text-midnight-navy mb-3">
                        {item.question}
                      </h4>
                      <p className="text-slate-gray leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-bond-blue to-spire-pink rounded-lg p-8 text-white">
              <h3 className="font-montserrat font-bold text-xl mb-4">
                Still Have Questions?
              </h3>
              <p className="mb-6 leading-relaxed">
                Can't find what you're looking for? Our team is here to help. 
                Reach out and we'll get back to you within 24 hours.
              </p>
              <Link href="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-bond-blue">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section id="newsletter" className="section-padding bg-sky-tint/50">
        <div className="container-content">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-heading-2 font-montserrat font-bold text-midnight-navy mb-4">
              Stay Updated
            </h2>
            <p className="text-body text-slate-gray mb-8 leading-relaxed">
              Get notified when we publish new research, share success stories, 
              or release new resources. No spam, just valuable content delivered monthly.
            </p>
            
            <NewsletterSignup 
              variant="inline"
              className="bg-white shadow-lg"
            />
          </div>
        </div>
      </section>
    </>
  )
}

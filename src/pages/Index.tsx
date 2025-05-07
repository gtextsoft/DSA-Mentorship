import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import FeatureCard from "@/components/FeatureCard";
import TestimonialCard from "@/components/TestimonialCard";
import FAQ from "@/components/FAQ";
import RegisterForm from "@/components/RegisterForm";
import { 
  Users, 
  Trophy, 
  BookOpen, 
  Network, 
  Building, 
  Target, 
  Users2, 
  BadgeCheck,
  ArrowDown,
  Star,
  Award,
  Calendar,
  DollarSign,
  Check,
  Play
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  useEffect(() => {
    // Set document title
    document.title = "Inner Circle Mentorship with Dr. Stephen Akintayo";
  }, []);

  const benefits = [
    {
      icon: <Users size={28} />,
      title: "1-on-1 Mentorship",
      description: "Personalized guidance and access to Dr. Stephen Akintayo for an entire year, accelerating your growth with targeted advice."
    },
    {
      icon: <Target size={28} />,
      title: "Custom Strategy Blueprint",
      description: "A personalized roadmap built specifically for your business to scale effectively and overcome specific challenges."
    },
    {
      icon: <Network size={28} />,
      title: "Billionaire Inner Circle",
      description: "Exclusive access to Dr. Stephen's network of elite investors, CEOs, and potential partners that could multiply your opportunities."
    },
    {
      icon: <BookOpen size={28} />,
      title: "Knowledge Library",
      description: "Gain access to all 45+ of Dr. Stephen's best-selling books, packed with strategies on real estate, wealth building, and leadership."
    },
    {
      icon: <Building size={28} />,
      title: "Property Investment Access",
      description: "First access to insider property deals before they go public, with guidance on how to maximize returns."
    },
    {
      icon: <Calendar size={28} />,
      title: "VIP Event Access",
      description: "Premium seating at all events organized by Dr. Stephen Akintayo, giving you direct access to powerful connections."
    },
    {
      icon: <BadgeCheck size={28} />,
      title: "Powerful Endorsements",
      description: "Carry Dr. Stephen's name as his mentee, opening doors with banks, investors, and business opportunities."
    },
    {
      icon: <Users2 size={28} />,
      title: "Legacy Support",
      description: "Build systems that can transform your success into generational wealth with proven frameworks."
    }
  ];

  const testimonials = [
    {
      quote: "From earning ₦10 million yearly to generating over ₦1 Billion annually - Dr. Stephen's mentorship completely transformed my business thinking and execution.",
      name: "Emmanuel Daggo",
      title: "CEO, Daggo Enterprises",
      beforeMetric: "₦10M/year",
      afterMetric: "₦1B+/year",
      delay: 200
    },
    {
      quote: "The strategies Dr. Stephen shared helped me secure three major investors in just two months. His network and guidance are absolutely priceless.",
      name: "Sarah Okonkwo",
      title: "Founder, TechFusion Africa",
      beforeMetric: "0 investors",
      afterMetric: "3 major investors",
      delay: 400
    },
    {
      quote: "Being associated with Dr. Stephen opened doors I'd been knocking on for years. The mentorship fee seems high until you see the returns - completely worth it.",
      name: "Michael Adebayo",
      title: "Real Estate Developer",
      beforeMetric: "2 properties/year",
      afterMetric: "15 properties/year",
      delay: 600
    }
  ];

  const videoTestimonials = [
    {
      title: "From Small Business to Industry Leader",
      description: "How Dr. Stephen's guidance helped me transform my local business into a national brand with multiple outlets.",
      youtube: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      name: "Adebola Johnson",
      business: "CEO, Johnson Enterprises"
    },
    {
      title: "Breaking Financial Barriers",
      description: "Learn how I scaled my business from ₦5M to ₦500M in annual revenue within 18 months of Dr. Stephen's mentorship.",
      youtube: "https://www.youtube.com/embed/jNQXAC9IVRw",
      name: "Chioma Okafor",
      business: "Founder, Okafor Properties"
    },
    {
      title: "International Expansion Success Story",
      description: "How Dr. Stephen helped me take my Nigerian business international with strategic partnerships.",
      youtube: "https://www.youtube.com/embed/9bZkp7q19f0",
      name: "Michael Adeyemi",
      business: "Director, Global Solutions Ltd"
    }
  ];

  const painPoints = [
    {
      title: "Financial Ceiling",
      description: "You're making money, but struggling to multiply it, scale fast, and unlock greater results."
    },
    {
      title: "Isolation at the Top",
      description: "You've outgrown everyone around you — but have no one to talk to or learn from."
    },
    {
      title: "Success Guilt",
      description: "You feel guilty for succeeding while people you love are still behind."
    },
    {
      title: "Perfection Pressure",
      description: "You're under pressure to look perfect, even when you're tired, stuck, or uncertain."
    },
    {
      title: "Energy Drain",
      description: "Everyone wants a piece of your success — and it's draining your peace, time, and energy."
    },
    {
      title: "Next Level Navigation",
      description: "You work hard, you rise fast, but what comes next? How do you scale influence, income, and impact?"
    }
  ];

  const challenges = [
    "Expand without playing small",
    "Adjust to new levels of success without sabotaging myself",
    "Manage public perception without privately drowning in pressure",
    "Stay authentic while navigating the complex challenges of growth"
  ];

  const investmentBenefits = [
    "17+ years of hard-won knowledge, international access, and billion-naira insights",
    "Direct access to Dr. Stephen Akintayo for a full year of personalized guidance",
    "Proven systems that built a multinational conglomerate with subsidiaries across continents",
    "Priceless connections to elite investors, CEOs, and powerful decision-makers"
  ];

  const foundationStats = {
    orphansImpacted: "5,000+",
    booksAuthored: "45+",
    menteesCount: "100+"
  };

  const menteeAchievements = [
    "Closed multi-million naira deals",
    "Secured investors from one Instagram post",
    "Sold out properties from a single endorsement"
  ];

  const wealthPlaybooks = [
    "Doubling your revenue",
    "Slashing costs",
    "Building market domination strategies"
  ];

  return (
    <div className="min-h-screen bg-premium-950 text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-hero-pattern bg-cover bg-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <h1 className="premium-header mb-6">
                This Is Where Top Performers Come To <span className="premium-gradient-text">Multiply</span>
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <p className="text-xl md:text-2xl text-gray-200 mb-8">
                Join the Inner Circle Mentorship with Dr. Stephen Akintayo and transform your success into lasting impact.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={400}>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Button 
                  className="premium-button text-lg py-6 px-10 animate-subtle-bounce" 
                  onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Secure Your Spot
                </Button>
                <Button 
                  variant="outline" 
                  className="text-gold-400 border-gold-400 hover:bg-gold-500/10" 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Learn More <ArrowDown className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={600} className="mt-16">
              <div className="inline-block bg-premium-900/70 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/10">
                <p className="text-gold-300 font-medium">Forbes Best of Africa Leading Investment Coach, 2023</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Pain Points Section */}
      <section className="py-20 bg-premium-900">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="section-title text-center mb-8">
              Success Looks Beautiful On The Outside... <br />
              <span className="text-gray-300">But There Are Peculiar Struggles Rarely Addressed</span>
            </h2>
            <p className="text-center text-gray-200 max-w-3xl mx-auto mb-16">
              Success is powerful, yet tricky. If not properly managed, it can become confusing to navigate and leave you feeling unfulfilled despite your achievements.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {painPoints.map((point, index) => (
              <AnimatedSection delay={200 + (index * 100)} key={index}>
                <div className="feature-card h-full">
                  <h3 className="text-xl font-bold mb-4 text-gold-400">{point.title}</h3>
                  <p className="text-gray-200">
                    {point.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          
          <AnimatedSection delay={900} className="mt-16 text-center">
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              You work hard, you rise fast, but what comes next? How do you walk through the unspoken side of scaling influence, income, and impact?
              <span className="block mt-4 font-semibold text-gold-400">And that's exactly what I'm offering you.</span>
            </p>
          </AnimatedSection>
        </div>
      </section>
      
      {/* About Dr. Stephen Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-premium-950 to-premium-900">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-2xl font-bold premium-gradient-text">Introducing...</h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden border-4 border-gold-500 shadow-2xl">
                  <div className="bg-premium-800 h-full w-full flex items-center justify-center text-gold-500">
                    <img src="https://pbs.twimg.com/media/Gmy5x-NW8AEEG3w.jpg:large" alt="Dr. Stephen Akintayo" className="w-full h-full object-cover object-top"/>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-gold-gradient p-4 rounded-lg shadow-xl">
                  <p className="font-bold text-premium-950">Forbes Best of Africa Leading Investment Coach, 2023</p>
                </div>
              </div>
            </AnimatedSection>
            
            <div>
              <AnimatedSection>
                <h2 className="section-title">One-on-One Mentorship With <span className="premium-gradient-text">Dr. Stephen Akintayo</span></h2>
              </AnimatedSection>
              <AnimatedSection delay={200}>
                <p className="text-gray-200 mb-6">
                  I'm Dr. Stephen Akintayo, an Entrepreneur, Investor, and Mentor. With over 17 years in business, 
                  I've had the privilege of founding and leading Gtext Holdings, a multinational conglomerate 
                  operating across four continents, with subsidiaries in real estate, agriculture, media, e-commerce, 
                  and investment consulting.
                </p>
              </AnimatedSection>
              
              <AnimatedSection delay={300}>
                <p className="text-gray-200 mb-6">
                  But here's the truth behind the accolades: I started clueless. 
                  No rich background. No roadmap. No access.
                  Just raw ambition and a heart full of questions.
                </p>
              </AnimatedSection>
              
              <AnimatedSection delay={400}>
                <div className="mb-6 bg-premium-900/60 border border-white/10 rounded-lg p-5">
                  <p className="text-white mb-3 font-medium">There were moments I didn't know how to:</p>
                  <ul className="space-y-2">
                    {challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-gold-500 mr-2">•</span>
                        <span className="text-gray-300">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={500}>
                <p className="text-gray-200 mb-6">
                  I was stuck, confused, overwhelmed until I found mentors.
                  Men like Dr. Cosmas Maduka, and others who had walked the path and handed me the blueprint.
                  Some I paid hugely, others I got via access but these people became mirrors, maps, and mountains of wisdom. 
                  Through their guidance, I gained clarity. I gained direction. I gained momentum.
                </p>
              </AnimatedSection>
              
              <AnimatedSection delay={600}>
                <p className="text-gray-200 mb-6">
                  Today, I've authored over {foundationStats.booksAuthored} books, spoken at world-class events and shared the stage 
                  with giants like Grant Cardone and John C. Maxwell.
                </p>
              </AnimatedSection>
              
              <AnimatedSection delay={700}>
                <p className="text-gray-200 mb-6">
                  I founded the Stephen Akintayo Foundation where we've impacted over {foundationStats.orphansImpacted} orphans and
                  vulnerable children providing grants, scholarships, and transformative mentorship.
                </p>
              </AnimatedSection>
              
              <AnimatedSection delay={800}>
                <p className="text-gray-200 mb-6">
                  I've mentored over {foundationStats.menteesCount} individuals who now run multi-million-dollar businesses across Africa and beyond.
                </p>
              </AnimatedSection>
              
              <AnimatedSection delay={900}>
                <p className="text-gray-200 mb-8 font-medium">
                  I didn't get here by luck, I got here through mentorship, access, and relentless execution. 
                  And now, I'm offering you everything I've learned so you don't have to stay stuck, confused, 
                  unaware, or unsure.
                </p>
                <p className="text-gray-200 mb-8">
                  So you don't drown in the very success you worked so hard to achieve. 
                  This mentorship is my life's work distilled, the lessons, the scars, the secrets, the shortcuts… 
                  All handed to you to help shorten your path, eliminate avoidable mistakes, and accelerate your rise.
                </p>
              </AnimatedSection>
              
              <AnimatedSection delay={1000}>
                <Button 
                  className="premium-button" 
                  onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Join My Inner Circle
                </Button>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-premium-950">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="section-title text-center mb-6">
              What You'll Get In This <span className="premium-gradient-text">Mentorship Program</span>
            </h2>
            <p className="text-gray-300 text-center max-w-3xl mx-auto mb-16">
              This is NOT a course. This is NOT a group coaching program. This is personalized, 1-on-1 mentorship 
              where I hold your hands and give you access to EVERYTHING that helped me become who I am today.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <FeatureCard
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                delay={index * 100}
              />
            ))}
          </div>
          
          {/* Wealth Playbooks Section */}
          <AnimatedSection delay={900} className="mt-16 max-w-3xl mx-auto">
            <div className="bg-premium-900/60 border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-gold-400">Wealth Playbooks, Not Guesswork</h3>
              <p className="text-gray-200 mb-4">From tax strategies to monopoly moves, you'll steal my exact playbook for:</p>
              <ul className="space-y-2">
                {wealthPlaybooks.map((playbook, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-gold-500 mr-2">•</span>
                    <span className="text-gray-300">{playbook}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
          
          {/* Mentee Achievements Section */}
          <AnimatedSection delay={1000} className="mt-12 max-w-3xl mx-auto">
            <div className="bg-premium-900/60 border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-gold-400">My mentees have:</h3>
              <ul className="space-y-2">
                {menteeAchievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-gold-500 mr-2">•</span>
                    <span className="text-gray-300">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={800} className="text-center mt-16">
            <Button 
              className="premium-button text-lg py-6 px-10" 
              onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Secure Your Transformation
            </Button>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Investment Section */}
      <section className="py-20 bg-premium-800">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="section-title text-center mb-6">
              The Investment in Your <span className="premium-gradient-text">Future</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-xl text-center text-gray-200 mb-10 max-w-3xl mx-auto">
              This mentorship is not for everyone nor is it for just anyone. It's a significant investment that reflects the value of what you'll receive.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={300} className="max-w-4xl mx-auto bg-premium-900 border border-gold-500/20 rounded-xl p-8 md:p-12 shadow-xl">
            <div className="text-center mb-8">
              <p className="text-xl text-gray-300">The commitment fee is</p>
              <h3 className="text-5xl md:text-6xl font-bold premium-gradient-text my-4">₦40,000,000</h3>
              <p className="text-lg text-gray-300">
                This is your fast pass to seats money alone can't buy
              </p>
            </div>
            
            <div className="space-y-6 mb-10">
              {investmentBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-6 w-6 rounded-full bg-gold-500 flex items-center justify-center">
                      <Check className="h-4 w-4 text-premium-950" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-white">
                      <strong>{benefit.split(',')[0]}</strong>{benefit.substring(benefit.indexOf(','))}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Button 
                className="premium-button text-lg py-6 px-10 animate-pulse-glow" 
                onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Apply for Mentorship
              </Button>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={400} className="text-center mt-12 max-w-3xl mx-auto">
            <p className="text-lg text-gray-300 italic">
              "Take Emmanuel Daggo as proof. He once joined my free mentorship sessions while earning ₦10 million per year.
              He applied the blueprint. And today? He generates over ₦1 Billion annually."
            </p>
            <p className="text-lg font-semibold text-gold-400 mt-2">
              — Emmanuel Daggo
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={500} className="mt-16 max-w-4xl mx-auto">
            <div className="bg-premium-900/60 border border-white/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Here's What ₦40,000,000 Would Typically Get You:</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-5 bg-premium-800/50 rounded-lg">
                  <p className="font-bold text-white mb-2">A luxury car</p>
                  <p className="text-gray-300 text-sm">Depreciates instantly</p>
                </div>
                
                <div className="text-center p-5 bg-premium-800/50 rounded-lg">
                  <p className="font-bold text-white mb-2">A fancy land in Lekki</p>
                  <p className="text-gray-300 text-sm">Just one property</p>
                </div>
                
                <div className="text-center p-5 bg-premium-800/50 rounded-lg">
                  <p className="font-bold text-white mb-2">A masters degree</p>
                  <p className="text-gray-300 text-sm">Theoretical knowledge</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-5 bg-gold-500/20 rounded-lg border border-gold-500/30">
                  <p className="font-bold text-gold-300 mb-2">With this mentorship</p>
                  <p className="text-white">You learn how to own the car dealership</p>
                </div>
                
                <div className="text-center p-5 bg-gold-500/20 rounded-lg border border-gold-500/30">
                  <p className="font-bold text-gold-300 mb-2">With this mentorship</p>
                  <p className="text-white">You learn how to flip land and build an empire</p>
                </div>
                
                <div className="text-center p-5 bg-gold-500/20 rounded-lg border border-gold-500/30">
                  <p className="font-bold text-gold-300 mb-2">With this mentorship</p>
                  <p className="text-white">You get proven, real-world strategies from a billionaire who's done it</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-testimonial-pattern bg-premium-900">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="section-title text-center mb-6">
              Here's What Others Are <span className="premium-gradient-text">Saying</span>
            </h2>
            <p className="text-gray-300 text-center max-w-3xl mx-auto mb-16">
              These are just a few of the many success stories from entrepreneurs who have been mentored by Dr. Stephen Akintayo.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                quote={testimonial.quote}
                name={testimonial.name}
                title={testimonial.title}
                beforeMetric={testimonial.beforeMetric}
                afterMetric={testimonial.afterMetric}
                delay={testimonial.delay}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Video Testimonials Section */}
      <section id="video-testimonials" className="py-20 bg-premium-950">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="section-title text-center mb-6">
              Video <span className="premium-gradient-text">Testimonials</span>
            </h2>
            <p className="text-gray-300 text-center max-w-3xl mx-auto mb-16">
              Watch these inspiring transformation stories from entrepreneurs who have worked closely with Dr. Stephen Akintayo.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videoTestimonials.map((testimonial, index) => (
              <AnimatedSection key={index} delay={index * 200}>
                <div className="bg-premium-900 rounded-xl overflow-hidden border border-white/10 shadow-xl h-full flex flex-col">
                  <div className="relative pb-[56.25%] h-0">
                    <iframe 
                      className="absolute top-0 left-0 w-full h-full" 
                      src={testimonial.youtube} 
                      title={testimonial.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-bold mb-2 text-gold-400">{testimonial.title}</h3>
                    <p className="text-gray-300 mb-4">{testimonial.description}</p>
                    <div className="flex items-center mt-auto pt-4 border-t border-white/10">
                      <div className="w-10 h-10 rounded-full bg-gold-500 flex items-center justify-center">
                        <span className="font-bold text-premium-950">{testimonial.name.charAt(0)}</span>
                      </div>
                      <div className="ml-3">
                        <p className="font-medium text-white">{testimonial.name}</p>
                        <p className="text-sm text-gray-400">{testimonial.business}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          
          <AnimatedSection delay={800} className="text-center mt-16">
            <Button 
              variant="outline" 
              className="text-gold-400 border-gold-400 hover:bg-gold-500/10"
              onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Join The Success Stories <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
          </AnimatedSection>
        </div>
      </section>
      
      {/* FAQ Section */}
      <FAQ />
      
      {/* Register Section */}
      <section id="register" className="py-20 bg-hero-pattern bg-cover bg-center">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="section-title text-center mb-6">
              Apply for the <span className="premium-gradient-text">Inner Circle Mentorship</span>
            </h2>
            <p className="text-gray-200 text-center max-w-3xl mx-auto mb-8">
              This is a life-altering opportunity to transform your success and build a legacy. 
              Due to the personalized nature of this mentorship, spaces are extremely limited.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={200} className="max-w-2xl mx-auto bg-premium-900/80 border border-gold-500/20 rounded-xl p-8 backdrop-blur-sm mb-10">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-3">Do you think you're not ready?</h3>
              <p className="text-gray-200">
                Here's the truth… You won't always feel ready for your next level and that's 
                why you need a mentor to push you beyond your limits.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-3">Still wondering if this will work for YOU?</h3>
              <p className="text-gray-200">
                It's not a course. It's PERSONALIZED. I work with you hand-in-hand until we see results. 
                You're not alone in this.
              </p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={300} className="max-w-lg mx-auto">
            <RegisterForm />
          </AnimatedSection>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;

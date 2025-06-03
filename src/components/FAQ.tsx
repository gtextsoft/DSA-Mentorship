
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedSection from "./AnimatedSection";

const faqItems = [
  {
    question: "Is this mentorship right for me?",
    answer: "This mentorship is ideal if you're already experiencing success but want to scale to new heights. You won't always feel ready for your next level, and that's precisely why you need a mentor like Dr. Stephen Akintayo who can push you beyond your perceived limits.",
  },
  {
    question: "How is this different from other mentoring programs?",
    answer: "Unlike typical courses or group coaching, this is a personalized 1-on-1 mentorship where Dr. Akintayo works directly with you. You'll receive custom strategies based on your specific business and goals, plus access to his influential network, which is unavailable through standard programs.",
  },
  {
    question: "What's the return on this $25k investment?",
    answer: "Beyond the monetary gains, you're investing in 17+ years of hard-won knowledge, international access, billion-naira insights, and battle-tested business frameworks that can literally change the trajectory of your life. Previous mentees have seen growth from $10k to $1B annual revenue through applying these strategies.",
  },
  {
    question: "How much time will I need to commit?",
    answer: "The mentorship requires dedicated participation in scheduled one-on-one sessions throughout the year. The exact time commitment will be tailored to your schedule and needs, but expect to invest significant time implementing the strategies and systems provided.",
  },
  {
    question: "What happens after I register?",
    answer: "Upon registration, you'll receive a personal welcome from Dr. Stephen Akintayo's team with details about your first mentorship session, access to all included resources, and a custom roadmap for your year of transformation.",
  },
  {
    question: "Do I get direct access to Dr. Stephen Akintayo?",
    answer: "Yes, this is a true 1-on-1 mentorship where you'll have Dr. Stephen's personal phone number and direct access to him throughout the year. This is not delegated to assistants or team members.",
  },
  {
    question: "What specific industries does this mentorship work for?",
    answer: "Dr. Stephen has mentored successful entrepreneurs across real estate, technology, e-commerce, agriculture, manufacturing, consulting, and many other industries. The principles of scaling and legacy-building work across all business types.",
  },
  {
    question: "How quickly will I see results?",
    answer: "Many mentees report significant breakthroughs within the first 60-90 days as they implement the strategies and leverage Dr. Stephen's network. However, the full transformation typically unfolds over the course of the year as you execute the custom roadmap designed for your specific situation.",
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-premium-950">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="section-title text-center text-white mb-6">
            Frequently Asked <span className="premium-gradient-text">Questions</span>
          </h2>
          <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
            Get answers to common questions about the Inner Circle Mentorship program and how it can transform your success into lasting impact.
          </p>
        </AnimatedSection>
        
        <AnimatedSection delay={200} className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="bg-premium-900/40 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="text-white hover:text-gold-400 px-6 py-4 text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 px-6 pb-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>
        
        <AnimatedSection delay={400} className="mt-12 text-center">
          <p className="text-gray-300 mb-6">Still have questions about the mentorship program?</p>
          <a 
            href="https://app.mailingboss.com/lists/683eba837bc34/subscribe" 
            target="_blank" 
            rel="noopener noreferrer"
            className="premium-button"
          >
            Apply Now and Learn More
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FAQ;

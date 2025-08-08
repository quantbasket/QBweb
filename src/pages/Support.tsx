import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HelpCircle, Book, MessageCircle, Mail, Users, Gem, Shield, CreditCard } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useNavigate } from "react-router-dom";

const Support = () => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  const handleResourcesClick = () => {
    navigate('/resources');
  };

  const handleEmailSupport = () => {
    window.location.href = 'mailto:support@quantbasket.com';
  };
  
  const categories = [
    {
      title: "Getting Started",
      description: "Setting up your account and first community",
      icon: Users,
      color: "qb-green",
      faqs: [
        {
          question: "How do I create an account?",
          answer: "You can create a free account by clicking the 'Sign Up' button on our homepage. All you need is a valid email address to get started with our Free plan and create your first community."
        },
        {
          question: "What can I do with the Free plan?",
          answer: "The Free plan is perfect for getting started. It allows you to create one community, design a basic community token, access our educational resources, and use the community forum."
        },
        {
          question: "How do I set up my first community space?",
          answer: "Once you sign up, our onboarding guide will walk you through the simple steps of naming your community, describing its purpose, and creating your first token for member engagement."
        }
      ]
    },
    {
      title: "Community Tokens & Rewards",
      description: "Understanding tokens and reward mechanisms",
      icon: Gem,
      color: "qb-blue",
      faqs: [
        {
          question: "Are community tokens a form of cryptocurrency?",
          answer: "No. Community tokens on our platform are for engagement and recognition only. They do not have monetary value, are not tradable on exchanges, and are not cryptocurrencies, in compliance with Indian law."
        },
        {
          question: "How do I reward members with tokens?",
          answer: "On our Standard plan, you can set up automated rules to reward members. For example, you can automatically distribute tokens when a member posts helpful content, welcomes a new user, or participates in a poll."
        },
        {
          question: "What can members do with the tokens they earn?",
          answer: "Tokens can be used to unlock special roles, gain access to exclusive content or channels, vote in community polls, or simply as a badge of honor to show their contribution and status within the community."
        }
      ]
    },
    {
      title: "Platform Features & Security",
      description: "How our platform works and keeps you safe",
      icon: Shield,
      color: "qb-green",
      faqs: [
        {
          question: "How do you ensure my data is secure?",
          answer: "We implement multiple layers of security, including enterprise-grade encryption for all user and community data, regular platform audits, and adherence to industry best practices for data security and privacy."
        },
        {
          question: "What is the analytics dashboard?",
          answer: "The analytics dashboard (available on paid plans) provides insights into your community's health. You can track member engagement, see who your most active contributors are, and understand what content resonates most with your audience."
        },
        {
          question: "What technology does the platform use?",
          answer: "Our platform uses a modern technology stack, including blockchain for a transparent and verifiable ledger of non-monetary token rewards. This ensures that all community activity and recognition is recorded fairly and cannot be altered."
        }
      ]
    },
    {
      title: "Billing & Subscriptions",
      description: "Managing your plan and payment details",
      icon: CreditCard,
      color: "qb-blue",
      faqs: [
        {
          question: "What payment methods do you accept for subscriptions?",
          answer: "We accept all major credit cards and bank transfers for our subscription plans. All payments are processed through a secure, PCI-compliant payment provider."
        },
        {
          question: "Can I change my plan at any time?",
          answer: "Yes, you can upgrade or downgrade your plan from your account settings. Upgrades are applied immediately, while downgrades take effect at the end of your current billing cycle."
        },
        {
          question: "How does the 14-day free trial work?",
          answer: "Our Standard plan comes with a 14-day free trial. You get full access to all its features without needing a credit card. At the end of the trial, you can choose to subscribe or your account will automatically be transitioned to our Free plan."
        }
      ]
    }
  ];

  const additionalFaqs = [
    {
      question: "Is there a mobile app?",
      answer: "Yes, our mobile app is available to all users and allows you to manage your community, engage with members, and track activity on the go. You can download it from the app stores."
    },
    {
      question: "What kind of support do you offer?",
      answer: "We offer email support for all users. Users on our Standard plan receive priority email support. Our Pro plan includes a dedicated account manager and 24/7 phone support."
    },
    {
      question: "What are 'Impact Projects'?",
      answer: "Impact Projects are a feature that allows communities to rally around specific, non-financial goals, such as environmental or social initiatives. You can use tokens to track and reward contributions towards these collective goals."
    },
    {
      question: "How is my personal data protected?",
      answer: "We are committed to data privacy and comply with all relevant data protection regulations. We do not sell your personal data. Please refer to our Privacy Policy for detailed information."
    },
    {
      question: "Can I delete my account and community data?",
      answer: "Yes, you can request the deletion of your account and all associated community data at any time by contacting our support team. The process is irreversible and will permanently remove all your information from our platform."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-white mb-6">
            Support Center
          </h1>
          <p className="text-xl text-gray-200">
            Find answers to your questions about our community engagement platform.
          </p>
        </div>
      </section>

      {/* Category-based FAQ */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <Card key={index} className="glass-card">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-12 h-12 bg-${category.color}/20 rounded-lg flex items-center justify-center`}>
                      <category.icon className={`w-6 h-6 text-${category.color}`} />
                    </div>
                    <div>
                      <CardTitle className="text-qb-navy">{category.title}</CardTitle>
                      <p className="text-sm text-qb-dark-gray">{category.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {category.faqs.map((faq, faqIndex) => (
                      <AccordionItem key={faqIndex} value={`item-${index}-${faqIndex}`}>
                        <AccordionTrigger className="text-left text-qb-navy hover:text-qb-green">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-qb-dark-gray">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* General FAQ */}
      <section className="section-gradient py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-qb-navy mb-6">General Questions</h2>
            <p className="text-lg text-qb-dark-gray">
              Common questions about using our platform.
            </p>
          </div>
          
          <Card className="glass-card">
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                {additionalFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`general-${index}`}>
                    <AccordionTrigger className="text-left text-qb-navy hover:text-qb-green">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-qb-dark-gray">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-qb-navy mb-6">Still Need Help?</h2>
          <p className="text-lg text-qb-dark-gray mb-8">
            Our support team is here to assist you with any questions not covered in our FAQ.
          </p>
          
          <div className={`gap-6 ${isMobile ? 'grid grid-cols-2' : 'grid grid-cols-1 md:grid-cols-3'}`}>
            <Card className="glass-card text-center">
              <CardHeader>
                <Mail className="w-12 h-12 text-qb-green mx-auto mb-4" />
                <CardTitle className="text-qb-navy">Email Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-qb-dark-gray mb-4">
                  Get detailed help via email support.
                </p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={handleEmailSupport}
                  className="bg-qb-green/20 text-qb-green border-qb-green hover:bg-qb-green hover:text-white w-32 h-8"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Send Mail
                </Button>
              </CardContent>
            </Card>
            
            <Card className="glass-card text-center">
              <CardHeader>
                <MessageCircle className="w-12 h-12 text-qb-blue mx-auto mb-4" />
                <CardTitle className="text-qb-navy">Live Chat</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-qb-dark-gray mb-4">
                  Instant help during business hours.
                </p>
                <Badge variant="secondary" className="bg-qb-blue/20 text-qb-blue">
                  Available 9AM-6PM IST
                </Badge>
              </CardContent>
            </Card>
            
            <Card className={`glass-card text-center ${isMobile ? 'col-span-2' : ''}`}>
              <CardHeader>
                <Book className="w-12 h-12 text-qb-green mx-auto mb-4" />
                <CardTitle className="text-qb-navy">Documentation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-qb-dark-gray mb-4">
                  Comprehensive guides and tutorials.
                </p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={handleResourcesClick}
                  className="bg-qb-green/20 text-qb-blue border-qb-blue hover:bg-qb-blue hover:text-white w-32 h-8"
                >
                  <Book className="w-4 h-4 mr-2" />
                  Resources
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Support;
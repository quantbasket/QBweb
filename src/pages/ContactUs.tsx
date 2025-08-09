import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Users, Gem, Shield, CreditCard, Mail, MessageCircle, Book, Phone, MapPin } from "lucide-react";

const ContactUs = () => {

  const handleEmailSupport = () => {
    window.location.href = 'mailto:support@quantbasket.com';
  };
  
  const faqCategories = [
    {
      title: "Getting Started",
      icon: Users,
      faqs: [
        {
          question: "How do I create an account?",
          answer: "Click the 'Sign Up' button on our homepage. With a valid email, you can start on our Free plan and create your first community engagement system."
        },
        {
          question: "What is the purpose of community points?",
          answer: "Community points on our platform are strictly for engagement and recognition. They are digital units with no monetary value, used to reward participation, unlock platform perks, or vote in community polls."
        },
      ]
    },
    {
      title: "Engagement & Rewards",
      icon: Gem,
      faqs: [
        {
          question: "Are these points a form of cryptocurrency?",
          answer: "No, absolutely not. Community points on Quant Basket are for internal platform engagement only. They have no monetary value, are not tradable, are not transferable, and are not Virtual Digital Assets (VDAs) or cryptocurrencies, in full compliance with Indian law."
        },
        {
          question: "How can members use the points they earn?",
          answer: "Members can use points to gain access to exclusive content, achieve special roles or badges, and participate in community decision-making through polls."
        },
      ]
    },
    {
      title: "Platform & Security",
      icon: Shield,
      faqs: [
        {
          question: "How is my community's data secured?",
          answer: "We use enterprise-grade encryption and adhere to strict data security best practices to protect all user and community data."
        },
        {
          question: "What technology does the platform use?",
          answer: "Our platform is built on a modern, secure technology stack. We use a secure digital ledger to ensure all community recognition and point distributions are recorded transparently and accurately."
        },
      ]
    },
    {
      title: "Billing & Subscriptions",
      icon: CreditCard,
      faqs: [
        {
          question: "What are the subscription payments for?",
          answer: "Subscription fees are for accessing the features of our software platform, such as advanced analytics, customization options, and the ability to create multiple point systems. Payments are for service use, not for purchasing any assets."
        },
        {
          question: "How do I cancel my subscription?",
          answer: "You can cancel your plan at any time from your account settings. Your access will continue until the end of the current billing period. For details, please see our Cancellation & Refund Policy."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="hero-gradient py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-white mb-6">
            Help Center & Contact
          </h1>
          <p className="text-xl text-gray-200">
            Find answers to your questions or get in touch with our team.
          </p>
        </div>
      </section>

      {/* Contact Channels */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-qb-navy mb-6">Get in Touch</h2>
            <p className="text-lg text-qb-dark-gray">We're here to help you succeed.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="glass-card text-center">
              <CardHeader>
                <Mail className="w-12 h-12 text-qb-green mx-auto mb-4" />
                <CardTitle className="text-qb-navy">Email Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-qb-dark-gray mb-4">Best for detailed questions.</p>
                <Button variant="qbPrimary" onClick={handleEmailSupport}>support@quantbasket.com</Button>
              </CardContent>
            </Card>
            <Card className="glass-card text-center">
              <CardHeader>
                <Phone className="w-12 h-12 text-qb-blue mx-auto mb-4" />
                <CardTitle className="text-qb-navy">Phone Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-qb-dark-gray mb-4">For urgent inquiries.</p>
                <p className="font-semibold text-qb-navy">+91 9019169696</p>
              </CardContent>
            </Card>
            <Card className="glass-card text-center">
              <CardHeader>
                <MapPin className="w-12 h-12 text-qb-green mx-auto mb-4" />
                <CardTitle className="text-qb-navy">Registered Office</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-qb-dark-gray">
                  Sooranna Nilaya, Shankaracharya Road, Vidyanagar, Hassan, Karnataka, 573201, India.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-gradient py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-qb-navy mb-6">Frequently Asked Questions</h2>
          </div>
          <Card className="glass-card p-6">
            <Accordion type="single" collapsible className="w-full">
              {faqCategories.map((category) => (
                category.faqs.map((faq, index) => (
                  <AccordionItem key={`${category.title}-${index}`} value={`${category.title}-${index}`}>
                    <AccordionTrigger className="text-left text-qb-navy hover:text-qb-green font-semibold">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-qb-dark-gray">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))
              ))}
            </Accordion>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;
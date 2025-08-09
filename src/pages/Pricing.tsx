import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Crown } from "lucide-react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const Pricing = () => {
  const isMobile = useIsMobile();
  const plans = [
    {
      name: "Free",
      price: "0",
      period: "forever",
      description: "Perfect for getting started with basic community engagement tools.",
      icon: Star,
      popular: false,
      features: [
        "Create 1 basic community point system",
        "Basic community analytics",
        "Community forum access",
        "Mobile app access",
        "Email support"
      ]
    },
    {
      name: "Standard",
      price: "4,000",
      period: "per month",
      description: "For growing communities that need advanced tools and features.",
      icon: Zap,
      popular: true,
      features: [
        "All Free plan features",
        "Create up to 5 unique point systems",
        "Advanced customization options",
        "Community polling tools",
        "Advanced analytics dashboard",
        "API access for custom integrations",
        "Priority email support"
      ]
    },
    {
      name: "Pro",
      price: "Contact Us",
      period: "",
      description: "Custom solutions for large-scale organizations.",
      icon: Crown,
      popular: false,
      available: false, // This disables the button
      features: [
        "All Standard plan features",
        "Unlimited point systems",
        "White-label platform solutions",
        "Dedicated account manager",
        "Advanced governance features",
        "Custom onboarding & support"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Compliance Disclaimer */}
      <div className="w-full bg-yellow-100 border-b border-yellow-300 text-yellow-900 text-center py-2 px-4 text-xs sm:text-sm">
        <strong>Disclaimer:</strong> This payment is for a subscription to our software features. It is not an investment or a payment for any crypto or digital asset. Our platform's non-tradable points are for engagement only and have no monetary value.
      </div>
      <Navigation />

      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-white mb-6">
            Choose Your Plan
          </h1>
          <p className="text-xl text-gray-200">
            Simple, transparent pricing for our community engagement platform. All prices are in INR.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`glass-card relative flex flex-col ${
                  plan.popular ? 'ring-2 ring-qb-green shadow-2xl scale-105' : ''
                } hover:shadow-xl transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-qb-green text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-8">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-gray-100">
                    <plan.icon className="w-8 h-8 text-qb-navy" />
                  </div>
                  <CardTitle className="text-2xl text-qb-navy">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-qb-navy">
                    {plan.name === 'Pro' ? (
                      <span className="text-2xl">{plan.price}</span>
                    ) : (
                      <>
                        ₹{plan.price}
                        {plan.period && <span className="text-lg font-normal text-qb-dark-gray">/{plan.period}</span>}
                      </>
                    )}
                  </div>
                  <p className="text-qb-dark-gray h-12">{plan.description}</p>
                </CardHeader>

                <CardContent className="flex-grow flex flex-col justify-between space-y-6">
                    <div>
                        <h4 className="font-semibold text-qb-navy mb-4">Features included:</h4>
                        <ul className="space-y-3">
                        {plan.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start space-x-3">
                            <Check className="w-5 h-5 text-qb-green mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-qb-dark-gray">{feature}</span>
                            </li>
                        ))}
                        </ul>
                    </div>
                    <div className="mt-auto pt-6">
                        {plan.name === 'Free' ? (
                            <Link to="/signup" className="w-full block">
                                <Button variant="qbPrimary" className="w-full" size="lg">Get Started Free</Button>
                            </Link>
                        ) : (
                            <Link to={plan.available === false ? "#" : `/signup?plan=${plan.name.toLowerCase()}`} className="w-full block">
                                <Button
                                    variant={plan.popular ? "qbPrimary" : "qbOutline"}
                                    className="w-full"
                                    size="lg"
                                    disabled={plan.available === false}
                                >
                                    {plan.available === false ? 'Contact Sales' : 'Start 14-Day Trial'}
                                </Button>
                            </Link>
                        )}
                    </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-qb-navy mb-6">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            <Card className="glass-card">
              <CardHeader><CardTitle className="text-qb-navy">Are the prices inclusive of taxes?</CardTitle></CardHeader>
              <CardContent><p className="text-qb-dark-gray">All prices are exclusive of applicable taxes like GST, which will be added at checkout.</p></CardContent>
            </Card>
            <Card className="glass-card">
              <CardHeader><CardTitle className="text-qb-navy">Can I upgrade or downgrade my plan?</CardTitle></CardHeader>
              <CardContent><p className="text-qb-dark-gray">Yes, you can change your plan anytime. Upgrades are applied immediately, and downgrades take effect at the end of the current billing cycle.</p></CardContent>
            </Card>
            <Card className="glass-card">
              <CardHeader><CardTitle className="text-qb-navy">Is there a free trial for the Standard plan?</CardTitle></CardHeader>
              <CardContent><p className="text-qb-dark-gray">Yes, our Standard plan includes a 14-day free trial. No credit card is required to start.</p></CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Crown } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link
import { useIsMobile } from "@/hooks/use-mobile";

const Pricing = () => {
  const isMobile = useIsMobile();
  const plans = [
    {
      name: "Free",
      price: "0",
      period: "forever",
      description: "Perfect for getting started with community engagement",
      icon: Star,
      popular: false,
      features: [
        "Create a basic community token",
        "Community forum access",
        "Educational resources",
        "Mobile app access",
        "Email support",
        "Basic community analytics"
      ],
      limitations: [
        "Limited to 1 community token",
        "Basic features only"
      ]
    },
    {
      name: "Standard",
      price: "50",
      period: "per month",
      description: "Advanced tools and features for growing communities",
      icon: Zap,
      popular: true,
      features: [
        "All Free plan features",
        "Create up to 5 unique community tokens",
        "Advanced token customization",
        "Community governance tools",
        "Advanced analytics dashboard",
        "API access for custom integrations",
        "Priority email support",
        "Webinar access",
        "Custom reward mechanisms"
      ],
      limitations: [
        "Standard processing priority"
      ]
    },
    {
      name: "Pro",
      price: "Currently Not Available",
      period: "",
      description: "Enterprise-grade solutions for large-scale communities",
      icon: Crown,
      popular: false,
      available: false,
      features: [
        "All Standard plan features",
        "Unlimited community tokens",
        "White-label community solutions",
        "Dedicated account manager",
        "Advanced governance features",
        "Custom integrations",
        "24/7 phone support",
        "Early access to new features"
      ],
      limitations: []
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Compliance Disclaimer */}
      <div className="w-full bg-yellow-100 border-b border-yellow-300 text-yellow-900 text-center py-2 px-4 text-xs sm:text-sm">
        <strong>Disclaimer:</strong> This payment is for platform features, not for crypto or digital assets. Our non-tradable tokens are for community engagement only and have no monetary value.
      </div>
      <Navigation />

      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-white mb-6">
            Choose Your Plan
          </h1>
          <p className="text-xl text-gray-200">
            Flexible plans designed to help you build, engage, and grow your community.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`glass-card relative ${
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
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                    plan.name === 'Free' ? 'bg-qb-blue/20' :
                    plan.name === 'Standard' ? 'bg-qb-green/20' :
                    'bg-qb-navy/20'
                  }`}>
                    <plan.icon className={`w-8 h-8 ${
                      plan.name === 'Free' ? 'text-qb-blue' :
                      plan.name === 'Standard' ? 'text-qb-green' :
                      'text-qb-navy'
                    }`} />
                  </div>
                  <CardTitle className="text-2xl text-qb-navy">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-qb-navy">
                    {plan.name === 'Pro' ? (
                      <span className="text-lg text-qb-dark-gray">Coming Soon</span>
                    ) : (
                      <>
                        ${plan.price}
                        <span className="text-lg font-normal text-qb-dark-gray">{plan.period && `/${plan.period}`}</span>
                      </>
                    )}
                  </div>
                  <p className="text-qb-dark-gray">{plan.description}</p>
                </CardHeader>

                <CardContent className="space-y-6">
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

                  {plan.limitations.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-qb-dark-gray mb-2 text-sm">Limitations:</h4>
                      <ul className="space-y-1">
                        {plan.limitations.map((limitation, limitIndex) => (
                          <li key={limitIndex} className="text-xs text-qb-dark-gray/70">
                            • {limitation}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {plan.name === 'Free' ? (
                    <Link to="/signup" className="w-full">
                        <Button
                            variant="qbPrimary"
                            className="w-full"
                            size="lg"
                        >
                            Get Started Free
                        </Button>
                    </Link>
                  ) : (
                    <Link to={`/signup?plan=${plan.name.toLowerCase()}`} className="w-full">
                        <Button
                            variant={plan.popular ? "qbPrimary" : "qbOutline"}
                            className="w-full"
                            size="lg"
                            disabled={plan.available === false}
                        >
                            {plan.available === false ? 'Coming Soon' : 'Start Trial'}
                        </Button>
                    </Link>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="section-gradient py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-qb-navy mb-6">Core Features for Every Community</h2>
            <p className="text-lg text-qb-dark-gray">
              The essential tools for managing and engaging your members.
            </p>
          </div>

          <div className={`grid gap-6 ${isMobile ? 'grid-cols-2' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'}`}>
            <div className="text-center">
              <div className="w-12 h-12 bg-qb-green/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Check className="w-6 h-6 text-qb-green" />
              </div>
              <h3 className="font-semibold text-qb-navy mb-2">Secure Platform</h3>
              <p className="text-sm text-qb-dark-gray">Bank-grade security to protect your community's data.</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-qb-blue/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Check className="w-6 h-6 text-qb-blue" />
              </div>
              <h3 className="font-semibold text-qb-navy mb-2">Mobile Access</h3>
              <p className="text-sm text-qb-dark-gray">Manage and engage with your community on the go.</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-qb-green/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Check className="w-6 h-6 text-qb-green" />
              </div>
              <h3 className="font-semibold text-qb-navy mb-2">Community Forum</h3>
              <p className="text-sm text-qb-dark-gray">Connect with other community builders.</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-qb-blue/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Check className="w-6 h-6 text-qb-blue" />
              </div>
              <h3 className="font-semibold text-qb-navy mb-2">Community Resources</h3>
              <p className="text-sm text-qb-dark-gray">Learn best practices for community building.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-qb-navy mb-6">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-qb-navy">Can I upgrade or downgrade my plan anytime?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-qb-dark-gray">
                  Yes, you can change your plan at any time. Upgrades take effect immediately,
                  while downgrades take effect at the end of your current billing cycle.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-qb-navy">Is there a free trial for paid plans?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-qb-dark-gray">
                  Yes, our Standard plan comes with a 14-day free trial.
                  No credit card required to start your trial.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-qb-navy">What payment methods do you accept?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-qb-dark-gray">
                  We accept all major credit cards and bank transfers.
                  All payments are processed securely with enterprise-grade encryption.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;

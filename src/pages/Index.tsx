import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { TrendingUp, Users, Coins, BarChart3, Shield, ArrowRight, Download, Smartphone } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import communityTokenizationImg from "@/assets/community-tokenization.jpg";
import quantStrategiesImg from "@/assets/quant-strategies.jpg";
import impactMarketplaceImg from "@/assets/impact-marketplace.jpg";

const Index = () => {
  const isMobile = useIsMobile();

  const handleDownloadApp = () => {
    window.location.href = '/coming-soon';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Compliance Disclaimer (Slightly Strengthened) */}
      <div className="w-full bg-yellow-100 border-b border-yellow-300 text-yellow-900 text-center py-2 px-4 text-xs sm:text-sm">
        <strong>Disclaimer:</strong> All tokens and coins on this platform are for community engagement and recognition only. They do not represent any monetary value and are not tradable financial instruments.
      </div>
      <Navigation />
      
      {/* Hero Section (Unchanged as requested) */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-white text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 lg:mb-6">
                Digital Tokens.
                <span className="text-qb-green block">Connection & Impact</span>
              </h1>
              <p className="text-lg sm:text-xl mb-6 lg:mb-8 text-gray-200 px-2 sm:px-0">
                Launch your community token today! Create community-driven tokens that reward impactful actions.
                <span className="block text-base sm:text-lg text-qb-green mt-2">Additional educational features coming soon.</span>
              </p>
              
              {isMobile ? (
                <div className="flex flex-col space-y-3 px-4">
                  <Button variant="qbSecondary" size="lg" className="text-lg px-8 w-full justify-center" onClick={handleDownloadApp} >
                    <Download className="mr-2 w-5 h-5" />
                    Download for iOS
                  </Button>
                  <Button variant="qbGlass" size="lg" className="text-lg px-8 w-full justify-center text-white border-white hover:!bg-white/60 hover:!text-qb-navy hover:!border-white" onClick={handleDownloadApp} >
                    <Download className="mr-2 w-5 h-5" />
                    Download for Android
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/signup">
                    <Button variant="qbSecondary" size="lg" className="text-lg px-8">
                      Start Your Journey
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <Link to="/products">
                    <Button variant="qbGlass" size="lg" className="text-lg px-8 text-white border-white hover:!bg-white/60 hover:!text-qb-navy hover:!border-white">
                      Learn More
                    </Button>
                  </Link>
                </div>
              )}
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="glass-card p-6 sm:p-8 lg:p-12 max-w-sm lg:max-w-md">
                <img src="/qb_sticker.webp" alt="Quant Basket Platform" className="w-full h-auto transform scale-110" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community-Based Tokenization Section (Unchanged as it contains good disclaimers) */}
      <section className="section-gradient py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-qb-navy mb-4 lg:mb-6">
                Community Coins & Tokenization (Non-Financial)
              </h2>
              <p className="text-base sm:text-lg text-qb-dark-gray mb-6 px-2 sm:px-0">
                Create and participate in community coins that reward positive actions and engagement. These coins are for recognition and access to community benefits (like webinars or events) and cannot be traded, sold, or redeemed for cash or any financial asset.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 lg:mb-8">
                <Card className="glass-card">
                  <CardContent className={`p-4 ${isMobile ? 'flex items-center space-x-3' : ''}`}>
                    <Users className={`w-8 h-8 text-qb-green mb-2 ${isMobile ? 'mb-0 flex-shrink-0' : 'mx-auto sm:mx-0'}`} />
                    <div className={isMobile ? 'flex-1' : ''}>
                      <h3 className={`font-semibold text-qb-navy ${isMobile ? 'text-left' : 'text-center sm:text-left'}`}>Community Governance</h3>
                      <p className={`text-sm text-qb-dark-gray ${isMobile ? 'text-left' : 'text-center sm:text-left'}`}>Democratic decision-making for all token holders</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="glass-card">
                  <CardContent className={`p-4 ${isMobile ? 'flex items-center space-x-3' : ''}`}>
                    <Shield className={`w-8 h-8 text-qb-blue mb-2 ${isMobile ? 'mb-0 flex-shrink-0' : 'mx-auto sm:mx-0'}`} />
                    <div className={isMobile ? 'flex-1' : ''}>
                      <h3 className={`font-semibold text-qb-navy ${isMobile ? 'text-left' : 'text-center sm:text-left'}`}>Secure & Transparent</h3>
                      <p className={`text-sm text-qb-dark-gray ${isMobile ? 'text-left' : 'text-center sm:text-left'}`}>Blockchain-powered security and full transparency</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="text-center lg:text-left">
                <Link to="/community-tokens">
                  <Button variant="qbPrimary" className="text-lg px-8 w-full sm:w-auto">
                    {isMobile ? "Get Started" : "Get Started with Community Tokens"}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="order-first lg:order-last">
              <img src={communityTokenizationImg} alt="Community Tokenization" className="w-full h-auto rounded-xl shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Quantitative Strategies Section (Unchanged as it contains good disclaimers) */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className={`${isMobile ? 'order-first' : 'order-last lg:order-first'}`}>
              <img src={quantStrategiesImg} alt="Quantitative Strategies" className="w-full h-auto rounded-xl shadow-lg" />
            </div>
            <div className={`text-center lg:text-left ${isMobile ? 'order-last' : ''}`}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-4">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-qb-navy text-center lg:text-left">
                  Tokenized Quant Strategies
                </h2>
                <span className="bg-qb-blue/20 text-qb-blue px-3 py-1 rounded-full text-sm font-medium">Planned</span>
                  <span className="bg-qb-blue/20 text-qb-blue px-3 py-1 rounded-full text-sm font-medium">Educational</span>
              </div>
              <p className="text-base sm:text-lg text-qb-dark-gray mb-6 px-2 sm:px-0">
                Future feature: Learn about tokenized strategies and quantitative models. All strategies are for educational and informational purposes only. No investment, trading, or financial returns are offered.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 text-center sm:text-left">
                  <BarChart3 className="w-6 h-6 text-qb-green mt-1 mx-auto sm:mx-0 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-qb-navy">Advanced Analytics</h3>
                    <p className="text-qb-dark-gray">Real-time risk assessment and portfolio optimization for learning purposes only. No financial advice or products.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 text-center sm:text-left">
                  <TrendingUp className="w-6 h-6 text-qb-blue mt-1 mx-auto sm:mx-0 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-qb-navy">Algorithmic Strategies</h3>
                    <p className="text-qb-dark-gray">Automated execution of complex strategies for demonstration and education. Not for trading or investment.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section (Headline Changed) */}
      <section className="section-gradient py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-4">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-qb-navy">The Impact Hub</h2>
                <span className="bg-qb-green/20 text-qb-green px-3 py-1 rounded-full text-sm font-medium">Community Recognition</span>
              </div>
              <p className="text-base sm:text-lg text-qb-dark-gray mb-6 px-2 sm:px-0">
                Future expansion: A hub for recognizing impact-driven projects and community achievements. All features are for recognition and engagement only, not for financial gain or investment.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="glass-card">
                  <CardContent className={`p-4 ${isMobile ? 'flex items-center space-x-3' : ''}`}>
                    <Coins className={`w-8 h-8 text-qb-green mb-2 ${isMobile ? 'mb-0 flex-shrink-0' : 'mx-auto sm:mx-0'}`} />
                    <div>
                      <h3 className={`font-semibold text-qb-navy ${isMobile ? 'text-left' : 'text-center sm:text-left'}`}>ESG Compliance</h3>
                      <p className={`text-sm text-qb-dark-gray ${isMobile ? 'text-left' : 'text-center sm:text-left'}`}>All projects meet strict environmental and social criteria</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="glass-card">
                  <CardContent className={`p-4 ${isMobile ? 'flex items-center space-x-3' : ''}`}>
                    <TrendingUp className={`w-8 h-8 text-qb-blue mb-2 ${isMobile ? 'mb-0 flex-shrink-0' : 'mx-auto sm:mx-0'}`} />
                    <div>
                      <h3 className={`font-semibold text-qb-navy ${isMobile ? 'text-left' : 'text-center sm:text-left'}`}>Measurable Impact</h3>
                      <p className={`text-sm text-qb-dark-gray ${isMobile ? 'text-left' : 'text-center sm:text-left'}`}>Track real-world outcomes and community recognition. No financial returns or investments are offered.</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="order-first lg:order-last">
              <img src={impactMarketplaceImg} alt="Impact Hub" className="w-full h-auto rounded-xl shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview Section (Headline & Content Changed) */}
      {!isMobile && (
        <section className="py-12 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-qb-navy mb-8 lg:mb-12">
              A Platform for Modern Communities
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              <Card className="glass-card hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <Users className="w-12 h-12 text-qb-green mx-auto mb-4" />
                  <CardTitle className="text-qb-navy">Community Tokens</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-qb-dark-gray mb-4">Participate in member-led communities and governance.</p>
                  <Link to="/community-tokens"><Button variant="qbOutline" size="sm" className="w-full">Learn More</Button></Link>
                </CardContent>
              </Card>
              <Card className="glass-card hover:shadow-xl transition-all duration-300 opacity-60">
                <CardHeader>
                  <Coins className="w-12 h-12 text-qb-blue mx-auto mb-4" />
                  <CardTitle className="text-qb-navy mb-2">Impact Coins</CardTitle>
                  <span className="bg-qb-green/20 text-qb-green rounded text-xs px-2 py-0.5 inline-block">Recognition Only</span>
                </CardHeader>
                <CardContent>
                  <p className="text-qb-dark-gray">Earned for making a positive impact. These are recognition tokens with no monetary value.</p>
                </CardContent>
              </Card>
              <Card className="glass-card hover:shadow-xl transition-all duration-300 opacity-60">
                <CardHeader>
                  <BarChart3 className="w-12 h-12 text-qb-green mx-auto mb-4" />
                  <CardTitle className="text-qb-navy mb-2">Quant Strategies</CardTitle>
                  <span className="bg-qb-blue/20 text-qb-blue rounded text-xs px-2 py-0.5 inline-block">Planned</span>
                </CardHeader>
                <CardContent>
                  <p className="text-qb-dark-gray">Learn about advanced algorithmic models in an educational setting.</p>
                </CardContent>
              </Card>
              <Card className="glass-card hover:shadow-xl transition-all duration-300 opacity-60">
                <CardHeader>
                  <TrendingUp className="w-12 h-12 text-qb-blue mx-auto mb-4" />
                  <CardTitle className="text-qb-navy mb-2">Tokenized Portfolios</CardTitle>
                  <span className="bg-qb-blue/20 text-qb-blue rounded text-xs px-2 py-0.5 inline-block">Planned</span>
                </CardHeader>
                <CardContent>
                  <p className="text-qb-dark-gray">Learn about diversified digital asset portfolios in a simulated environment.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section (Unchanged) */}
      <section className="hero-gradient py-12 sm:py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 lg:mb-6">
            Ready to Revolutionize Your Community?
          </h2>
          <p className="text-lg sm:text-xl text-gray-200 mb-6 lg:mb-8 px-2 sm:px-0">
            {isMobile 
              ? "Download our mobile app and access all features on the go."
              : "Start with Community Tokens today and be part of our growing ecosystem as we launch new features."
            }
          </p>
          
          {isMobile ? (
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Button variant="qbPrimary" size="lg" className="text-lg px-8 w-full sm:w-auto" onClick={handleDownloadApp} >
                <Download className="mr-2 w-5 h-5" />
                iOS App
              </Button>
              <Button variant="qbSecondary" size="lg" className="text-lg px-8 w-full sm:w-auto" onClick={handleDownloadApp} >
                <Download className="mr-2 w-5 h-5" />
                Android App
              </Button>
            </div>
          ) : (
            <Link to="/signup">
              <Button variant="qbPrimary" size="lg" className="text-lg px-12">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
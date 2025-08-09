import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, BarChart3, ShieldCheck, Eye, Lightbulb, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-white mb-6">
            About Quant Basket
          </h1>
          <p className="text-xl text-gray-200">
            We provide technology that empowers digital communities and fosters member engagement.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gradient-to-br from-qb-soft-gray to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-qb-navy mb-6">Our Story</h2>
            <p className="text-lg text-qb-dark-gray leading-relaxed">
              Quant Basket was founded in 2025 by a team of technologists and community builders who saw a need for better engagement tools. We observed that creators, non-profits, and educational institutions were searching for effective ways to recognize member contributions and foster participation.
            </p>
            <p className="text-lg text-qb-dark-gray leading-relaxed mt-4">
              Our platform was built to solve this challenge. We provide a Software-as-a-Service (SaaS) solution that allows any organization to create and manage its own system of digital points for recognition, granting access to benefits, and facilitating community polling—all powered by secure and transparent technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="glass-card text-center border-l-4 border-l-qb-green">
              <CardHeader>
                <Users className="w-12 h-12 text-qb-green mx-auto mb-4" />
                <CardTitle className="text-qb-navy">Community Engagement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-qb-dark-gray">
                  Our core offering helps communities create their own digital points to reward meaningful actions and recognize contributions.
                </p>
              </CardContent>
            </Card>
            
            <Card className="glass-card text-center border-l-4 border-l-qb-blue">
              <CardHeader>
                <BarChart3 className="w-12 h-12 text-qb-blue mx-auto mb-4" />
                <CardTitle className="text-qb-navy">Data-Driven Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-qb-dark-gray">
                  We provide analytics to help leaders understand engagement, identify key contributors, and make informed decisions.
                </p>
              </CardContent>
            </Card>
            
            <Card className="glass-card text-center border-l-4 border-l-qb-green">
              <CardHeader>
                <ShieldCheck className="w-12 h-12 text-qb-green mx-auto mb-4" />
                <CardTitle className="text-qb-navy">Secure Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-qb-dark-gray">
                  Leverage secure ledger technology for transparent and auditable records of rewards and participation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-qb-navy mb-6">Our Mission & Vision</h2>
            <div className="space-y-6">
              <Card className="glass-card p-8 border-l-4 border-l-qb-green">
                <h3 className="text-2xl font-semibold text-qb-navy mb-4">Our Mission</h3>
                <p className="text-lg text-qb-dark-gray leading-relaxed">
                  To empower community leaders with innovative software that fosters engagement, recognizes contributions, and helps build vibrant, self-sustaining digital ecosystems.
                </p>
              </Card>
              <Card className="glass-card p-8 border-l-4 border-l-qb-blue">
                <h3 className="text-2xl font-semibold text-qb-navy mb-4">Our Vision</h3>
                <p className="text-lg text-qb-dark-gray leading-relaxed">
                  A future where every community can use technology to create its own unique digital identity and rewards system, fostering deeper connections and shared purpose among its members.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Roadmap & Disclaimer */}
      <section className="section-gradient py-8">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Card className="glass-card p-8">
            <h2 className="text-3xl font-bold text-qb-navy mb-6">What's Coming Next (Our Roadmap)</h2>
            <p className="text-lg text-qb-dark-gray mb-6">
              We are continuously exploring new features to enhance community and educational experiences. Future planned offerings, such as educational modules on portfolio concepts and quantitative strategies, are not yet available. They will only be developed and launched in full compliance with applicable laws and regulations in appropriate jurisdictions.
            </p>
            <div className="mt-4 p-4 bg-yellow-100 border border-yellow-300 text-yellow-900 rounded-lg text-sm">
                <strong>Important Disclaimer:</strong> Quant Basket's current services are strictly for non-financial community engagement. We do not offer any financial instruments, investments, or Virtual Digital Assets (VDAs). All platform points or coins have no monetary value and are non-transferable.
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
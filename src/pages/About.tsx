import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// Corrected lucide-react import: ShieldCheck instead of CheckShield
import { Users, BarChart3, ShieldCheck, Eye, Lightbulb, Heart } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Executive Officer",
      description: "Former technology lead at Goldman Sachs with 15+ years in building large-scale data systems.",
    },
    {
      name: "Prof. Michael Rodriguez",
      role: "Chief Technology Officer",
      description: "MIT PhD in Computer Science, a pioneer in secure and scalable blockchain applications.",
    },
    {
      name: "Dr. Priya Sharma",
      role: "Head of Data Science",
      description: "Former data scientist at Jane Street, expert in predictive modeling and user behavior analysis.",
    },
    {
      name: "James Thompson",
      role: "Head of Platform Architecture",
      description: "Blockchain architect with deep expertise in platform security and digital token standards.",
    },
  ];

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
            Building the future of digital communities through technology and innovation.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gradient-to-br from-qb-soft-gray to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-qb-navy mb-6">Our Story</h2>
            <p className="text-lg text-qb-dark-gray leading-relaxed">
              Founded in 2025, Quant Basket emerged from a vision to build better tools for online communities. 
              We saw creators and organizations looking for new ways to foster engagement and recognize their members. 
              Our platform was built to solve this, allowing any community to create its own unique tokens for 
              recognition, access, and participation, all powered by transparent and secure technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="glass-card text-center border-l-4 border-l-qb-green">
              <CardHeader>
                <Users className="w-12 h-12 text-qb-green mx-auto mb-4" />
                <CardTitle className="text-qb-navy">Community Tokens</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-qb-dark-gray">
                  Communities create their own tokens with reward mechanisms for meaningful actions, 
                  fostering engagement and recognizing contributions.
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
                  Our platform provides powerful analytics to help community leaders understand engagement, 
                  identify key contributors, and make informed decisions.
                </p>
              </CardContent>
            </Card>
            
            <Card className="glass-card text-center border-l-4 border-l-qb-green">
              <CardHeader>
                {/* Corrected component name: ShieldCheck */}
                <ShieldCheck className="w-12 h-12 text-qb-green mx-auto mb-4" />
                <CardTitle className="text-qb-navy">Verifiable Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-qb-dark-gray">
                  Leverage blockchain technology for transparent and auditable records of rewards and 
                  participation, building trust within your community.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-qb-dark-gray/20 to-transparent"></div>


      {/* Legacy & Mission */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-qb-navy mb-6">Our Mission & Vision</h2>
            <div className="space-y-6">
              <Card className="glass-card p-8 border-l-4 border-l-qb-green">
                <h3 className="text-2xl font-semibold text-qb-navy mb-4">Our Mission</h3>
                <p className="text-lg text-qb-dark-gray leading-relaxed">
                  To empower creators and community leaders with innovative tools that foster engagement, 
                  recognize contributions, and build vibrant, self-sustaining digital ecosystems.
                </p>
              </Card>
              
              <Card className="glass-card p-8 border-l-4 border-l-qb-blue">
                <h3 className="text-2xl font-semibold text-qb-navy mb-4">Our Vision</h3>
                <p className="text-lg text-qb-dark-gray leading-relaxed">
                  A world where every community, large or small, has the ability to create its own unique 
                  digital identity and reward system, fostering deeper connections and shared purpose 
                  among its members.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-qb-dark-gray/20 to-transparent"></div>

      {/* Values Section */}
      <section className="section-gradient py-8">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Card className="glass-card p-8">
            <h2 className="text-3xl font-bold text-qb-navy mb-6">Our Values</h2>
            <p className="text-lg text-qb-dark-gray mb-6">
              We believe in democratizing access to powerful community-building tools through technology.
              Our commitment to transparency, data-driven insights, and community empowerment drives everything we do.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <Eye className="w-8 h-8 text-qb-blue mx-auto mb-3" />
                <h3 className="font-semibold text-qb-navy mb-2">Transparency</h3>
                <p className="text-sm text-qb-dark-gray">Open standards and blockchain-based clarity</p>
              </div>
              <div className="text-center">
                <Lightbulb className="w-8 h-8 text-qb-green mx-auto mb-3" />
                <h3 className="font-semibold text-qb-navy mb-2">Innovation</h3>
                <p className="text-sm text-qb-dark-gray">Cutting-edge data science meets community building</p>
              </div>
              <div className="text-center">
                <Heart className="w-8 h-8 text-qb-blue mx-auto mb-3" />
                <h3 className="font-semibold text-qb-navy mb-2">Community</h3>
                <p className="text-sm text-qb-dark-gray">Empowering communities through technology</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
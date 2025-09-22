import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, MessageSquare, Mail, MapPin, Clock, Users, Globe } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Direct Call",
      description: "Speak directly with our property experts",
      action: "+91 9941973013",
      buttonText: "Call Now",
      color: "bg-primary"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      description: "Quick queries and instant property updates",
      action: "WhatsApp Chat",
      buttonText: "Start Chat",
      color: "bg-secondary"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Detailed inquiries and documentation",
      action: "contact@thetalkingmap.net",
      buttonText: "Send Email",
      color: "bg-accent"
    }
  ];

  const teamInfo = [
    {
      name: "Kishore Abishek",
      role: "Founder & CEO",
      specialization: "Real Estate Mapping Technology"
    },
    {
      name: "Technical Team",
      role: "Development",
      specialization: "PostGIS, MapLibre, React"
    },
    {
      name: "Support Team",
      role: "Customer Success",
      specialization: "Property Consultation"
    }
  ];

  const platformStats = [
    { icon: Globe, label: "Platform Uptime", value: "99.9%" },
    { icon: Users, label: "Active Users", value: "10K+" },
    { icon: MapPin, label: "Properties Listed", value: "5K+" },
    { icon: Clock, label: "Avg Response Time", value: "< 2 hrs" }
  ];

  return (
    <section id="contact" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-4">
            <Phone className="w-4 h-4 mr-2" />
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Explore Land Opportunities?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with our experts to discover the perfect property using our innovative 
            BUS mapping system across Tamil Nadu.
          </p>
        </div>

        {/* Platform Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {platformStats.map((stat, index) => (
            <Card 
              key={stat.label}
              className="p-4 text-center shadow-soft hover:shadow-medium transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <stat.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
              <div className="text-lg font-bold text-foreground">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Main Contact Section */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Methods */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Contact Methods</h3>
            
            {contactMethods.map((method, index) => (
              <Card 
                key={method.title}
                className="p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-4">
                  <div className={`flex items-center justify-center w-12 h-12 ${method.color} rounded-lg`}>
                    <method.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-foreground mb-1">{method.title}</h4>
                    <p className="text-muted-foreground text-sm mb-2">{method.description}</p>
                    <div className="text-foreground font-medium">{method.action}</div>
                  </div>
                  <Button 
                    variant="outline" 
                    className="shadow-soft"
                    onClick={() => {
                      if (method.title === "Direct Call") {
                        window.open("tel:+919941973013", "_self");
                      } else if (method.title === "WhatsApp") {
                        window.open("https://wa.me/919941973013", "_blank");
                      } else if (method.title === "Email Support") {
                        window.open("mailto:contact@thetalkingmap.net", "_self");
                      }
                    }}
                  >
                    {method.buttonText}
                  </Button>
                </div>
              </Card>
            ))}

            {/* Quick Contact Form */}
            <Card className="p-6 shadow-medium bg-card-gradient">
              <h4 className="text-lg font-semibold text-foreground mb-4">Quick Inquiry</h4>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-muted-foreground mb-1 block">Name</label>
                    <input 
                      type="text" 
                      placeholder="Your name"
                      className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-1 block">Phone</label>
                    <input 
                      type="tel" 
                      placeholder="+91 xxxxx xxxxx"
                      className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1 block">Property Interest</label>
                  <select className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground">
                    <option>Select property type</option>
                    <option>Agricultural Land</option>
                    <option>Residential Plot</option>
                    <option>Commercial Property</option>
                    <option>Industrial Land</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1 block">Message</label>
                  <textarea 
                    placeholder="Tell us about your requirements..."
                    rows={3}
                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground resize-none"
                  ></textarea>
                </div>
                <Button variant="default" className="w-full shadow-medium">
                  Send Inquiry
                </Button>
              </div>
            </Card>
          </div>

          {/* Sidebar Information */}
          <div className="space-y-6">
            {/* Team Information */}
            <Card className="p-6 shadow-soft">
              <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                <Users className="w-5 h-5 mr-2 text-primary" />
                Our Team
              </h4>
              <div className="space-y-4">
                {teamInfo.map((member, index) => (
                  <div key={member.name} className="border-b border-border last:border-0 pb-3 last:pb-0">
                    <div className="font-medium text-foreground">{member.name}</div>
                    <div className="text-sm text-primary">{member.role}</div>
                    <div className="text-xs text-muted-foreground">{member.specialization}</div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Office Information */}
            <Card className="p-6 shadow-soft">
              <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-primary" />
                Headquarters
              </h4>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-foreground">TheTalkingMap.net</div>
                  <div className="text-muted-foreground">Tamil Nadu, India</div>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-muted-foreground" />
                  <span className="text-muted-foreground">Mon-Sat: 9:00 AM - 6:00 PM</span>
                </div>
                <Badge variant="secondary" className="text-xs">
                  Serving All 38 Districts
                </Badge>
              </div>
            </Card>

            {/* Technology Stack */}
            <Card className="p-6 shadow-soft">
              <h4 className="text-lg font-semibold text-foreground mb-4">Technology</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Frontend:</span>
                  <span className="font-medium text-foreground">React, MapLibre</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Backend:</span>
                  <span className="font-medium text-foreground">Python, PostgreSQL</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Mapping:</span>
                  <span className="font-medium text-foreground">PostGIS, BUS</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Infrastructure:</span>
                  <span className="font-medium text-foreground">AWS, Docker</span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <Card className="p-8 text-center shadow-medium hero-gradient">
          <div className="text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Land Journey?</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have found their perfect property through our 
              innovative BUS mapping system. Start exploring today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg" 
                className="shadow-medium"
                onClick={() => window.open("tel:+919941973013", "_self")}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +91 9941973013
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/30 text-white hover:bg-white/10 shadow-medium"
                onClick={() => window.open("https://wa.me/919941973013", "_blank")}
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                WhatsApp Chat
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
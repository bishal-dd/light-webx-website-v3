"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MapPin, Clock, DollarSign, Briefcase } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function CareersPage() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Job cards animation
      gsap.fromTo(
        ".job-card",
        { opacity: 0, y: 100, rotationX: 30 },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".jobs-grid",
            start: "top 80%",
            end: "bottom 20%",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const jobOpenings = [
    {
      title: "Full Stack Developer",
      department: "Engineering",
      location: "Thimphu, Bhutan",
      type: "Full-time",
      salary: "Nu.30k-",
      experience: "5+ years",
      description:
        "Join our founding engineering team to build next-generation software and hardware technology. You'll work on cutting-edge projects that impact millions of people worldwide. You'll work with the latest tools and technologies, while building a startup from the ground up. Join us today and make a difference in the world.",
      requirements: [
        "React/Next.js expertise",
        "API backend development",
        "JavaScript/TypeScript proficiency",
        "Git version control",
        "Database management",
      ],
      posted: "2 days ago",
      featured: true,
    },
  ];

  return (
    <div>
      {/* Job Openings Section */}
      <section className="py-20 relative bg-gradient-to-b from-gray-950 to-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Open Positions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our current job openings and find the perfect role to
              advance your career with us.
            </p>
          </div>

          <div className="jobs-grid grid lg:grid-cols-2 gap-8">
            {jobOpenings.map((job, index) => (
              <Card
                key={index}
                className={`job-card bg-gray-900/30 backdrop-blur-lg border-gray-800 hover:border-blue-500/50 transition-all duration-500 group hover:scale-105 ${
                  job.featured ? "ring-1 ring-blue-500/30" : ""
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                          {job.title}
                        </h3>
                        {job.featured && (
                          <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 text-xs">
                            Featured
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                        <div className="flex items-center">
                          <Briefcase className="h-4 w-4 mr-1" />
                          {job.department}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {job.type}
                        </div>
                      </div>
                    </div>
                    {/* <Badge className="bg-gray-700/50 text-gray-300 border-gray-600">
                      {job.posted}
                    </Badge> */}
                  </div>

                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {job.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">
                      Requirements:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {job.requirements.map((req, reqIndex) => (
                        <Badge
                          key={reqIndex}
                          variant="outline"
                          className="text-xs border-gray-700 text-gray-300"
                        >
                          {req}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-300">
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 mr-1 text-blue-400" />
                        {job.salary}
                      </div>
                      <div className="flex items-center">+Stock options</div>
                    </div>
                  </div>

                  <Button
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 border-0"
                    asChild
                  >
                    <Link href="https://docs.google.com/forms/d/e/1FAIpQLSe7eMMIQvyZXhsvAYHTtuLPUVsv6qwfWJowFg7hSfGi9Z438A/viewform?usp=sharing&ouid=112855172164278621128">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800 bg-gray-900/30">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Light Webx. All rights reserved.
            Building the future
          </p>
        </div>
      </footer>
    </div>
  );
}

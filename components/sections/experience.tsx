"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { 
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle 
} from "@/components/ui/card";
import { Briefcase, Car, Container, Truck, Utensils } from "lucide-react";

// Sample data - replace with your actual experience
const experienceData = [
  {
    id: 1,
    role: "Full stack JS engineer",
    company: "FIRST DELIVERY GROUP",
    duration: "March 2023 - Present",
    icon:<Car className="h-5 w-5 text-primary" />,
    description: "Platform Optimization Lead : Enhanced logistics platform efficiency by 30%",
    responsibilities: [
      "Spearheaded optimization efforts for the company's logistics platform, enhancing performance and efficiency",
      "Resolved complex bug issues, improving system reliability and user experience",
      "Led the development of innovative features and cutting-edge mobile applications, driving business growth and customer engagement",
      "Collaborated closely with cross-functional teams to deliver solutions that streamlined operations and increased profitability",
      "Tech Stack Upgrade Architect:Migrate PHP platforms to ReactJS/NextJS and build a mobile app from scratch for company drivers",
      "Developed and maintained new features including a driver mobile app, customer payment system, claims system, operations system, and sales system",
        ]
  },
  {
    id: 2,
    role: "Full stack JS engineer",
    company: "SHIPZZER",
    duration: "Nov 2021 - Feb 2023",
    description: "Worked on multiple client projects developing responsive websites and web/mobile applications.",
    icon:<Container className="h-5 w-5 text-primary" />,
    responsibilities: [
      "Implemented a caching system to ensure functionality during network outages",
      "Developed and implemented new features, including a vehicle booking system and a Navi container EMR",
      "Use of Google Cloud Platform services such as App Engine, Cloud Storage, BQ database, and infrastructure deployment",
      "Reduced cloud infrastructure costs by optimizing resource usage"
    ]
  },
  {
    id: 3,
    role: "Full stack JS engineer",
    company: "Lyveat France",
    duration: "Feb 2021 - Aug 2021",
    icon:<Utensils className="h-5 w-5 text-primary" />,
    description: "Started as an intern and was promoted to a full-time position. Worked on the company website and internal tools.",
    responsibilities: [
      "Server-side Live tracking implementation (Radar.io)",
      "Edenred restaurant payment implementation",
      "Real time chat feature between restaurants, riders, lyveat assistance (ably js)",
      "Improvement for the existing features (backend/frontend)"
    ]
  }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionHeading
            title="Professional Experience"
            subtitle="My work history and roles"
          />

          <div className="space-y-8">
            {experienceData.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader className="flex flex-row items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-md">
                     {job.icon} 
                    </div>
                    <div className="space-y-1">
                      <CardTitle className="text-xl">{job.role}</CardTitle>
                      <CardDescription className="font-medium">
                        {job.company} | {job.duration}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-muted-foreground">{job.description}</p>
                    <ul className="space-y-2 list-disc pl-5">
                      {job.responsibilities.map((item, i) => (
                        <li key={i} className="text-muted-foreground">{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
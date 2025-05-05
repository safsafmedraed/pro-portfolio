"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

// Sample data - replace with your actual education
const educationData = [
  {
    id: 1,
    degree: "National diploma in computer engineering",
    institution: "ESPRIT",
    duration: "2018 - 2021",
    description:
      "Focused on web development and user interface design.",
    courses: [
      "Advanced Web Development",
      "UI/UX Design",
      "Data Structures and Algorithms",
      "Machine Learning",
    ],
  },
  {
    id: 2,
    degree: "Applied License in Information and Communication Sciences and Technologies",
    institution: "Faculty of science Bizerte",
    duration: "2012 - 2016",
    description:
      "Comprehensive computer science education with a focus on software development.",
    courses: [
      "Introduction to Programming",
      "Database Systems",
      "Object-Oriented Programming",
      "Web Development Fundamentals",
    ],
  },
];

export function EducationSection() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionHeading
            title="Education"
            subtitle="My academic background and qualifications"
          />

          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader className="flex flex-row items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-md">
                      <GraduationCap className="h-5 w-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <CardTitle className="text-xl">{edu.degree}</CardTitle>
                      <CardDescription className="font-medium">
                        {edu.institution} | {edu.duration}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-muted-foreground">{edu.description}</p>
                    <h4 className="font-medium mb-2">Relevant Coursework:</h4>
                    <ul className="space-y-2 list-disc pl-5">
                      {edu.courses.map((course, i) => (
                        <li key={i} className="text-muted-foreground">
                          {course}
                        </li>
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
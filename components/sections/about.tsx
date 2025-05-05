"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { motion } from "framer-motion";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionHeading
            title="About Me"
            subtitle="Get to know more about me and my background"
          />

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="aspect-square relative overflow-hidden rounded-xl bg-muted">
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                <Image src={"/about_photo.png"} alt="raed safsaf" width={400} height={400} className="rounded"/>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">
                A dedicated Software engineer based in Tunis,Tunisia
              </h3>
              
              <p className="text-muted-foreground">
              As a Full Stack Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Node.js, and various other technologies. I excel in designing and maintaining responsive websites that offer a smooth user experience.
              </p>
              
              <p className="text-muted-foreground">
              My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.
              </p>

            
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Software engineer";
  const typingSpeed = 100;

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, typingSpeed);
      
      return () => clearTimeout(timeout);
    }
  }, [typedText]);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-16"
    >
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-lg md:text-xl mb-6 text-primary">Hello, I'm</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            RAED SAFSAF
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl mb-8 text-muted-foreground h-12">
            {typedText}
            <span className="animate-pulse">|</span>
          </h2>
          
          <p className="text-lg mb-10 max-w-2xl mx-auto text-muted-foreground">
            I build exceptional digital experiences that are fast, accessible, visually appealing, and responsive.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button onClick={scrollToContact} size="lg">
              Get in Touch
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#skills">View My Skills</a>
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <a 
                href="https://github.com/safsafmedraed" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a 
                href="https://linkedin.com/in/safsafraed" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a 
                href="mailto:safsafraed@gmail.com"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </motion.div>
        
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => {
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}
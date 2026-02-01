'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Container from './Container';

const About = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="flex flex-col justify-center items-center min-h-screen bg-black text-center py-12 md:py-20"
    >
      <Container>
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6 text-purple-400"
          initial={shouldReduceMotion ? {} : { opacity: 0, y: -30 }}
          animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={shouldReduceMotion ? {} : { duration: 1 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-gray-300 max-w-4xl mb-8 leading-relaxed"
          initial={shouldReduceMotion ? {} : { opacity: 0 }}
          animate={shouldReduceMotion ? {} : { opacity: 1 }}
          transition={shouldReduceMotion ? {} : { delay: 0.5, duration: 1 }}
        >
          I'm Salman Tabrez, a Cloud Security & Identity Architect with 7+ years of experience securing systems across healthcare, fintech, and enterprise IT environments. I design security programs that work end-to-end — from early architecture decisions to continuous visibility in production — without slowing down engineering teams.
          <br /><br />
          My work begins with threat modeling and secure design, helping teams understand risk before they build. From there, I embed security directly into delivery pipelines using shift-left practices such as SAST, DAST, and dependency scanning, so vulnerabilities are caught early and automatically.
          <br /><br />
          A core focus of my work is Identity and Access Management (IAM) and Privileged Access Management (PAM). I design access models based on least privilege, separation of duties, and Zero Trust principles, ensuring that users, services, and administrators only have the access they truly need. This includes implementing strong authentication, role-based controls, and tightly governed privileged access using platforms such as cloud-native IAM and enterprise PAM solutions like CyberArk.
          <br /><br />
          In production, I ensure security does not stop at deployment. I help teams build real-time visibility through centralized logging and SIEM platforms such as Splunk and Datadog, so abnormal behavior can be detected and responded to quickly.
          <br /><br />
          Across my career, I've worked in regulated and high-risk environments where security must be practical, auditable, and scalable. My approach is principle-driven, business-aware, and focused on building security that lasts — not security that only passes a one-time assessment.
        </motion.p>
      </Container>
    </section>
  );
};

export default About;

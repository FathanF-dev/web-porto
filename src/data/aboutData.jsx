import React from 'react';
import pythonCertImg from '../assets/Certificate/python_cert.webp';
import azureCertImg from '../assets/Certificate/azure_cert.webp';
import fabricCertImg from '../assets/Certificate/fabric_cert.webp';
import { FaDragon, FaJava, FaSearch, FaHdd, FaHtml5, FaCss3Alt, FaJs, FaNetworkWired } from 'react-icons/fa';
import { SiPython, SiCplusplus, SiBurpsuite, SiWireshark, SiLua } from 'react-icons/si';

export const certificates = [
  {
    title: "Memulai Pemrograman dengan Python",
    id: "0LZ0Y77EQX65",
    date: "18 Juni 2026",
    validUntil: "18 Juni 2029",
    issuer: "Dicoding Academy",
    url: "https://www.dicoding.com/certificates/0LZ0Y77EQX65",
    image: pythonCertImg
  },
  {
    title: "Membangun Aplikasi Gen AI dengan Microsoft Azure",
    id: "07Z67YY6RPQR",
    date: "14 Juni 2026",
    validUntil: "14 Juni 2029",
    issuer: "Dicoding & Microsoft",
    url: "https://www.dicoding.com/certificates/07Z67YY6RPQR",
    image: azureCertImg
  },
  {
    title: "Belajar Penerapan Data Science dengan Microsoft Fabric",
    id: "07Z67YY1RPQR",
    date: "14 Juni 2026",
    validUntil: "14 Juni 2029",
    issuer: "Dicoding & Microsoft",
    url: "https://www.dicoding.com/certificates/07Z67YY1RPQR",
    image: fabricCertImg
  }
];

// Programming Languages & Web Development (Ordered from strongest to weakest)
export const programmingSkills = [
  { icon: <FaHtml5 style={{ color: '#3b82f6' }} />, label: "HTML5", subtitle: "Modern Web Structure & Semantics" },
  { icon: <FaCss3Alt style={{ color: '#60a5fa' }} />, label: "CSS3", subtitle: "Responsive Layouts & Styling" },
  { icon: <SiLua style={{ color: '#38bdf8' }} />, label: "LUA", subtitle: "Fast Extension & Tooling Scripting" },
  { icon: <SiCplusplus style={{ color: '#0284c7' }} />, label: "C++", subtitle: "Systems & Payload Development" },
  { icon: <FaJava style={{ color: '#2563eb' }} />, label: "JAVA", subtitle: "Secure Backend Architecture" },
  { icon: <FaJs style={{ color: '#0ea5e9' }} />, label: "JAVASCRIPT", subtitle: "Dynamic Logic & Interactive UI" },
  { icon: <SiPython style={{ color: '#3b82f6' }} />, label: "PYTHON", subtitle: "Exploit & Tool Scripting / Data Science" }
];

// Cybersecurity & Forensic Tools
export const toolSkills = [
  { icon: <FaDragon style={{ color: '#3b82f6' }} />, label: "GHIDRA", subtitle: "Reverse Engineering Suite" },
  { icon: <SiWireshark style={{ color: '#0ea5e9' }} />, label: "WIRESHARK", subtitle: "Packet Inspection & Sniffing" },
  { icon: <FaHdd style={{ color: '#60a5fa' }} />, label: "FTK IMAGER", subtitle: "Disk Acquisition & Triage" },
  { icon: <FaNetworkWired style={{ color: '#38bdf8' }} />, label: "NETWORK MINER", subtitle: "Network Traffic Forensic Analysis" },
  { icon: <FaSearch style={{ color: '#2563eb' }} />, label: "AUTOPSY", subtitle: "Digital Forensics Investigation Platform" },
  { icon: <SiBurpsuite style={{ color: '#0284c7' }} />, label: "BURP SUITE", subtitle: "Web Scanner, Proxy & VAPT" }
];

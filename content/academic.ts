import { academicProjectListSchema } from "@/lib/content/schema";
import type { AcademicProject } from "@/lib/content/types";

// University coursework and thesis-adjacent work, rendered as collapsed cards
// under "Selected work" so they don't crowd out the professional experience.
const academic: AcademicProject[] = [
  {
    title: "Vision AI on Nvidia Jetson Nano",
    category: "AI & ML",
    institution: "Hochschule Darmstadt",
    dateRange: "2022 - 2025",
    summary:
      "Developed a real-time machine learning system for traffic signal detection and driver drowsiness detection running on edge hardware. Implemented using YOLOv7 with PyTorch and optimised for the Jetson Nano platform using TensorRT, enabling low-latency inference for road safety applications.",
    highlights: [
      "Implemented YOLOv7 object detection using PyTorch for traffic signal and drowsiness detection.",
      "Optimised model inference with TensorRT for real-time performance on the Nvidia Jetson Nano.",
      "Demonstrated edge computing capabilities for embedded AI in road safety scenarios.",
    ],
    stack: [
      "Python",
      "YOLOv7",
      "PyTorch",
      "TensorRT",
      "Jetson Nano",
      "Computer Vision",
      "Edge AI",
    ],
  },
  {
    title: "Autonomous Beach Trash Rover",
    category: "AI & ML",
    institution: "Government Engineering College Kozhikode",
    dateRange: "2018 - 2019",
    summary:
      "Designed and built a prototype rover for autonomous detection and collection of microplastics on beaches. The system uses computer vision and machine learning to identify hazardous waste, then navigates autonomously to collect and dispose of it at a predefined location.",
    highlights: [
      "Built on Raspberry Pi with computer vision for real-time trash identification.",
      "Integrated ML-based object detection to classify and locate microplastics.",
      "Implemented autonomous navigation and disposal to a predefined collection point.",
    ],
    stack: ["Python", "Raspberry Pi", "Computer Vision", "Machine Learning", "Embedded Systems"],
  },
  {
    title: "Reaction Time Game (AUTOSAR Application)",
    category: "Embedded / AUTOSAR",
    institution: "Hochschule Darmstadt",
    dateRange: "2022 - 2025",
    summary:
      "Developed an AUTOSAR-compliant embedded application implementing a reaction time game. A 7-segment display presents a random number and the user must press the corresponding button within a time limit. The application tracks reaction times, computes scores and displays results over 10 rounds.",
    highlights: [
      "Built as a fully AUTOSAR-compliant application following layered architecture principles.",
      "Integrated 7-segment display and button input handling at the BSW/RTE layer.",
      "Computed and displayed scores, total time and average reaction time across 10 rounds.",
    ],
    stack: ["AUTOSAR", "C++", "Embedded Systems", "BSW", "RTE"],
  },
  {
    title: "Electronic Clock (AUTOSAR RTE and Erika OS)",
    category: "Embedded",
    institution: "Hochschule Darmstadt",
    dateRange: "2022 - 2025",
    summary:
      "Designed and implemented an electronic clock using a hierarchical state machine with a look-up table and the active object pattern. Features a TFT display for time visualisation and adheres to the AUTOSAR RTE layered architecture with Erika OS integration.",
    highlights: [
      "Implemented a hierarchical state machine with a look-up table for clock state management.",
      "Applied the active object pattern for concurrent, event-driven behaviour.",
      "Integrated TFT display output following the AUTOSAR RTE layered architecture with Erika OS.",
    ],
    stack: [
      "AUTOSAR",
      "C++",
      "Erika OS",
      "State Machine",
      "TFT Display",
      "Embedded Systems",
    ],
  },
  {
    title: "Reversi Board Game",
    category: "C++ Programming",
    institution: "Hochschule Darmstadt",
    dateRange: "2022 - 2025",
    summary:
      "Designed and developed a two-player Reversi board game in C++ using the Eclipse IDE. Followed object-oriented design principles and produced a full UML diagram as part of the software design process.",
    highlights: [
      "Implemented full game logic for two-player Reversi in C++.",
      "Designed the system architecture using UML diagrams prior to implementation.",
      "Applied OOP principles including encapsulation, inheritance and polymorphism.",
    ],
    stack: ["C++", "OOP", "UML", "Eclipse"],
  },
  {
    title: "Battleship Game",
    category: "C++ Programming",
    institution: "Hochschule Darmstadt",
    dateRange: "2022 - 2025",
    summary:
      "Implemented the classic Battleship game in C++ from a provided UML diagram, applying modern C++ programming techniques and best practices throughout.",
    highlights: [
      "Implemented game logic from a UML specification using modern C++ techniques.",
      "Applied best practices including RAII, smart pointers and STL containers.",
    ],
    stack: ["C++", "OOP", "UML"],
  },
];

export const academicProjects = academicProjectListSchema.parse(academic);

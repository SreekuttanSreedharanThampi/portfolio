export type EducationEntry = {
  institution: string;
  degree: string;
  detail: string;
  dateRange: string;
};

export const educationList: EducationEntry[] = [
  {
    institution: "Hochschule Darmstadt (University of Applied Sciences Darmstadt), Germany",
    degree: "MSc, Electrical & Information Technology",
    detail: "Specialisation: Embedded Systems and Microelectronics · Grade: 1.8",
    dateRange: "2023 - 2025",
  },
  {
    institution: "Government Engineering College Kozhikode, India",
    degree: "BTech, Electronics & Communication Engineering",
    detail: "",
    dateRange: "2015 - 2019",
  },
];

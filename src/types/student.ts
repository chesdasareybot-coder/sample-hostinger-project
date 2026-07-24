export interface Student {
  id: string;
  name: string;
  email: string;
  course: string;
  enrollmentDate: string;
  status: "Active" | "Inactive" | "Graduated";
}

export const DUMMY_STUDENTS: Student[] = [
  {
    id: "1",
    name: "Alex Johnson",
    email: "alex.j@example.com",
    course: "Computer Science",
    enrollmentDate: "2023-09-01",
    status: "Active",
  },
  {
    id: "2",
    name: "Maria Garcia",
    email: "maria.g@example.com",
    course: "Business Administration",
    enrollmentDate: "2022-09-15",
    status: "Graduated",
  },
  {
    id: "3",
    name: "Sam Smith",
    email: "sam.smith@example.com",
    course: "Graphic Design",
    enrollmentDate: "2024-01-10",
    status: "Active",
  },
  {
    id: "4",
    name: "Linda Williams",
    email: "linda.w@example.com",
    course: "Mechanical Engineering",
    enrollmentDate: "2021-08-20",
    status: "Inactive",
  }
];

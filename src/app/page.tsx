/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useState, useEffect } from "react";
import { Plus, Users, GraduationCap, UserX } from "lucide-react";
import { Sidebar } from "@/components/Sidebar";
import { StudentTable } from "@/components/StudentTable";
import { StudentModal } from "@/components/StudentModal";
import { Student, DUMMY_STUDENTS } from "@/types/student";

export default function Home() {
  const [students, setStudents] = useState<Student[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const saved = localStorage.getItem("students");
    if (saved) {
      setStudents(JSON.parse(saved));
    } else {
      setStudents(DUMMY_STUDENTS);
      localStorage.setItem("students", JSON.stringify(DUMMY_STUDENTS));
    }
  }, []);

  const saveStudents = (newStudents: Student[]) => {
    setStudents(newStudents);
    localStorage.setItem("students", JSON.stringify(newStudents));
  };

  const handleSaveStudent = (studentData: Omit<Student, "id">) => {
    if (editingStudent) {
      const newStudents = students.map(s => 
        s.id === editingStudent.id ? { ...studentData, id: s.id } : s
      );
      saveStudents(newStudents);
    } else {
      const newStudent: Student = {
        ...studentData,
        id: Math.random().toString(36).substr(2, 9)
      };
      saveStudents([...students, newStudent]);
    }
  };

  const handleDeleteStudent = (id: string) => {
    saveStudents(students.filter(s => s.id !== id));
  };

  const activeStudentsCount = students.filter(s => s.status === "Active").length;
  const graduatedStudentsCount = students.filter(s => s.status === "Graduated").length;
  const inactiveStudentsCount = students.filter(s => s.status === "Inactive").length;

  if (!isClient) {
    return <div className="min-h-screen bg-black" />; // Prevents hydration mismatch
  }

  return (
    <div className="min-h-screen bg-black text-white flex font-sans selection:bg-purple-500 selection:text-white overflow-hidden">
      <Sidebar />
      
      <main className="flex-1 flex flex-col h-screen overflow-y-auto relative">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-purple-900/20 to-transparent pointer-events-none" />
        
        <div className="p-8 max-w-7xl mx-auto w-full z-10 flex flex-col gap-8">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-white">Students</h1>
              <p className="text-zinc-400 mt-1">Manage and track your students across all courses.</p>
            </div>
            <button
              onClick={() => {
                setEditingStudent(null);
                setIsModalOpen(true);
              }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover:from-purple-500 hover:to-blue-500 transition-all shadow-[0_0_20px_rgba(168,85,247,0.3)]"
            >
              <Plus className="w-5 h-5" />
              Add Student
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md flex items-center gap-4">
              <div className="p-3 rounded-xl bg-purple-500/20 text-purple-400">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-zinc-400 font-medium">Total Students</p>
                <p className="text-2xl font-bold text-white mt-1">{students.length}</p>
              </div>
            </div>
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md flex items-center gap-4">
              <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-400">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-zinc-400 font-medium">Active Students</p>
                <p className="text-2xl font-bold text-white mt-1">{activeStudentsCount}</p>
              </div>
            </div>
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md flex items-center gap-4">
              <div className="p-3 rounded-xl bg-blue-500/20 text-blue-400">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-zinc-400 font-medium">Graduates</p>
                <p className="text-2xl font-bold text-white mt-1">{graduatedStudentsCount}</p>
              </div>
            </div>
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md flex items-center gap-4">
              <div className="p-3 rounded-xl bg-red-500/20 text-red-400">
                <UserX className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-zinc-400 font-medium">Inactive</p>
                <p className="text-2xl font-bold text-white mt-1">{inactiveStudentsCount}</p>
              </div>
            </div>
          </div>

          {/* Table Area */}
          <div className="flex-1">
            <StudentTable 
              students={students} 
              onEdit={(student) => {
                setEditingStudent(student);
                setIsModalOpen(true);
              }}
              onDelete={handleDeleteStudent}
            />
          </div>
        </div>
      </main>

      <StudentModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveStudent}
        editingStudent={editingStudent}
      />
    </div>
  );
}

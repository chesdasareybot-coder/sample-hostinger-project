/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Student } from '@/types/student';

interface StudentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (student: Omit<Student, 'id'>) => void;
  editingStudent?: Student | null;
}

export function StudentModal({ isOpen, onClose, onSave, editingStudent }: StudentModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: '',
    status: 'Active' as Student['status']
  });

  useEffect(() => {
    if (editingStudent) {
      setFormData({
        name: editingStudent.name,
        email: editingStudent.email,
        course: editingStudent.course,
        status: editingStudent.status
      });
    } else {
      setFormData({
        name: '',
        email: '',
        course: '',
        status: 'Active'
      });
    }
  }, [editingStudent, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...formData,
      enrollmentDate: editingStudent ? editingStudent.enrollmentDate : new Date().toISOString().split('T')[0]
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-zinc-900 border border-white/10 rounded-2xl w-full max-w-md overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">
            {editingStudent ? 'Edit Student' : 'Add New Student'}
          </h2>
          <button onClick={onClose} className="text-zinc-400 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4">
          <div className="space-y-1">
            <label className="text-sm font-medium text-zinc-400">Full Name</label>
            <input
              required
              type="text"
              className="w-full px-4 py-2 bg-black/50 border border-white/10 rounded-xl text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
              value={formData.name}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          
          <div className="space-y-1">
            <label className="text-sm font-medium text-zinc-400">Email Address</label>
            <input
              required
              type="email"
              className="w-full px-4 py-2 bg-black/50 border border-white/10 rounded-xl text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
              value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          
          <div className="space-y-1">
            <label className="text-sm font-medium text-zinc-400">Course</label>
            <input
              required
              type="text"
              className="w-full px-4 py-2 bg-black/50 border border-white/10 rounded-xl text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
              value={formData.course}
              onChange={e => setFormData({ ...formData, course: e.target.value })}
            />
          </div>
          
          <div className="space-y-1">
            <label className="text-sm font-medium text-zinc-400">Status</label>
            <select
              className="w-full px-4 py-2 bg-black/50 border border-white/10 rounded-xl text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all appearance-none"
              value={formData.status}
              onChange={e => setFormData({ ...formData, status: e.target.value as Student['status'] })}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="Graduated">Graduated</option>
            </select>
          </div>
          
          <div className="mt-6 flex gap-3 justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 rounded-xl text-zinc-300 hover:text-white hover:bg-white/5 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover:from-purple-500 hover:to-blue-500 transition-all shadow-[0_0_20px_rgba(168,85,247,0.3)]"
            >
              {editingStudent ? 'Save Changes' : 'Add Student'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

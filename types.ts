export type Priority = 'Low' | 'Medium' | 'High' | 'Urgent';
export type Status = 'Scheduled' | 'In Progress' | 'Completed' | 'Delayed';

export interface Task {
  id: string;
  name: string;
  email: string;
  title: string;
  description: string;
  deadline: string;
  priority: Priority;
  status: Status;
  createdAt: number;
}

export interface NavItem {
  label: string;
  path: string;
}
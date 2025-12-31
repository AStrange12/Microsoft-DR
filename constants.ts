
import { Task, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Create Reminder', path: '/create' },
  { label: 'Reminder List', path: '/list' },
  { label: 'How It Works', path: '/how-it-works' },
];

export const MOCK_TASKS: Task[] = [
  {
    id: '1',
    name: 'Alex Johnson',
    email: 'alex.j@example.com',
    title: 'Q4 Budget Review',
    description: 'Finalize the department budget for the upcoming quarter.',
    deadline: '2024-12-15',
    priority: 'High',
    status: 'Scheduled',
  },
  {
    id: '2',
    name: 'Sarah Miller',
    email: 'sarah.m@example.com',
    title: 'Client Onboarding - Project X',
    description: 'Set up environment and permissions for the new client team.',
    deadline: '2024-11-20',
    priority: 'Urgent',
    status: 'In Progress',
  },
  {
    id: '3',
    name: 'Michael Chen',
    email: 'm.chen@example.com',
    title: 'Weekly Sync Prep',
    description: 'Gather slides from all team leads for Monday morning.',
    deadline: '2024-11-18',
    priority: 'Medium',
    status: 'Scheduled',
  },
  {
    id: '4',
    name: 'Jordan Smith',
    email: 'j.smith@example.com',
    title: 'License Renewal',
    description: 'Submit ticket for annual software subscription renewal.',
    deadline: '2024-11-30',
    priority: 'Low',
    status: 'Scheduled',
  }
];

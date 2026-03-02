export type TeamMember = {
  id: string;
  name: string;
  email?: string;
  role: string; // e.g. "Developer", "PM"
  assignments: string[]; // list of task/project assignment titles
  avatarUrl?: string;
};

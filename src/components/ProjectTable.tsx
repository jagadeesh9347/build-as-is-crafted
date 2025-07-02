
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, User } from "lucide-react";

interface Project {
  id: number;
  jobRequest: string;
  submitted: string;
  status: "In-progress" | "Need to start" | "Complete" | "Blocked";
  submitter: string;
  url: string;
  assigned: string;
  priority: "Medium" | "High" | "Low";
  dueDate: string;
  estValue: string;
}

const projects: Project[] = [
  {
    id: 1,
    jobRequest: "Launch social media campaign for product awareness",
    submitted: "15-11-2024",
    status: "In-progress",
    submitter: "Aisha Patel",
    url: "www.aishapatel.com",
    assigned: "Sophie Choudhury",
    priority: "Medium",
    dueDate: "20-11-2024",
    estValue: "6,200,000 €"
  },
  {
    id: 2,
    jobRequest: "Update press kit for company redesign",
    submitted: "28-10-2024",
    status: "Need to start",
    submitter: "Irfan Khan",
    url: "www.irfankhanp.com",
    assigned: "Tejas Pandey",
    priority: "High",
    dueDate: "30-10-2024",
    estValue: "3,500,000 €"
  },
  {
    id: 3,
    jobRequest: "Finalize user testing feedback for app launch",
    submitted: "05-12-2024",
    status: "In-progress",
    submitter: "Mark Johnson",
    url: "www.markjohns.com",
    assigned: "Rachel Lee",
    priority: "Medium",
    dueDate: "10-12-2024",
    estValue: "4,750,000 €"
  },
  {
    id: 4,
    jobRequest: "Design new features for the website",
    submitted: "10-01-2025",
    status: "Complete",
    submitter: "Emily Green",
    url: "www.emilygreen.com",
    assigned: "Tom Wright",
    priority: "Low",
    dueDate: "15-01-2025",
    estValue: "5,900,000 €"
  },
  {
    id: 5,
    jobRequest: "Prepare financial report for Q4",
    submitted: "25-01-2025",
    status: "Blocked",
    submitter: "Jessica Brown",
    url: "www.jessicabro.com",
    assigned: "Kevin Smith",
    priority: "Low",
    dueDate: "30-01-2025",
    estValue: "2,800,000 €"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "In-progress":
      return "bg-orange-100 text-orange-800 border-orange-200";
    case "Need to start":
      return "bg-blue-100 text-blue-800 border-blue-200";
    case "Complete":
      return "bg-green-100 text-green-800 border-green-200";
    case "Blocked":
      return "bg-red-100 text-red-800 border-red-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "High":
      return "bg-red-100 text-red-700 border-red-200";
    case "Medium":
      return "bg-yellow-100 text-yellow-700 border-yellow-200";
    case "Low":
      return "bg-green-100 text-green-700 border-green-200";
    default:
      return "bg-gray-100 text-gray-700 border-gray-200";
  }
};

interface ProjectTableProps {
  searchTerm: string;
}

const ProjectTable = ({ searchTerm }: ProjectTableProps) => {
  const filteredProjects = projects.filter(project =>
    project.jobRequest.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.submitter.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.assigned.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-50/50 border-b border-gray-200">
          <tr>
            <th className="text-left py-4 px-6 font-medium text-gray-700 text-sm">#</th>
            <th className="text-left py-4 px-6 font-medium text-gray-700 text-sm">Job Request</th>
            <th className="text-left py-4 px-6 font-medium text-gray-700 text-sm">Submitted</th>
            <th className="text-left py-4 px-6 font-medium text-gray-700 text-sm">Status</th>
            <th className="text-left py-4 px-6 font-medium text-gray-700 text-sm">Submitter</th>
            <th className="text-left py-4 px-6 font-medium text-gray-700 text-sm">URL</th>
            <th className="text-left py-4 px-6 font-medium text-gray-700 text-sm">Assigned</th>
            <th className="text-left py-4 px-6 font-medium text-gray-700 text-sm">Priority</th>
            <th className="text-left py-4 px-6 font-medium text-gray-700 text-sm">Due Date</th>
            <th className="text-left py-4 px-6 font-medium text-gray-700 text-sm">Est. Value</th>
          </tr>
        </thead>
        <tbody>
          {filteredProjects.map((project, index) => (
            <tr key={project.id} className={`border-b border-gray-100 hover:bg-gray-50/50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'}`}>
              <td className="py-4 px-6 text-sm text-gray-600 font-medium">{project.id}</td>
              <td className="py-4 px-6">
                <div className="font-medium text-gray-900 text-sm max-w-xs">
                  {project.jobRequest}
                </div>
              </td>
              <td className="py-4 px-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  {project.submitted}
                </div>
              </td>
              <td className="py-4 px-6">
                <Badge className={`${getStatusColor(project.status)} border font-medium text-xs px-2 py-1 rounded-md`}>
                  {project.status}
                </Badge>
              </td>
              <td className="py-4 px-6 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-gray-400" />
                  {project.submitter}
                </div>
              </td>
              <td className="py-4 px-6">
                <Button variant="ghost" size="sm" className="p-0 h-auto hover:bg-transparent">
                  <div className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm">
                    <ExternalLink className="w-3 h-3" />
                    {project.url}
                  </div>
                </Button>
              </td>
              <td className="py-4 px-6 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-gray-400" />
                  {project.assigned}
                </div>
              </td>
              <td className="py-4 px-6">
                <Badge className={`${getPriorityColor(project.priority)} border font-medium text-xs px-2 py-1 rounded-md`}>
                  {project.priority}
                </Badge>
              </td>
              <td className="py-4 px-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  {project.dueDate}
                </div>
              </td>
              <td className="py-4 px-6 text-sm font-semibold text-gray-900">
                {project.estValue}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectTable;

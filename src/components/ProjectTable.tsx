
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
      return "bg-yellow-100 text-yellow-800 border-yellow-200";
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
      return "bg-orange-100 text-orange-700 border-orange-200";
    case "Low":
      return "bg-blue-100 text-blue-700 border-blue-200";
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
        <thead>
          <tr className="border-b border-gray-200">
            <th className="text-left py-3 px-4 font-medium text-gray-600">#</th>
            <th className="text-left py-3 px-4 font-medium text-gray-600">Job Request</th>
            <th className="text-left py-3 px-4 font-medium text-gray-600">Submitted</th>
            <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
            <th className="text-left py-3 px-4 font-medium text-gray-600">Submitter</th>
            <th className="text-left py-3 px-4 font-medium text-gray-600">URL</th>
            <th className="text-left py-3 px-4 font-medium text-gray-600">Assigned</th>
            <th className="text-left py-3 px-4 font-medium text-gray-600">Priority</th>
            <th className="text-left py-3 px-4 font-medium text-gray-600">Due Date</th>
            <th className="text-left py-3 px-4 font-medium text-gray-600">Est. Value</th>
          </tr>
        </thead>
        <tbody>
          {filteredProjects.map((project) => (
            <tr key={project.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
              <td className="py-4 px-4 text-sm text-gray-600">{project.id}</td>
              <td className="py-4 px-4">
                <div className="font-medium text-gray-900 max-w-xs truncate">
                  {project.jobRequest}
                </div>
              </td>
              <td className="py-4 px-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {project.submitted}
                </div>
              </td>
              <td className="py-4 px-4">
                <Badge className={`${getStatusColor(project.status)} border font-normal`}>
                  {project.status}
                </Badge>
              </td>
              <td className="py-4 px-4 text-sm text-gray-700">
                <div className="flex items-center gap-1">
                  <User className="w-3 h-3" />
                  {project.submitter}
                </div>
              </td>
              <td className="py-4 px-4">
                <Button variant="ghost" size="sm" className="p-0 h-auto">
                  <ExternalLink className="w-3 h-3 mr-1" />
                  <span className="text-blue-600 hover:text-blue-800 text-xs">
                    {project.url}
                  </span>
                </Button>
              </td>
              <td className="py-4 px-4 text-sm text-gray-700">
                <div className="flex items-center gap-1">
                  <User className="w-3 h-3" />
                  {project.assigned}
                </div>
              </td>
              <td className="py-4 px-4">
                <Badge className={`${getPriorityColor(project.priority)} border font-normal`}>
                  {project.priority}
                </Badge>
              </td>
              <td className="py-4 px-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {project.dueDate}
                </div>
              </td>
              <td className="py-4 px-4 text-sm font-medium text-gray-900">
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

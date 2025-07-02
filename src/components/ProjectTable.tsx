
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ExternalLink } from "lucide-react";
import { useState } from "react";

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

const statusOptions = ["In-progress", "Need to start", "Complete", "Blocked"] as const;
const priorityOptions = ["High", "Medium", "Low"] as const;

const getStatusColor = (status: string) => {
  switch (status) {
    case "In-progress":
      return "bg-orange-100 text-orange-700 border-orange-200";
    case "Need to start":
      return "bg-blue-100 text-blue-700 border-blue-200";
    case "Complete":
      return "bg-green-100 text-green-700 border-green-200";
    case "Blocked":
      return "bg-red-100 text-red-700 border-red-200";
    default:
      return "bg-gray-100 text-gray-700 border-gray-200";
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
  const [projectData, setProjectData] = useState(projects);

  const filteredProjects = projectData.filter(project =>
    project.jobRequest.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.submitter.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.assigned.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const updateProjectStatus = (projectId: number, newStatus: Project['status']) => {
    setProjectData(prev => prev.map(project => 
      project.id === projectId ? { ...project, status: newStatus } : project
    ));
  };

  const updateProjectPriority = (projectId: number, newPriority: Project['priority']) => {
    setProjectData(prev => prev.map(project => 
      project.id === projectId ? { ...project, priority: newPriority } : project
    ));
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        {/* Header Row - Google Sheets style */}
        <thead>
          <tr className="bg-gray-50">
            <th className="border-r border-gray-200 px-3 py-2 text-left text-xs font-medium text-gray-700 bg-gray-50 sticky top-0">#</th>
            <th className="border-r border-gray-200 px-3 py-2 text-left text-xs font-medium text-gray-700 bg-gray-50 sticky top-0 min-w-[300px]">Job Request</th>
            <th className="border-r border-gray-200 px-3 py-2 text-left text-xs font-medium text-gray-700 bg-gray-50 sticky top-0">Submitted</th>
            <th className="border-r border-gray-200 px-3 py-2 text-left text-xs font-medium text-gray-700 bg-gray-50 sticky top-0">Status</th>
            <th className="border-r border-gray-200 px-3 py-2 text-left text-xs font-medium text-gray-700 bg-gray-50 sticky top-0">Submitter</th>
            <th className="border-r border-gray-200 px-3 py-2 text-left text-xs font-medium text-gray-700 bg-gray-50 sticky top-0">URL</th>
            <th className="border-r border-gray-200 px-3 py-2 text-left text-xs font-medium text-gray-700 bg-gray-50 sticky top-0">Assigned</th>
            <th className="border-r border-gray-200 px-3 py-2 text-left text-xs font-medium text-gray-700 bg-gray-50 sticky top-0">Priority</th>
            <th className="border-r border-gray-200 px-3 py-2 text-left text-xs font-medium text-gray-700 bg-gray-50 sticky top-0">Due Date</th>
            <th className="px-3 py-2 text-left text-xs font-medium text-gray-700 bg-gray-50 sticky top-0">Est. Value</th>
          </tr>
        </thead>
        <tbody>
          {filteredProjects.map((project, index) => (
            <tr key={project.id} className="hover:bg-blue-50 border-b border-gray-100">
              <td className="border-r border-gray-100 px-3 py-2 text-xs text-gray-600 bg-white">{project.id}</td>
              <td className="border-r border-gray-100 px-3 py-2 bg-white">
                <div className="text-xs text-gray-900 max-w-xs">
                  {project.jobRequest}
                </div>
              </td>
              <td className="border-r border-gray-100 px-3 py-2 text-xs text-gray-600 bg-white">{project.submitted}</td>
              <td className="border-r border-gray-100 px-3 py-2 bg-white">
                <Select
                  value={project.status}
                  onValueChange={(value: Project['status']) => updateProjectStatus(project.id, value)}
                >
                  <SelectTrigger className="w-auto h-auto p-0 border-none bg-transparent hover:bg-gray-50">
                    <Badge className={`${getStatusColor(project.status)} text-xs px-2 py-0.5 rounded-sm font-normal cursor-pointer`}>
                      {project.status}
                    </Badge>
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-gray-300 shadow-lg z-50">
                    {statusOptions.map((status) => (
                      <SelectItem key={status} value={status} className="text-xs">
                        <Badge className={`${getStatusColor(status)} text-xs px-2 py-0.5 rounded-sm font-normal`}>
                          {status}
                        </Badge>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </td>
              <td className="border-r border-gray-100 px-3 py-2 text-xs text-gray-700 bg-white">{project.submitter}</td>
              <td className="border-r border-gray-100 px-3 py-2 bg-white">
                <Button variant="ghost" size="sm" className="p-0 h-auto hover:bg-transparent">
                  <div className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-xs">
                    <ExternalLink className="w-3 h-3" />
                    {project.url}
                  </div>
                </Button>
              </td>
              <td className="border-r border-gray-100 px-3 py-2 text-xs text-gray-700 bg-white">{project.assigned}</td>
              <td className="border-r border-gray-100 px-3 py-2 bg-white">
                <Select
                  value={project.priority}
                  onValueChange={(value: Project['priority']) => updateProjectPriority(project.id, value)}
                >
                  <SelectTrigger className="w-auto h-auto p-0 border-none bg-transparent hover:bg-gray-50">
                    <Badge className={`${getPriorityColor(project.priority)} text-xs px-2 py-0.5 rounded-sm font-normal cursor-pointer`}>
                      {project.priority}
                    </Badge>
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-gray-300 shadow-lg z-50">
                    {priorityOptions.map((priority) => (
                      <SelectItem key={priority} value={priority} className="text-xs">
                        <Badge className={`${getPriorityColor(priority)} text-xs px-2 py-0.5 rounded-sm font-normal`}>
                          {priority}
                        </Badge>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </td>
              <td className="border-r border-gray-100 px-3 py-2 text-xs text-gray-600 bg-white">{project.dueDate}</td>
              <td className="px-3 py-2 text-xs font-medium text-gray-900 bg-white">{project.estValue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectTable;

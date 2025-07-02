
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Download, Plus, Calendar, Users, DollarSign } from "lucide-react";
import ProjectTable from "./ProjectTable";

const ProjectDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto p-6 max-w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-normal text-gray-900 mb-1">Q3 Financial Overview</h1>
            <p className="text-gray-600 text-sm">Project management dashboard - Spreadsheet 3</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="bg-white border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-1.5 h-8 text-sm">
              Export
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 h-8 text-sm">
              + New Action
            </Button>
          </div>
        </div>

        {/* Stats Cards - Google Sheets style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white border border-gray-200 rounded p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-600 mb-1">Total Projects</p>
                <p className="text-2xl font-normal text-gray-900">5</p>
                <p className="text-xs text-gray-500 mt-1">Active tasks in pipeline</p>
              </div>
              <div className="w-8 h-8 bg-blue-50 rounded flex items-center justify-center">
                <Calendar className="h-4 w-4 text-blue-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white border border-gray-200 rounded p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-600 mb-1">Team Members</p>
                <p className="text-2xl font-normal text-gray-900">8</p>
                <p className="text-xs text-gray-500 mt-1">Across all departments</p>
              </div>
              <div className="w-8 h-8 bg-green-50 rounded flex items-center justify-center">
                <Users className="h-4 w-4 text-green-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white border border-gray-200 rounded p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-600 mb-1">Total Value</p>
                <p className="text-2xl font-normal text-gray-900">€22,150</p>
                <p className="text-xs text-gray-500 mt-1">Estimated project value</p>
              </div>
              <div className="w-8 h-8 bg-purple-50 rounded flex items-center justify-center">
                <DollarSign className="h-4 w-4 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Table Container - Google Sheets style */}
        <div className="bg-white border border-gray-300 rounded-lg overflow-hidden">
          {/* Toolbar */}
          <div className="border-b border-gray-200 bg-gray-50 px-4 py-2">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-medium text-gray-900">Project Tasks</h2>
              <div className="flex gap-2">
                <div className="relative">
                  <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-3 h-3" />
                  <Input
                    placeholder="Search projects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-7 bg-white border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 h-7 w-64 text-sm"
                  />
                </div>
                <Button variant="outline" className="bg-white border-gray-300 text-gray-700 hover:bg-gray-50 px-3 py-1 h-7 text-xs">
                  <Filter className="w-3 h-3 mr-1" />
                  Filter
                </Button>
              </div>
            </div>
          </div>
          
          {/* Table */}
          <ProjectTable searchTerm={searchTerm} />
        </div>
      </div>
    </div>
  );
};

export default ProjectDashboard;

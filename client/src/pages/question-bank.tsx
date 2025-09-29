
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { HelpCircle, Search, Plus, FileText, Import, Trash2, Eye, Edit } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";

interface Question {
  id: string;
  questionTag: string;
  questionType: string;
  level: string;
  question: string;
  createdBy: string;
  selected: boolean;
}

const mockQuestions: Question[] = [
  {
    id: "34",
    questionTag: "Mathematics",
    questionType: "Single Choice",
    level: "Low",
    question: "What are two things all graphs require?",
    createdBy: "Joe Black (0000)",
    selected: false
  },
  {
    id: "33",
    questionTag: "Mathematics",
    questionType: "Single Choice",
    level: "Medium",
    question: "Which type of graph shows a relationship between parts and the whole?",
    createdBy: "Joe Black (0000)",
    selected: false
  },
  {
    id: "32",
    questionTag: "Science",
    questionType: "Single Choice",
    level: "High",
    question: "Which form of energy is currently causing the largest amount of greenhouse gas emissions, globally?",
    createdBy: "Joe Black (0000)",
    selected: false
  },
  {
    id: "31",
    questionTag: "Science",
    questionType: "Single Choice",
    level: "Medium",
    question: "Which forms of energy are ultimately derived from solar energy?",
    createdBy: "Joe Black (0000)",
    selected: false
  },
  {
    id: "30",
    questionTag: "Communication Skills",
    questionType: "Single Choice",
    level: "Low",
    question: "What is the ability to understand and share the perspective of others called?",
    createdBy: "Joe Black (0000)",
    selected: false
  }
];

export default function QuestionBank() {
  const [questions, setQuestions] = useState<Question[]>(mockQuestions);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedCreator, setSelectedCreator] = useState("");

  const handleSelectQuestion = (id: string) => {
    setQuestions(questions.map(q => 
      q.id === id ? { ...q, selected: !q.selected } : q
    ));
  };

  const handleSelectAll = (checked: boolean) => {
    setQuestions(questions.map(q => ({ ...q, selected: checked })));
  };

  const filteredQuestions = questions.filter(question => {
    return (
      question.question.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedTag === "" || selectedTag === "all-tags" || question.questionTag === selectedTag) &&
      (selectedType === "" || selectedType === "all-types" || question.questionType === selectedType) &&
      (selectedLevel === "" || selectedLevel === "all-levels" || question.level === selectedLevel) &&
      (selectedCreator === "" || selectedCreator === "all-creators" || question.createdBy === selectedCreator)
    );
  });

  const selectedCount = questions.filter(q => q.selected).length;

  const handleMenuItemClick = (section: string, item: string) => {
    console.log(`Menu clicked: ${section} > ${item}`);
  };
  return (
    <SidebarProvider>
                    <div className="flex h-screen w-full">
                        <AppSidebar onMenuItemClick={handleMenuItemClick} />
                        <SidebarInset>
    <div className="min-h-screen bg-background p-6" data-testid="question-bank-page">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold flex items-center">
            <HelpCircle className="w-6 h-6 mr-2" />
            Question Bank
          </CardTitle>
        </CardHeader>

        <CardContent>
          {/* Select Criteria */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-lg">Select Criteria</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <div>
                  <Select value={selectedTag} onValueChange={setSelectedTag}>
                    <SelectTrigger>
                      <SelectValue placeholder="Question Tag" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all-tags">All Tags</SelectItem>
                      <SelectItem value="Mathematics">Mathematics</SelectItem>
                      <SelectItem value="Science">Science</SelectItem>
                      <SelectItem value="Communication Skills">Communication Skills</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Select value={selectedType} onValueChange={setSelectedType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Question Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all-types">All Types</SelectItem>
                      <SelectItem value="Single Choice">Single Choice</SelectItem>
                      <SelectItem value="Multiple Choice">Multiple Choice</SelectItem>
                      <SelectItem value="True/False">True/False</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                    <SelectTrigger>
                      <SelectValue placeholder="Question Level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all-levels">All Levels</SelectItem>
                      <SelectItem value="Low">Low</SelectItem>
                      <SelectItem value="Medium">Medium</SelectItem>
                      <SelectItem value="High">High</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Select value={selectedCreator} onValueChange={setSelectedCreator}>
                    <SelectTrigger>
                      <SelectValue placeholder="Created By" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all-creators">All Creators</SelectItem>
                      <SelectItem value="Joe Black (0000)">Joe Black (0000)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex gap-2">
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Tag
                </Button>
                <Button variant="outline">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Question
                </Button>
                <Button variant="outline">
                  <Import className="w-4 h-4 mr-2" />
                  Import
                </Button>
                <Button variant="outline">
                  <Trash2 className="w-4 h-4 mr-2" />
                  Bulk Delete
                </Button>
                <Button>
                  <Search className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Search */}
          <div className="relative mb-4 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Questions Table */}
          <div className="border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12">
                    <Checkbox 
                      checked={selectedCount === questions.length}
                      onCheckedChange={handleSelectAll}
                    />
                  </TableHead>
                  <TableHead>Q. ID</TableHead>
                  <TableHead>Question Tag</TableHead>
                  <TableHead>Question Type</TableHead>
                  <TableHead>Level</TableHead>
                  <TableHead>Question</TableHead>
                  <TableHead>Created By</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredQuestions.map((question) => (
                  <TableRow key={question.id}>
                    <TableCell>
                      <Checkbox 
                        checked={question.selected}
                        onCheckedChange={() => handleSelectQuestion(question.id)}
                      />
                    </TableCell>
                    <TableCell className="font-medium">{question.id}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{question.questionTag}</Badge>
                    </TableCell>
                    <TableCell>{question.questionType}</TableCell>
                    <TableCell>
                      <Badge 
                        variant={
                          question.level === "High" ? "destructive" : 
                          question.level === "Medium" ? "default" : "secondary"
                        }
                      >
                        {question.level}
                      </Badge>
                    </TableCell>
                    <TableCell className="max-w-xs truncate">
                      {question.question}
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {question.createdBy}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-1">
                        <Button size="sm" variant="outline">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="text-sm text-muted-foreground mt-4">
            Showing {filteredQuestions.length} questions
          </div>
        </CardContent>
      </Card>
    </div>
          </SidebarInset>
                            </div>
                        </SidebarProvider>
  );
}

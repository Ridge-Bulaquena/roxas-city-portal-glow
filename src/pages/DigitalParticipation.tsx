import React, { useState } from 'react';
import { 
  Megaphone, 
  Vote, 
  Calendar, 
  Users, 
  Bot, 
  TrendingUp, 
  FileText, 
  MapPin, 
  Upload, 
  ThumbsUp, 
  MessageSquare, 
  Play, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  ArrowRight,
  Plus,
  Filter,
  Search,
  BarChart3,
  Lightbulb,
  Building2,
  Scale,
  Gavel
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer';

const DigitalParticipation = () => {
  const [activeTab, setActiveTab] = useState('ideas');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const ideas = [
    {
      id: 1,
      title: "Smart Street Lighting System",
      description: "Propose installation of solar-powered LED street lights with motion sensors to improve safety and reduce energy costs.",
      author: "Maria Santos",
      votes: 127,
      category: "Infrastructure",
      status: "Under Review",
      location: "Barangay 1",
      image: "/public-works.jpg"
    },
    {
      id: 2,
      title: "Community Garden Initiative",
      description: "Transform vacant lots into community gardens to promote food security and green spaces.",
      author: "Juan Dela Cruz",
      votes: 89,
      category: "Environment",
      status: "Endorsed",
      location: "Barangay 3",
      image: "/environment.jpg"
    },
    {
      id: 3,
      title: "Digital Skills Training Program",
      description: "Establish free computer literacy classes for senior citizens and unemployed youth.",
      author: "Ana Rodriguez",
      votes: 156,
      category: "Education",
      status: "Passed",
      location: "City Center",
      image: "/education.jpg"
    }
  ];

  const townHalls = [
    {
      id: 1,
      title: "2024 Budget Planning Session",
      date: "2024-01-15",
      time: "2:00 PM",
      platform: "Zoom",
      attendees: 45,
      status: "Upcoming"
    },
    {
      id: 2,
      title: "Traffic Management Solutions",
      date: "2024-01-10",
      time: "3:00 PM",
      platform: "YouTube Live",
      attendees: 78,
      status: "Completed"
    }
  ];

  const polls = [
    {
      id: 1,
      question: "What's your top priority for 2024?",
      options: [
        { text: "Road Infrastructure", votes: 45, percentage: 45 },
        { text: "Healthcare Services", votes: 30, percentage: 30 },
        { text: "Education Programs", votes: 15, percentage: 15 },
        { text: "Environmental Protection", votes: 10, percentage: 10 }
      ],
      totalVotes: 100,
      endDate: "2024-01-31"
    }
  ];

  const timelineItems = [
    {
      id: 1,
      title: "Smart Street Lighting System",
      status: "Under Review",
      date: "2024-01-12",
      description: "Proposal submitted and currently being evaluated by the technical committee."
    },
    {
      id: 2,
      title: "Community Garden Initiative",
      status: "Endorsed",
      date: "2024-01-10",
      description: "Proposal endorsed by the environment committee and forwarded to city council."
    },
    {
      id: 3,
      title: "Digital Skills Training Program",
      status: "Passed",
      date: "2024-01-08",
      description: "Proposal approved by city council and implementation scheduled for Q2 2024."
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Under Review': return 'bg-yellow-100 text-yellow-800';
      case 'Endorsed': return 'bg-blue-100 text-blue-800';
      case 'Passed': return 'bg-green-100 text-green-800';
      case 'Implemented': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Under Review': return <Clock className="w-4 h-4" />;
      case 'Endorsed': return <CheckCircle className="w-4 h-4" />;
      case 'Passed': return <Gavel className="w-4 h-4" />;
      case 'Implemented': return <Building2 className="w-4 h-4" />;
      default: return <AlertCircle className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navigation userType="resident" setUserType={() => {}} />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-white/10 backdrop-blur-sm rounded-full">
                <Megaphone className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Digital Participation
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Submit ideas, vote, and join town halls from your device.
            </p>
            <p className="text-lg mb-12 text-blue-200 max-w-4xl mx-auto leading-relaxed">
              True governance starts with your voice. Roxas City invites every citizen to propose, vote, and shape civic policies from anywhere — all through secure digital tools.
            </p>
            <Button size="lg" className="bg-white text-[#1e293b] hover:bg-blue-50 px-8 py-4 text-lg font-semibold">
              Engage Digitally
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-5 bg-white/80 backdrop-blur-sm">
            <TabsTrigger value="ideas" className="flex items-center gap-2">
              <Lightbulb className="w-4 h-4" />
              Idea Lab
            </TabsTrigger>
            <TabsTrigger value="townhall" className="flex items-center gap-2">
              <Building2 className="w-4 h-4" />
              Town Hall
            </TabsTrigger>
            <TabsTrigger value="voting" className="flex items-center gap-2">
              <Vote className="w-4 h-4" />
              Voting
            </TabsTrigger>
            <TabsTrigger value="coach" className="flex items-center gap-2">
              <Bot className="w-4 h-4" />
              AI Coach
            </TabsTrigger>
            <TabsTrigger value="timeline" className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Timeline
            </TabsTrigger>
          </TabsList>

          {/* Citizen Idea Lab */}
          <TabsContent value="ideas" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Ideas Feed */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900">Citizen Ideas</h2>
                  <div className="flex gap-2">
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="Infrastructure">Infrastructure</SelectItem>
                        <SelectItem value="Environment">Environment</SelectItem>
                        <SelectItem value="Education">Education</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="outline" size="sm">
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  {ideas.map((idea) => (
                    <Card key={idea.id} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                            <Lightbulb className="w-8 h-8 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="font-semibold text-lg">{idea.title}</h3>
                              <Badge className={getStatusColor(idea.status)}>
                                {getStatusIcon(idea.status)}
                                <span className="ml-1">{idea.status}</span>
                              </Badge>
                            </div>
                            <p className="text-gray-600 mb-3">{idea.description}</p>
                            <div className="flex items-center justify-between text-sm text-gray-500">
                              <div className="flex items-center gap-4">
                                <span>By {idea.author}</span>
                                <span className="flex items-center gap-1">
                                  <MapPin className="w-4 h-4" />
                                  {idea.location}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Button variant="ghost" size="sm" className="flex items-center gap-1">
                                  <ThumbsUp className="w-4 h-4" />
                                  {idea.votes}
                                </Button>
                                <Button variant="ghost" size="sm">
                                  <MessageSquare className="w-4 h-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Proposal Form */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Plus className="w-5 h-5" />
                      Submit New Proposal
                    </CardTitle>
                    <CardDescription>
                      Share your ideas for improving Roxas City. Our AI assistant will help format your proposal.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Proposal Title</label>
                      <Input placeholder="Enter a clear, descriptive title" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Category</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="infrastructure">Infrastructure</SelectItem>
                          <SelectItem value="environment">Environment</SelectItem>
                          <SelectItem value="education">Education</SelectItem>
                          <SelectItem value="health">Healthcare</SelectItem>
                          <SelectItem value="safety">Safety & Security</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Description</label>
                      <Textarea 
                        placeholder="Describe your proposal in detail. Include benefits, implementation ideas, and expected impact."
                        rows={4}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Location (Optional)</label>
                      <Input placeholder="Specific location or barangay" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Attach Image</label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <Upload className="w-8 h-8 mx-auto text-gray-400 mb-2" />
                        <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                      </div>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      Submit Proposal
                    </Button>
                  </CardContent>
                </Card>

                <Alert>
                  <Bot className="h-4 w-4" />
                  <AlertDescription>
                    <strong>AI Assistant:</strong> I can help you format your proposal and suggest policy alignments. Just ask!
                  </AlertDescription>
                </Alert>
              </div>
            </div>
          </TabsContent>

          {/* Virtual Town Hall */}
          <TabsContent value="townhall" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Virtual Town Hall Events</h2>
                <div className="space-y-4">
                  {townHalls.map((event) => (
                    <Card key={event.id} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                            <Building2 className="w-8 h-8 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg mb-2">{event.title}</h3>
                            <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                              <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {event.date}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {event.time}
                              </span>
                              <span className="flex items-center gap-1">
                                <Users className="w-4 h-4" />
                                {event.attendees} attending
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge variant={event.status === 'Upcoming' ? 'default' : 'secondary'}>
                                {event.status}
                              </Badge>
                              <span className="text-sm text-gray-500">via {event.platform}</span>
                            </div>
                            <div className="flex gap-2 mt-4">
                              <Button size="sm" className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                Add to Calendar
                              </Button>
                              {event.status === 'Upcoming' ? (
                                <Button size="sm" variant="outline" className="flex items-center gap-2">
                                  <Users className="w-4 h-4" />
                                  RSVP
                                </Button>
                              ) : (
                                <Button size="sm" variant="outline" className="flex items-center gap-2">
                                  <Play className="w-4 h-4" />
                                  Watch Replay
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Events</CardTitle>
                    <CardDescription>Join our next virtual town hall</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6">
                      <h3 className="font-semibold text-lg mb-2">2024 Budget Planning Session</h3>
                      <p className="text-gray-600 mb-4">Help shape the city's budget priorities for 2024. Your input matters!</p>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Date:</span>
                          <span className="font-medium">January 15, 2024</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Time:</span>
                          <span className="font-medium">2:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Platform:</span>
                          <span className="font-medium">Zoom</span>
                        </div>
                      </div>
                      <Button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600">
                        Join Meeting
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Event Archive</CardTitle>
                    <CardDescription>Past town hall recordings and materials</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-medium">Traffic Management Solutions</h4>
                        <p className="text-sm text-gray-600">January 10, 2024</p>
                      </div>
                      <Button size="sm" variant="outline">
                        <Play className="w-4 h-4 mr-2" />
                        Watch
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-medium">Environmental Protection Initiatives</h4>
                        <p className="text-sm text-gray-600">December 15, 2023</p>
                      </div>
                      <Button size="sm" variant="outline">
                        <Play className="w-4 h-4 mr-2" />
                        Watch
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Civic Voting & Polls */}
          <TabsContent value="voting" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Active Polls</h2>
                <div className="space-y-6">
                  {polls.map((poll) => (
                    <Card key={poll.id}>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Vote className="w-5 h-5" />
                          {poll.question}
                        </CardTitle>
                        <CardDescription>
                          Total votes: {poll.totalVotes} • Ends: {poll.endDate}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {poll.options.map((option, index) => (
                          <div key={index} className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="font-medium">{option.text}</span>
                              <span className="text-sm text-gray-600">{option.votes} votes ({option.percentage}%)</span>
                            </div>
                            <Progress value={option.percentage} className="h-2" />
                          </div>
                        ))}
                        <Separator />
                        <div className="flex gap-2">
                          <Button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600">
                            Vote Now
                          </Button>
                          <Button variant="outline" className="flex items-center gap-2">
                            <BarChart3 className="w-4 h-4" />
                            Detailed Results
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Poll Demographics</CardTitle>
                    <CardDescription>Breakdown by age group and barangay</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">By Age Group</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>18-25</span>
                            <span>25%</span>
                          </div>
                          <Progress value={25} className="h-2" />
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>26-40</span>
                            <span>35%</span>
                          </div>
                          <Progress value={35} className="h-2" />
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>41-60</span>
                            <span>30%</span>
                          </div>
                          <Progress value={30} className="h-2" />
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>60+</span>
                            <span>10%</span>
                          </div>
                          <Progress value={10} className="h-2" />
                        </div>
                      </div>
                      <Separator />
                      <div>
                        <h4 className="font-medium mb-2">Top Participating Barangays</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Barangay 1</span>
                            <span>45 votes</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Barangay 3</span>
                            <span>32 votes</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Barangay 5</span>
                            <span>23 votes</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Create New Poll</CardTitle>
                    <CardDescription>Propose a poll for the community</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Input placeholder="Poll question" />
                    <div className="space-y-2">
                      <Input placeholder="Option 1" />
                      <Input placeholder="Option 2" />
                      <Input placeholder="Option 3" />
                      <Input placeholder="Option 4" />
                    </div>
                    <div className="flex gap-2">
                      <Input type="date" placeholder="End date" />
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Duration" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1week">1 Week</SelectItem>
                          <SelectItem value="2weeks">2 Weeks</SelectItem>
                          <SelectItem value="1month">1 Month</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600">
                      Create Poll
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* AI Participation Coach */}
          <TabsContent value="coach" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Participation Coach GPT</h2>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-6">
                      <Avatar className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600">
                        <Bot className="w-6 h-6 text-white" />
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="font-semibold">Civic Engagement Assistant</h3>
                        <p className="text-sm text-gray-600">I'm here to help you write impactful proposals and understand civic processes.</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4 max-h-96 overflow-y-auto">
                      <div className="flex gap-3">
                        <Avatar className="w-8 h-8">
                          <Bot className="w-4 h-4" />
                        </Avatar>
                        <div className="bg-blue-50 rounded-lg p-3 max-w-xs">
                          <p className="text-sm">Hello! I can help you with:</p>
                          <ul className="text-sm mt-2 space-y-1">
                            <li>• Writing clear, impactful proposals</li>
                            <li>• Understanding policy alignment</li>
                            <li>• Civic engagement best practices</li>
                            <li>• Legal and ethical boundaries</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="flex gap-3 justify-end">
                        <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                          <p className="text-sm">How do I write a good proposal?</p>
                        </div>
                        <Avatar className="w-8 h-8">
                          <span className="text-xs">You</span>
                        </Avatar>
                      </div>
                      
                      <div className="flex gap-3">
                        <Avatar className="w-8 h-8">
                          <Bot className="w-4 h-4" />
                        </Avatar>
                        <div className="bg-blue-50 rounded-lg p-3 max-w-xs">
                          <p className="text-sm">Great question! Here are the key elements:</p>
                          <ol className="text-sm mt-2 space-y-1">
                            <li>1. Clear, specific title</li>
                            <li>2. Problem statement with data</li>
                            <li>3. Proposed solution</li>
                            <li>4. Expected benefits and impact</li>
                            <li>5. Implementation timeline</li>
                            <li>6. Cost considerations</li>
                          </ol>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-2 mt-4">
                      <Input placeholder="Ask me anything about civic engagement..." />
                      <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
                        Send
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Tips</CardTitle>
                    <CardDescription>Common questions and guidance</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-medium text-green-800 mb-2">Writing Effective Proposals</h4>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li>• Be specific and measurable</li>
                        <li>• Include relevant data and examples</li>
                        <li>• Consider budget and timeline</li>
                        <li>• Address potential concerns</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-medium text-blue-800 mb-2">Civic Engagement Ethics</h4>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• Respect diverse viewpoints</li>
                        <li>• Focus on community benefit</li>
                        <li>• Avoid personal attacks</li>
                        <li>• Follow city guidelines</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <h4 className="font-medium text-purple-800 mb-2">Legal Boundaries</h4>
                      <ul className="text-sm text-purple-700 space-y-1">
                        <li>• Proposals must be within city jurisdiction</li>
                        <li>• Cannot violate existing laws</li>
                        <li>• Must respect private property rights</li>
                        <li>• Follow public participation rules</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>FAQ</CardTitle>
                    <CardDescription>Frequently asked questions</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="ghost" className="w-full justify-start text-left">
                          How long does proposal review take?
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Proposal Review Timeline</DialogTitle>
                          <DialogDescription>
                            Most proposals are reviewed within 2-4 weeks. Complex proposals may take longer. You'll receive updates via email.
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                    
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="ghost" className="w-full justify-start text-left">
                          Can I edit my proposal after submission?
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Editing Proposals</DialogTitle>
                          <DialogDescription>
                            You can edit your proposal within 24 hours of submission. After that, contact the city office for changes.
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                    
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="ghost" className="w-full justify-start text-left">
                          What happens if my proposal is approved?
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Proposal Approval Process</DialogTitle>
                          <DialogDescription>
                            Approved proposals go to the city council for final review. If passed, they enter the implementation phase with regular updates.
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Digital Legislative Timeline */}
          <TabsContent value="timeline" className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Digital Legislative Timeline</h2>
              <p className="text-gray-600">Track proposals from idea to implementation</p>
              
              <div className="space-y-6">
                {timelineItems.map((item, index) => (
                  <Card key={item.id} className="relative">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="relative">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                            {getStatusIcon(item.status)}
                          </div>
                          {index < timelineItems.length - 1 && (
                            <div className="absolute top-12 left-6 w-0.5 h-16 bg-gray-200"></div>
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-semibold text-lg">{item.title}</h3>
                            <Badge className={getStatusColor(item.status)}>
                              {item.status}
                            </Badge>
                          </div>
                          <p className="text-gray-600 mb-2">{item.description}</p>
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span>Submitted: {item.date}</span>
                            <span>ID: #{item.id.toString().padStart(4, '0')}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
};

export default DigitalParticipation; 
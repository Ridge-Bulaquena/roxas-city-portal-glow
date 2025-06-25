import React, { useState } from 'react';
import { Briefcase, Store, Lightbulb, FileText, CheckCircle, Users, Upload, MessageSquare, Calendar, Star, Search, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Avatar } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer';

const mentors = [
  { name: 'Ana Cruz', field: 'Retail', rating: 4.8, testimonials: 12 },
  { name: 'Mark Tan', field: 'Tech', rating: 4.9, testimonials: 8 },
  { name: 'Liza Gomez', field: 'F&B', rating: 4.7, testimonials: 15 },
];

const products = [
  { name: 'Bangus Tinapa', seller: 'Barangay 1', price: '₱120', delivery: true },
  { name: 'Rice Cakes', seller: 'Barangay 3', price: '₱60', delivery: false },
  { name: 'Organic Veggies', seller: 'Barangay 5', price: '₱80', delivery: true },
];

const BusinessSupport = () => {
  const [activeTab, setActiveTab] = useState('permit');
  const [selectedField, setSelectedField] = useState('all');
  const [selectedBarangay, setSelectedBarangay] = useState('all');

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-green-50 to-white">
      <Navigation userType="resident" setUserType={() => {}} />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-cyan-600 via-green-500 to-teal-400 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-white/10 backdrop-blur-sm rounded-full">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">
              Business Support
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-green-100 max-w-2xl mx-auto">
              Permits, incentives, and mentorship to help entrepreneurs thrive.
            </p>
            <p className="text-lg mb-10 text-green-200 max-w-3xl mx-auto leading-relaxed">
              From sari-sari stores to tech startups, Roxas City fuels local businesses with digital tools, financial programs, and a vibrant mentorship network.
            </p>
            <Button size="lg" className="bg-white text-cyan-700 hover:bg-green-50 px-8 py-4 text-lg font-semibold">
              Start or Grow Your Business
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column: Mini-Apps */}
          <div className="space-y-8">
            {/* Smart Permit System */}
            <Card className="bg-white/90 border-cyan-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-cyan-600" />
                  Smart Permit System
                </CardTitle>
                <CardDescription>Apply, upload docs, and track your business permit progress. Auto-fill forms using uploaded PDFs.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input type="text" placeholder="Business Name" />
                <div className="flex gap-2">
                  <Input type="file" />
                  <Button variant="outline" className="flex items-center gap-2">
                    <Upload className="w-4 h-4" />
                    Upload Docs
                  </Button>
                </div>
                <Progress value={40} className="h-2" />
                <p className="text-xs text-gray-500">Status: Application in review</p>
                <Button className="w-full bg-gradient-to-r from-cyan-600 to-green-500">
                  Track Progress
                </Button>
              </CardContent>
            </Card>

            {/* Incentive Eligibility Checker */}
            <Card className="bg-white/90 border-green-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Incentive Eligibility Checker
                </CardTitle>
                <CardDescription>Find out which tax breaks, grants, or exemptions your business qualifies for. Powered by GPT.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Describe your business (e.g. sari-sari store, tech startup)" />
                <Button className="w-full bg-gradient-to-r from-green-500 to-cyan-500">
                  Check Eligibility
                </Button>
                <Alert>
                  <Lightbulb className="h-4 w-4 text-cyan-500" />
                  <AlertDescription>
                    Our AI will analyze your profile and match you to the best incentives.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            {/* Business GPT Coach */}
            <Card className="bg-white/90 border-cyan-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-cyan-600" />
                  Business GPT Coach
                </CardTitle>
                <CardDescription>Ask business/legal questions and get instant answers, tips, and agency links.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea placeholder="Ask a question (e.g. How do I get BIR clearance?)" />
                <Button className="w-full bg-gradient-to-r from-cyan-600 to-green-500">
                  Ask Coach
                </Button>
                <div className="mt-2 text-xs text-gray-500">Sample: "Can I open a business as a student?"</div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Mentorship & Marketplace */}
          <div className="space-y-8">
            {/* Mentorship Matchmaker */}
            <Card className="bg-white/90 border-green-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-green-600" />
                  Mentorship Matchmaker
                </CardTitle>
                <CardDescription>Find a local mentor by field and schedule a virtual consult. See ratings and testimonials.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Select value={selectedField} onValueChange={setSelectedField}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Fields" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Fields</SelectItem>
                    <SelectItem value="Retail">Retail</SelectItem>
                    <SelectItem value="F&B">F&B</SelectItem>
                    <SelectItem value="Tech">Tech</SelectItem>
                  </SelectContent>
                </Select>
                <div className="space-y-2">
                  {mentors.filter(m => selectedField === 'all' || m.field === selectedField).map((mentor, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-8 h-8 bg-cyan-100 text-cyan-700 font-bold">{mentor.name[0]}</Avatar>
                        <div>
                          <div className="font-medium">{mentor.name}</div>
                          <div className="text-xs text-gray-500">{mentor.field} Mentor</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="text-sm font-semibold">{mentor.rating}</span>
                        <span className="text-xs text-gray-400">({mentor.testimonials})</span>
                        <Button size="sm" variant="outline" className="ml-2">Schedule</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* eKadiwa Marketplace Preview */}
            <Card className="bg-white/90 border-cyan-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Store className="w-5 h-5 text-cyan-600" />
                  eKadiwa Marketplace Preview
                </CardTitle>
                <CardDescription>Sell your products directly to locals. Filter by barangay, pickup/delivery.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Select value={selectedBarangay} onValueChange={setSelectedBarangay}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Barangays" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Barangays</SelectItem>
                      <SelectItem value="Barangay 1">Barangay 1</SelectItem>
                      <SelectItem value="Barangay 3">Barangay 3</SelectItem>
                      <SelectItem value="Barangay 5">Barangay 5</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline" size="sm">
                    <Search className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                </div>
                <div className="space-y-2">
                  {products.filter(p => selectedBarangay === 'all' || p.seller === selectedBarangay).map((product, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-cyan-50 rounded-lg">
                      <div>
                        <div className="font-medium">{product.name}</div>
                        <div className="text-xs text-gray-500">by {product.seller}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-cyan-700">{product.price}</span>
                        <Badge variant={product.delivery ? 'default' : 'secondary'}>{product.delivery ? 'Delivery' : 'Pickup'}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BusinessSupport; 
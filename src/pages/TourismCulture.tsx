import React, { useState } from 'react';
import { MapPin, Calendar, Camera, Drum, Shell, Users, Star, BadgeCheck, Utensils, FileText, Upload, MessageSquare } from 'lucide-react';
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

const festivals = [
  { name: 'Sinadya sa Halaran', month: 'December', genre: 'Religious', district: 'City Proper' },
  { name: 'Seafood Festival', month: 'April', genre: 'Food', district: 'Baybay' },
  { name: 'Capiztahan', month: 'May', genre: 'Cultural', district: 'Roxas' },
];

const badges = [
  { name: 'Heritage Explorer', icon: Star },
  { name: 'Seafood Connoisseur', icon: Utensils },
  { name: 'Festival Fan', icon: Drum },
];

const TourismCulture = () => {
  const [activeTab, setActiveTab] = useState('trail');
  const [selectedMonth, setSelectedMonth] = useState('all');
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [selectedDistrict, setSelectedDistrict] = useState('all');

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-rose-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-yellow-500 via-orange-400 to-rose-400 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-white/10 backdrop-blur-sm rounded-full">
                <Camera className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-yellow-100 bg-clip-text text-transparent">
              Tourism & Culture
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-yellow-100 max-w-2xl mx-auto">
              Discover festivals, food, heritage, and sights of Roxas.
            </p>
            <p className="text-lg mb-10 text-yellow-200 max-w-3xl mx-auto leading-relaxed">
              Roxas is more than seafood. Dive into its festivals, walk its heritage streets, and rediscover the stories behind every capiz shell, every plaza dance.
            </p>
            <Button size="lg" className="bg-white text-yellow-700 hover:bg-orange-50 px-8 py-4 text-lg font-semibold">
              Explore Roxas Culture
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-5 bg-white/80 backdrop-blur-sm">
            <TabsTrigger value="trail" className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Cultural Trail Mapper
            </TabsTrigger>
            <TabsTrigger value="festivals" className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Festival Timeline
            </TabsTrigger>
            <TabsTrigger value="passport" className="flex items-center gap-2">
              <BadgeCheck className="w-4 h-4" />
              Virtual Passport
            </TabsTrigger>
            <TabsTrigger value="culinary" className="flex items-center gap-2">
              <Utensils className="w-4 h-4" />
              AI Culinary Guide
            </TabsTrigger>
            <TabsTrigger value="permit" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Tourism Permit
            </TabsTrigger>
          </TabsList>

          {/* Cultural Trail Mapper */}
          <TabsContent value="trail" className="space-y-8">
            <Card className="bg-white/90 border-yellow-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-orange-600" />
                  Create Your Heritage Tour
                </CardTitle>
                <CardDescription>Build your own Roxas heritage trail. Add food stops, events, and historic sites. GPT suggests walking or bike paths.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Start typing a location or event..." />
                <Button className="w-full bg-gradient-to-r from-orange-500 to-yellow-400">
                  Add to Trail
                </Button>
                <Alert>
                  <Drum className="h-4 w-4 text-rose-500" />
                  <AlertDescription>
                    Our AI can suggest the best route for your interests!
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Festival Timeline */}
          <TabsContent value="festivals" className="space-y-8">
            <Card className="bg-white/90 border-rose-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-rose-600" />
                  Festival Timeline
                </CardTitle>
                <CardDescription>See all major cultural events by month, genre, or district.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Months" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Months</SelectItem>
                      <SelectItem value="December">December</SelectItem>
                      <SelectItem value="April">April</SelectItem>
                      <SelectItem value="May">May</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={selectedGenre} onValueChange={setSelectedGenre}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Genres" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Genres</SelectItem>
                      <SelectItem value="Religious">Religious</SelectItem>
                      <SelectItem value="Food">Food</SelectItem>
                      <SelectItem value="Cultural">Cultural</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={selectedDistrict} onValueChange={setSelectedDistrict}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Districts" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Districts</SelectItem>
                      <SelectItem value="City Proper">City Proper</SelectItem>
                      <SelectItem value="Baybay">Baybay</SelectItem>
                      <SelectItem value="Roxas">Roxas</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  {festivals.filter(f => (selectedMonth === 'all' || f.month === selectedMonth) && (selectedGenre === 'all' || f.genre === selectedGenre) && (selectedDistrict === 'all' || f.district === selectedDistrict)).map((festival, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                      <div>
                        <div className="font-medium">{festival.name}</div>
                        <div className="text-xs text-gray-500">{festival.month} • {festival.genre} • {festival.district}</div>
                      </div>
                      <Button size="sm" variant="outline">View Details</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Virtual Passport Game */}
          <TabsContent value="passport" className="space-y-8">
            <Card className="bg-white/90 border-yellow-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BadgeCheck className="w-5 h-5 text-yellow-600" />
                  Virtual Passport Game
                </CardTitle>
                <CardDescription>Check in at real locations, earn badges, and track your tourism journey.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  {badges.map((badge, idx) => (
                    <div key={idx} className="flex flex-col items-center p-3 bg-yellow-50 rounded-lg">
                      <badge.icon className="w-6 h-6 text-orange-500 mb-1" />
                      <span className="text-xs font-medium">{badge.name}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full bg-gradient-to-r from-yellow-500 to-orange-400">
                  Check In Now
                </Button>
                <div className="text-xs text-gray-500">Perfect for students and tourists!</div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* AI Culinary Guide */}
          <TabsContent value="culinary" className="space-y-8">
            <Card className="bg-white/90 border-rose-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Utensils className="w-5 h-5 text-rose-600" />
                  AI Culinary Guide
                </CardTitle>
                <CardDescription>Ask about food, markets, and culinary history. Get map links, reviews, and stories.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea placeholder="Ask about Roxas food or markets..." />
                <Button className="w-full bg-gradient-to-r from-rose-500 to-yellow-400">
                  Ask Culinary Guide
                </Button>
                <div className="mt-2 text-xs text-gray-500">Sample: "Where to try authentic seafood kare-kare?"</div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tourism Permit App */}
          <TabsContent value="permit" className="space-y-8">
            <Card className="bg-white/90 border-orange-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-orange-600" />
                  Tourism Permit App
                </CardTitle>
                <CardDescription>Vendors can register for festival stalls, submit layout and electrical needs.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Vendor Name" />
                <Input placeholder="Stall Type" />
                <Textarea placeholder="Layout & Electrical Needs" />
                <Button className="w-full bg-gradient-to-r from-orange-500 to-yellow-400">
                  Submit Application
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default TourismCulture; 
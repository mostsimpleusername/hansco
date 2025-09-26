import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Search, Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: number;
  image: string;
  featured: boolean;
}

export const BlogPage = React.memo(() => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "The Future of Digital Marketing: AI and Automation",
      excerpt: "Discover how artificial intelligence is revolutionizing marketing strategies and what it means for your business.",
      content: "Artificial intelligence is transforming the digital marketing landscape at an unprecedented pace. From predictive analytics to automated customer service, AI technologies are enabling marketers to create more personalized, efficient, and effective campaigns...",
      author: "Sarah Kim",
      date: "March 15, 2024",
      category: "Technology",
      readTime: 8,
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      featured: true
    },
    {
      id: 2,
      title: "Building Brand Authority Through Content Marketing",
      excerpt: "Learn the essential strategies for creating content that establishes your brand as an industry leader.",
      content: "Content marketing remains one of the most powerful tools for building brand authority and trust. In today's information-rich environment, businesses that consistently provide valuable, educational content are the ones that capture and retain audience attention...",
      author: "Alex Thompson",
      date: "March 12, 2024",
      category: "Strategy",
      readTime: 6,
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      featured: false
    },
    {
      id: 3,
      title: "Social Media Trends That Will Dominate 2024",
      excerpt: "Stay ahead of the curve with the latest social media trends and how to leverage them for your brand.",
      content: "The social media landscape is constantly evolving, and 2024 promises to bring exciting new opportunities for brands to connect with their audiences. From the rise of micro-influencers to the integration of AI-powered chatbots...",
      author: "Marcus Johnson",
      date: "March 10, 2024",
      category: "Social Media",
      readTime: 5,
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      featured: false
    },
    {
      id: 4,
      title: "Maximizing ROI with Data-Driven Marketing Decisions",
      excerpt: "Transform your marketing performance with strategic data analysis and actionable insights.",
      content: "In the age of big data, successful marketing campaigns are built on solid analytical foundations. Data-driven marketing isn't just about collecting information—it's about transforming that data into actionable insights that drive real business results...",
      author: "Emma Davis",
      date: "March 8, 2024",
      category: "Analytics",
      readTime: 7,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      featured: true
    }
  ];

  const categories = ['All', 'Technology', 'Strategy', 'Social Media', 'Analytics', 'Content', 'SEO'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  if (selectedPost) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Button 
            variant="ghost" 
            onClick={() => setSelectedPost(null)}
            className="mb-6"
          >
            ← Back to Blog
          </Button>
          
          <article className="space-y-8">
            <header className="space-y-4">
              <Badge variant="secondary">{selectedPost.category}</Badge>
              <h1 className="text-4xl font-bold text-gray-900">{selectedPost.title}</h1>
              <div className="flex items-center space-x-6 text-gray-600">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>{selectedPost.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{selectedPost.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{selectedPost.readTime} min read</span>
                </div>
              </div>
            </header>
            
            <ImageWithFallback
              src={selectedPost.image}
              alt={selectedPost.title}
              className="w-full h-80 object-cover rounded-lg"
            />
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                {selectedPost.excerpt}
              </p>
              <div className="text-gray-800 leading-relaxed space-y-4">
                {selectedPost.content.split('\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Marketing Insights & <span className="text-blue-600">Expert Tips</span>
          </h1>
          <p className="text-xl text-gray-600">
            Stay ahead of the curve with the latest marketing trends, strategies, and industry insights.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search and Filter */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Posts */}
        {selectedCategory === 'All' && searchTerm === '' && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden group hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="aspect-video overflow-hidden">
                    <ImageWithFallback
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{post.category}</Badge>
                      <span className="text-sm text-gray-500">{post.readTime} min read</span>
                    </div>
                    <CardTitle 
                      className="text-xl hover:text-blue-600 transition-colors"
                      onClick={() => setSelectedPost(post)}
                    >
                      {post.title}
                    </CardTitle>
                    <CardDescription>{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => setSelectedPost(post)}
                        className="group"
                      >
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* All Posts */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            {selectedCategory === 'All' ? 'All Articles' : `${selectedCategory} Articles`}
            {searchTerm && ` - "${searchTerm}"`}
          </h2>
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600">No articles found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden group hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="aspect-video overflow-hidden">
                    <ImageWithFallback
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{post.category}</Badge>
                      <span className="text-sm text-gray-500">{post.readTime} min read</span>
                    </div>
                    <CardTitle 
                      className="hover:text-blue-600 transition-colors line-clamp-2"
                      onClick={() => setSelectedPost(post)}
                    >
                      {post.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <span className="text-sm text-gray-500">{post.date}</span>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => setSelectedPost(post)}
                      className="w-full mt-4 group"
                    >
                      Read Article
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
});

BlogPage.displayName = 'BlogPage';
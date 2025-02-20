import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { 
  Calendar, Phone, Mail, Sun, Droplets, Upload, Star, Send,
  CheckSquare, MapPin, AlertCircle, Clock
} from 'lucide-react';
import { 
  Tabs, TabsContent, TabsList, TabsTrigger 
} from "../../components/ui/tabs";
import { 
  Card, CardContent, CardHeader, CardTitle 
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Checkbox } from "../../components/ui/checkbox";
import { Label } from "../../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group";
import Header from './Header';

// Service Management Component
const ServiceManagement = () => {
  const [activeTab, setActiveTab] = useState("active");
  
  return (
    <div className="min-h-screen bg-[#F9F6F0] p-6">
      <Header />
      <Tabs defaultValue="active" className="w-full">
        <TabsList className="bg-[#2D3B2D] text-white">
          <TabsTrigger 
            value="active"
            className="data-[state=active]:bg-[#4A6741]"
          >
            Active Services
          </TabsTrigger>
          <TabsTrigger 
            value="upcoming"
            className="data-[state=active]:bg-[#4A6741]"
          >
            Upcoming Services
          </TabsTrigger>
        </TabsList>

        <TabsContent value="active">
          <ActiveServices />
        </TabsContent>

        <TabsContent value="upcoming">
          <UpcomingServices />
        </TabsContent>
      </Tabs>
    </div>
  );
};

// Active Services Component
const ActiveServices = () => {
  const navigate = useNavigate();
  
  return (
    <div className="space-y-4">
      {[1, 2, 3].map((service) => (
        <Card key={service} className="bg-white">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-[#2D3B2D]">
                  Service #{service}
                </h3>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center gap-2 text-[#4A6741]">
                    <Phone className="w-4 h-4" />
                    <span>(555) 123-456{service}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#4A6741]">
                    <Mail className="w-4 h-4" />
                    <span>customer{service}@email.com</span>
                  </div>
                </div>
              </div>
              <Button 
                className="bg-[#D4B982] hover:bg-[#F3E5AB] text-[#2D3B2D]"
                onClick={() => navigate('inspection')}
              >
                Start Inspection
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

// Upcoming Services Component
const UpcomingServices = () => {
  return (
    <div className="space-y-4">
      {[1, 2, 3].map((service) => (
        <Card key={service} className="bg-white">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-[#2D3B2D]">
                  Service #{service}
                </h3>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center gap-2 text-[#4A6741]">
                    <Calendar className="w-4 h-4" />
                    <span>2024-03-20</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#4A6741]">
                    <Clock className="w-4 h-4" />
                    <span>10:00 AM</span>
                  </div>
                </div>
              </div>
              <Button 
                className="bg-[#D4B982] hover:bg-[#F3E5AB] text-[#2D3B2D]"
              >
                View Details
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

// Inspection Form Page
const InspectionForm = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-[#F9F6F0] p-6">
      <Header />
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-[#2D3B2D]">Site Assessment</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div>
              <Label>Measurements</Label>
              <Input type="text" placeholder="Enter measurements" />
            </div>
            
            <div>
              <Label>Sunlight Exposure</Label>
              <div className="flex items-center gap-2 mt-2">
                <Sun className="text-[#D4B982]" />
                <select className="w-full p-2 border rounded">
                  <option>Full Sun</option>
                  <option>Partial Sun</option>
                  <option>Shade</option>
                </select>
              </div>
            </div>

            <div>
              <Label>Water Access</Label>
              <div className="flex items-center gap-2 mt-2">
                <Droplets className="text-[#4A6741]" />
                <Checkbox id="water-access" />
                <Label htmlFor="water-access">Available</Label>
              </div>
            </div>

            <div>
              <Label>Notes</Label>
              <Textarea placeholder="Enter additional notes" />
            </div>

            <div>
              <Label>Photos</Label>
              <div className="mt-2 border-2 border-dashed border-[#4A6741] rounded-lg p-4 text-center">
                <Upload className="mx-auto text-[#4A6741]" />
                <p className="mt-2 text-sm text-[#4A6741]">
                  Click to upload or drag and drop
                </p>
              </div>
            </div>
          </div>

          <Button 
            className="w-full bg-[#2D3B2D] hover:bg-[#4A6741]"
            onClick={() => navigate('../execution')}
          >
            Next: Service Execution
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

// Service Execution Page
const ServiceExecution = () => {
  const navigate = useNavigate();
  const [selectedProducts, setSelectedProducts] = useState([]);
  
  const products = [
    { 
      id: 1, 
      name: 'Premium Soil Mix', 
      price: 29.99,
      description: 'High-quality blend for optimal plant growth',
      image: '/api/placeholder/100/100'
    },
    { 
      id: 2, 
      name: 'Garden Tools Set', 
      price: 89.99,
      description: 'Professional-grade tools for landscaping',
      image: '/api/placeholder/100/100'
    },
    { 
      id: 3, 
      name: 'Plant Nutrients', 
      price: 19.99,
      description: 'Essential nutrients for healthy plant growth',
      image: '/api/placeholder/100/100'
    },
    { 
      id: 4, 
      name: 'Decorative Stones', 
      price: 34.99,
      description: 'Natural stones for garden decoration',
      image: '/api/placeholder/100/100'
    }
  ];

  const totalPrice = selectedProducts
    .map(id => products.find(p => p.id === id))
    .reduce((sum, product) => sum + (product?.price || 0), 0);

  return (
    <div className="min-h-screen bg-background p-6">
      <Header />
      <div className="max-w-4xl mx-auto space-y-6">
        <Card>
          <CardHeader className="border-b">
            <CardTitle className="text-primary">Service Visualization</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="h-64 bg-highlight rounded-lg flex items-center justify-center text-primary">
              <div className="text-center space-y-2">
                <AlertCircle className="w-12 h-12 mx-auto text-secondary" />
                <p className="font-medium">3D Preview Coming Soon</p>
                <p className="text-sm text-tertiary">Our visualization tools are being enhanced</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="border-b">
            <CardTitle className="text-primary">Product Selection</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-4">
              {products.map((product) => (
                <Card key={product.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-20 h-20 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium text-primary">
                              {product.name}
                            </h3>
                            <p className="text-sm text-tertiary mt-1">
                              {product.description}
                            </p>
                          </div>
                          <Checkbox 
                            checked={selectedProducts.includes(product.id)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setSelectedProducts([...selectedProducts, product.id]);
                              } else {
                                setSelectedProducts(
                                  selectedProducts.filter(id => id !== product.id)
                                );
                              }
                            }}
                            className="data-[state=checked]:bg-tertiary"
                          />
                        </div>
                        <div className="mt-2 flex justify-between items-center">
                          <span className="font-medium text-deep">
                            ${product.price.toFixed(2)}
                          </span>
                          {selectedProducts.includes(product.id) && (
                            <span className="text-xs bg-accent px-2 py-1 rounded-full">
                              Selected
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {selectedProducts.length > 0 && (
              <div className="mt-6 p-4 bg-highlight rounded-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-primary font-medium">
                      Selected Products: {selectedProducts.length}
                    </p>
                    <p className="text-sm text-tertiary mt-1">
                      Ready to proceed with your selection
                    </p>
                  </div>
                  <p className="text-xl font-bold text-primary">
                    ${totalPrice.toFixed(2)}
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="flex justify-between gap-4">
          <Button 
            variant="outline" 
            className="border-tertiary text-tertiary"
            onClick={() => navigate(-1)}
          >
            Back to Inspection
          </Button>
          <Button 
            className="bg-primary hover:bg-tertiary"
            onClick={() => navigate('../order')}
            disabled={selectedProducts.length === 0}
          >
            Proceed to Order
          </Button>
        </div>
      </div>
    </div>
  );
};

// Order Confirmation Page
const OrderConfirmation = () => {
  const navigate = useNavigate();
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('card');
  
  const orderDetails = {
    products: [
      { name: 'Premium Soil Mix', price: 29.99, quantity: 1 },
      { name: 'Garden Tools Set', price: 89.99, quantity: 1 }
    ],
    service: {
      date: '2024-03-20',
      time: '10:00 AM',
      location: '123 Garden Street',
      duration: '2 hours'
    }
  };

  const subtotal = orderDetails.products.reduce(
    (sum, item) => sum + (item.price * item.quantity), 
    0
  );
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  return (
    <div className="min-h-screen bg-background p-6">
      <Header />
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="border-b">
          <CardTitle className="text-primary">Order Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 p-6">
          <div className="space-y-4">
            <div className="border-b pb-4">
              <h3 className="font-medium text-primary mb-3">Selected Products</h3>
              <div className="space-y-3">
                {orderDetails.products.map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-tertiary">
                        Quantity: {item.quantity}
                      </p>
                    </div>
                    <p className="font-medium">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-b pb-4">
              <h3 className="font-medium text-primary mb-3">Service Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-tertiary">
                  <Calendar className="w-4 h-4" />
                  <span>{orderDetails.service.date}</span>
                </div>
                <div className="flex items-center gap-2 text-tertiary">
                  <Clock className="w-4 h-4" />
                  <span>{orderDetails.service.time}</span>
                </div>
                <div className="flex items-center gap-2 text-tertiary">
                  <MapPin className="w-4 h-4" />
                  <span>{orderDetails.service.location}</span>
                </div>
                <div className="flex items-center gap-2 text-tertiary">
                  <Clock className="w-4 h-4" />
                  <span>{orderDetails.service.duration}</span>
                </div>
              </div>
            </div>

            <div className="border-b pb-4">
              <h3 className="font-medium text-primary mb-3">Payment Method</h3>
              <RadioGroup 
                value={paymentMethod} 
                onValueChange={setPaymentMethod}
                className="space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="card" id="card" />
                  <Label htmlFor="card">Credit/Debit Card</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="bank" id="bank" />
                  <Label htmlFor="bank">Bank Transfer</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-tertiary">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-tertiary">
                <span>Tax (8%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-medium text-lg text-primary">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Checkbox 
                  id="terms" 
                  checked={termsAccepted}
                  onCheckedChange={setTermsAccepted}
                  className="data-[state=checked]:bg-tertiary"
                />
                <Label htmlFor="terms" className="text-sm">
                  I agree to the terms and conditions of service
                </Label>
              </div>
              
              <Button 
                className="w-full bg-primary hover:bg-tertiary"
                onClick={() => navigate('../feedback')}
                disabled={!termsAccepted}
              >
                Confirm Order & Continue
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Feedback Collection Page
const FeedbackCollection = () => {
  const navigate = useNavigate();
  const [isCompleted, setIsCompleted] = useState(false);
  const [rating, setRating] = useState(0);
  const [notificationMethod, setNotificationMethod] = useState('both');
  const [feedback, setFeedback] = useState({
    comments: '',
    issues: '',
    followUpRequired: false
  });

  const handleSubmit = () => {
    console.log('Submitting feedback:', {
      rating,
      ...feedback,
      notificationMethod,
      completed: isCompleted
    });
    navigate('../');
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <Header />
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="border-b">
          <CardTitle className="text-primary">Service Completion & Feedback</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 p-6">
          <div className="border-b pb-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-primary">
                  Service Status
                </h3>
                <p className="text-sm text-tertiary mt-1">
                  Mark service as completed before collecting feedback
                </p>
              </div>
              <Button
                className={`${
                  isCompleted 
                    ? 'bg-accent hover:bg-accent/90' 
                    : 'bg-primary hover:bg-tertiary'
                }`}
                onClick={() => setIsCompleted(!isCompleted)}
              >
                <CheckSquare className="mr-2 h-4 w-4" />
                {isCompleted ? 'Completed' : 'Mark as Completed'}
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <Label className="text-primary font-medium">
                Customer Satisfaction Rating
              </Label>
              <div className="flex gap-2 mt-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-8 h-8 cursor-pointer transition-colors ${
                      star <= rating 
                        ? 'fill-secondary text-secondary' 
                        : 'text-gray-300'
                    }`}
                    onClick={() => setRating(star)}
                  />
                ))}
              </div>
            </div>

            <div>
              <Label className="text-primary font-medium">
                Customer Comments
              </Label>
              <Textarea
                placeholder="Enter customer feedback and comments"
                className="mt-2"
                value={feedback.comments}
                onChange={(e) => setFeedback({
                  ...feedback,
                  comments: e.target.value
                })}
              />
            </div>

            <div>
              <Label className="text-primary font-medium">
                Issues or Concerns
              </Label>
              <Textarea
                placeholder="Document any issues that need attention"
                className="mt-2"
                value={feedback.issues}
                onChange={(e) => setFeedback({
                  ...feedback,
                  issues: e.target.value
                })}
              />
            </div>

            <div className="flex items-center gap-2">
              <Checkbox
                id="followUp"
                checked={feedback.followUpRequired}
                onCheckedChange={(checked) => setFeedback({
                  ...feedback,
                  followUpRequired: checked
                })}
                className="data-[state=checked]:bg-tertiary"
              />
              <Label htmlFor="followUp">
                Follow-up service required
              </Label>
            </div>

            <Card className="bg-highlight border-none">
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <Send className="text-primary mt-1" />
                  <div className="flex-1">
                    <h4 className="font-medium text-primary">
                      Feedback Request Settings
                    </h4>
                    <p className="text-sm text-tertiary mt-1">
                      Select how the customer will receive feedback requests
                    </p>
                    <RadioGroup 
                      value={notificationMethod}
                      onValueChange={setNotificationMethod}
                      className="mt-4 space-y-3"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="email" id="email" />
                        <Label htmlFor="email" className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-tertiary" />
                          Email only
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="sms" id="sms" />
                        <Label htmlFor="sms" className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-tertiary" />
                          SMS only
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="both" id="both" />
                        <Label htmlFor="both" className="flex items-center gap-2">
                          <Send className="w-4 h-4 text-tertiary" />
                          Both Email & SMS
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="pt-4 border-t">
            <div className="flex justify-between gap-4">
              <Button 
                variant="outline" 
                className="border-tertiary text-tertiary"
                onClick={() => navigate(-1)}
              >
                Back to Order
              </Button>
              <Button 
                className="bg-primary hover:bg-tertiary"
                onClick={handleSubmit}
                disabled={!isCompleted || rating === 0}
              >
                Submit & Complete Service
              </Button>
            </div>
            {(!isCompleted || rating === 0) && (
              <p className="text-sm text-tertiary mt-2 text-center">
                Please mark the service as completed and provide a rating to continue
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Router Component
const ServiceRouter = () => {
  return (
    <Routes>
      <Route index element={<ServiceManagement />} />
      <Route path="inspection" element={<InspectionForm />} />
      <Route path="execution" element={<ServiceExecution />} />
      <Route path="order" element={<OrderConfirmation />} />
      <Route path="feedback" element={<FeedbackCollection />} />
    </Routes>
  );
};

export { ServiceManagement };
export default ServiceRouter;
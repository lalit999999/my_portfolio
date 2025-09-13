import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const Index: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Fusion App</h1>
      <p className="text-lg mb-8">This is the home page of your application.</p>
      <Link to="/some-page">
        <Button>Go to Some Page</Button>
      </Link>
    </div>
  );
};

export default Index;
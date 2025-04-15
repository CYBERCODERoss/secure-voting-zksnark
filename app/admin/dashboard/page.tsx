'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface VotingStat {
  id: string;
  label: string;
  value: number;
  change: number;
  icon: React.ReactNode;
}

interface Activity {
  id: string;
  type: 'verification' | 'vote' | 'login' | 'error';
  timestamp: string;
  description: string;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<VotingStat[]>([]);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchData = async () => {
      setLoading(true);
      
      // Mock data that would come from the API
      setTimeout(() => {
        // Mock statistics
        setStats([
          {
            id: '1',
            label: 'Total Voters',
            value: 1248,
            change: 12.5,
            icon: (
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            ),
          },
          {
            id: '2',
            label: 'Votes Cast',
            value: 923,
            change: 8.2,
            icon: (
              <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            ),
          },
          {
            id: '3',
            label: 'Verification Success',
            value: 96.8,
            change: 3.2,
            icon: (
              <svg className="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            ),
          },
          {
            id: '4',
            label: 'System Errors',
            value: 8,
            change: -42.3,
            icon: (
              <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            ),
          },
        ]);

        // Mock activities
        setActivities([
          {
            id: '1',
            type: 'verification',
            timestamp: new Date(Date.now() - 5 * 60000).toISOString(), // 5 minutes ago
            description: 'Voter ID 8f7d3... successfully verified',
          },
          {
            id: '2',
            type: 'vote',
            timestamp: new Date(Date.now() - 7 * 60000).toISOString(), // 7 minutes ago
            description: 'Anonymous vote cast for Election #24601',
          },
          {
            id: '3',
            type: 'error',
            timestamp: new Date(Date.now() - 12 * 60000).toISOString(), // 12 minutes ago
            description: 'ZK proof verification failed for voter ID 3a2f1...',
          },
          {
            id: '4',
            type: 'login',
            timestamp: new Date(Date.now() - 25 * 60000).toISOString(), // 25 minutes ago
            description: 'Admin user logged in from 192.168.1.1',
          },
          {
            id: '5',
            type: 'verification',
            timestamp: new Date(Date.now() - 35 * 60000).toISOString(), // 35 minutes ago
            description: 'Voter ID 7c9e2... successfully verified',
          },
          {
            id: '6',
            type: 'vote',
            timestamp: new Date(Date.now() - 42 * 60000).toISOString(), // 42 minutes ago
            description: 'Anonymous vote cast for Election #24601',
          },
        ]);
        
        setLoading(false);
      }, 1500);
    };

    fetchData();
  }, []);

  // Function to format timestamp
  const formatTime = (isoString: string) => {
    const date = new Date(isoString);
    return new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  // Function to get activity icon based on type
  const getActivityIcon = (type: Activity['type']) => {
    switch (type) {
      case 'verification':
        return (
          <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
          </div>
        );
      case 'vote':
        return (
          <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
        );
      case 'login':
        return (
          <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
            </svg>
          </div>
        );
      case 'error':
        return (
          <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Admin Header */}
      <div className="bg-gray-900 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-xl font-bold">Admin Dashboard</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              <Link href="/" className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-indigo-100 bg-indigo-800 hover:bg-indigo-700">
                Log out
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {loading ? (
              Array(4).fill(0).map((_, i) => (
                <div key={i} className="bg-white overflow-hidden shadow rounded-lg animate-pulse">
                  <div className="p-5 h-32"></div>
                </div>
              ))
            ) : (
              stats.map((stat) => (
                <div key={stat.id} className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-5">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        {stat.icon}
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <dl>
                          <dt className="text-sm font-medium text-gray-500 truncate">
                            {stat.label}
                          </dt>
                          <dd>
                            <div className="text-lg font-medium text-gray-900">
                              {stat.id === '3' ? `${stat.value}%` : stat.value.toLocaleString()}
                            </div>
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-5 py-3">
                    <div className="text-sm">
                      <div className={`font-medium ${
                        stat.change > 0 
                          ? 'text-green-600' 
                          : stat.change < 0 
                          ? 'text-red-600' 
                          : 'text-gray-500'
                      }`}>
                        {stat.change > 0 ? '↑' : stat.change < 0 ? '↓' : ''}
                        {' '}
                        {Math.abs(stat.change)}%
                        {' '}
                        {stat.id === '4' 
                          ? stat.change < 0 ? 'decrease' : 'increase' 
                          : stat.change > 0 ? 'increase' : 'decrease'
                        }
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Activity Feed */}
          <div className="mt-8">
            <div className="bg-white shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Recent Activity
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  A list of recent actions and events in the voting system
                </p>
              </div>
              <ul className="divide-y divide-gray-200">
                {loading ? (
                  Array(3).fill(0).map((_, i) => (
                    <li key={i} className="p-4 animate-pulse">
                      <div className="flex items-center space-x-4">
                        <div className="rounded-full bg-gray-300 h-10 w-10"></div>
                        <div className="flex-1 space-y-2">
                          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                        </div>
                      </div>
                    </li>
                  ))
                ) : (
                  activities.map((activity) => (
                    <li key={activity.id} className="px-4 py-4 sm:px-6">
                      <div className="flex items-center">
                        {getActivityIcon(activity.type)}
                        <div className="ml-3 flex-1">
                          <p className="text-sm font-medium text-gray-900">
                            {activity.description}
                          </p>
                          <p className="text-sm text-gray-500">
                            {formatTime(activity.timestamp)}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))
                )}
              </ul>
              <div className="bg-gray-50 px-4 py-4 sm:px-6">
                <div className="flex justify-center">
                  <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                    View all activity
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ZK-SNARK System Information */}
          <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                zk-SNARK System Information
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Details about the current state of the zk-SNARK verification system
              </p>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
              <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">
                    Verification Time (avg)
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    1.2 seconds
                  </dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">
                    Proof Size
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    288 bytes
                  </dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">
                    Trusted Setup
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    Last Updated: 2023-11-15
                  </dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">
                    System Status
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Operational
                    </span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 
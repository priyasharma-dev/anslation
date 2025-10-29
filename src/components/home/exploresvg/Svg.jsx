


import React from 'react'
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Settings,
  Layers3,
  Calendar,
  Monitor,
  Wrench,
  Megaphone,
  Package,
  BarChart3,
  Code,
  MousePointer,
  AlignRight
} from 'lucide-react';
import ProductsTimeline from '../product/ProductsTimeline';
import RaysCurvedArc from '../../../gradient/centerAnimation';
import Mproduct from '../product/Mproduct';
import Mmicrotools from '../product/Mmicrotools';
import Card from '../../../ReusableComponent/Card';



function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const productRef = useRef(null)
 

  function handleProduct() {
    productRef.current?.scrollIntoView({ behavior: 'smooth', block: "start" });
  }

  const [selectedNode, setSelectedNode] = useState(null); // track which node is active
  const [togle , setTogle] = useState(false)

  function handleProduct() {
    
    
    setSelectedNode("Products"); // mark as selected
    productRef.current?.scrollIntoView({ behavior: 'smooth', block: "start" });
  }

  const [rayKey, setRayKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRayKey(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Define ray paths from center to each div
  const rays = [
    { x1: '50%', y1: '50%', x2: '10%', y2: '8%', delay: 0 }, // Solutions
    { x1: '50%', y1: '50%', x2: '10%', y2: '33%', delay: 0.1 }, // Service
    { x1: '50%', y1: '50%', x2: '10%', y2: '58%', delay: 0.2 }, // Marketing (left)
    { x1: '50%', y1: '50%', x2: '10%', y2: '88%', delay: 0.3 }, // Performance Analytics (left)
    { x1: '50%', y1: '50%', x2: '50%', y2: '8%', delay: 0.4 }, // Software (top)
    { x1: '50%', y1: '50%', x2: '50%', y2: '92%', delay: 0.5 }, // Performance Analytics (bottom)
    { x1: '50%', y1: '50%', x2: '90%', y2: '8%', delay: 0.6 }, // Inventory
    { x1: '50%', y1: '50%', x2: '90%', y2: '33%', delay: 0.7 }, // Marketing (right)
    { x1: '50%', y1: '50%', x2: '90%', y2: '58%', delay: 0.8 }, // Microtools
    { x1: '50%', y1: '50%', x2: '90%', y2: '92%', delay: 0.9 }, // Software Infrastructure
  ];

  function productHandle(key){
     setTogle((prev) => !prev)
     setSelectedNode(prev => (prev === key ? null : key))
     console.log(key)
     productRef.current?.scrollIntoView({ behavior: 'smooth', block: "start" });

  }


  const product = [
    {
      title: 'Ads-Astra',
      description: 'Scalable cloud infrastructure for modern businesses',
      // color: 'from-blue-500 to-cyan-500'
      color: 'from-indigo-500 to-blue-500'
    },
    {
      title: 'AI Analytics',
      description: 'Advanced analytics powered by artificial intelligence',
      // color: 'from-purple-500 to-pink-500'
      color: 'from-indigo-500 to-blue-500'
    },
    {
      title: 'Mobile Apps',
      description: 'Native mobile applications for iOS and Android',
      // color: 'from-green-500 to-emerald-500'
      color: 'from-indigo-500 to-blue-500'
    },
    {
      title: 'Enterprise Suite',
      description: 'Complete enterprise resource planning solution',
      // color: 'from-orange-500 to-red-500'
      color: 'from-indigo-500 to-blue-500'
    },
    {
      title: 'Security Hub',
      description: 'Comprehensive security and compliance platform',
      // color: 'from-indigo-500 to-blue-500'
      color: 'from-indigo-500 to-blue-500'
    },
    {
      title: 'Data Insights',
      description: 'Real-time data visualization and reporting tools',
      // color: 'from-teal-500 to-cyan-500'
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  const microtool = [
    {
      title: 'Bp Calculator',
      description: 'Scalable cloud infrastructure for modern businesses',
      // color: 'from-blue-500 to-cyan-500'
      color: 'from-indigo-500 to-blue-500'
    },
    {
      title: 'PDF Reader',
      description: 'Advanced analytics powered by artificial intelligence',
      // color: 'from-purple-500 to-pink-500'
      color: 'from-indigo-500 to-blue-500'
    },
    {
      title: 'Age Calculator',
      description: 'Native mobile applications for iOS and Android',
      // color: 'from-green-500 to-emerald-500'
      color: 'from-indigo-500 to-blue-500'
    },
    {
      title: 'Speed Tester',
      description: 'Complete enterprise resource planning solution',
      // color: 'from-orange-500 to-red-500'
      color: 'from-indigo-500 to-blue-500'
    },
    {
      title: 'PDF Converter',
      description: 'Comprehensive security and compliance platform',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      title: 'Data Insights',
      description: 'Real-time data visualization and reporting tools',
      // color: 'from-teal-500 to-cyan-500'
    }
  ];
  


  return (
    <>
      <div className=' text-white'>
        <div className="min-h-full relative" >
          {/* Background Network Lines */}
          <div className="absolute inset-0 opacity-15">
            <svg className="w-full h-full" viewBox="0 0 1200 800">
              <defs>
                <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                  <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>




          {/* service start */}
          <div className=' relative h-100  hidden  lg:block  '>
            <div className="flex justify-center mt-20 items-center gap-6 flex-wrap">
              <div className="bg-gray-800 relative top-6 border border-gray-600 rounded-2xl z-10 p-8 shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105">
                <div className="flex flex-col items-center">
                  <MousePointer className="w-8 h-8 text-blue-400 mb-2" />
                  <span className="text-white font-semibold text-lg">Explore</span>
                </div>
              </div>
            </div>

            {/* solution */}
            <div className="absolute top-[-45px] left-67">
              <div className="flex flex-col items-center">
                <div className="bg-gray-800 border border-gray-600 rounded-xl p-4 shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105 mb-2 cursor-pointer ">
                  <Settings className="w-6 h-6 text-blue-400" />
                </div>
                <span className="text-white font-medium">Solutions</span>
              </div>

            </div>

            {/* service */}
            <div className="absolute top-[-45px] right-69 ">
              <div className="flex flex-col items-center">
                <div className="bg-gray-800 border border-gray-600 rounded-xl p-4 shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105 mb-2 cursor-pointer ">
                  <Layers3 className="w-6 h-6 text-blue-400" />
                </div>
                <span className="text-white font-medium">Service</span>
              </div>
            </div>
            {/* marketing Automation */}
            <div className="absolute  left-33 top-23 ">
              <div className="flex flex-col items-center">
                <div className="bg-gray-800 border border-gray-600 rounded-xl p-4 shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105 mb-2">
                  <Calendar className="w-6 h-6 text-blue-400" />
                </div>
                <div className="text-center">
                  <span className="text-white font-medium block">Marketing</span>
                  <span className="text-white font-medium">Automation</span>
                </div>
              </div>
            </div>

            {/* performance analytics */}
            <div className="absolute  right-33 top-23 ">
              <div className="flex flex-col items-center">
                <div className="bg-gray-800 border border-gray-600 rounded-xl p-4 shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105 mb-2">
                  <BarChart3 className="w-6 h-6 text-blue-400" />
                </div>
                <div className="text-center">
                  <span className="text-white font-medium block">Performance</span>
                  <span className="text-white font-medium">Analytics</span>
                </div>
              </div>
            </div>

            {/* serives */}
            <div className="absolute bottom-15  left-65 ">
              <div className="flex flex-col items-center">
                <div className="bg-gray-800 border border-gray-600 rounded-xl p-4 shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105 mb-2">
                  <Monitor className="w-6 h-6 text-blue-400" />
                </div>
                <span className="text-white font-medium">Software</span>
              </div>
            </div>

            {/* software infrastructure */}
            <div className="absolute bottom-9 right-63">
              <div className="flex flex-col items-center">
                <div className="bg-gray-800 border border-gray-600 rounded-xl p-4 shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105 mb-2">
                  <Code className="w-6 h-6 text-blue-400" />
                </div>
                <span className="text-white font-medium">Software</span>
                <span className="text-white font-medium">infrastructure</span>
              </div>
            </div>

            {/* Bottom */}
            {/* product */}
            <div
              onClick={handleProduct}
              className="absolute bottom-6 left-126 z-6 cursor-pointer"
            >
              <div className="flex flex-col items-center z-6">
                <div
                  className={`border rounded-xl p-4 shadow-xl transition-all duration-300 hover:scale-105 mb-2 z-6 
                ${selectedNode === "Products"
                      ? "bg-blue-600 border-blue-400 shadow-blue-500/40"
                      : "bg-gray-800 border-gray-600 hover:shadow-blue-500/20"
                    }`}
                >
                  <Monitor
                    className={`w-6 h-6 z-6 ${selectedNode === "Products" ? "text-white" : "text-blue-400"
                      }`}
                  />
                </div>
                <span
                  className={`font-medium ${selectedNode === "Products" ? "text-blue-400" : "text-white"
                    }`}
                >
                  Product
                </span>
              </div>
            </div>

            {/* Show ProductsTimeline only if selectedNode is 'Products' */}


            {/* inventry */}
            <div className="absolute bottom-5  right-124 ">
              <div className="flex flex-col items-center">
                <div className="bg-gray-800 border border-gray-600 rounded-xl p-4 shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105 mb-2">
                  <Package className="w-6 h-6 text-blue-400" />
                </div>
                <span className="text-white font-medium">Inventory</span>

              </div>
            </div>

            {/* microtools */}
            <div className="absolute bottom-10 right-190">
              <div className="flex flex-col items-center">
                <div className="bg-gray-800 border border-gray-600 rounded-xl p-4 shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105 mb-2">
                  <Wrench className="w-6 h-6 text-blue-400" />
                </div>
                <span className="text-white font-medium">Microtools</span>

              </div>
            </div>
            {/* marketing */}
            <div className=" absolute bottom-10 left-190">
              <div className="flex flex-col items-center">
                <div className="bg-gray-800 border border-gray-600 rounded-xl p-4 shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105 mb-2">
                  <Megaphone className="w-6 h-6 text-blue-400" />
                </div>
                <span className="text-white font-medium">Marketing</span>

              </div>
            </div>
          </div>


          {/* mobile responsive */}

          <div className='w-full relative mt-20  h-[540px]   block lg:hidden '>
          <RaysCurvedArc/>
            <div className='flex justify-between items-center relative' style={{ zIndex: 2 }}>
              {/* left */}
              <div className=''>
                {/* solution */}
                <div className='w-16 h-16 absolute -left-1.5'>
                  <div className="flex flex-col items-center">
                    <div className="bg-gray-800 border border-gray-600 rounded-xl p-3 shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105 mb-1 cursor-pointer">
                      <Settings className="w-6 h-6 text-blue-400" />
                    </div>
                    <span className="text-white text-[10px]">Solutions</span>
                  </div>
                </div>
                {/* service */}
                <div className='w-16 h-16 absolute -left-1.5 top-38'>
                  <div className="flex flex-col items-center">
                    <div className="bg-gray-800 border border-gray-600 rounded-xl p-3 shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105 mb-1 cursor-pointer">
                      <Layers3 className="w-6 h-6 text-blue-400" />
                    </div>
                    <span className="text-white text-[10px]">Service</span>
                  </div>
                </div>

                {/* marketing */}
                <div className='w-16 h-16 absolute -left-1.5 top-75'>
                  <div className="flex flex-col items-center">
                    <div className="bg-gray-800 border border-gray-600 rounded-xl p-3 shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105 mb-1">
                      <Calendar className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="text-center">
                      <span className="text-white text-[10px] block">Marketing</span>
                    </div>
                  </div>
                </div>

                {/* performance */}
                <div className='w-16 h-16 absolute -left-1.5 top-[450px]'>
                  <div className="flex flex-col items-center">
                    <div className="bg-gray-800 border border-gray-600 rounded-xl p-3 shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105 mb-1">
                      <BarChart3 className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="ml-3 leading-none ">
                      <span className="text-white text-[10px] block">Performance</span>
                      <span className="text-white text-[10px] ">Analytics</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* centre */}
              <div className=''>
                {/* software */}
                <div className='w-16 h-16 absolute left-1/2 -translate-x-1/2 top-0'>
                  <div className="flex flex-col items-center">
                    <div className="bg-gray-800 border border-gray-600 rounded-xl p-3 shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105 mb-1">
                      <Monitor className="w-6 h-6 text-blue-400" />
                    </div>
                    <span className="text-white text-[10px] ">Software</span>
                  </div>
                </div>
                {/* explore */}
                <div className='w-20 h-20 absolute left-1/2 top-64 -translate-x-1/2 -translate-y-1/2'>
                  <div className="flex justify-center items-center">
                    <motion.div
                      className="bg-gray-800 relative border border-blue-500 rounded-2xl z-10 p-2 shadow-2xl"
                      animate={{
                        boxShadow: [
                          "0 0 5px rgba(59, 130, 246,)",
                          "0 0 10px rgba(59, 130, 246, )",
                          "0 0 5px rgba(59, 130, 246, )"
                        ]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <div className="flex flex-col items-center">
                        <MousePointer className="w-6 h-6 text-blue-400 mb-2" />
                        <span className="text-white font-black text-sm">Explore</span>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* product */}
                <div  className='w-16 h-16 absolute left-1/2 -translate-x-1/2 top-[450px]'>
                  <div className="flex flex-col items-center">
                    <div 
                    onClick={() => productHandle("productComponent")}
                     className={`border cursor-pointer  rounded-xl p-3 shadow-xl  transition-all duration-300 hover:scale-105 mb-1 ${selectedNode === "productComponent"
                      ? "bg-blue-600 border-blue-400 shadow-blue-500/40"
                      : "bg-gray-800 border-gray-600 hover:shadow-blue-500/20"
                    }`}>
                      <BarChart3 className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="text-center ">
                      <span className="text-white block  text-[10px] ">Product</span>
                      
                    </div>
                  </div>
                </div>
              </div>

              {/* right */}
              <div className='absolute -right-1.5 top-0'>
                {/* inventory */}
                <div className='w-16 h-16'>
                  <div className="flex flex-col items-center">
                    <div className="bg-gray-800 border border-gray-600 rounded-xl p-3 shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105 mb-1">
                      <Package className="w-6 h-6 text-blue-400" />
                    </div>
                    <span className="text-white text-[10px]">Inventory</span>
                  </div>
                </div>

                {/* marketing */}
                <div className='w-16 h-16 absolute top-38'>
                  <div className="flex flex-col items-center">
                    <div className="bg-gray-800 border border-gray-600 rounded-xl p-3 shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105 mb-1">
                      <Megaphone className="w-6 h-6 text-blue-400" />
                    </div>
                    <span className="text-white text-[10px]">Marketing</span>
                  </div>
                </div>

                {/* microtools */}
                <div className='w-16 h-16 absolute top-74'>
                  <div className="flex flex-col items-center">
                    <div 
                     onClick={() => productHandle("microtoolComponent")}
                     className="bg-gray-800 border border-gray-600 rounded-xl p-3 shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105 mb-1">
                      <Wrench className="w-6 h-6 text-blue-400" />
                    </div>
                    <span className="text-white text-[10px] ">Microtools</span>
                  </div>
                </div>

                {/* software infrastructure */}
                <div className='w-16 h-16 absolute  top-[450px]'>
                  <div className="flex flex-col items-center">
                    <div className="bg-gray-800 border border-gray-600 rounded-xl p-3 shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105 mb-1">
                      <Code className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className='text-center leading-none ' >
                    <span className="text-white  text-[10px] block">Software</span>
                    <span className="text-white mr-4 text-[10px]">infrastructure</span>
                    </div>
                   
                   
                
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* animation */}
          <div className=' hidden lg:block ' >

            <div className="w-145 max-w-7xl h-80 absolute bottom-30   left-50">
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 456 215"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Exact curve from your image */}
                <path
                  d="M455.416 72.0064H345.617C339.313 72.0064 319.35 72.4948 309.893 81.4258L289.065 100.338C285.738 103.666 277.847 107.693 267.526 108.219H0.986328"
                  stroke="#272836"
                  strokeWidth="2.10141"
                  fill="none"
                />

                {/* Animated blue snake line overlay */}
                <path
                  d="M455.416 72.0064H345.617C339.313 72.0064 319.35 72.4948 309.893 81.4258L289.065 100.338C285.738 103.666 277.847 107.693 267.526 108.219H0.986328"
                  stroke="#4299e1"
                  strokeWidth="3"
                  fill="none"
                  className="animate-precise-snake"
                />
              </svg>
            </div>


            {/* solution design */}
            <div className="w-150 max-w-7xl  h-80 absolute bottom-30 left-45">
              <svg
                className="w-full h-full"
                viewBox="0 0 456 215"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Main curved path matching your image */}
                <path
                  d="M113.937 1.60945H155.965C161.044 1.0841 173.932 5.91734 184.86 29.4531C192.789 46.5319 201.751 53.3935 208.012 55.5384C211.692 56.7989 215.709 56.2458 219.599 56.2458H455.416"
                  stroke="#272836"
                  strokeWidth="2.10141"
                  fill="none"
                />

                {/* Animated path overlay */}
                <path
                  d="M113.937 1.60945H155.965C161.044 1.0841 173.932 5.91734 184.86 29.4531C192.789 46.5319 201.751 53.3935 208.012 55.5384C211.692 56.7989 215.709 56.2458 219.599 56.2458H455.416"
                  stroke="#4299e1"
                  strokeWidth="3"
                  fill="none"
                  className="animate-precise-snake"
                />
              </svg>
            </div>


            {/* software */}
            <div className="w-170 max-w-7xl h-80 absolute bottom-30 left-27">
              <svg
                className="w-full h-full"
                viewBox="0 0 456 215"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Main curved path matching your image */}
                <path
                  d="M138.629 213.815H178.955C182.187 213.815 185.459 214.176 188.635 213.578C192.145 212.916 196.7 211.157 201.267 207.331C204.193 204.879 206.831 202.09 209.78 199.668L337.737 94.5965C338.437 93.8961 342.57 92.39 353.498 91.9698H455.416"
                  stroke="#272836"
                  strokeWidth="2.10141"
                  fill="none"
                />

                {/* Animated path overlay */}
                <path
                  d="M138.629 213.815H178.955C182.187 213.815 185.459 214.176 188.635 213.578C192.145 212.916 196.7 211.157 201.267 207.331C204.193 204.879 206.831 202.09 209.78 199.668L337.737 94.5965C338.437 93.8961 342.57 92.39 353.498 91.9698H455.416"
                  stroke="#4299e1"
                  strokeWidth="3"
                  fill="none"
                  className="animate-precise-snake"
                />
              </svg>
            </div>


            {/* product */}
            <div className="w-110 max-w-7xl h-50 absolute bottom-21 left-112">
              <svg
                className="w-full h-full"
                viewBox="0 0 182 170"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Main static path */}
                <path
                  d="M0.695312 168.958H31.0547C35.9911 168.958 40.5437 166.296 42.9638 161.993V161.993C43.5021 161.036 44.1451 160.175 44.7337 159.248C54.8599 143.302 98.7395 22.4358 107.867 9.25141C112.595 0.845657 120.055 2.317 130.983 1.89672L181.416 1.89648"
                  stroke="#272836"
                  strokeWidth="2.10141"
                  fill="none"
                />

                {/* Animated path overlay */}
                <path
                  d="M0.695312 168.958H31.0547C35.9911 168.958 40.5437 166.296 42.9638 161.993V161.993C43.5021 161.036 44.1451 160.175 44.7337 159.248C54.8599 143.302 98.7395 22.4358 107.867 9.25141C112.595 0.845657 120.055 2.317 130.983 1.89672L181.416 1.89648"
                  stroke="#4299e1"
                  strokeWidth="2.5"
                  fill="none"
                  className="animate-precise-snake"
                />
              </svg>
            </div>


            {/* Marketing */}
            <div className="w-50 max-w-7xl h-80 absolute bottom-12 left-155">
              <svg
                className="absolute top-0 left-0 w-full h-full"
                viewBox="0 0 1200 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Static vertical line */}
                <path
                  d="M1000 0 L1000 670"
                  stroke="#6B7280"
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                />

                {/* Animated line overlay */}
                <path
                  d="M1000 0 L1000 670"
                  stroke="#4299e1"
                  strokeWidth="30"
                  fill="none"
                  strokeLinecap="round"
                  className="animate-precise-snake"
                />
              </svg>
            </div>


            {/* Microtools */}
            <div className="w-50 max-w-7xl h-80 absolute bottom-12 left-130">
              <svg
                className="absolute top-0 left-0 w-full h-full"
                viewBox="0 0 1200 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1000 0 L1000 670"
                  stroke="#6B7280"
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>

              {/* animation end */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 1200 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1000 0 L1000 670"
                  stroke="#4299e1"
                  strokeWidth="30"
                  fill="none"
                  className="animate-precise-snake"
                />
              </svg>
            </div>

            {/* service */}
            <div className="w-150 max-w-7xl h-80 absolute bottom-30 right-45">
              <svg
                className="w-full h-full"
                viewBox="0 0 455 215"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Main curved path matching your image */}
                <path
                  d="M341.503 1.60945H299.475C294.396 1.0841 281.508 5.91734 270.58 29.4531C262.651 46.5319 253.689 53.3935 247.428 55.5384C243.748 56.7989 239.731 56.2458 235.841 56.2458H0.0241512"
                  stroke="#272836"
                  strokeWidth="2.10141"
                  fill="none"
                />

                {/* Animated blue snake line overlay */}
                <path
                  d="M341.503 1.60945H299.475C294.396 1.0841 281.508 5.91734 270.58 29.4531C262.651 46.5319 253.689 53.3935 247.428 55.5384C243.748 56.7989 239.731 56.2458 235.841 56.2458H0.0241512"
                  stroke="#4299e1"
                  strokeWidth="3"
                  fill="none"
                  className="animate-precise-snake"
                />
              </svg>
            </div>


            {/* performance analytic */}
            <div className="w-145 max-w-7xl h-80 absolute bottom-30 right-50">
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 455 215"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Exact curve from your image */}
                <path
                  d="M0.0241512 72.0064H109.823C116.127 72.0064 136.09 72.4948 145.547 81.4258L166.375 100.338C169.702 103.666 177.593 107.693 187.914 108.219H454.454"
                  stroke="#272836"
                  strokeWidth="2.10141"
                  fill="none"
                />

                {/* Animated blue snake line overlay */}
                <path
                  d="M0.0241512 72.0064H109.823C116.127 72.0064 136.09 72.4948 145.547 81.4258L166.375 100.338C169.702 103.666 177.593 107.693 187.914 108.219H454.454"
                  stroke="#4299e1"
                  strokeWidth="3"
                  fill="none"
                  className="animate-precise-snake"
                />
              </svg>
            </div>


            {/* infrastucture */}

            <div className="w-170 max-w-7xl h-80 absolute bottom-30 right-27">
              <svg
                className="w-full h-full"
                viewBox="0 0 455 215"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Main curved path matching your image */}
                <path
                  d="M316.811 213.815H276.485C273.253 213.815 269.981 214.176 266.805 213.578C263.295 212.916 258.74 211.157 254.173 207.331C251.247 204.88 248.609 202.09 245.66 199.668L117.703 94.5965C117.003 93.8961 112.87 92.3901 101.942 91.9698H0.0241512"
                  stroke="#272836"
                  strokeWidth="2.10141"
                  fill="none"
                />

                {/* Animated blue snake line overlay */}
                <path
                  d="M316.811 213.815H276.485C273.253 213.815 269.981 214.176 266.805 213.578C263.295 212.916 258.74 211.157 254.173 207.331C251.247 204.88 248.609 202.09 245.66 199.668L117.703 94.5965C117.003 93.8961 112.87 92.3901 101.942 91.9698H0.0241512"
                  stroke="#4299e1"
                  strokeWidth="3"
                  fill="none"
                  className="animate-precise-snake"
                />
              </svg>
            </div>


            {/* inventory */}
            <div className="w-55 max-w-7xl h-80 absolute bottom-5 right-139">
              <svg
                className="w-full h-full"
                viewBox="0 0 181 170"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Main curved path matching your image */}
                <path
                  d="M180.745 168.958H150.385C145.449 168.958 140.896 166.296 138.476 161.993V161.993C137.938 161.036 137.295 160.175 136.706 159.248C126.58 143.302 82.7006 22.4358 73.5729 9.25141C68.8447 0.845657 61.3847 2.317 50.4574 1.89672L0.0238941 1.89648"
                  stroke="#272836"
                  strokeWidth="2.10141"
                  fill="none"
                />

                {/* Animated blue snake line overlay */}
                <path
                  d="M180.745 168.958H150.385C145.449 168.958 140.896 166.296 138.476 161.993V161.993C137.938 161.036 137.295 160.175 136.706 159.248C126.58 143.302 82.7006 22.4358 73.5729 9.25141C68.8447 0.845657 61.3847 2.317 50.4574 1.89672L0.0238941 1.89648"
                  stroke="#4299e1"
                  strokeWidth="3"
                  fill="none"
                  className="animate-precise-snake"
                />
              </svg>
            </div>
          </div>


          <style jsx>{`
        .animate-precise-snake {
          stroke-dasharray: 250 2800;
          stroke-dashoffset: 3000;
          animation: precise-snake-run 4s linear infinite;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        @keyframes precise-snake-run {
          0% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: 3000;
          }
        }
             `}</style>
        </div>
        {selectedNode === "Products" && (
          <div ref={productRef} className="mt-12">
            <ProductsTimeline />
          </div>
        )}
      </div>
      {/* mobile view */}
      <div className='block lg:hidden' >
         {selectedNode === "productComponent" &&  <Card productCards={product} />  }
         {selectedNode === "microtoolComponent" && <Card productCards={microtool} /> }
      </div>
    </>
  )
}

export default Home
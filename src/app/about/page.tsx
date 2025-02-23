'use client';

import { Headphones, Users, Star, Shield, Music, Wifi, Watch, Heart } from 'lucide-react';
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600">
              <Headphones className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-2">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              SONIC
            </span>
            <span className="text-gray-700">TECH</span>
          </h1>
          <p className="text-gray-500 text-xl mb-8">Premium Audio & Wearable Technology</p>
          <p className="text-xl text-gray-600">
            We're revolutionizing the way you experience sound and wearable technology. 
            Our curated collection represents the perfect harmony of innovation, quality, and style.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-gray-50 py-20 mb-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Why Choose SONICTECH
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 mb-6 bg-blue-100 rounded-xl flex items-center justify-center">
                <Music className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Premium Audio</h3>
              <p className="text-gray-600">
                Experience sound in its purest form with our high-fidelity audio equipment.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 mb-6 bg-purple-100 rounded-xl flex items-center justify-center">
                <Watch className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Smart Wearables</h3>
              <p className="text-gray-600">
                Stay connected with cutting-edge wearable technology that fits your lifestyle.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 mb-6 bg-blue-100 rounded-xl flex items-center justify-center">
                <Wifi className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Wireless Freedom</h3>
              <p className="text-gray-600">
                Break free from wires without compromising on sound quality.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 mb-6 bg-purple-100 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Customer Love</h3>
              <p className="text-gray-600">
                Join thousands of satisfied customers who trust SONICTECH.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="container mx-auto px-4 mb-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Our Story
            </span>
          </h2>
          <div className="prose lg:prose-lg mx-auto">
            <p className="text-gray-600 mb-6">
              Founded by audio enthusiasts and tech innovators, SONICTECH began with a vision 
              to bridge the gap between premium audio quality and everyday convenience. We believe 
              that exceptional sound should be part of every moment of your day.
            </p>
            <p className="text-gray-600 mb-6">
              Our team of experts meticulously selects each product in our collection, ensuring 
              that every item meets our rigorous standards for sound quality, build quality, 
              and user experience. We're not just selling devices; we're delivering audio excellence.
            </p>
            <p className="text-gray-600">
              Today, SONICTECH stands at the forefront of audio and wearable innovation, 
              trusted by music lovers, professionals, and tech enthusiasts worldwide. Our 
              commitment to superior sound and customer satisfaction remains unwavering.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Experience SONICTECH</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover our collection of premium audio equipment and smart wearables.
          </p>
          <Link 
            href="/products" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-xl hover:bg-gray-100 transition-colors font-semibold"
          >
            Browse Collection
          </Link>
        </div>
      </section>
    </div>
  );
}

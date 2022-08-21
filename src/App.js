import React from 'react';
import './style.css';
import Header from './components/Header';
import Home from './pages/Home';
import Events from './pages/Events';
import { Routes, Route } from 'react-router-dom';
export default function App() {
  const lists = [
    {
      id: 1,
      title: 'A Practical Introduction to Natural Language Processing (NLP)',
      type: 'Online Event',
      link: 'https://yahoo.com',
      topic: `INTRODUCTION

Topic :- A Practical Introduction to Natural Language Processing (NLP)

Presenter - Bhakti Thatte, AI Researcher

Natural Language Processing, or NLP, is a subfield of Artificial Intelligence research that is focused on developing models and points of interaction between humans and computers based on natural language. This includes text, and also speech-based systems.

Attend this intuititve introduction to NLP and its basic concepts.

Check out past Webinars on CellStrat YOUTUBE channel..

ABOUT "CELLSTRAT HUB CERTIFIED DEVELOPER / ARCHITECT" COURSES :

CellStrat Hub is emerging as one of the fastest growing Artificial Intelligence and Machine Learning Platforms for global AI developers and Enterprises. More than 15000 developers and 100 Enterprises are using CellStrat Hub AI Platform for developing and deploying AI solutions.

CellStrat is pleased to launch new “CellStrat Hub Certification Programs”. These courses will help you :-

Become a world-class expert in advanced Artificial Intelligence (Computer Vision or NLP Tracks).
Acquire hands-on experience in working on CellStrat Hub as an AI Developer or AI Architect
Learn how to launch AI for Enterprise Clients on CellStrat Hub Cloud Platform (AI API deployment).
Develop eminence and credibility as a leading AI Scientist.
Find lucrative AI jobs with top firms in India and abroad.
This course also includes AI Product Internship with CellStrat AI Lab where you will practice developing full-stack AI Products in Computer Vision, NLP etc. on CellStrat AWS Cloud platform.

DETAILED SYLLABUS AVAILABLE ON REQUEST — contact Team CellStrat at phone or whatsapp no +91-9742800566 or email contact@cellstrat.com.

ABOUT CELLSTRAT HUB - ONLINE PYTHON, AI ML LEARNING AND DEVELOPMENT PLATFORM

Wish to learn Python, AI ML and or develop projects in AI ML ? or deploy your AI models as APIs on the Cloud ?

Then check out CellStrat Hub - your one stop Python, AI ML learning and development platform. It comes bundled with 150+ projects in Python, ML, DL, Vision AI, NLP, RL, Unsupervised Learning, Generalized AI, Open AI, Audio AI etc.

Dozens of Enterprises and thousands of developers are using CellStrat Hub for developing and deploying AI. You can use it as well, for free. Sign up for CellStrat Hub here !

..and begin developing Python + AI ML online in a matter of FEW MINUTES.

It is absolutely world-class and it is FREE to use !

Sign up and start coding today..

Deploy AI with HubAPI in less than 15 minutes.`,
      time: 'SUN, AUG 21 · 10:30 AM IST',
      group: 'Disrupt 4.0',
      participants: '41',
      hostedby: 'Manjunath Kalburgi',
    },
    {
      id: 2,
      title: 'A Practical Introduction to Natural Language Processing (NLP)',
      type: 'Online Event',
      link: 'https://yahoo.com',
      topic: `INTRODUCTION

Topic :- A Practical Introduction to Natural Language Processing (NLP)

Presenter - Bhakti Thatte, AI Researcher

Natural Language Processing, or NLP, is a subfield of Artificial Intelligence research that is focused on developing models and points of interaction between humans and computers based on natural language. This includes text, and also speech-based systems.

Attend this intuititve introduction to NLP and its basic concepts.

Check out past Webinars on CellStrat YOUTUBE channel..

ABOUT "CELLSTRAT HUB CERTIFIED DEVELOPER / ARCHITECT" COURSES :

CellStrat Hub is emerging as one of the fastest growing Artificial Intelligence and Machine Learning Platforms for global AI developers and Enterprises. More than 15000 developers and 100 Enterprises are using CellStrat Hub AI Platform for developing and deploying AI solutions.

CellStrat is pleased to launch new “CellStrat Hub Certification Programs”. These courses will help you :-

Become a world-class expert in advanced Artificial Intelligence (Computer Vision or NLP Tracks).
Acquire hands-on experience in working on CellStrat Hub as an AI Developer or AI Architect
Learn how to launch AI for Enterprise Clients on CellStrat Hub Cloud Platform (AI API deployment).
Develop eminence and credibility as a leading AI Scientist.
Find lucrative AI jobs with top firms in India and abroad.
This course also includes AI Product Internship with CellStrat AI Lab where you will practice developing full-stack AI Products in Computer Vision, NLP etc. on CellStrat AWS Cloud platform.

DETAILED SYLLABUS AVAILABLE ON REQUEST — contact Team CellStrat at phone or whatsapp no +91-9742800566 or email contact@cellstrat.com.

ABOUT CELLSTRAT HUB - ONLINE PYTHON, AI ML LEARNING AND DEVELOPMENT PLATFORM

Wish to learn Python, AI ML and or develop projects in AI ML ? or deploy your AI models as APIs on the Cloud ?

Then check out CellStrat Hub - your one stop Python, AI ML learning and development platform. It comes bundled with 150+ projects in Python, ML, DL, Vision AI, NLP, RL, Unsupervised Learning, Generalized AI, Open AI, Audio AI etc.

Dozens of Enterprises and thousands of developers are using CellStrat Hub for developing and deploying AI. You can use it as well, for free. Sign up for CellStrat Hub here !

..and begin developing Python + AI ML online in a matter of FEW MINUTES.

It is absolutely world-class and it is FREE to use !

Sign up and start coding today..

Deploy AI with HubAPI in less than 15 minutes.`,
      time: 'SUN, AUG 21 · 10:30 AM IST',
      group: 'Disrupt 4.0',
      participants: '41',
      hostedby: 'Manjunath Kalburgi',
    },
    {
      id: 3,
      title: 'A Practical Introduction to Natural Language Processing (NLP)',
      type: 'Online Event',
      link: 'https://yahoo.com',
      topic: `INTRODUCTION

Topic :- A Practical Introduction to Natural Language Processing (NLP)

Presenter - Bhakti Thatte, AI Researcher

Natural Language Processing, or NLP, is a subfield of Artificial Intelligence research that is focused on developing models and points of interaction between humans and computers based on natural language. This includes text, and also speech-based systems.

Attend this intuititve introduction to NLP and its basic concepts.

Check out past Webinars on CellStrat YOUTUBE channel..

ABOUT "CELLSTRAT HUB CERTIFIED DEVELOPER / ARCHITECT" COURSES :

CellStrat Hub is emerging as one of the fastest growing Artificial Intelligence and Machine Learning Platforms for global AI developers and Enterprises. More than 15000 developers and 100 Enterprises are using CellStrat Hub AI Platform for developing and deploying AI solutions.

CellStrat is pleased to launch new “CellStrat Hub Certification Programs”. These courses will help you :-

Become a world-class expert in advanced Artificial Intelligence (Computer Vision or NLP Tracks).
Acquire hands-on experience in working on CellStrat Hub as an AI Developer or AI Architect
Learn how to launch AI for Enterprise Clients on CellStrat Hub Cloud Platform (AI API deployment).
Develop eminence and credibility as a leading AI Scientist.
Find lucrative AI jobs with top firms in India and abroad.
This course also includes AI Product Internship with CellStrat AI Lab where you will practice developing full-stack AI Products in Computer Vision, NLP etc. on CellStrat AWS Cloud platform.

DETAILED SYLLABUS AVAILABLE ON REQUEST — contact Team CellStrat at phone or whatsapp no +91-9742800566 or email contact@cellstrat.com.

ABOUT CELLSTRAT HUB - ONLINE PYTHON, AI ML LEARNING AND DEVELOPMENT PLATFORM

Wish to learn Python, AI ML and or develop projects in AI ML ? or deploy your AI models as APIs on the Cloud ?

Then check out CellStrat Hub - your one stop Python, AI ML learning and development platform. It comes bundled with 150+ projects in Python, ML, DL, Vision AI, NLP, RL, Unsupervised Learning, Generalized AI, Open AI, Audio AI etc.

Dozens of Enterprises and thousands of developers are using CellStrat Hub for developing and deploying AI. You can use it as well, for free. Sign up for CellStrat Hub here !

..and begin developing Python + AI ML online in a matter of FEW MINUTES.

It is absolutely world-class and it is FREE to use !

Sign up and start coding today..

Deploy AI with HubAPI in less than 15 minutes.`,
      time: 'SUN, AUG 21 · 10:30 AM IST',
      group: 'Disrupt 4.0',
      participants: '41',
      hostedby: 'Manjunath Kalburgi',
    },
    {
      id: 4,
      title: 'A Practical Introduction to Natural Language Processing (NLP)',
      type: 'Online Event',
      link: 'https://yahoo.com',
      topic: `INTRODUCTION

Topic :- A Practical Introduction to Natural Language Processing (NLP)

Presenter - Bhakti Thatte, AI Researcher

Natural Language Processing, or NLP, is a subfield of Artificial Intelligence research that is focused on developing models and points of interaction between humans and computers based on natural language. This includes text, and also speech-based systems.

Attend this intuititve introduction to NLP and its basic concepts.

Check out past Webinars on CellStrat YOUTUBE channel..

ABOUT "CELLSTRAT HUB CERTIFIED DEVELOPER / ARCHITECT" COURSES :

CellStrat Hub is emerging as one of the fastest growing Artificial Intelligence and Machine Learning Platforms for global AI developers and Enterprises. More than 15000 developers and 100 Enterprises are using CellStrat Hub AI Platform for developing and deploying AI solutions.

CellStrat is pleased to launch new “CellStrat Hub Certification Programs”. These courses will help you :-

Become a world-class expert in advanced Artificial Intelligence (Computer Vision or NLP Tracks).
Acquire hands-on experience in working on CellStrat Hub as an AI Developer or AI Architect
Learn how to launch AI for Enterprise Clients on CellStrat Hub Cloud Platform (AI API deployment).
Develop eminence and credibility as a leading AI Scientist.
Find lucrative AI jobs with top firms in India and abroad.
This course also includes AI Product Internship with CellStrat AI Lab where you will practice developing full-stack AI Products in Computer Vision, NLP etc. on CellStrat AWS Cloud platform.

DETAILED SYLLABUS AVAILABLE ON REQUEST — contact Team CellStrat at phone or whatsapp no +91-9742800566 or email contact@cellstrat.com.

ABOUT CELLSTRAT HUB - ONLINE PYTHON, AI ML LEARNING AND DEVELOPMENT PLATFORM

Wish to learn Python, AI ML and or develop projects in AI ML ? or deploy your AI models as APIs on the Cloud ?

Then check out CellStrat Hub - your one stop Python, AI ML learning and development platform. It comes bundled with 150+ projects in Python, ML, DL, Vision AI, NLP, RL, Unsupervised Learning, Generalized AI, Open AI, Audio AI etc.

Dozens of Enterprises and thousands of developers are using CellStrat Hub for developing and deploying AI. You can use it as well, for free. Sign up for CellStrat Hub here !

..and begin developing Python + AI ML online in a matter of FEW MINUTES.

It is absolutely world-class and it is FREE to use !

Sign up and start coding today..

Deploy AI with HubAPI in less than 15 minutes.`,
      time: 'SUN, AUG 21 · 10:30 AM IST',
      group: 'Disrupt 4.0',
      participants: '41',
      hostedby: 'Manjunath Kalburgi',
    },
  ];
  return (
    <div>
      <Header />
      <Routes>
        <Route path="events/:id" element={<Events lists={lists} />}></Route>
        <Route path="/" element={<Home lists={lists} />} exact></Route>
      </Routes>
    </div>
  );
}

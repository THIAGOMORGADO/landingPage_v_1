// Deve estar localizado, por exemplo, em /pages/[id].js ou /app/[id]/page.js

'use client';

import React from 'react';
import { useRouter } from 'next/router';  // Correção na importação aqui

const Dashboard = () => {


  return <h1>Dashboard:</h1>;
}

export default Dashboard;

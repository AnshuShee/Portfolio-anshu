import fs from 'fs';
import path from 'path';

// Using manual file array
const files = [
    'src/sections/Hero.jsx',
    'src/sections/About.jsx',
    'src/sections/Skills.jsx',
    'src/sections/Projects.jsx',
    'src/sections/Education.jsx',
    'src/sections/Certificates.jsx',
    'src/sections/Contributors.jsx',
    'src/sections/Contact.jsx',
    'src/components/TypingEffect.jsx'
];

for (const file of files) {
    if (!fs.existsSync(file)) continue;
    let content = fs.readFileSync(file, 'utf8');

    // Background color
    content = content.replace(/#FDFBF7/g, '#F8FAFC'); // very light slate (slate-50)
    content = content.replace(/bg-\\[#FDFBF7\\]/g, 'bg-slate-50');

    // Text contrast upgrades
    content = content.replace(/text-stone-900/g, 'text-slate-900');
    content = content.replace(/text-stone-800/g, 'text-slate-800');
    content = content.replace(/text-stone-700/g, 'text-slate-700');
    content = content.replace(/text-stone-600/g, 'text-slate-600');
    content = content.replace(/text-stone-500/g, 'text-slate-600'); // upgrade contrast
    content = content.replace(/text-stone-400/g, 'text-slate-500'); // upgrade contrast
    content = content.replace(/text-stone-300/g, 'text-slate-400');
    
    // Accents & interactive
    content = content.replace(/bg-stone-900(?!\/)/g, 'bg-indigo-600');
    content = content.replace(/bg-stone-900\/10/g, 'bg-slate-900/10');
    content = content.replace(/bg-stone-900\/50/g, 'bg-slate-900/50');
    content = content.replace(/hover:bg-stone-900/g, 'hover:bg-indigo-700');
    content = content.replace(/hover:text-stone-900/g, 'hover:text-indigo-600');
    content = content.replace(/text-amber-700/g, 'text-indigo-600');
    
    // Borders & UI elements
    content = content.replace(/border-stone-100/g, 'border-slate-200');
    content = content.replace(/border-stone-200/g, 'border-slate-200');
    content = content.replace(/border-stone-300/g, 'border-slate-300');
    content = content.replace(/border-stone-400/g, 'border-slate-400');
    content = content.replace(/hover:border-stone-400/g, 'hover:border-slate-400');
    
    // Light backgrounds
    content = content.replace(/bg-stone-100/g, 'bg-slate-100');
    content = content.replace(/bg-stone-200/g, 'bg-slate-200');
    content = content.replace(/hover:bg-stone-100/g, 'hover:bg-slate-100');
    content = content.replace(/hover:bg-stone-200/g, 'hover:bg-slate-200');
    
    // Update gradient in Hero
    if (file.includes('Hero.jsx')) {
        content = content.replace(/radial-gradient.+?70%\)/g, 'radial-gradient(ellipse 70% 60% at 50% 30%, #e0e7ff 0%, #ede9fe 30%, transparent 70%)');
    }

    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
}

import fs from 'fs';

// Files to update
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

    // Backgrounds
    content = content.replace(/bg-slate-50/g, 'bg-orange-50');
    content = content.replace(/#F8FAFC/g, '#fff7ed'); // Tailwind orange-50 hex
    
    // Accents
    content = content.replace(/bg-indigo-600/g, 'bg-orange-500');
    content = content.replace(/bg-indigo-50/g, 'bg-orange-100');
    content = content.replace(/text-indigo-600/g, 'text-orange-500');
    
    // Hovers
    content = content.replace(/hover:bg-indigo-700/g, 'hover:bg-orange-600');
    content = content.replace(/hover:bg-indigo-600/g, 'hover:bg-orange-500');
    content = content.replace(/hover:text-indigo-600/g, 'hover:text-orange-500');
    content = content.replace(/hover:border-indigo-600/g, 'hover:border-orange-500');

    // Hero Gradient
    if (file.includes('Hero.jsx')) {
        content = content.replace(/radial-gradient.+?70%\)/g, 'radial-gradient(ellipse 70% 60% at 50% 30%, #ffedd5 0%, #ffedd5 30%, transparent 70%)'); // orange-100 gradient
    }

    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
}

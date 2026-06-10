import fs from 'fs';
import path from 'path';

function getFiles(dir, filesList = []) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            getFiles(fullPath, filesList);
        } else {
            if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js')) {
                filesList.push(fullPath);
            }
        }
    }
    return filesList;
}

const targetDirs = [
    path.join(process.cwd(), 'src/sections'),
    path.join(process.cwd(), 'src/components')
];

let allFiles = [];
targetDirs.forEach(dir => {
    if (fs.existsSync(dir)) {
        allFiles = allFiles.concat(getFiles(dir));
    }
});

let updatedCount = 0;

for (const file of allFiles) {
    let content = fs.readFileSync(file, 'utf8');
    let originalContent = content;

    // Gradients
    content = content.replace(/from-purple-400 via-pink-500 to-orange-400/g, 'from-orange-400 via-[#ff8a00] to-orange-600');
    content = content.replace(/from-indigo-400 via-purple-500 to-pink-500/g, 'from-[#ff8a00] via-orange-500 to-red-500');
    content = content.replace(/from-indigo-500 via-purple-500 to-pink-500/g, 'from-orange-500 via-orange-600 to-red-500');
    
    // Drop Shadows & Glows
    content = content.replace(/rgba\(236,72,153,0\.5\)/g, 'rgba(255,138,0,0.5)');
    content = content.replace(/rgba\(99,102,241,0\.5\)/g, 'rgba(255,138,0,0.5)');
    
    // Backgrounds & Accents
    content = content.replace(/bg-indigo-600/g, 'bg-[#ff8a00]');
    content = content.replace(/bg-indigo-500/g, 'bg-[#ff8a00]');
    content = content.replace(/bg-purple-600/g, 'bg-orange-600');
    content = content.replace(/bg-pink-500/g, 'bg-orange-500');

    // Text Accents
    content = content.replace(/text-indigo-400/g, 'text-orange-400');
    content = content.replace(/text-indigo-300/g, 'text-orange-300');
    content = content.replace(/text-indigo-500/g, 'text-[#ff8a00]');
    content = content.replace(/text-purple-500/g, 'text-[#ff8a00]');
    content = content.replace(/text-pink-500/g, 'text-orange-500');

    // Hover states
    content = content.replace(/hover:text-indigo-[0-9]{3}/g, 'hover:text-[#ff8a00]');
    content = content.replace(/hover:bg-indigo-[0-9]{3}/g, 'hover:bg-orange-600');

    // Borders
    content = content.replace(/border-indigo-500/g, 'border-[#ff8a00]');

    if (content !== originalContent) {
        fs.writeFileSync(file, content);
        updatedCount++;
        console.log(`Updated theme in: ${file}`);
    }
}

console.log(`\nTheme update complete. Modified ${updatedCount} files.`);

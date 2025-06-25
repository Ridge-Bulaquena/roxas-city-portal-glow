import { execSync } from 'child_process';
import fs from 'fs';
import { Configuration, OpenAIApi } from 'openai';

const fileToCheck = './src/components/HeroBanner.jsx';
const code = fs.readFileSync(fileToCheck, 'utf-8');

// Run ESLint on the file
const lintOutput = execSync(`npx eslint ${fileToCheck} || true`).toString();

if (!lintOutput.includes('error')) {
  console.log('✅ No errors found.');
  process.exit(0);
}

// Send to OpenAI for auto-fix
const openai = new OpenAIApi(new Configuration({ apiKey: process.env.OPENAI_KEY }));

const response = await openai.createChatCompletion({
  model: 'gpt-4o',
  messages: [
    {
      role: 'user',
      content: `
You are an expert React + Tailwind developer. Fix the following file based on the ESLint errors.

--- FILE CONTENT ---
${code}

--- ESLINT ERRORS ---
${lintOutput}
      `,
    },
  ],
});

const fixedCode = response.data.choices[0].message.content;

// Overwrite the file
fs.writeFileSync(fileToCheck, fixedCode);
console.log(`✅ Fixed and saved: ${fileToCheck}`);

// Optional: auto-commit and push
execSync('git add . && git commit -m "Auto-fixed JSX via AI" && git push');

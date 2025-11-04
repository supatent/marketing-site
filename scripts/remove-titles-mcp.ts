/**
 * Script to remove duplicate H1 titles from documentation pages
 * Uses MCP tools for reliable content updates
 */

// This script should be run manually by invoking the MCP tools
// We'll process each documentation page to remove the first H1 if it matches the title

const itemsToProcess = [
  { id: "43c6b7a8-5873-4ebb-83b1-2f3715f3a163", description: "Chapter 1: MCP Server Installation" },
  { id: "89362fd6-1219-441a-9557-482e5bc727d6", description: "Vibe CMS User Manual" },
  { id: "656945c2-89c5-454f-ac5b-0de38f8c0c86", description: "Documentation Index" },
  { id: "39559bf1-a7d7-4e6a-9b96-3f36415032fe", description: "Troubleshooting Guide" },
  { id: "1b1d1dfb-9750-45fd-aa8d-0ec1f24329d5", description: "FAQs" },
  { id: "705fb890-d33c-4659-b9f0-b32ecad2b0db", description: "Quick Start Guide" },
  { id: "a5803364-06f5-4fc4-a921-c93cf8aefb28", description: "Chapter 2: First Steps with Vibe CMS" },
  { id: "46c7922c-2e46-4d79-8a99-592098bcf8f9", description: "Chapter 3: Project Setup" },
  { id: "1d9cbd26-579f-4954-ab48-686fe15773ae", description: "Chapter 4: Content Architecture" },
  { id: "c92f45e5-6897-4db1-a895-75b0575c1403", description: "Chapter 6: Fields and Data Types" },
  { id: "351b6f21-af4d-4ba2-a2d6-74507e87943e", description: "Chapter 7: Working with Claude Code" },
  { id: "c6c22f9d-be02-4da8-92de-c5599d03fabb", description: "Chapter 8: Content Operations" },
  { id: "03a6af1b-2d6b-4ba9-87b9-4bee542679e4", description: "Chapter 9: Multi-language Content" },
  { id: "3405bbb3-3363-4f1b-abfa-f1edfc47251d", description: "Chapter 10: SDK Integration" },
  { id: "3bf046b0-1f01-422d-b6eb-f831b0ff6827", description: "Chapter 11: Security & Permissions" },
  { id: "9cb0890b-c194-4d8f-a7b0-430ac8605e1c", description: "Chapter 12: Performance Optimization" },
  { id: "83504296-fcfc-481c-a579-f7c5cec2f183", description: "Appendix A: MCP Tools Reference" },
  { id: "f604a2f1-6994-4f4d-8970-f2b92bc0eea2", description: "Appendix B: Error Codes & Solutions" },
  { id: "cedb4c35-77ee-4b61-8f2a-65ca055d9a4e", description: "Appendix C: Migration Guides" },
  { id: "e5d125c0-44a3-4877-b6d5-76b448863532", description: "Appendix D: API Endpoint Reference" },
  { id: "bfa5e026-4f09-44d3-b1ff-5bc24d0b99e7", description: "Appendix E: Glossary" },
  { id: "1c6a16dd-82b1-40d0-882b-a769128f415f", description: "Chapter 5: File Management" },
];

console.log(`Will process ${itemsToProcess.length} documentation pages`);
console.log('Use MCP tools to:');
console.log('1. Get content for each item ID');
console.log('2. Remove first H1 heading from content');
console.log('3. Update content via update_content_translation');

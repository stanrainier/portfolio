const fs = require("fs");
const path = require("path");

const componentName = process.argv[2];
if (!componentName) {
  console.error("Please provide a component name.");
  process.exit(1);
}

const componentDir = path.join(__dirname, "src/components", componentName);
fs.mkdirSync(componentDir, { recursive: true });

const componentCode = `export default function ${componentName}() {
  return <div>${componentName} Component</div>;
}
`;

fs.writeFileSync(path.join(componentDir, `${componentName}.tsx`), componentCode);
console.log(`Component ${componentName} created successfully!`);

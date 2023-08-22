module.exports = {
  apps: [
    {
      name: "socket",
      script: "./src/main.ts",
      interpreter: "./node_modules/.bin/ts-node",
      exec_mode: "cluster",
    },
  ],
};